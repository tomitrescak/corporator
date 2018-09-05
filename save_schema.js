const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/data/yoga.graphql');
const fs = require('fs');
const path = require('path');

// remove functionality for server
let yoga = fs.readFileSync(path.resolve('./src/data/generated/yoga.ts'), { encoding: 'utf-8' });
yoga = yoga.replace(
  `import { makeBindingClass, Options } from 'graphql-binding'`,
  `import { Options } from 'graphql-binding'`
);
yoga = yoga.replace(`import * as schema from  '../schema'\n`, '');
yoga = yoga.replace(
  'export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })\n',
  ''
);

// remove errors
yoga = yoga.replace('new(...args): T', '// @ts-ignore\n  new(...args): T');
fs.writeFileSync(path.resolve('./src/data/generated/yoga_client.ts'), yoga, { encoding: 'utf-8' });

// remove errors
yoga = fs.readFileSync(path.resolve('./src/data/generated/yoga.ts'), { encoding: 'utf-8' });
yoga = yoga.replace('new(...args): T', '// @ts-ignore\n  new(...args): T');
yoga = yoga.replace(
  'export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })',
  '// @ts-ignore\nexport const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })'
);
fs.writeFileSync(path.resolve('./src/data/generated/yoga.ts'), yoga, { encoding: 'utf-8' });

// export typedefs
fs.writeFileSync(
  path.resolve('./src/data/type_defs.ts'),
  `export const typeDefs = \`${typeDefs}\``,
  { encoding: 'utf-8' }
);
