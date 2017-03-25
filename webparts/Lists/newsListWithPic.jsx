import { render } from 'react-dom';
import $ from 'jquery';
import ListFrame from '../../components/Common/listFrame.jsx';

function newsListRender(config) {
    let param = { title: 'ARTICLES YOU MAY ALSO LIKE', hasPager: false };
    let data = [{
        newsImg: 'http://www.baidu.com/img/bd_logo1.png',
        title: 'Verizon is bringing back unlimited data',
        modifiedOn: (new Date()).setHours(14),
        url: 'www.baidu.com'
    }, {
        newsImg: 'http://www.baidu.com/img/bd_logo1.png',
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        modifiedOn: (new Date()).setHours(12),
        url: 'www.baidu.com'
    }, {
        newsImg: 'http://www.baidu.com/img/bd_logo1.png',
        title: 'There are many variations of passages of Lorem Ipsum available',
        modifiedOn: (new Date()).setHours(5),
        url: 'www.baidu.com'
    }, {
        newsImg: 'http://www.baidu.com/img/bd_logo1.png',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        modifiedOn: (new Date()).setHours(0),
        url: 'www.baidu.com'
    }];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function fillZero(value) {
        return value > 9 ? value : ("0" + value);
    }

    function formatDate(value) {
        let date = new Date(value);
        let hour = date.getHours();
        return months[date.getMonth()] + " " + fillZero(date.getDate()) + ", " + date.getFullYear() +
            " " + (hour % 12 == 0 ? "12" : fillZero(hour % 12)) + ":" + fillZero(date.getMinutes()) + (hour > 11 ? " PM" : " AM");
    }

    function renderUI(data, param) {
        if (document.getElementById('news-list')) {
            let listItems = data.map((item, idn) => {
                return (<div className="content-item">
                    <div className="content-left">
                        <img src={item.newsImg} />
                    </div>
                    <div className="conent-right">
                        <div className="content-title">{item.title}</div>
                        <div className="content-footer">{formatDate(item.modifiedOn)}</div>
                    </div>
                </div>)
            });
            render(
                <ListFrame title={param.title} hasPager={param.hasPager}>                    
                        {listItems}
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