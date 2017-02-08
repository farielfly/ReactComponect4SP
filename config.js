module.exports = {
    rootpath: __dirname,
    webparts: [
        {
            'name': 'links',
            'src': 'webparts/links/index.jsx',
            'style': 'webparts/links/style.less',
            'output': 'dist/webparts'
        },
        {
            'name': 'slider',
            'src': 'webparts/slider/index.jsx',
            'style': 'webparts/slider/style.less',
            'output': 'dist/webparts'
        },
        {
            'name': 'Navigation',
            'src': 'webparts/Navigation/index.jsx',
            'style': 'webparts/Navigation/style.less',
            'output': 'dist/webparts'
        },
        {
            'name': 'news',
            'src': 'webparts/news/index.jsx',
            'style': 'webparts/news/style.less',
            'output': 'dist/webparts'
        }
    ],
    webpartStyleoutput: 'dist/webparts',
    layouts: [
        {
            'name': 'layouta',
            'src': 'layouts/layouta/script.jsx',
            'style': 'layouts/layouta/style.less',
            'bundlecss': 'layouta.css',
            'output': 'dist/layouts'
        },
        {
            'name': 'layoutb',
            'src': 'layouts/layoutb/script.jsx',
            'style': 'layouts/layoutb/style.less',
            'bundlecss': 'layoutb.css',
            'output': 'dist/layouts'
        }
    ],
    layoutStyleoutput: 'dist/layouts',
    common: [
        {
            'name': 'common',
            'src': '',
            'style': 'stylelibrary/commonstyle.less',
            'bundlecss': 'common.css',
            'output': 'dist/common'
        },
    ],
    commonStyleoutput: 'dist/common',
    images: [
        {
            'src': ['stylelibrary/images/*'],
            output: 'dist/common/images'
        },
    ],
    font: {
        'src': ['stylelibrary/fonts/*'],
        'output': 'dist/common/fonts'
    }
}

