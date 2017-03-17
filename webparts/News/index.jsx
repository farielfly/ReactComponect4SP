import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';
import SliderItem from '../../components/slider/sliderNews.jsx';
import $ from 'jquery';

function newsRender(config) {
    const data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

    var maxCount = 3;
    let param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '', defaultPicUrl: '' };

    function renderUI(data, param) {
        var itemNodes = [];

        for (let i = 0, len = data.length; i < len; i += maxCount) {
            let cell = Math.ceil(data.length / maxCount);
            itemNodes.push(<SliderItem children={data.slice(i, i + maxCount)} count={cell} idx={i} />);
        }

        if (document.getElementById('news')) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={true}
                    link={param.listurl}
                    hasTopLine={true}
                    >
                    <SliderFrame
                        itemCount={itemNodes.length}
                        speed={param.speed}
                        delay={param.delay}
                        pause={param.pause}
                        autoplay={param.autoplay}
                        dots={param.dots}
                        arrows={param.arrows}
                        >
                        <SliderItem items={itemNodes} maxCount={maxCount} />
                    </SliderFrame>
                </WebPartFrame>,
                document.getElementById('news')
            );
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
                    let date = new Date(dataInput.d.results[i].ACSPublishedDate);
                    let year = date.getFullYear();
                    let month = monthTransform(date.getMonth());
                    let day = date.getDate();
                    let hour = date.getHours() >= 12 ? (date.getHours() - 12) : date.getHours();
                    let minute = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
                    let pmOrAm = date.getHours() >= 12 ? "PM" : "AM";
                    data.push({
                        'src': dataInput.d.results[i].ACSImageUrl ? dataInput.d.results[i].ACSImageUrl : param.defaultPicUrl,
                        'date': day + " " + month + ","+ year + " "  + hour + ":" + minute + " " + pmOrAm,
                        'href': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'value': dataInput.d.results[i].Title
                    })
                }
                renderUI(data, this.config);
            },
            error: function (data) {

            }
        });
    }

    function monthTransform (data){
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
        var tempdata = month[data];
        return tempdata;        
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.defaultPicUrl = config.defaultPicUrl ? config.defaultPicUrl : '';
        loadData(param);

    }
    else {
        renderUI(data, param);
    }
}

global.newsRender = newsRender;