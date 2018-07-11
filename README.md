# Corporator

BPMN marvel

- BPMN 2.0

# How to Remove Next.js

```
yarn remove @zeit/next-typescript, next, next-images, babel-plugin-styled-components, @types/next
rm next.config.js
rm .babelrc
```

# Generate typescript for client queries

apollo-codegen introspect-schema ./src/data/generated/prisma.graphql --output schema.json
apollo-codegen generate \*_/_.schema.graphql --schema schema.json --target typescript --output operation-result-types.ts

or

apollo schema:download schema.json
--endpoint=http://localhost:4000
apollo codegen:generate types --outputFlat --queries="src/\*_/_.schema.graphql" --schema schema.json --target typescript
