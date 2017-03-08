import { render } from 'react-dom';
import $ from 'jquery';
import ListFrame from '../../components/Common/listFrame.jsx';

function popularListRender(config) {
    let param = { title: 'Most Popular', hasPager: false };
    let data = [{
        title: 'How social media filter bubbles work',
        likeCount: 221,
        url: 'www.baidu.com'
    }, {
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        likeCount: 199,
        url: 'www.baidu.com'
    }, {
        title: 'There are many variations of passages of Lorem Ipsum available',
        likeCount: 169,
        url: 'www.baidu.com'
    }, {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        likeCount: 152,
        url: 'www.baidu.com'
    }]

    function renderUI(data, param) {
        if (document.getElementById('popular-list')) {
            let listItems = data.map((item, idn) => {
                return (<li>
                    <div className="content-title">{item.title}</div>
                    <div className="content-footer">
                        <span className=""></span>
                        <span>{item.likeCount + ' likes'}</span>
                    </div>
                </li>)
            });
            render(
                <ListFrame title={param.title} hasPager={param.hasPager}>
                    <ul>
                        {listItems}
                    </ul>
                </ListFrame>,
                document.getElementById('popular-list')
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
                        likeCount: dataInput.d.results[i].LikeCount,
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

global.popularListRender = popularListRender;