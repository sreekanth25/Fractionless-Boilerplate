module.exports = function(grunt) {

  var path = require('path');

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
    express: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: [path.resolve('./')],
          livereload: true
        }
      }
    },
    // Open project in browser
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port %>'
      }
    },
    // Watch project for changes
    watch: {
      all: {
        files: 'index.html'
      },
      css: {
        files: 'less/style.less',
        tasks: ['less']
      },
      options: {
        livereload: false
      }
      // TODO: Add tasks for js and sass here
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
  grunt.loadNpmTasks('grunt-express');          // Express server
  grunt.loadNpmTasks('grunt-contrib-watch');    // Watch files for changes
  grunt.loadNpmTasks('grunt-open');             // Open task
  grunt.loadNpmTasks('grunt-contrib-less');     // Compile our LESS files

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
};