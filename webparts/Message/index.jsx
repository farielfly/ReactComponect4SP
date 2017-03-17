import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'

function messageRender(config) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let param = { title: 'What You Should Know' };
    let data = { title: 'townhall 2017', date: new Date(2017, 2, 28), picSrc: '../../components/img/image1.jpg' };

    function formatDate(date) {
        return weeks[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    }

    function renderUI(param, data) {
        if (document.getElementById('message')) {
            render(
                <WebPartFrame
                    title={param.title}
                    hasMore={false}
                    link={""}
                    hasTopLine={false}>
                    <div className="acs-message">
                        <img src={data.picSrc}></img>
                        <div className="acs-message-title">{data.title}</div>
                        <div className="acs-message-date">{formatDate(data.date)}</div>
                        <a className="acs-message-btn" href="" onClick="">Save the Date</a>
                    </div>
                </WebPartFrame>,
                document.getElementById('message')
            )
        }
    }

    renderUI(param, data);
}

global.messageRender = messageRender;