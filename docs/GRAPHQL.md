These are typical queries to init the process

```graphql
mutation {
  updateUser(
    where: {id: "cjjzq1ysg00160829alh2cees"}, 
    data: {
      notifications: {
        create: {
          code: ServiceStarted, 
          visible: true
      	}
      }
    }
  ) {
    id
    notifications {
      id
    }
  }
}
```