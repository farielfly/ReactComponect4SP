module.exports = {
    rootpath: __dirname,
    prod_root: '../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution',
    webparts: [
        {
            'name': 'links',
            'src': 'webparts/links/index.jsx',
            'style': 'webparts/links/style.less',
            'output': 'dist/webparts',
            'prod_include': true       
        },
        {
            'name': 'slider',
            'src': 'webparts/slider/index.jsx',
            'style': 'webparts/slider/style.less',
            'output': 'dist/webparts',
            'prod_include': true
        },
        {
            'name': 'Navigation',
            'src': 'webparts/Navigation/index.jsx',
            'style': 'webparts/Navigation/style.less',
            'output': 'dist/webparts',
            'prod_include': true   
        },
        {
            'name': 'news',
            'src': 'webparts/news/index.jsx',
            'style': 'webparts/news/style.less',
            'output': 'dist/webparts',
            'prod_include': true    
        },
        {
            'name': 'events',
            'src': 'webparts/events/index.jsx',
            'style': 'webparts/events/style.less',
            'output': 'dist/webparts',
            'prod_include': true   
        }
    ],
    webpartStyleoutput: 'dist/webparts',
    prod_webpartStyleoutput: 'CSS',
    prod_webpartScriptoutput: 'JS',
    layouts: [
        {
            'name': 'layouta',
            'src': 'layouts/layouta/script.jsx',
            'style': 'layouts/layouta/style.less',
            'bundlecss': 'layouta.css',
            'output': 'dist/layouts',
            'prod_include': false  
        },
        {
            'name': 'layoutb',
            'src': 'layouts/layoutb/script.jsx',
            'style': 'layouts/layoutb/style.less',
            'bundlecss': 'layoutb.css',
            'output': 'dist/layouts',
            'prod_include': false
        },
        {
            'name': 'flexlayout',
            'src': 'layouts/flexlayout/script.jsx',
            'style': 'layouts/flexlayout/style.less',
            'bundlecss': 'flexlayout.css',
            'output': 'dist/layouts',
            'prod_include': false
        }
    ],
    layoutStyleoutput: 'dist/layouts',
    common: [
        {
            'name': 'common',
            'src': ['node_modules/react/dist/react.js', 'node_modules/react-dom/dist/react-dom.js', 'node_modules/jquery/dist/jquery.js'],
            'style': 'stylelibrary/commonstyle.less',
            'bundlecss': 'common.css',
            'output': 'dist/common'
            'prod_include': true
        },
    ],
    commonStyleoutput: 'dist/common',
    images: [
        {
            'src': ['stylelibrary/images/*'],
            output: 'dist/common/images',
            prod_output: 'Images',
            'prod_include': true 

        },
    ],
    font: {
        'src': ['stylelibrary/fonts/*'],
        'output': 'dist/common/fonts',
        prod_output: 'Fonts',
        'prod_include': false 
    }
}

