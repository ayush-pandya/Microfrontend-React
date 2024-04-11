/* 
@test:  This tells Webpack to exclude any files within the node_modules directory. 
        This is typically done because you don't want to transpile code from third-party libraries.
exclude: /node_modules/: This tells Webpack to exclude any files within the node_modules directory. 
        This is typically done because you don't want to transpile code from third-party libraries.
use: { loader: 'babel-loader' }: This tells Webpack to use babel-loader to process the files that match the test condition and 
        do not match the exclude condition. Babel is a tool that is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript 
        that can be run by older JavaScript engines.
options: { presets: ['@babel/preset-react', '@babel/preset-env'] }: These are options passed to babel-loader. 
        The presets option is an array of Babel presets to apply. 
        @babel/preset-react is used to transpile JSX and other React-specific syntax,
        and @babel/preset-env is used to transpile modern JavaScript features into older syntax that can be understood by most browsers.
plugins: ['@babel/plugin-transform-runtime']: This is a Babel plugin that avoids duplication in the compiled output when using non-standard features 
        and for enabling async/await transformations.
*/
module.exports = { 
    module: {
        rules: [
            {
                test: /\.m?js$/,    // This is a regular expression that matches any file that ends with .js or .mjs. This rule will be applied to these files.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }

                }
            }
        ]
    }
}