import { render } from 'react-dom';
import $ from 'jquery';
import Calendar from '../../components/Calendar/calendar.jsx';

function calendarRender(config) {
    let datas = [];
    let param = {};

    function renderUI(datas, param) {
        if (document.getElementById('calendar')) {
            render(
                <Calendar></Calendar>,
                document.getElementById('calendar')
            )
        }
    }

    function loadData(param) {

    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(datas, param);
    }
}

global.calendarRender = calendarRender;