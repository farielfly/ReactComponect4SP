import { render } from 'react-dom';

class WPZone extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(<div><div className="acs-webpart-zone" style={{height: this.props.height}}></div>
        <button className={'acs_addbtn'} onClick={this.add.bind(this)}>Add</button></div>
        )
    }
}



class Content extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            num: 0,
            height: 350
        }
    };

    add(){
        this.setState({
            num: this.state.num + 1
        });
    }

    handleChange(e){
        this.setState({
            height: e.target.value            
        })
    }    

    render(){
        let children = [];
         for(let i=0;i<this.state.num; i++){
            children.push(<WPZone height={this.state.height} />);
         }

        return <div>
            <button className={'acs_addbtn'} onClick={this.add.bind(this)}>Add</button>
            <span>Height: </span><input type="number" onChange={this.handleChange.bind(this)} defaultValue={this.state.height} />
            {children}
        </div>

    }
}

if (document.getElementById('content')) {
  render(
    <Content />,
    document.getElementById('content')
  );
}