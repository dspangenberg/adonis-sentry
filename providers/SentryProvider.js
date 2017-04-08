'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider

class SentryProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Addons/Sentry', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const Sentry = require('../src/Sentry')
      return new Sentry(Config)
    })
  }

}

module.exports = SentryProvider
