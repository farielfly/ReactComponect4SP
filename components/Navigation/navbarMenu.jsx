import MenuItem from './navbarItem.jsx';

export default class navbarMenuList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
                <div className="acs-navbar">
                    {this.props.data.map((el ,index)=>{
                        return (<MenuItem key={index} menuData={el} hasGrandChild={el.hasGrandChild}/>)
                    })}
                </div>
            )
    }

}
