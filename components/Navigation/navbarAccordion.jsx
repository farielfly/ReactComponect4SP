import Accordion from './accordionFrame.jsx';

export default class navbarMenuList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        let {data} = this.props;

        let mobileNav = data.map((secItem,fid)=>{
            if(secItem.HasChild){
                let thirdLevel = null;
                if(secItem.HasGrandChild){
                    thirdLevel=thirdLevel = secItem.Items.map((thrItem,sid)=>{
                        return (
                            <Accordion isFirst={false} key={'secnav'+sid} accordionData={thrItem} itemHeight={"auto"} hasInfoPanel={false} informationEvent={null} >
                                {thrItem.Items.map((itemLink,tid)=>{
                                    return (<a key={'link'+tid} href={itemLink.ItemHref}><span>{itemLink.Title}</span></a>);
                                })}
                            </Accordion>);
                    })
                 }
                 else{
                    thirdLevel = secItem.Items.map((itemLink,sid)=>{
                        return (<a key={'link'+sid} href={itemLink.ItemHref}><span>{itemLink.Title}</span></a>);
                    })
                 }
                return(
                    <Accordion isFirst={true} key={'firnav'+fid} accordionData={secItem} itemHeight={"auto"} hasInfoPanel={false} informationEvent={null} >
                        {thirdLevel}
                    </Accordion>
                );
            }
            else{
                return (
                    <a key={'firnav'+fid} href={secItem.ItemHref} className="acs-accordion-itemlink">
                        <span>{secItem.Title}</span>
                    </a>
                )
            }
        });

        return (
                <div className="acs-navbar">
                   {mobileNav}
                </div>
            )
    }

}

