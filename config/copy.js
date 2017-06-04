module.exports = {
    default: {
    	files: [
	        {
	            expand: true,
	            cwd: './src/html/',
	            src: '**',
	            dest: './build/'
	        },
	        {
	        	flatten: true,
	            expand: true,
	            cwd: './src/images/',
	            src: '*',
	            dest: './build/images/'
	        },
	        {
	            expand: true,
	            cwd: './src/fonts/',
	            src: '**',
	            dest: './build/fonts/'
	        },
	    ]
	}
};