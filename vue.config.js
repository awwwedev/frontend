import path from 'path'

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/frontend/'
        : '/',
    transpileDependencies: ['vuex-module-decorators'],
    configureWebpack: {
        resolve: {
            alias: {
                "@common": path.resolve(__dirname, 'src/git-modules/common/src')
            }
        }
    }
}
