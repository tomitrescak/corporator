import { Instance, types } from 'mobx-state-tree';
import { UndoManager } from 'mst-middlewares';

import { DataSetNode } from './dataset_model';
import { FormStore } from './form_store';
import { safeEval } from './form_utils';

let time = Date.now();
let i = 0;
function shortId() {
  return (time + i++).toString();
}

function mstTypeFactory(desc: DataSetNode): any {
  switch (desc.type) {
    case 'id':
      return types.optional(types.identifier, shortId);
    case 'expression':
      return undefined;
    case 'array':
      return types.optional(
        types.array(types.optional(mstTypeFactory(desc.items), desc.items.defaultValue)),
        desc.default || []
      );
    case 'string':
      return types.optional(types.union(types.string, types.undefined), desc.default);
    case 'integer':
      return types.optional(types.union(types.number, types.string, types.undefined), desc.default);
    case 'number':
      return types.optional(types.union(types.number, types.string, types.undefined), desc.default);
    case 'date':
      return types.optional(types.union(types.Date, types.string, types.undefined), desc.default);
    case 'boolean':
      return types.optional(
        types.union(types.boolean, types.string, types.undefined),
        desc.default
      );
    case 'object':
      return types.optional(buildStore(desc), {});
    case undefined:
      return types.string;
  }
  throw new Error('MST Type not supported: ' + desc.type);
}

export function buildStore(store: DataSetNode) {
  // prepare model and views

  const mstDefinition: { [index: string]: any } = {};

  /* =========================================================
    EXPRESSIONS
    ======================================================== */
  const properties = Object.getOwnPropertyNames(store.properties);

  const viewDefinition = () => {
    const view = {};

    for (let key of properties) {
      let node = store.properties[key];
      // expressions do not need state tree entry they are evaluated automatically
      if (node.type === 'expression') {
        (view as any).__defineGetter__(key, function() {
          // @ts-ignore
          return safeEval(this, node.default);
        });
      }
    }

    return view;
  };

  /* =========================================================
      MST Nodes
     ======================================================== */

  for (let key of properties) {
    let node = store.properties[key];
    let definition = mstTypeFactory(node);
    if (definition) {
      mstDefinition[key] = types.maybe(definition);
    }
  }

  if (store.parent == null) {
    mstDefinition.history = types.optional(UndoManager, {});
  }

  // build tree
  const mst = FormStore.named('FormStore')
    .props(mstDefinition)
    .views(viewDefinition)
    .actions(() => ({
      getSchema(key: string) {
        return key ? store.properties[key] : store;
      }
    }));

  return mst;
}
