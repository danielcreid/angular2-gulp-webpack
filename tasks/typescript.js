'use strict';

var config = require('./config');

var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

module.exports = function(callback) {
  return function() {
    var tsResult = tsProject.src()
      .pipe(ts(tsProject))
      .on('finish', function() {
        if (callback) { callback(); }
      });

    return tsResult.js.pipe(gulp.dest(config.destination));
  };
};