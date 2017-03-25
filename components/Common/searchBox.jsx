export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchClick() {
        let inputValue = this.refs.mSearchBox.value;
        window.open(this.props.searchUrl + inputValue);
    }

    render() {
        let { iconPosition, placeHolder, link } = this.props;

        return (
            <div className={"acs-searchbox"}>
                <div className={"acs-searchbox-headericon"} style={{ backgroundPosition: iconPosition }}></div>
                <input className={"acs-searchbox-input"} type="text" placeholder={placeHolder} ref="mSearchBox"></input>
                <div className={"acs-searchbox-tailicon"} onClick={this.onSearchClick.bind(this)}></div>
            </div>
        );
    }
}