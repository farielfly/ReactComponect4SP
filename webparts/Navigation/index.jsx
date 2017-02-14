import { render } from 'react-dom';
import MenuList from '../../components/navigation/navbarMenu.jsx';
import $ from 'jquery';

function NavigationRender(config) {
    let param = {};
    let data = [
        {
            Title: "Home", itemHref: "", Items: [], hasChild: false, hasGrandChild: false,
        },
        {
            Title: "Division", itemHref: "", hasChild: true, hasGrandChild: true,
            Items: [
                {
                    Title: "Care Integration Division", itemHref: "",
                    Items: [
                        { Title: "Assessment & Co-ordination Services Devt", itemHref: "" },
                        { Title: "Care Innovations & Integration Devt", itemHref: "" },
                        { Title: "Palliative Care Services Development", itemHref: "" }
                    ]
                },
                {
                    Title: "Care Transition Division", itemHref: "",
                    Items: [
                        { Title: "ACTION & Ops Support", itemHref: "" },
                        { Title: "Care Transition Office", itemHref: "" },
                        { Title: "CCMS & Comm CAT", itemHref: "" },
                        { Title: "Helpdesk Infosystem and Projects (HIP)", itemHref: "" },
                        { Title: "Referral Management Teams", itemHref: "" }
                    ]
                },
                {
                    Title: "CEO Office", itemHref: "", Items: []
                },
                {
                    Title: "Community Mental Health Division", itemHref: "",
                    Items: [
                        { Title: "Capability Building & Sector Development", itemHref: "" },
                        { Title: "Community Engagement & Development", itemHref: "" },
                        { Title: "Community Support", itemHref: "" },
                        { Title: "Resource Planning", itemHref: "" },
                        { Title: "Service Implementation & Development", itemHref: "" }
                    ]
                },
                {
                    Title: "Corporate Services & Strategy Division", itemHref: "",
                    Items: [
                        { Title: "Corporate & Marketing Comm", itemHref: "" },
                        { Title: "Corporate Development", itemHref: "" },
                        { Title: "Finance", itemHref: "" },
                        { Title: "Human Resource", itemHref: "" },
                        { Title: "Office Administration", itemHref: "" }
                    ]
                },
                {
                    Title: "Grants Management Office", itemHref: "",
                    Items: [
                        { Title: "Grant Policy & Management", itemHref: "" },
                        { Title: "Resource Management", itemHref: "" }
                    ]
                },
                {
                    Title: "Home & Primary Care Division", itemHref: "",
                    Items: [
                        { Title: "Home & Community Care", itemHref: "" },
                        { Title: "Primary Care Development", itemHref: "" }
                    ]
                },
                {
                    Title: "ILTC IT Enablement Office", itemHref: "",
                    Items: [
                        { Title: "ILTC IT Development", itemHref: "" }
                    ]
                }
            ]
        },
        {
            Title: "APPLICATION", itemHref: "", hasChild: true, hasGrandChild: false,
            Items: [
                { Title: "FAQ", itemHref: "" },
                { Title: "AIC library", itemHref: "" },
                { Title: "PRM Conversations", itemHref: "" },
                { Title: "iHR", itemHref: "" },
                { Title: "LMS", itemHref: "" },
                { Title: "PRM", itemHref: "" },
                { Title: "Integrated Referral Management System (IRMS)", itemHref: "" },
                { Title: "eForms", itemHref: "" },
                { Title: "I-innovate", itemHref: "" },
                { Title: "Webmail", itemHref: "" },
                { Title: "Grants Management System (GMS)", itemHref: "" },
                { Title: "Budget and Reporting System (BARS)", itemHref: "" }
            ]
        },
        {
            Title: "CROSS-DIVISIONS", itemHref: "", hasChild: false, hasGrandChild: false, Items: []
        }
        ,
        {
            Title: "ABOUT AIC", itemHref: "", hasChild: true, hasGrandChild: false,
            Items: [
                { Title: "Org Structure", itemHref: "" },
                { Title: "Staff Directory", itemHref: "" },
                { Title: "Policies", itemHref: "" },
                { Title: "SMM", itemHref: "" }
            ]
        }
    ];

    function renderUI(data) {
        if (document.getElementById('navigation')) {
            render(
                <MenuList data={data}>
                </MenuList>,
                document.getElementById('navigation')
            );
        }
    }

    function loadData() {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: { "accept": "application/json;odata=verbose" },
            async: false,
            success: function(data) {
                renderUI(data);
            },
            error: function(data) {

            }
        });
    }

    if (config && !config.debug) {
        loadData();
    }
    else {
        renderUI(data);
    }

}

global.NavigationRender = NavigationRender;
