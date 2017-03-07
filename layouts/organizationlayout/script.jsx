import { render } from 'react-dom';
import Organization from '../../components/accordion/accordionComplex.jsx';


function orgStructureRender(config) {
    let data = [
        {
            title: 'one',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'one1', href: 'http://www.baidu.com' }, { title: 'one2', href: 'http://www.baidu.com' }, { title: 'one3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: '1111',
                ADName: 'Tom',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: false

        },
        {
            title: 'two',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'two1', href: 'http://www.baidu.com' }, { title: 'two2', href: 'http://www.baidu.com' }, { title: 'two3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: '1111',
                ADName: 'Jerry',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: false
        },
        {
            title: 'three',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'three1', href: 'http://www.baidu.com' }, { title: 'three2', href: 'http://www.baidu.com' }, { title: 'three3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: 'David',
                ADName: 'test',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: false
        },
        {
            title: 'four',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'four1', href: 'http://www.baidu.com' }, { title: 'four2', href: 'http://www.baidu.com' }, { title: 'four3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: '1111',
                ADName: 'test',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: false
        }
    ];
    let data2 = [
        {
            title: 'odssssne',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'one1', href: 'http://www.baidu.com' }, { title: 'one2', href: 'http://www.baidu.com' }, { title: 'one3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: '1111',
                ADName: 'Tom',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: true

        },
        {
            title: 'twfdffddo',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'two1', href: 'http://www.baidu.com' }, { title: 'two2', href: 'http://www.baidu.com' }, { title: 'two3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: '1111',
                ADName: 'Jerry',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: true
        },
        {
            title: 'thredfdfdfde',
            description: 'Click on the value of Reporting Officer, will open up a new browser tab and enter user profile page.If any property value is empty, the whole line (both property name and value) will not be displayed.',
            children: [
                { title: 'three1', href: 'http://www.baidu.com' }, { title: 'three2', href: 'http://www.baidu.com' }, { title: 'three3', href: 'http://www.baidu.com' },
            ],
            cheifUser: {
                Id: 'David',
                ADName: 'test',
                Emaiil: 'eeeeeeeeee',
                Designation: 'Manager',
                OfficeNumber: '1234567',
                PhoneNumber: '1234567890',
                Location: 'Wedid, dsfids a02',
                Reporter: 'Tom Sum',
                People: 'ham.gao@example.com',
                AskAbout: 'Swim'
            },
            isSearch: true
        }
    ];
    let param={};

    function renderUI(data) {
        if (document.getElementById('organization')) {
            render(
            <Organization data={data} hasPanel={true}></Organization>,
            document.getElementById('organization')
            )
         }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url +(config.searchInfo !==""?("&text="+config.searchInfo):""),
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function (dataInput) {
                if(config.searchInfo !==""){
                    dataInput.Divisions.map((item)=>{
                        item.isSearch = true;
                    })
                }
                renderUI(dataInput.Divisions, this.config);
            },
            error: function (data) {
            }
        });
    }

    if (config && !config.debug) {
        ReactDOM.unmountComponentAtNode(document.getElementById('organization'));
        loadData(param);
    }
    else {
        if (config.searchInfo != '') {
            ReactDOM.unmountComponentAtNode(document.getElementById('organization'));
            renderUI(data2);
        }
        else {
            ReactDOM.unmountComponentAtNode(document.getElementById('organization'));
            renderUI(data);
        }
    }
}
global.orgStructureRender = orgStructureRender;
