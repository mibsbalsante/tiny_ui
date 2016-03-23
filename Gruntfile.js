module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'src/css/tiny.css': 'src/sass/tiny.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: 'last 5 versions'
			},
			dist: {
				files: {
					'dist/css/tiny.css': 'src/css/tiny.css'
				},
			},
		},

		cssbeautifier : {
		  files : ["dist/css/tiny.css"],
			options : {
		    indent: ' ',
		    openbrace: 'end-of-line'
		  }
		},

		cssmin: {
			target: {
				files: {
					'dist/css/tiny.min.css': 'dist/css/tiny.css'
				},
			},
		},

		watch: {
			scripts: {
				files: ['src/js/*','src/css/*', 'src/sass/*', 'src/sass/components/*', 'src/sass/variables/*', 'src/sass/classes/*'],
				tasks: ['sass','autoprefixer','cssmin', 'cssbeautifier']
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-cssbeautifier');

	grunt.registerTask('default', ['watch','sass','autoprefixer', 'cssbeautifier', 'cssmin']);
};
