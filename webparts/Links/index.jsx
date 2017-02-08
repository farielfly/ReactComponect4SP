import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';

import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';



const LINK_DATA = [[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
{ 'itemhref': 'www.baidu.com',  'title': 'PRM' },
{ 'itemhref': 'www.baidu.com',  'title': 'IRMS' },
{ 'itemhref': 'www.baidu.com', 'title': 'eForms' },
{ 'itemhref': 'www.baidu.com',  'title': 'I-innovate' },
{ 'itemhref': 'www.baidu.com', 'title': 'Webmail' },
{ 'itemhref': 'www.baidu.com', 'title': 'App' },
{ 'itemhref': 'www.baidu.com', 'title': 'App' },
{ 'itemhref': 'www.baidu.com', 'title': 'App' }],
[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
{ 'itemhref': 'www.baidu.com',  'title': 'PRM' },
{ 'itemhref': 'www.baidu.com',  'title': 'IRMS' },
{ 'itemhref': 'www.baidu.com', 'title': 'eForms' },
{ 'itemhref': 'www.baidu.com',  'title': 'I-innovate' },
{ 'itemhref': 'www.baidu.com', 'title': 'Webmail' },
{ 'itemhref': 'www.baidu.com', 'title': 'App' },
{ 'itemhref': 'www.baidu.com', 'title': 'App' },
{ 'itemhref': 'www.baidu.com', 'title': 'App' }],
[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' }]];

if (document.getElementById('acclinks')) {
render(
    <WebPartFrame
        title={"Frequently Accessed List"}
        hasMore={false}
        link={"wwww.baidu.com"}
        hasTopLine={false}
    >

        <SliderFrame
            itemCount={LINK_DATA.length}
            speed={1.2}
            delay={2.1}
            pause={true}
            autoplay={false}
            dots={true}
            arrows={true}
        >
            <SliderLinks items={LINK_DATA} />
        </SliderFrame>
    </WebPartFrame>,
    document.getElementById('acclinks')
);
}