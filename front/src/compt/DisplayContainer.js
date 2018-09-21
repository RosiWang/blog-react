import React,{Component} from 'react'
import DisplayItem from './DisplayItem'
import icon from '../image/itemIcon/01.png'

const containerStyle={
    background:'#fff',
    margin:'0 auto',
    width:'92%',
    left:'5.1%',
    borderRadius:6
}

export default class DisplayContainer extends Component{
    state = {
        itemData:[
            {
                icon:icon,
                title:'Magna etiam',
                desc:'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.'
            },
            {
                icon:icon,
                title:'Ipsum dolor',
                desc:'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.'
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
                           icon={icon} title={v.title}
                           desc={v.desc} />
                   )
                })
            }
        </div>)
    }
}
