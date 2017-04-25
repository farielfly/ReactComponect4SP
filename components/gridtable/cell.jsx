export default class TableCell extends React.Component {
    constructor(props) {
        super(props);
    }

    createCell(data,type){
        var cell = {};        
        switch(type){
            case 'text':{ 
                cell=(<span className="acs-cellvalue-style" title={data}>{data}</span>);
                break;}
            case 'divsion':{ 
                cell=(<span className="acs-cellvalue-style" title={data.title}><p className="acs-pvalue-style">{data.division}</p><p className="acs-pvalue-style">{data.department}</p></span>);
                break;}
            case 'photo':{
                cell=(<div className="acs-person-headpic">
                            <a href={data.url} target="_blank"><img src={data.photo} alt=""/></a>
                        </div>);
                break;}
            case 'name':{
                cell=(
                    <div className="acs-person-statue">
                        <span className="ms-imnSpan">
                            <a href="javascript:void(0)" className="ms-imnlink ms-spimn-presenceLink">
                                <span className="ms-spimn-presenceWrapper ms-imnImg ms-spimn-imgSize-10x10">
                                    <img className="acs-headpic-statue" name='imnmark' title='' ShowOfflinePawn='1' className="ms-spimn-img ms-spimn-presence-offline-10x10x32" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' data-sip={data.email} id={"imn_"+data.id+",type=sip"} />
                                </span>
                            </a>
                        </span>
                        <a href={data.url} target="_blank"><span title={data.name}>{data.name}</span></a>
                    </div>
                );
                break;}
        }
        return cell;
    }

    render() {
        let {data,type,width} = this.props;
        return (
          <div className="acs-tobdy-cell" style={{width:width+"%"}}>{this.createCell(data,type)}</div>
        );
    }
}
