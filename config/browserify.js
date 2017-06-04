module.exports = {
    verify: {
        files: {
        './build/scripts/app.js': ['./src/scripts/app.js']
        },
        options: {
            browserifyOptions: { debug: true },
            transform: [
                [
                    'babelify'
                ]
            ],
            watch: true,
            keepAlive: true
        }
    },
    test: {
        files: {
            './tests-bundle.js': './test/**/*.js'
        }
    }
};