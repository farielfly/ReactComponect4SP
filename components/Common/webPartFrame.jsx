export default class WPFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title,hasMore,link,hasTopLine} = this.props;

        return (
            <div className="asc-wpFrame" style={{"border-top":hasTopLine?"5px solid #f57d30":"none"}}>
                <a className="head-part" href={link}>
                    <span className="logoicon"></span>
                    <span className="headtitle">{title} </span>
                    <span className="headmore">{hasMore?"More":""}</span>
                </a>
                {this.props.children}
            </div>
        );
    }
}
