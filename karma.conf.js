module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test/**/*.js', included: false },
      { pattern: 'node_modules/steal/**/*.js', included: false },
      { pattern: 'node_modules/**/package.json', included: false },
      { pattern: 'package.json', included: false },
      'node_modules/steal/steal.js',
      'karma.bootstrap.js'
    ],
    exclude: [ ],
    preprocessors: { },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
};
