import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'

import  schema from './graphql/schema'

class App {

    public express: express.Application

    constructor() {
        this.express = express.default()
        this.middleware()
    }

    private middleware() {
        this.express.use('/graphql', graphqlHTTP.default({
            schema,
            graphiql: true
        }))
    }
}
export default new App().express // PAREI NA AULA 23 IMPLEMENTANDO PRIMEIRA MUTATION