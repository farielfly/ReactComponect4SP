import { render } from 'react-dom';
import $ from 'jquery';
import EventCalendar from '../../components/Calendar/eventCalendar.jsx';

function eventCalendarRender(config) {
    let param = { title: 'Event Calendar' };
    let datas = [{
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
        if (document.getElementById('event-calendar')) {
            render(
                <EventCalendar title={param.title} items={data}></EventCalendar>,
                document.getElementById('event-calendar')
            )
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function (dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        name: dataInput.d.results[i].Name,
                        time: dataInput.d.results[i].Time,
                    });
                }
                renderUI(data, this.config);
            },
            error: function (data) {
                debugger;
            }
        })
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(datas, param);
    }
}

global.eventCalendarRender = eventCalendarRender;