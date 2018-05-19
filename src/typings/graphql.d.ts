// graphql.d.ts file
declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export const kind: any;
  export const definitions: any;
  export const loc: any;
}
