import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField,Input} from '@material-ui/core';
import globalStyle from '../style/global.css'
import BrightButton from './component/BrightButton'
import 'whatwg-fetch'
const submit_url = 'http://localhost:3089/diary/add'

const containerStyle ={backgroundColor:'#fff',
    textAlign:'center',
    width:'100%',
    height:800
}
//https://www.jianshu.com/p/c6f3a4e5d324 富文本编辑器
class DairyEditPage extends Component{

    state = {
        inputData:{
            title:'',
            container:'  '
        }
    }

    submitTextClick = ()=>{
        const {inputData} = this.state;
        console.log('json:',JSON.stringify(inputData));
        fetch(submit_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        }).then(response => {
            console.log('submit response:',response);
        })
        console.log('提交日志！！！',inputData);
    }

    render(){

        var {inputData} = this.state;
        return(
            <div style={containerStyle}>
                <div style={{paddingTop:24}}>
                    <Input placeholder='日志标题' value={inputData.title} onChange={e=>{
                        inputData.title = e.target.value;
                        this.setState({inputData});
                    }}/>
                </div>
                <div style={{paddingTop:24,width:'100%'}}>
                    <TextField
                        className={globalStyle["MuiInputBase-input-42"]}
                        id="outlined-multiline-static"
                        label="心情随笔"
                        multiline
                        rows="20"
                        value={inputData.container}
                        margin="normal"
                        variant="outlined"
                        onChange={e=>{
                            inputData.container = e.target.value;
                            this.setState({inputData});
                        }}
                    />
                </div>
                <div style={{textAlign:'center',width:100,margin:'0 auto',paddingTop:24}}>
                    <BrightButton label='提交' onClick={this.submitTextClick}/>
                </div>
            </div>
        )
    }
}

export default withRouter(DairyEditPage)
