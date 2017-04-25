import { render } from 'react-dom';
import Display from '../../components/AppGallery/display.jsx';
import Edit from '../../components/AppGallery/edit.jsx';
import $ from 'jquery';

function appRender(params) {
    if (!params.data) {
        params.data = {myData: [{src:'../../components/img/ClockIn.png',title:'Chrome',href:'#',id:'1'},{src:'../../components/img/eBao.png',title:'Youtube',href:'#',id:'2'}],
        workingData: [{src:'../../components/img/Jira.png',title:'Rss',href:'#',id:'3'},{src:'../../components/img/eBao.png',title:'Blog Spot',href:'#',id:'4'}],
        allData: [{src:'../../components/img/Jira.png',title:'Evernote',href:'#',id:'5'},{src:'../../components/img/Outlook.png',title:'Skype',href:'#',id:'6'},{src:'../../components/img/Salesforce.png',title:'Twitter',href:'#',id:'7'}]};        
        renderUI(params);
    }
    else{        
        var data = {};
        data.myData = params.data[0].map(assemblydata);
        data.workingData = params.data[1].map(assemblydata);
        data.allData = params.data[2].map(assemblydata);
        params.data = data;
        renderUI(params);
    }

    function assemblydata(item){
        return {href:item.LinkUrl,title:item.Title,src: _spPageContextInfo.webAbsoluteUrl + '/Style Library/Custom Style/AvePoint Workspace/Image/' + item.IconUrl + '.png',id:item.ID};
    } 

    function save(data){
        debugger;
        var result = data.map(function(item){
            return {LinkUrl:"".href,Title:item.title,IconUrl: "",ID:item.id};
        });    
        return savedata(result);
    }

    function savedata(data) {
        var dtd = $.Deferred();
        $.ajax({
            url: _spPageContextInfo.siteAbsoluteUrl + '/_vti_bin/APPSSP13MeetingRoom/MeetingRoomService.svc/UpdateAppInfos',
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            type: "POST",
            dataType: "json",
            cache: false,
            data: JSON.stringify({ infos: data }),
            success: function (result) {                
                dtd.resolve(result.GenerateCalendarDataResult);
            },
            error: function (data) {
                console.log("Save data failed.");
                dtd.resolve([]);
            }
        });
        return dtd.promise();
    }

    function renderUI(params) {        
        if (document.getElementById('App')) {
            if(params.type == 'edit'){
                render(
                    <Edit myData={params.data.myData} allData={params.data.allData} workingData={params.data.workingData} save={save.bind(this)}>
                    </Edit>,
                    document.getElementById('App')
                )
            }
            else{
                render(
                    <Display myData={params.data.myData} workingData={params.data.workingData}>
                    </Display>,
                    document.getElementById('App')
                )
            }
        }
    }
}

window.appRender = appRender;