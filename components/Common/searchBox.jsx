export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { iconPosition, placeHolder, link } = this.props;
        iconPosition = '-26px -40px';

        return (
            <div className={"acs-searchbox"}>
                <div className={"acs-searchbox-headericon"} style={{backgroundposition:iconPosition}}></div>
            </div>
        );
    }
}