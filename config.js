module.exports = {
    rootpath: __dirname,
    prod_webpartStyleoutput: 'CSS',
    prod_webpartScriptoutput: 'JS',
    prod_root: '../../../NTUCIncome/',
    replacepath: '/_layouts/15/APPSAICSolution/Images/',
    webparts: [
        {
            'name': 'Articles',
            'src': ['webparts/Articles/signleArticles.jsx'],
            'style': ['webparts/Articles/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Articles/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Articles/CSS'
        },
        {
            'name': 'Calendar',
            'src': ['webparts/Calendar/index.jsx'],
            'style': ['webparts/Calendar/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Calendar/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Calendar/CSS'
        },
        {
            'name': 'Links',
            'src': ['webparts/Links/index.jsx'],
            'style': ['webparts/Links/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Birthday/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Birthday/CSS'
        },
        {
            'name': 'popularList',
            'src': ['webparts/Lists/popularList.jsx'],
            'style': ['webparts/Lists/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': '',
            'prod_output_css':''
        },
        {
            'name': 'newsList',
            'src': ['webparts/Lists/newsList.jsx'],
            'style': ['webparts/Lists/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': '',
            'prod_output_css':''
        },
        {
            'name': 'Panels',
            'src': ['webparts/Panels/index.jsx'],
            'style': ['webparts/Panels/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Panels/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Panels/CSS'
        },
        {
            'name': 'Message',
            'src': ['webparts/Message/index.jsx'],
            'style': ['webparts/Message/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Message/Script',
            'prod_output_css':'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Message/CSS'
        },
        {
            'name': 'QuickSearch',
            'src': ['webparts/QuickSearch/index.jsx'],
            'style': ['webparts/QuickSearch/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': '',
            'prod_output_css':''
        },
        {
            'name': 'Slider',
            'src': ['webparts/Slider/index.jsx'],
            'style': ['webparts/Slider/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/NewsSlider/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/NewsSlider/CSS'
        },
        {
            'name': 'Event',
            'src': ['webparts/Events/index.jsx'],
            'style': ['webparts/Events/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Discussion/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/Discussion/CSS'
        },
        {
            'name': 'MicroSlider',
            'src': ['webparts/MicroSlider/index.jsx'],
            'style': ['webparts/MicroSlider/style.less'],
            'output': 'dist/webparts',
            'prod_output_js': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/MicroSlider/Script',
            'prod_output_css': 'APPSSP13IncomeWebparts/APPSSP13IncomeWebparts/Asset/MicroSlider/CSS'
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

