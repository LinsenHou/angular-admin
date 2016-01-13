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
                src  : [
                    'src/app/entry.js',
                    'src/app/conf/*.js',
                    'src/app/service/*.js',
                    'src/app/filter/*.js',
                    'src/app/directive/*.js',
                    'src/app/controller/*.js'
                ],
                dest : 'dist/app.js'
            }
        },

        uglify : {
            build : {
                src  : 'dist/app.js',
                dest : 'dist/app.min.js'
            }
        },

        cssmin : { //css文件压缩
            css : {
                src  : 'dist/app.css',//将之前的all.css
                dest : 'dist/app.min.css'  //压缩
            }
        },

        watch  : {
            files: ['src/app/*/*.*','src/index.html','src/app/entry.js'],
            tasks: ['concat', 'uglify', 'cssmin']
        },

        components : {
            css  : {
                src  : ['src/components/*/*.css'],
                dest : 'dist/components.css'
            },
            dist : {
                src  : [
                    'src/components/entry.js',
                    'src/components/*/*.js',
                ],
                dest : 'dist/components.js'
            }
        }
    });


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin','components']);
}
