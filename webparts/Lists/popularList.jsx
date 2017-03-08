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
                    <div className="content-footer">{item.likeCount + ' likes'}</div>
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

    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(data, param);
    }
}

global.popularListRender = popularListRender;