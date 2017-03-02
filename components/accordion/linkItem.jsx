export default class LinkItem extends React.Component{
    constructor(props){
          super(props);
      }
      
     render(){
        return(
          <a href={this.props.itemLink.href} key={index}>
              <span></span>
              <span>{this.props.itemLink.title}</span>
          </a>
        )
     } 
      
}
