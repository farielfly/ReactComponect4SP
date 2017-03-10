module.exports = {
    rootpath: __dirname,
    prod_webpartStyleoutput: 'CSS',
    prod_webpartScriptoutput: 'JS',
    prod_root: '../NTUCIncome/',
    replacepath: '/_layouts/15/APPSAICSolution/Images/',
    webparts: [
        {
            'name': 'Articles',
            'src': ['webparts/Articles/index.jsx'],
            'style': ['webparts/Articles/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'Calendar',
            'src': ['webparts/Calendar/index.jsx'],
            'style': ['webparts/Calendar/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'Links',
            'src': ['webparts/Links/index.jsx'],
            'style': ['webparts/Links/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'popularList',
            'src': ['webparts/Lists/popularList.jsx'],
            'style': ['webparts/Lists/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'newsList',
            'src': ['webparts/Lists/newsList.jsx'],
            'style': ['webparts/Lists/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'Panels',
            'src': ['webparts/Panels/index.jsx'],
            'style': ['webparts/Panels/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'QuickSearch',
            'src': ['webparts/QuickSearch/index.jsx'],
            'style': ['webparts/QuickSearch/style.less'],
            'output': 'dist/webparts',
            'prod_output': ""
        },
        {
            'name': 'Slider',
            'src': ['webparts/Slider/index.jsx'],
            'style': ['webparts/Slider/style.less'],
            'output': 'dist/webparts',
            'prod_output': "APPSSP13NewsRotator/APPSSP13NewsRotator/Style Library/Script"
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
            'name': 'campusGlobal',
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
            output: 'dist/webglobal/images',
            prod_output: 'Images',
            'prod_include': true

        },
    ],

    font: {
        'src': ['stylelibrary/fonts/*'],
        'output': 'dist/webglobal/fonts',
         prod_output: 'Fonts',
        'prod_include': false
    }
}

