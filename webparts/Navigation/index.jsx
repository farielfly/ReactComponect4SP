import { render } from 'react-dom';
import MenuList from '../../components/navigation/navbarMenu.jsx';

function NavigationRender() {

   let data = [
    {
        name:"Home",itemHref:"",arr:[],hasChild:false,hasGrandChild:false,
    },
    {
        name : "Division",itemHref:"",hasChild:true,hasGrandChild:true,
        arr : [ 
            {
                name:"Care Integration Division",itemHref:"",
                arr:[
                    {name:"Assessment & Co-ordination Services Devt",itemHref:""},
                    {name:"Care Innovations & Integration Devt",itemHref:""},
                    {name:"Palliative Care Services Development",itemHref:""}
                ]
            },
            {
                name:"Care Transition Division",itemHref:"",
                arr:[
                    {name:"ACTION & Ops Support",itemHref:""},
                    {name:"Care Transition Office",itemHref:""},
                    {name:"CCMS & Comm CAT",itemHref:""},
                    {name:"Helpdesk Infosystem and Projects (HIP)",itemHref:""},
                    {name:"Referral Management Teams",itemHref:""}
                ]
            },
            {
                name:"CEO Office",itemHref:"",arr:[]
            },
            {
                name:"Community Mental Health Division",itemHref:"",
                arr:[
                        {name:"Capability Building & Sector Development",itemHref:""},
                    {name:"Community Engagement & Development",itemHref:""},
                    {name:"Community Support",itemHref:""},
                    {name:"Resource Planning",itemHref:""},
                    {name:"Service Implementation & Development",itemHref:""}
                ]
            },
            {
                name:"Corporate Services & Strategy Division",itemHref:"",
                arr:[
                    {name:"Corporate & Marketing Comm",itemHref:""},
                    {name:"Corporate Development",itemHref:""},
                    {name:"Finance",itemHref:""},
                    {name:"Human Resource",itemHref:""},
                    {name:"Office Administration",itemHref:""}
                ]
            },
            {
                name:"Grants Management Office",itemHref:"",
                arr:[
                    {name:"Grant Policy & Management",itemHref:""},
                    {name:"Resource Management",itemHref:""}
                ]
            },
            {
                name:"Home & Primary Care Division",itemHref:"",
                arr:[
                    {name:"Home & Community Care",itemHref:""},
                    {name:"Primary Care Development",itemHref:""}
                ]
            },
            {
                name:"ILTC IT Enablement Office",itemHref:"",
                arr:[
                    {name:"ILTC IT Development",itemHref:""}
                ]
            }
        ]
    },
    {
        name : "APPLICATION",itemHref:"",hasChild:true,hasGrandChild:false,
        arr : [
            {name:"FAQ",itemHref:""},
            {name:"AIC library",itemHref:""},
            {name:"PRM Conversations",itemHref:""},
            {name:"iHR",itemHref:""},
            {name:"LMS",itemHref:""},
            {name:"PRM",itemHref:""},
            {name:"Integrated Referral Management System (IRMS)",itemHref:""},
            {name:"eForms",itemHref:""},
            {name:"I-innovate",itemHref:""},
            {name:"Webmail",itemHref:""},
            {name:"Grants Management System (GMS)",itemHref:""},
            {name:"Budget and Reporting System (BARS)",itemHref:""}
        ]
    },
    {
        name : "CROSS-DIVISIONS",itemHref:"",hasChild:false,hasGrandChild:false,arr:[]
    }
    ,
    {
        name : "ABOUT AIC",itemHref:"",hasChild:true,hasGrandChild:false,
        arr:[
            {name:"Org Structure",itemHref:""},
            {name:"Staff Directory",itemHref:""},
            {name:"Policies",itemHref:""},
            {name:"SMM",itemHref:""}
        ]
    }
    ];

    render(
        <MenuList data={data}>
        </MenuList>,
        document.getElementById('navigation')
    );
}

global.NavigationRender = NavigationRender;
