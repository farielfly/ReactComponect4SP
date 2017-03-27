export default class titleDescriptionPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title, description, itemhref, isVideo } = this.props;
        let titleClassName = isVideo?"acs-titledescriptionpanel-wrap play": "acs-titledescriptionpanel-wrap";
        return (
            <div className={titleClassName}>
                <a href={itemhref}>
                    <span className='acs-titledescriptionpanel-title'>{title}</span>
                    <span className='acs-titledescriptionpanel-description'>{description}</span>
                    <span className='acs-titledescriptionpanel-play'><div></div></span>
                </a>
            </div>
        );
    }
}