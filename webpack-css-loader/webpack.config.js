module.exports = {
	// define entry point
	
	entry: "./js/script1.js",
	
	//define output point
	output: {
		path:'dist',
		filename:'bundle.js'
	},
	
	module: {
        loaders: [
            
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ] //loaders
    } //module
};