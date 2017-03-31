import { render } from 'react-dom';
import $ from 'jquery';
import SingleArticle from './singleArticles.jsx';

export default class CategoryArticles extends  React.Component{
    constructor(props){
        super(props);
    }

    initData(data){
        let temp = [],aveCount =this.props.aveCount;
        data.map((item)=>{
            item.ItemUrl = item.ItemUrl + '?categorypage='+document.URL+'&category='+this.props.category;
        })

        if(data.length <= aveCount){
            temp.push(data);
        }
        else{
            var arrCount = (data.length / aveCount) >2?(data.length / aveCount):2;
            if(arrCount === 2){
                temp.push(data.slice(0,aveCount));
                temp.push(data.slice(aveCount,data.length));
            }
            else{
                 for(var i = 0; i< arrCount;i++){
                    temp.push(data.slice(i *aveCount,(i+1)*aveCount));
                }
                if(( data.length % aveCount) !== 0){
                    temp.push(data.slice(arrCount *aveCount,data.length));
                }
            }
        }
        return temp;
    }

    render(){
        let data = this.initData(this.props.data),width = 100/this.props.aveCount;
        return(<div className="acs-articles-content">
            {
                data.map((rowData,index)=>{
                    return <div className="acs-articles-contentrow" key={"articlerow"+index}>{rowData.map((itemData,index)=>{
                        return <SingleArticle hasTitle={false} hasIntro={false} hasTime={true} hasLike={true} itemWidth={width} dataItem={itemData} key={"article"+index}></SingleArticle>
                    })}
                    </div>
                })
            }
        </div>)
        
    }
}

  
