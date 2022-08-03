const log4js = require('log4js')
const { getFileName } = require('./utils')
log4js.configure({
    appenders: {
        everything: {
            type: 'DateFile',
            filename: 'logs/log',
            pattern: '-yyyy-MM-dd.log',
        }
    },
    categories: { default: { appenders: ['everything'], level: 'info' } }
})

module.exports = {
    logger: log4js.getLogger()
}