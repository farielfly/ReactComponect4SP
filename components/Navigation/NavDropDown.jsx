export default class NavDropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let subNode = '';
        if (this.props.children) {
            subNode = <ul>{this.props.children}</ul>;
        }
        return (
            <li className="acs-nav-dropdown-li" >
                <a href={this.props.itemHref}>
                    <span>{this.props.title}</span>
                </a>
                {subNode}
            </li>
        );
    }
}