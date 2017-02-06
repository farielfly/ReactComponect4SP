import { render } from 'react-dom';
import NavDropDown from '../../components/Navigation/NavDropDown.jsx';

function NavigationRender() {

    let TestData = [{ 'title': 'HOME', 'level': 'top', 'itemHref': 'http://www.baidu.com', 'items': [] },
    {
        'title': 'DIVISION', 'level': 'top', 'itemHref': '',
        'items': [{ 'title': 'Care Integration', 'level': 'mid', 'itemHref': '', 'items': [] },
        {
            'title': 'Care Transition Divsion', 'level': 'mid', 'itemHref': '',
            'items': [
                { 'title': 'Action & Ops Support', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
                { 'title': 'Care Transition Office', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
                { 'title': 'CCMS & Comm CAT', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
                { 'title': 'Helpdesk Infosystem and Projects(HP)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
                { 'title': 'Referral Management Team', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] }
            ]
        },
        { 'title': 'CEO Office', 'level': 'mid', 'itemHref': '', 'items': [] },
        { 'title': 'Community Mental Health Division', 'level': 'mid', 'itemHref': '', 'items': [] },
        { 'title': 'Corporate Services & Srategy Division', 'level': 'mid', 'itemHref': '', 'items': [] },
        { 'title': 'Home & Primary Care Division', 'level': 'mid', 'itemHref': '', 'items': [] },
        { 'title': 'ILTC IT Enablement Office', 'level': 'mid', 'itemHref': '', 'items': [] },
        { 'title': 'ILTC Manpower Dev & Resorcing Division', 'level': 'mid', 'itemHref': '', 'items': [] }

        ]
    },
    {
        'title': 'APPLICATION', 'level': 'top', 'itemHref': '',
        'items': [
            { 'title': 'Create Conversations@PRM', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Manage My Learning (LMS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Manage Client Relations (IRMS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Submit eForms', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Check Webmail', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Budget and Reporting System (B.A.R.S)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Vendor Performance Assessment (VPAS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'The Grant Information Factbook (VPAS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Manage Leave/Claims (iHR)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] },
            { 'title': 'Manage Client Relations (IRMS)', 'level': 'end', 'itemHref': 'www.baidu.com', 'items': [] }
        ]
    },
    { 'title': 'CROSS DIVISIONS', 'level': 'top', 'itemHref': '', 'items': [] },
    { 'title': 'ABOUT AIC', 'level': 'top', 'itemHref': '', 'items': [] }
    ];

    render(
        <ul className='acs-navigation-wrap'>
            {TestData.map((item, index) => {
                return <NavDropDown key={'navtop' + index} title={item.title} itemHref={item.itemHref}>
                    {
                        item.items.map((item, index) => {
                            return <NavDropDown key={'navmid' + index} title={item.title} itemHref={item.itemHref}>
                                {
                                    item.items.map((item, index) => {
                                        return <NavDropDown key={'navend' + index} title={item.title} itemHref={item.itemHref}>
                                        </NavDropDown>;
                                    })
                                }
                            </NavDropDown>;
                        })
                    }
                </NavDropDown>;
            })}
        </ul>,
        document.getElementById('navigation')
    );
}

global.NavigationRender = NavigationRender;
