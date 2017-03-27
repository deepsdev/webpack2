var path = require('path');

module.exports = {
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

   module: {
        loaders: [
            
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?url=false'
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