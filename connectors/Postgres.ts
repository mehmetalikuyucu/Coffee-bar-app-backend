import * as pgPromise from 'pg-promise'

export const connection = {
  database: null
}

export const connectPostgres = () => {
  if (!connection?.database) {
    const pgp = pgPromise({})
    connection.database = pgp('postgres://postgres:postgres@database:5432/app')
  }

  return connection.database
}

export default connectPostgres
