const Router = require('koa-router')
const shell = require('shelljs')
const { logger } = require('./log4js')

const router = new Router({prefix: '/deploy'})
router.get("/blog-static", function (ctx) {
    try {
        // shell.cd('/var/www')
        // shell.rm('-rf', 'blog-static')
        // shell.exec('git clone git@github.com:ALittleSuperman/blog-static.git')
        throw new Error("撒打算大撒的")
        logger.info("博客部署成功")
        ctx.body = {
            message: "博客部署成功",
            data: null,
            code: 200
        }
    }catch (e) {
        logger.info(`博客部署失败：${JSON.stringify(e)}`)
        ctx.body = {
            message: "博客部署失败",
            data: e,
            code: 200
        }
    }
})
module.exports = {
    deploy: router
}