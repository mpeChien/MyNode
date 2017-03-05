import express from 'express'
import {ApiAction} from '../actions'

const routers = express.Router()




routers.use( (req, res, next) => {
    console.log('routers api before')
    next()
    console.log('routers api after')
})

const mid1 = (req, res, next) => {
    console.log('  mid 1 start')
    next()
    console.log('  mid 1 end')
}

routers.get('/api1', mid1, (req, res)=> {
    console.log(ApiAction);
    //actions.ApiAction.api1(req,res)
})


routers.get('/api2', (req, res) => {
    res.json({"api":"2 new"})
})

module.exports = routers
