export default class titleDescriptionPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title, description, itemhref } = this.props;
        return (
            <div className='acs-titledescriptionpanel-wrap'>
                <a href={itemhref}>
                    <span className='acs-titledescriptionpanel-title'>{title}</span>
                    <span className='acs-titledescriptionpanel-description'>{description}</span>
                </a>
            </div>
        );
    }
}