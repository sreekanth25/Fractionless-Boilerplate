module.exports = function(grunt) {

  var path = require('path');

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    fraconfig: {
      // configurable paths
      app: '.',
      dist: 'dist'
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= fraconfig.dist %>/*',
            '!<%= fraconfig.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Minify our JavaScripts
    // This is unnecessary because of our usemin blocks in HTML.
    // To use this task uncomment it and remove the usemin blocks
    // from the HTML template.
    //uglify: {
    //  options: {
    //    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //  },
    //  build: {
    //    src: 'js/<%= pkg.name %>.js',
    //    dest: 'js/<%= pkg.name %>.min.js'
    //  }
    //},

    // Start a simple server
    express: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: [path.resolve('./')],
          livereload: false // Setting this to true may cause issues on certain systems. See the Troubleshooting section the Readme for more info
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
        tasks: ['less:development']
      },
      options: {
        livereload: true
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
          compress: true,
          cleancss: true
        },
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      /* Customize your own server and testing tasks
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      */
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= fraconfig.app %>',
          dest: '<%= fraconfig.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            '{,*/}*.html',
            'img/{,*/}*.{webp}',
            'font/{,*/}*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/img',
          dest: '<%= fraconfig.dist %>/img',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= fraconfig.app %>/css',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= fraconfig.dist %>/js/{,*/}*.js',
            '<%= fraconfig.dist %>/css/{,*/}*.css',
            '<%= fraconfig.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= fraconfig.dist %>/font/{,*/}*.*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= fraconfig.app %>/index.html',
      options: {
        dest: '<%= fraconfig.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= fraconfig.dist %>/{,*/}*.html'],
      css: ['<%= fraconfig.dist %>/css/{,*/}*.css', '.tmp/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= fraconfig.dist %>']
      }
    },

    // These `*min` tasks minify the file types they specialize in inside the dist folder
    cssmin: {
      options: {
        root: '<%= fraconfig.app %>',
        banner: '/* Fraction.less Boilerplate minified your CSS with Grunt\'s help. */' // Use banner for debugging
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= fraconfig.app %>/img',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= fraconfig.dist %>/img'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= fraconfig.app %>/img',
          src: '{,*/}*.svg',
          dest: '<%= fraconfig.dist %>/img'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= fraconfig.dist %>',
          src: ['*.html', '{,*/}*.html'],
          dest: '<%= fraconfig.dist %>'
        }]
      }
    }
  });

  // Load npm tasks
  /*
  grunt.loadNpmTasks('grunt-contrib-uglify');   // Uglify JavaScript
  grunt.loadNpmTasks('grunt-express');          // Express server
  grunt.loadNpmTasks('grunt-contrib-watch');    // Watch files for changes
  grunt.loadNpmTasks('grunt-open');             // Open task
  grunt.loadNpmTasks('grunt-contrib-less');     // Compile our LESS files
  grunt.loadNpmTasks('grunt-contrib-clean');    // Clean and prepare folders
  */

  /*:::: Grunt Tasks ::::*/

  // Default task (rarely used)
  grunt.registerTask('default', ['uglify']);

  // Run a local server
  grunt.registerTask('serve', [
    'express:all', 
    //'open', 
    'watch'
  ]);

  // Build project for release
  grunt.registerTask('build', [
    'clean:dist',
    'less:production',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ]);
};