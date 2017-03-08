import { render } from 'react-dom';
import $ from 'jquery';
import ListFrame from '../../components/Common/listFrame.jsx';

function newsListRender(config) {
    let param = { title: 'Latest News', hasPager: false };
    let data = [{
        title: 'Verizon is bringing back unlimited data',
        modifiedOn: new Date(2017, 2, 8, 14, 3),
        url: 'www.baidu.com'
    }, {
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        modifiedOn: new Date(2017, 2, 8, 13, 52),
        url: 'www.baidu.com'
    }, {
        title: 'There are many variations of passages of Lorem Ipsum available',
        modifiedOn: new Date(2017, 2, 8, 10, 27),
        url: 'www.baidu.com'
    }, {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        modifiedOn: new Date(2017, 2, 8, 9, 50),
        url: 'www.baidu.com'
    }];
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function formatDate(date) {
        let week = weeks[date.getDay()];
        return week + " " + date.getDate() + ", " + (date.getMonth() + 1) + ", " + date.getFullYear() +
            " " + date.getHours() + ":" + date.getMinutes();
    }

    function renderUI(data, param) {
        if (document.getElementById('news-list')) {
            let listItems = data.map((item, idn) => {
                return (<li>
                    <div className="content-title">{item.title}</div>
                    <div className="content-footer">{formatDate(item.modifiedOn)}</div>
                </li>)
            });
            render(
                <ListFrame title={param.title} hasPager={param.hasPager}>
                    <ul>
                        {listItems}
                    </ul>
                </ListFrame>,
                document.getElementById('news-list')
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
                        title: dataInput.d.results[i].Title,
                        modifiedOn: dataInput.d.results[i].ModifiedOn,
                        url: dataInput.d.results[i].Url,
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
        renderUI(data, param);
    }
}

global.newsListRender = newsListRender;