module.exports = function (grunt) {
	"use strict";
    grunt.loadNpmTasks('grunt-browserify');

    //loads the various task configuration files 
    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);
 
    grunt.registerTask('default', ['clean', 'copy', 'browserify']);
};