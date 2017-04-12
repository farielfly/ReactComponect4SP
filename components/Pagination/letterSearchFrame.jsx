
export default class LetterSearchFrame extends React.Component {
    constructor(props){
        super(props);
    }

    letterSearch(letter){
        this.props.letterSearch();
    }

    createLetterPanel(){
        let tempLetters = null;
        let letters =[];
        for (var i = 0; i < 26; i++) {
            var letter = String.fromCharCode((65 + i)).toUpperCase();
            letters.push(letter);
        }
        tempLetters = letters.map((item,index)=>{
            return <div className="acs-lettersearch-item" onClick={this.letterSearch.bind(this,item)} key={'letter'+index}><span>{item}</span></div>;
        });
        return <div className="acs-lettersearch-btnpanel"><div className="acs-lettersearch-all acs-lettersearch-item" onClick={this.letterSearch.bind(this,"ALL")}><span>ALL</span></div><div className="acs-lettersearch-letters">{tempLetters}</div></div>;
    }


    render(){
        let letterBtn = this.createLetterPanel();

        return <div className="acs-lettersearch">
                    {letterBtn}
                    {this.props.children}
                </div>
    }

}
