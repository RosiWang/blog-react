import React,{Component} from 'react'
import DiaryItem from './DiaryItem'
import icon1 from '../../image/itemIcon/01.png'
import icon2 from '../../image/itemIcon/02.png'
import icon3 from '../../image/itemIcon/03.png'
import icon4 from '../../image/itemIcon/04.png'
import 'whatwg-fetch'

const containerStyle={
    background:'#fff',
    margin:'0 auto',
    width:'92%',
    left:'5.1%',
    borderRadius:6,
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap'
}
const diaryUrl = 'http://localhost:3089/diary';

export default class DiarySection extends Component{

    state = {
        itemData:[]
    }

    componentDidMount(){
        this.getDiaryList();
    }

    getDiaryList = ()=>{
        fetch(diaryUrl, {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept':'application/json,text/plain,*/*'
            }
        }).then(response => response.json()).then(data =>{
            console.log("diary get success:",data,data.length);
            if(data.length > 0){
                const direction = ['bottom','left','right','up'];
                const iconData = [icon1,icon2,icon3,icon4];
                data.map((v,k)=>{
                    v.icon=iconData[k];
                    v.direction = direction[k];
                });
                this.setState({itemData:data});
                console.log("diary::",data);
            }
        });
    }

    render(){
        const {itemData} = this.state;
        return(<div style={containerStyle}>
            {
                itemData.map((v,k) =>{
                   return(
                       <DiaryItem key = {k}
                           icon={v.icon} title={v.title}
                           desc={v.desc} direction={v.direction} />
                   )
                })
            }
        </div>)
    }
}
