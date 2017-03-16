import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'
import Calendar from '../../components/Calendar/calendar.jsx';
import EventCalendar from '../../components/Calendar/eventCalendar.jsx';

function calendarRender(config) {
    let param = { title: 'Event Calendar' };
    let events = [{
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

    function handleCalendarDataChange(start, totalDays) {
        if (config && !config.debug) {
            return loadData(start, totalDays);
        } else {
            let datas = [];
            while (datas.length < totalDays) {
                datas.push({
                    date: new Date(start.getTime()),
                    hasEvents: start.getDate() % 9 == 0,
                });
                start = new Date(start.getTime() + 24 * 60 * 60 * 1000);
            }
            return datas;
        }
    }

    function loadEventsForCalendar(start, totalDays) {
        $.ajax({
            cache: false,
            type: "POST",
            url: config.url,
            data: { startDate: start, totalDays: totalDays },
            headers: { "accept": "application/json;odata=verbose" },
            async: false,
            success: function (dataInput) {
                var datas = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    datas.push({
                        date: new Date(dataInput.d.results[i].Date),
                        hasEvents: dataInput.d.results[i].HasEvents,
                    });
                }
                return datas;
            },
            error: function (data) {

            }
        });
    }

    function loadLastestEvents() {
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
                var eventsResult = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    eventsResult.push({
                        name: dataInput.d.results[i].Name,
                        time: dataInput.d.results[i].Time,
                    });
                }
                renderUI(eventsResult, this.config);
            },
            error: function (data) {
                debugger;
            }
        })
    }

    function renderUI(events, param) {
        if (document.getElementById('event-calendar')) {
            render(
                <WebPartFrame
                    title={param.title}
                    hasMore={false}
                    link={""}
                    hasTopLine={false}>
                    <EventCalendar items={events}></EventCalendar>
                    <Calendar onDataChange={handleCalendarDataChange.bind()}></Calendar>
                </WebPartFrame>,
                document.getElementById('event-calendar')
            )
        }
    }


    if (config && !config.debug) {
        loadLastestEvents(param);
    } else {
        renderUI(events, param);
    }
}

global.calendarRender = calendarRender;