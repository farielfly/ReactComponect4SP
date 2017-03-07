module.exports = {
    rootpath: __dirname,
    prod_webpartStyleoutput: 'CSS',
    prod_webpartScriptoutput: 'JS',
    prod_root: '../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution',
    replacepath: '/_layouts/15/APPSAICSolution/Images/',
    webparts: [
        {
            'name': 'webparts',
            'src': ['webparts/links/index.jsx',
                'webparts/slider/index.jsx',
                'webparts/news/index.jsx',
                'webparts/navigation/index.jsx',
                'webparts/events/index.jsx',
                'webparts/Articles/index.jsx'],
            'style': ['webparts/links/style.less',
                'webparts/slider/style.less',
                'webparts/news/style.less',
                'webparts/navigation/style.less',
                'webparts/events/style.less',
                'webparts/Articles/style.less'],
            'output': 'dist/webparts',
            'prod_include': true
        }
    ],

    layouts: [
        {
            'name': 'flexlayout',
            'src': ['layouts/flexlayout/script.jsx'],
            'style': ['layouts/flexlayout/style.less'],
            'output': 'dist/layouts',
            'prod_include': true
        }
    ],

    jslibrary: [
        {
            'name': 'react.min',
            'src': 'node_modules/react/dist/react.min.js',
            'output': 'dist/jslibrary',
            'prod_include': true
        },
        {
            'name': 'react-dom.min',
            'src': 'node_modules/react-dom/dist/react-dom.min.js',
            'output': 'dist/jslibrary',
            'prod_include': true
        },
        {
            'name': 'jquery.min',
            'src': 'node_modules/jquery/dist/jquery.min.js',
            'output': 'dist/jslibrary',
            'prod_include': true
        },
    ],

    webglobal: [
        {
            'name': 'aicGlobal',
            'src': ['webparts/Navigation/index.jsx'],
            'style': ['stylelibrary/commonstyle.less', 'webparts/Navigation/style.less'],
            'output': 'dist/webglobal',
            'prod_include': true
        },
    ],
    concats:[
        {
            'name': 'aicGlobal',
            'src': ['../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution/JS/aicGlobal.js','jslibrary/Commonjs.js'],
            'output': 'dist/jslibrary',
        }
    ],
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

