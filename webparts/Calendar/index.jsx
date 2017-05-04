import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'
import Calendar from '../../components/Calendar/calendar.jsx';
import EventCalendar from '../../components/Calendar/eventCalendar.jsx';

function calendarRender(config) {
    let param = { title: 'Event Calendar' ,moreurl: config.moreurl};
    let data = {
        events: [{
            Title: 'Morning Event!',
            StartTime: new Date(),
        }, {
            Title: 'Hello World,',
            StartTime: new Date().setHours(10),
        }, {
            Title: 'Hello World 123,',
            StartTime: new Date().setHours(12),
        }, {
            Title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            StartTime: new Date().setHours(14),
        }, {
            Title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            StartTime: new Date().setHours(15),
        }, {
            Title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            StartTime: new Date().setHours(21),
        }],
        dates: []
    }

    function handleDateRangeChanged(start, totalDays) {
        if (config && !config.debug) {
            return loadCalendarDatas(start, totalDays);
        } else {
            let datas = [];
            while (datas.length < totalDays) {
                datas.push({
                    Date: start.getTime(),
                    HasEvents: start.getDate() % 9 == 0,
                });
                start = new Date(start.getTime() + 24 * 60 * 60 * 1000);
            }
            return datas;
        }
    }

    function loadCalendarDatas(start, totalDays) {
        var dtd = $.Deferred();
        $.ajax({
            url: config.generateCalendarUrl,
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({ startDate: start.getTime(), totalDays: totalDays }),
            cache: false,
            success: function (result) {
                dtd.resolve(result.GenerateCalendarDataResult);
            },
            error: function (data) {
                console.log("Generate calendar data failed.");
                dtd.resolve([]);
            }
        });
        return dtd.promise();
    }

    function renderUI(data, param) {
        if (document.getElementById('event-calendar')) {
            render(
                <WebPartFrame title={param.title} hasMore={false} link={param.moreurl} hasTopLine={false}>
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