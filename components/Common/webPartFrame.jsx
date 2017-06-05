export default class WPFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title,hasMore,link,hasTopLine} = this.props;
        if(!link){
            link = "javascript:void();"
        }
       
        return (
            <div className={"acs-webpartframe" + (hasTopLine?" acs-webpartframe-topline":"")}>
                <a className="acs-webpartframe-header" href={link}>
                    <span className="acs-header-icon"></span>
                    <span className="acs-header-title">{title} </span>
                    <div className="acs-header-more">
                        {hasMore?"View All":""}
                        <span className="acs-header-more-icon"></span>
                    </div>
                </a>
                {this.props.children}
            </div>
        );
    }
}