export default class DropDownList extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        droplistOpen:false
    }
  }

  selectOption(value){
      this.refs.selectInput.value = value;
      this.setState({droplistOpen:false});
      this.props.selectAction(value);
  }
  
  showList(){
      this.setState({droplistOpen:!this.state.droplistOpen});
  }

  createList(data){
      let items=null;
      if(data === null){
          items = [{value:'1'},{value:'2'},{value:'3'}]
      }
      else{
          items = data;
      }
      
      var reactThis = this;
      var dropList = items.map((item, index)=>{
          return <div onClick={this.selectOption.bind(reactThis,item.Value)} key={"select"+index}>
                      {item.Value}
                  </div>
      });
      return dropList;
  }
  
  render() {
      let {listData, defaultValue}=this.props;
     let listItems = this.createList(listData);
      return <div className="acs-droplist">
                  <div className="acs-dropdown-selectedvalue"><input ref="selectInput"  placeholder={defaultValue} disabled="disabled"/><span className="acs-dropdown-icon" onClick={this.showList.bind(this)}></span></div>
                  <div className="acs-dropdown-list" style={{height:this.state.droplistOpen?"auto":"0"}}>
                      {listItems}
                  </div>
              </div>;
  }
}
