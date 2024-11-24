module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
          dist: {
            files: {
              'css/styles.css': 'scss/styles.scss'
            }
          }
        }
      });
      
  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch']);
  };
  