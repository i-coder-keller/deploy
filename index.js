const Koa = require('koa')
const { deploy } = require('./router')
const app = new Koa()

app.use(deploy.routes())
app.listen(3030, () => {
    console.log('deploy starting in port : 3030')
})
