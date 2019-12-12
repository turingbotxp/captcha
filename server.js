const express = require('express')
const compression = require('compression')
const path = require('path')
const history = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');

const app = express()

app.use(compression());
app.use(history());
app.use(express.static(path.join(__dirname, './')))

const port = 8080
app.listen(port, () => console.log(`App listening at port: ${port}`))
