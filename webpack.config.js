module.exports = {
   entry: './js/main.js',
   output: {
      filename: './build/js/bundle.js'
   },

   module: {
   rules: [
   {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
        { 
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
            }
          }
        ]
      },

     {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
     },
  ]
}
};