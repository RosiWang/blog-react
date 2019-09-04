import React,{Component} from 'react'
import ArticalListItem from './ArticalListItem'
import img1 from '../../image/infoImg1.jpg'
import img2 from '../../image/infoImg2.jpg'

const infoContainerStyle={
    width:'92%',
    margin:'0 auto'
}

export default class InfoOverviewContainer extends Component{

    state = {
        data:[
            {
                img:img1,
                title:'没想好这里放啥',
                container:'这里是占位文本--This is my first blog developed by myself. There is no content at the moment. I am very happy behind it. It is a template style that I like. It is quite good to do what I like.'
            },
            {
                img:img2,
                title:'没想好这里放啥',
                container:'这里是占位文本--This is my first blog developed by myself. There is no content at the moment. I am very happy behind it. It is a template style that I like. It is quite good to do what I like.'
            }
        ]
    }

    render(){
        const {data} = this.state;
        // console.log('data:',data);
        return(
            <div style={infoContainerStyle}>
                {
                    data.map((v,k) => {
                        return(
                            <ArticalListItem key={k} img={v.img} title={v.title} container={v.container} onClick={(e,k)=>{console.log(k)}}/>
                        )
                    })
                }
            </div>
        )
    }
}
