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
            <Gallery children={this.state.myData} type="display"/>
            <Gallery children={this.state.workingData} type="display"/>
        </div>);
    }
}
