import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'
import Calendar from '../../components/Calendar/calendar.jsx';
import EventCalendar from '../../components/Calendar/eventCalendar.jsx';

function calendarRender(config) {
    let param = { title: 'Event Calendar' };
    let data = {
        events: [{
            Title: 'Morning Event!',
            Time: new Date(),
        }, {
            Title: 'Hello World,',
            Time: new Date().setHours(10),
        }, {
            Title: 'Hello World 123,',
            Time: new Date().setHours(12),
        }, {
            Title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            Time: new Date().setHours(14),
        }, {
            Title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            Time: new Date().setHours(15),
        }, {
            Title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            Time: new Date().setHours(21),
        }],
        dates: []
    }

    function handleDateRangeChanged(start, totalDays) {
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

    function loadData(start, totalDays) {
        var dtd = $.Deferred();
        $.ajax({
            cache: false,
            type: "POST",
            url: config.generateCalendarUrl,
            data: JSON.stringify({ startDate: start.getTime(), totalDays: totalDays }),
            async: true,
            success: function (dataInput) {
                var datas = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    datas.push({
                        date: new Date(dataInput.d.results[i].Date),
                        hasEvents: dataInput.d.results[i].HasEvents,
                    });
                }
                dtd.resolve(datas);
            },
            error: function (data) {
                dtd.resolve([]);
            }
        });
        return dtd.promise();
    }

    function renderUI(data, param) {
        if (document.getElementById('event-calendar')) {
            render(
                <WebPartFrame title={param.title} hasMore={false} link={""} hasTopLine={false}>
                    <EventCalendar items={data.events}></EventCalendar>
                    <Calendar dates={data.dates} onDateRangeChange={handleDateRangeChanged.bind(this)}></Calendar>
                </WebPartFrame>,
                document.getElementById('event-calendar')
            )
        }
    }


    if (config && !config.debug) {
        data.events = config.eventArray;
    }
    renderUI(data, param);
}

global.calendarRender = calendarRender;