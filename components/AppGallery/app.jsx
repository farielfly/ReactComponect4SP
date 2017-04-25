export default class APP extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {                       

        }     
    }

    dragstart(id,type, event){
        this.props.dragstartcallback(id, type);
    }

    dragend(type, event){
        this.props.dragendcallback(type);
    }

    select(event){

    }

    add(id, event){
        event.preventDefault();
        this.props.addcallback(id);
        return false;
    }

    remove(id, event){
        event.preventDefault();
        this.props.removecallback(id);
        return false;
    }

    render() {
        var addition = '';        
        const {src, candrag, title, href, type, id} = this.props;
        if(type == 'remove'){
            addition = <div className="acs-app-action remove" onClick={this.remove.bind(this, id)}></div>;
        }
        else if(type == 'add'){
            addition = <div className="acs-app-action add" onClick={this.add.bind(this, id)}></div>;
        }
        return (<a className='acs-app-item' draggable={this.candrag} onDragStart={this.dragstart.bind(this, id,type)} 
                     onDragEnd={this.dragend.bind(this, type)} onSelect={this.select.bind(this)} href={href}>
                <img src={src}/>
                <span>{title}</span>   
                {addition}             
        </a>);
    }
}