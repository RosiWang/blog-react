import React,{Component} from 'react'
import config from './data.json'
import styles from './style/global.css';//导入
import TopNavigation from './compt/TopNavigation'
import DisplayContainer from './compt/DisplayContainer'


export default class Greeter extends Component{

    render() {
        console.log('greeter start..');
        return (
            <div style={{background:'#f0f3f2'}} >
                <TopNavigation />
                <div style={{textAlign:'center',paddingTop:380}}>
                  <DisplayContainer />
                </div>
            </div>
        );
    }
}

