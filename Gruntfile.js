module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');

  var WEB_PORT = 9090;

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          base: 'app',
          keepalive: true,
          open: true,
          port: WEB_PORT,
          protocol: 'http'
        }
      }
    }
  })

  grunt.registerTask('default', ['connect:dev']);
}
