/**
 * Grunt init script file.
 * @param grunt
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg    : grunt.file.readJSON('package.json'),
        concat : {
            css  : {
                src  : ['src/app/*/*.css'],
                dest : 'dist/app.css'
            },
            dist : {
                src  : 'src/app/*/*.js',
                dest : 'dist/app.js'
            }
        },
        uglify : {
            build : {
                src  : 'src/app.js',
                dest : 'dist/app.min.js'
            }
        },
        cssmin : { //css文件压缩
            css : {
                src  : 'dist/app.css',//将之前的all.css
                dest : 'dist/app.min.css'  //压缩
            }
        }

    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}
