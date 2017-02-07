import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';

import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';



const LINK_DATA = [[{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }],
[{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' },
{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }],
[{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }]];

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