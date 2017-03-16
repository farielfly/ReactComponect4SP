import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'

function messageRender(config) {
    let param = { title: 'What You Should Know' };
    let data = { title: 'townhall 2017', date: new Date(2017, 2, 28) };

    function renderUI(param,data){
        if (document.getElementById('message')) {
            render(
                <WebPartFrame
                    title={param.title}
                    hasMore={false}
                    link={""}
                    hasTopLine={false}>
                    
                </WebPartFrame>,
                document.getElementById('message')
            )
        }
    }
}