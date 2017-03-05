import express from 'express'
import http from 'http'
import path from 'path'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'

import routers from './routers'

let app = express()

app.set('views', path.join(__dirname), 'views')
app.set('view engine','ejs')


// response使用gzip壓縮
app.use(compression())

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser())

// 設定http header，防止web漏洞 (http://expressjs.com/zh-tw/advanced/best-practice-security.html)
app.use(helmet())

const server = http.createServer(app).listen("8080", "127.0.0.1")
console.info("server start")


routers(app)
