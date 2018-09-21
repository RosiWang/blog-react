import React,{Component} from 'react'
import config from './data.json'
import styles from './style/global.css';//导入
import TopNavigation from './compt/TopNavigation'
import DisplayItem from './compt/DisplayItem'
import icon from './image/itemIcon/01.png'

export default class Greeter extends Component{

    render() {
        console.log('greeter start..');
        return (
            <div style={{background:'#f0f3f2'}} >
                <TopNavigation />
                <div style={{textAlign:'center',paddingTop:300}}>
                    <DisplayItem
                        icon={icon} title='Magna etiam'
                        desc='Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.' />
                </div>
            </div>
        );
    }
}

