import { render } from 'react-dom';
import $ from 'jquery';
import CalendarEventLine from '../../components/Calendar/calendarEventLine.jsx';

function eventLineRender(config) {
    let param = { title: 'Event Calendar' };
    let data = [{
        name: 'Morning Event!',
        time: new Date(),
    }, {
        name: 'Hello World,',
        time: new Date().setHours(10),
    }, {
        name: 'Hello World 123,',
        time: new Date().setHours(12),
    }, {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        time: new Date().setHours(14),
    }, {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        time: new Date().setHours(15),
    }, {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        time: new Date().setHours(21),
    }];

    function renderUI(data, param) {
        if (document.getElementById('eventline-calendar')) {
            render(
                <CalendarEventLine title={param.title} items={data}></CalendarEventLine>,
                document.getElementById('eventline-calendar')
            )
        }
    }

    function loadData(param) {

    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(data, param);
    }
}

global.eventLineRender = eventLineRender;