const log4js = require('log4js')
const { getFileName } = require('./utils')
log4js.configure({
    appenders: {
        debug: {
            type: 'DateFile',
            filename: 'logs/log',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            category: 'DEBUG'
        }
    },
    categories: { default: { appenders: ['debug'], level: 'info' } }
})

module.exports = {
    logger: log4js.getLogger('debug')
}