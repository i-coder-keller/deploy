const Koa = require('koa')
const { deploy } = require('./router')
const app = new Koa()

app.use(deploy.routes())
app.listen(8081, () => {
    console.log('deploy starting in port : 8081')
})
