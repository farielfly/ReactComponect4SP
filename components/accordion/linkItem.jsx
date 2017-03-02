export default class LinkItem extends React.Component{
    constructor(props){
          super(props);
      }
      
     render(){
        return(
          <a href={this.props.itemData.href}>
              <span></span>
              <span>{this.props.itemData.title}</span>
          </a>
        )
     } 
      
}
