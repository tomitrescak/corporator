const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/data/yoga/schema.graphql');
const fs = require('fs');
const path = require('path');

// remove errors
let yoga = fs.readFileSync(path.resolve('./src/data/generated/yoga.ts'), { encoding: 'utf-8' });
yoga = yoga.replace('new(...args): T', '// @ts-ignore\n  new(...args): T');
yoga = yoga.replace('export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })', '// @ts-ignore\nexport const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })');
fs.writeFileSync(
  path.resolve('./src/data/generated/yoga.ts'),
  yoga,
  { encoding: 'utf-8' }
)

// export typedefs
fs.writeFileSync(
  path.resolve('./src/data/type_defs.ts'),
  `export const typeDefs = \`${typeDefs}\``,
  { encoding: 'utf-8' }
);

