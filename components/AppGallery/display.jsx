import Gallery from './gallery.jsx';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: this.props.myData,
            workingData: this.props.workingData,
        }       
    }

    render() {
        return (<div>
            <Gallery children={this.state.myData} title="My Favorite Apps" type="display"/>
            <Gallery children={this.state.workingData} title="My Working Apps" type="display"/>
        </div>);
    }
}
