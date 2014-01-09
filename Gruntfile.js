module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    // Start a simple server
    connect: {
      server: {
        options: {
          port: 6006,
          base: './',
          keepalive: true
        }
      }
    },
    // Compile less
    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "css/style.css": "less/style.less"
        }
      },
      production: {
        options: {
          paths: ["less"],
          report: 'min',
          cleancss: true
        },
        files: {
          "css/style.css": "less/style.less"
        }
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');   // Uglify JavaScript
  grunt.loadNpmTasks('grunt-contrib-connect');  // Start a server with `grunt connect`
  grunt.loadNpmTasks('grunt-contrib-less');     // Compile our LESS files

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};