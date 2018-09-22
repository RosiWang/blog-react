import React,{Component} from 'react'
import ArticalListItem from './ArticalListItem'
import img1 from '../image/infoImg1.jpg'
import img2 from '../image/infoImg2.jpg'

const infoContainerStyle={
    width:'92%',
    margin:'0 auto'
}

export default class InfoOverviewContainer extends Component{

    state = {
        data:[
            {
                img:img1,
                title:'Sed lorem adipiscing',
                desc:'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.'
            },
            {
                img:img2,
                title:'Sed lorem adipiscing',
                desc:'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.'
            }
        ]
    }

    render(){
        const {data} = this.state;
        console.log('data:',data);
        return(
            <div style={infoContainerStyle}>
                {
                    data.map((v,k) => {
                        return(
                            <ArticalListItem key={k} img={v.img} title={v.title} desc={v.desc}/>
                        )
                    })
                }
            </div>
        )
    }
}
