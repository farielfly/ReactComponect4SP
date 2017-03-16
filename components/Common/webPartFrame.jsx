export default class WPFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title,hasMore,link,hasTopLine} = this.props;

        return (
            <div className={"acs-webpartframe" + (hasTopLine?" acs-webpartframe-topline":"")}>
                <a className="acs-webpartframe-header" href={link} target={title === "News & Announcements"?'_blank':''}>
                    <span className="acs-header-icon"></span>
                    <span className="acs-header-title">{title} </span>
                    <span className="acs-header-more">{hasMore?"More":""}</span>
                </a>
                {this.props.children}
            </div>
        );
    }
}