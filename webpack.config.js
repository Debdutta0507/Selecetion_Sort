const path=require('path');
const HtmlPlugin=require('html-webpack-plugin')

module.exports={
    entry:'/src/index.js',
    devtool: 'source-map',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        },
        {test:/\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
    }
    
    ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        static:{
        directory:path.join(__dirname,'dist'),
        },
        port:8080,
        open:true
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html'
        })
    ],
};