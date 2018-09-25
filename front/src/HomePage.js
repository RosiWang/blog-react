import React,{Component} from 'react'
import TopNavigation from './compt/TopNavigation'
import DisplayContainer from './compt/DisplayItemContainer'
import InfoOverviewContainer from './compt/InfoOverviewContainer'
import GeneralButton from "@/src/compt/GeneralButton";
import 'whatwg-fetch'

// const url='http://arashivision-oa.ce51fc365833e429ab4b48fffd0f4d22b.cn-shenzhen.alicontainer.com/visitor/getAllMembers';
const url = 'http://localhost:3089/';

export default class Greeter extends Component{

    componentDidMount(){
        console.log('component did mount');
        fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept':'application/json,text/plain,*/*'
            }
        }).then(function(data){
            console.log("get success:",data);
        });
    }

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

