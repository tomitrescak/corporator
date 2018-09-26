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
yoga = yoga.replace(`import * as schema from  '../prisma/schema'\n`, '');
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
  path.resolve('./src/data/generated/type_defs.ts'),
  `export const typeDefs = \`${typeDefs.replace(/`/g, '\\`')}\``,
  { encoding: 'utf-8' }
);

// patch the file with generation
let tfile = fs.readFileSync('./node_modules/apollo-codegen-typescript/lib/language.js', {
  encoding: 'utf-8'
});
tfile = tfile.replace(
  'return scope.join("_");',
  "return scope.map(s => s[0].toUpperCase() + s.substring(1)).join('_');"
);
fs.writeFileSync('./node_modules/apollo-codegen-typescript/lib/language.js', tfile, {
  encoding: 'utf-8'
});
