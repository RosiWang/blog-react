import React,{Component} from 'react'
import config from './data.json'
import styles from './style/global.css';//导入
import TopNavigation from './compt/TopNavigation'
import DisplayContainer from './compt/DisplayItemContainer'
import InfoOverviewContainer from './compt/InfoOverviewContainer'
import GeneralButton from "@/src/compt/GeneralButton";


export default class Greeter extends Component{

    render() {
        console.log('greeter start..');
        return (
            <div style={{background:'#f0f3f2'}} >
                <TopNavigation />

                <div style={{textAlign:'center',paddingTop:380}}>
                    <DisplayContainer />

                    <div style={{marginTop:24,marginBottom:24}}>
                        <InfoOverviewContainer/>
                    </div>
                    <div style={{background:'#e89980',
                        color:'#fff',
                        paddingTop:24,
                        paddingBottom:48,
                        marginBottom:24
                    }}>
                        <div style={{paddingTop:16}}>
                            <h2>这里会加上搜索</h2>
                            <p>Nothing, this is a placeholder</p>
                        </div>
                        <input style={{width:240,height:40}} placeholder="rosiwang@163.com"/>
                        <span style={{paddingLeft:16}}>
                            <GeneralButton style={{ border: '3px solid',borderColor:'#eae8f2'}} label='Search'/>
                      </span>
                    </div>

                </div>
            </div>
        );
    }
}

