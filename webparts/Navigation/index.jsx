import { render } from 'react-dom';
import SliderFrame from '../../components/Navigation/NaviFrame.jsx';
import SliderPics from '../../components/slider/sliderPics.jsx';

function NavigationRender() {

    let TestData = new Array();

    function GetTestData() {
        TestData.push({ 'title': 'HOME', 'level': 'top', 'itemHref': 'http://www.baidu.com', 'items': [] });
        TestData.push({ 'title': 'DIVISION', 'level': 'top', 'itemHref': '', 'items': [] });
        TestData.push({ 'title': 'APPLICATION', 'level': 'top', 'itemHref': '', 'items': [] });
        TestData.push({ 'title': 'CROSS DIVISIONS', 'level': 'top', 'itemHref': '', 'items': [] });
        TestData.push({ 'title': 'ABOUT AIC', 'level': 'top', 'itemHref': '', 'items': [] });

        TestData[1].items.push({ 'title': 'Care Integration', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'Care Transition Divsion', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'CEO Office', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'Community Mental Health Division', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'Corporate Services & Srategy Division', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'Home & Primary Care Division', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'ILTC IT Enablement Office', 'level': 'mid', 'itemHref': '', 'items': [] })
        TestData[1].items.push({ 'title': 'ILTC Manpower Dev & Resorcing Division', 'level': 'mid', 'itemHref': '', 'items': [] })

        TestData[1].items[1].items.push({ 'title': 'Action & Ops Support', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[1].items[1].items.push({ 'title': 'Care Transition Office', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[1].items[1].items.push({ 'title': 'CCMS & Comm CAT', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[1].items[1].items.push({ 'title': 'Helpdesk Infosystem and Projects(HP)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[1].items[1].items.push({ 'title': 'Referral Management Team', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });

        TestData[2].items.push({ 'title': 'Create Conversations@PRM', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Manage My Learning (LMS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Manage Client Relations (IRMS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Submit eForms', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Check Webmail', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Budget and Reporting System (B.A.R.S)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Vendor Performance Assessment (VPAS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'The Grant Information Factbook (VPAS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Manage Leave/Claims (iHR)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
        TestData[2].items.push({ 'title': 'Manage Client Relations (IRMS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] });
    }

    render(

        <div className='acs-navigation-wrap'>
        </div>,
        document.getElementById('navigation')
    );
}

global.NavigationRender = NavigationRender;
