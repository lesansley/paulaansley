module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');

    //loads the various task configuration files 
    var configs = require('load-grunt-configs')(grunt);
    grunt.initConfig(configs);
 
    grunt.registerTask('default', ['clean', 'copy', 'browserify']);
};