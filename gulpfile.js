'use strict';

var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'run-sequence', 'merge-stream', 'yargs'],
    rename: {
      'gulp-typescript': 'tsc',
      'run-sequence': 'rns',
      'merge-stream': 'merge'
    }
  }),
  taskPath = './build/tasks/',
  taskList = require('fs').readdirSync(taskPath);

taskList.forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});