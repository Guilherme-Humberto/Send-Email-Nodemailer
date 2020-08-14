import express from 'express'
import routes from './routes/routes'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(routes)
    }
}

export default new App()
