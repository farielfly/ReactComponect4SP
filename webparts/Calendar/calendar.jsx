import { render } from 'react-dom';
import $ from 'jquery';
import Calendar from '../../components/Calendar/calendar.jsx';

function calendarRender(config) {
    let datas = [];
    let param = {};

    function handleDataChange(start, totalDays) {
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

    function renderUI() {
        if (document.getElementById('calendar')) {
            render(
                <Calendar onDataChange={handleDataChange.bind()}></Calendar>,
                document.getElementById('calendar')
            )
        }
    }

    renderUI();
}

global.calendarRender = calendarRender;