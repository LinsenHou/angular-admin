/**
 * Grunt init script file.
 * @param grunt
 */

module.exports = function (grunt) {
    grunt.initConfig({
        pkg    : grunt.file.readJSON('package.json'),
        concat : {
            app : {
                files : [
                    {
                        src  : [
                            'src/app/entry.js',
                            'src/app/conf/*.js',
                            'src/app/service/*.js',
                            'src/app/filter/*.js',
                            'src/app/directive/*.js',
                            'src/app/controller/*.js'
                        ],
                        dest : 'dist/app.js'
                    },
                    {
                        src  : [
                            'src/components/ui-alert/*.js',
                            'src/components/ui-confirm/*.js',
                            'src/components/ui-datepicker/*.js',
                            'src/components/ui-menu/*.js',
                            'src/components/ui-select/*.js',
                            'src/components/ui-validate/*.js',
                            'src/components/ui-webuploader/*.js',
                            'src/components/entry.js'
                        ],
                        dest : 'dist/components.js'
                    },
                    {
                        src  : ['src/app/*/*.css'],
                        dest : 'dist/app.css'
                    },
                    {
                        src  : ['src/components/*/*.css'],
                        dest : 'dist/components.css'
                    }
                ]
            }
        },
        uglify : {
            app        : {
                src  : 'dist/app.js',
                dest : 'dist/app.min.js'
            },
            components : {
                src  : 'dist/components.js',
                dest : 'dist/components.min.js'
            }
        },
        cssmin : { //css文件压缩
            app        : {
                src  : 'dist/app.css',//将之前的all.css
                dest : 'dist/app.min.css'  //压缩
            },
            components : {
                src  : 'dist/components.css',//将之前的all.css
                dest : 'dist/components.min.css'  //压缩
            }


        },
        watch  : {
            files : ['src/app/*/*.*', 'src/index.html', 'src/app/entry.js'],
            tasks : ['concat', 'uglify', 'cssmin']
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}
