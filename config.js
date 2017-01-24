module.exports = {
    rootpath: __dirname,
    webparts: [
        {
            'name': 'webparta',
            'src': 'webparts/webparta/index.jsx',
            'style': 'webparts/webparta/style.less',
            'output': 'dist/webparts'
        },
        {
            'name': 'slider',
            'src': 'webparts/slider/index.jsx',
            'style': 'webparts/slider/style.less',
            'output': 'dist/webparts'
        },
        {
            'name': 'webpartb',
            'src': 'webparts/webpartb/index.jsx',
            'style': 'webparts/webpartb/style.less',
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
}

