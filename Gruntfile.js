module.exports = function (grunt) {
  grunt.initConfig({
    watch: { 
      less: {
        files: ['stylesheets/**/*.less'],
        tasks: ['less']
      },
      jade: {
        files: ['templates/**/*.jade'],
        tasks: ['jade']
      },
      test_js: {
        files: ['scripts/test.js'],
        tasks: []
      },
      options: {
        livereload: true
      }
    },
    less: {
      compile: {
        files: {
          "stylesheets/signUp.css": ["stylesheets/signUp.less"]
        },
        compress: false,
        ieCompat: false,
        relativeUrls: false
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: [{
          cwd: 'templates',
          src: ['**/*.jade', '!**/common/*.jade'],
          dest: '.',
          expand: true,
          ext: '.html'
        }]
          
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
};
