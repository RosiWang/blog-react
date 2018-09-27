import React,{Component} from 'react'
import DisplayItem from './DisplayItem'
import icon1 from '../../image/itemIcon/01.png'
import icon2 from '../../image/itemIcon/02.png'
import icon3 from '../../image/itemIcon/03.png'
import icon4 from '../../image/itemIcon/04.png'

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

export default class DisplayContainer extends Component{
    state = {
        itemData:[
            {
                icon:icon1,
                title:'日志标题',
                desc:'This is my first blog developed by myself. There is no content at the moment. I am very happy behind it. It is a template style that I like. It is quite good to do what I like.',
                direction:'bottom'
            },
            {
                icon:icon2,
                title:'日志标题',
                desc:'This is my first blog developed by myself. There is no content at the moment. I am very happy behind it. It is a template style that I like. It is quite good to do what I like.',
                direction:'left'
            },
            {
                icon:icon3,
                title:'日志标题',
                desc:'This is my first blog developed by myself. There is no content at the moment. I am very happy behind it. It is a template style that I like. It is quite good to do what I like.',
                direction:'right'
            },
            {
                icon:icon4,
                title:'日志标题',
                desc:'This is my first blog developed by myself. There is no content at the moment. I am very happy behind it. It is a template style that I like. It is quite good to do what I like.',
                direction:'up'
            }
        ]
    }

    render(){
        const {itemData} = this.state;
        return(<div style={containerStyle}>
            {
                itemData.map((v,k) =>{
                   return(
                       <DisplayItem key = {k}
                           icon={v.icon} title={v.title}
                           desc={v.desc} direction={v.direction} />
                   )
                })
            }
        </div>)
    }
}
