import NavTitleBtn from './navbarTitleBtn.jsx';

export default class NavbarItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            sopen:false,
        };
    }

    menushow(isSecond){
        if (!isSecond) {
            this.setState({
                open : true
            });
        }
        else{
            this.setState({
                sopen : true
            });
        }
    }

    menuhidden(isSecond){
        if (!isSecond) {
            this.setState({
                open : false
            });
        }
        else{
            this.setState({
                sopen : false
            });
        }
    }



    render(){
        let secondMenuC = (<ul onMouseOver={this.menushow.bind(this,false)} onMouseOut={this.menuhidden.bind(this,false)} className="acs-navbaritem-second acs-navbaritem-secondO" style={{display:this.state.open ? "flex" : "none",top:this.state.open ? "65px" : "60px","flexDirection":"row"}}>
                                <div style={{"flexDirection":"column"}}>
                                    {this.props.menuData.arr.map((els, index) => {
                                        if(index <8){
                                            return (<div className="acs-itemlink" key={index}><span className="acs-itemlink-icon"></span>{els.name}</div>)
                                            }
                                    })}
                                </div>
                                <div style={{"flexDirection":"column"}}>
                                    {this.props.menuData.arr.map((els, index) => {
                                        if(index >8){
                                            return (<div className="acs-itemlink" key={index}><span className="acs-itemlink-icon"></span>{els.name}</div>)
                                        }
                                    })}
                                </div>
                        </ul>);


        let secondMenu = (<ul onMouseOver={this.menushow.bind(this,false)} onMouseOut={this.menuhidden.bind(this,false)} className="acs-navbaritem-second" style={{display:this.state.open ? "block" : "none",top:this.state.open ? "65px" : "60px"}}>
                                {this.props.menuData.arr.map((els, index) => {
                                    if(typeof els.arr==='object'){
                                        if(els.arr.length === 0){
                                            return (<div className="acs-secondnav-item" key={index} >{els.name}</div>)
                                        }
                                        else{
                                            return( <SecondItem key={index} menuData={els}/>)
                                        }
                                    }
                                    else{
                                        return (<div className="acs-itemlink" style={{float:(index > 7)?"right":"none"}} key={index}><span className="acs-itemlink-icon"></span>{els.name}</div>)
                                    }
                                })}
                        </ul>);
        secondMenu = this.props.hasGrandChild?secondMenu:secondMenuC;
        secondMenu = this.props.menuData.hasChild?secondMenu:null;

        return (
                <div className="acs-navbar-item"  onMouseOver={this.menushow.bind(this,false)} onMouseOut={this.menuhidden.bind(this,false)}>
                    <NavTitleBtn classname={"acs-navbaritem-titlebtn"}  isSecond={false} name={this.props.menuData.name} open={this.state.open} hasChild={this.props.menuData.hasChild}/>
                        {secondMenu}
                </div>)
    }
}

class SecondItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
            sopen:false,
        };
    }

    menushow(isSecond){
        if (!isSecond) {
            this.setState({
                open : true
            });
        }
        else{
            this.setState({
                sopen : true
            });
        }
    }

    menuhidden(isSecond){
        if (!isSecond) {
            this.setState({
                open : false
            });
        }
        else{
            this.setState({
                sopen : false
            });
        }
    }


    render(){
        return (
            <div className="acs-secondnav-item"  onMouseOver={this.menushow.bind(this,true)} onMouseOut={this.menuhidden.bind(this,true)}>
                <NavTitleBtn classname={""}  isSecond={true} name={this.props.menuData.name} open={this.state.sopen} hasChild={true}/>
                    <ul onMouseOver={this.menushow.bind(this,true)} onMouseOut={this.menuhidden.bind(this,true)} className="acs-thirdnav-itemlist" style={{display:this.state.sopen ? "block" : "none",width:"400px"}}>
                        {this.props.menuData.arr.map((el, index) => {
                            return (<div className="acs-itemlink" key={index}><span className="acs-itemlink-icon"></span>{el.name}</div>)
                         })}
                    </ul>
            </div>
            )
        }
}
