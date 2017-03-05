
import api from './api'

const routers = (app) => {
    app.use('/api', api)
}


module.exports = routers
