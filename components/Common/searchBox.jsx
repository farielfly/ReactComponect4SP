export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchContent: '' }
        // this.onSearchClick = this.onSearchClick.bind(this);
    }

    onSearchClick(event) {
        let inputValue = this.refs.mSearchBox.value;
        // alert("SearchContent: " + inputValue);
        // this.setState({ searchContent: inputValue });
        window.open(this.props.searchUrl + inputValue);
    }

    render() {
        let { iconPosition, placeHolder, link } = this.props;
        // let searchContent = this.state.searchContent;

        return (
            <div className={"acs-searchbox"}>
                <div className={"acs-searchbox-headericon"} style={{ backgroundPosition: iconPosition }}></div>
                <div className={"acs-searchbox-tailicon"} onClick={this.onSearchClick.bind(this, event)}></div>
                <input className={"acs-searchbox-input"} type="text" placeholder={placeHolder} ref="mSearchBox"></input>
            </div>
        );
    }
}