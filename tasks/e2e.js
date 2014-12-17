var gulp       = require('gulp'),
    protractor = require('gulp-protractor').protractor;

module.exports = function(testList) {

  'use strict';

  gulp.src(testList || ['./test/e2e/**/*.e2e.js'],{read: false})
    .pipe(protractor({
      configFile: './protractor.conf.js'
    }))
    .on('error', function(e) { throw e; })
    .on('close', function() { process.exit(0); });
};