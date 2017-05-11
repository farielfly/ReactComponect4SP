import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'

function messageRender(config) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let param = { title: config.title, linkUrl: config.linkUrl };
    let data = { Title: 'townhall 2017', Date: new Date(2017, 2, 28), PictureUrl: '../../components/img/image1.jpg', Content:'Save the Date'};

    function formatDate(date) {
        return weeks[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    }

    function renderUI(param, data) {
        if (document.getElementById('message')) {
            render(
                <WebPartFrame
                    title={param.title}
                    hasMore={false}
                    link={param.linkUrl}
                    hasTopLine={false}>
                    <div className="acs-message">
                        <a href={param.linkUrl}><img src={data.PictureUrl}></img></a>
                        <div className="acs-message-title"><a href={param.linkUrl}>{data.Title}</a></div>
                        <div className="acs-message-date">{formatDate(new Date(data.Date))}</div>
                        <div className="acs-message-content">{data.Content}</div>
                    </div>
                </WebPartFrame>,
                document.getElementById('message')
            )
        }
    }

    if (config && !config.debug) {
        data = config.msg;
    }
    renderUI(param, data);
}

global.messageRender = messageRender;