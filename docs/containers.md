DRAFT:

This is a guide on how to implement and test containers in the Corporator project.

**Goal** Implement a container that loads (n) notifications for the user. When, user clicks, load more (m) more notifications need to arrive. We will also implement a simple mutation in which we will add a notification for the user.

## Server

On server, we need to prepare a query that loads notifications for the user. User is authenticated by apollo server and user details are stored in the context.

### Step 1: Define Graphql Queries

We define a server graphql query in `data/models/notifications.graphql' and reference it in`data/schema.graphql`. Each queryable/mutable business entity will be separated in its own file

File: `data/schema.graphql`

```graphql
#import Query.* from './schema/notifications.graphql'
```

File: `data/schema/notifications.graphql`.

```graphql
#import './schema/notifications.graphql'

type Query {
  notifications(start: Int, end: Int): Notification!
}

type Mutation {
  notify(
    userId: ID
    processInstanceId: ID
    code: NotificationCode
    params: [String!]!
  ): Notification!
}
```

### Step 2: Define resolvers

Now, we need to define resolvers for the query and a mutation
