const HtmlWebpackPlugin = require("html-webpack-plugin")
module.export = {
    output: {
        filename: 'app.bunddle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}