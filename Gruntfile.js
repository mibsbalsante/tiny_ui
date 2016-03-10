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

		cssmin: {
			target: {
				files: {
					'dist/css/tiny.min.css': 'dist/css/tiny.css'
				},
			},
		},

		watch: {
			scripts: {
				files: ['src/js/*','src/css/*', 'src/sass/*', 'src/sass/components/*', 'src/sass/variables/*', 'src/sass/structure/*'],
				tasks: ['sass','autoprefixer','cssmin']
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['watch','sass','autoprefixer','cssmin']);
};
