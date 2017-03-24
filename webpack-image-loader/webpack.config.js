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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ] //loaders
    } //module
};