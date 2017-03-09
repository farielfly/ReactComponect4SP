import Cell from './cell.jsx';
export default class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data,columnWidth} = this.props;
        return (
          <div className="acs-tbody-row">{
              data.map((item,index)=>{
                  return (
                      <Cell type={item.type} data={item.data} width={columnWidth[index]} key={'cell'+index} />
                  );
              })
          }</div>
        );
    }
}
