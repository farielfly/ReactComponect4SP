import { render } from 'react-dom';
import $ from 'jquery';
import PanelFrame from '../../components/Common/panelFrame.jsx';

function panelRender(){
     let panels=[{
            title:'My Task',
            msgCount: 3,
            iconClass:'acs-header-icon',
            url:'www.baidu.com'
        },{
            title:'HR Connect',
            msgCount: 0,
            iconClass:'acs-header-icon',
            url:'www.baidu.com'
        }];

     function renderUI(panels){
         let panelsFrame = panels.map((panel,idn)=>{
             return (<PanelFrame
                        title={panel.title}
                        msgCount={panel.msgCount}
                        iconClass={panel.iconClass}
                        url={panel.url}>
                    </PanelFrame>) 
         });
        render(
            <div>{panelsFrame}</div>,
            document.getElementById('panel')
            );
    }
   
    renderUI(panels);

}

global.panelRender = panelRender;