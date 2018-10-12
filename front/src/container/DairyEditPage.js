import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TextField,Input} from '@material-ui/core';
import globalStyle from '../style/global.css'
import BrightButton from './component/BrightButton'
import 'whatwg-fetch'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
            container:''
        },
        alertOpen:false,
        alertText:''
    }

    submitTextClick = ()=>{
        const {inputData} = this.state;
        if(inputData.title == '' || inputData.container == '' ){
            this.setState({alertOpen:true,alertText:'标题或内容不能为空！'});
            return;
        }
        console.log('json:',JSON.stringify(inputData));
        fetch(submit_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        }).then(response => {
            console.log('submit response55555:',response);
            if(response.status == 200){
                this.setState({alertOpen:true,alertText:'提交成功！'});
                setTimeout(()=>{
                    console.log(this);
                    this.props.history.push('/');
                    console.log('延时3秒跳转！');
                },2000);
            }else{
                this.setState({alertOpen:true,alertText:'提交失败！'});
            }
            // var data = response.json();
            // console.log(data);
        })
        console.log('提交日志！！！',inputData);
    }
    setOpenState = (open)=>{
        this.setState({alertOpen:open});
    }

    backHandler = ()=>{
        this.props.history.push('/');
    }

    render(){
        var {inputData,alertOpen,alertText} = this.state;
        return(
            <div style={containerStyle}>
                <div style={{float:'right',paddingTop:24}}>
                    <BrightButton style={{width:50}} label='返回' onClick={this.backHandler}/>
                </div>

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
                    <BrightButton style={{width:100}} label='提交' onClick={this.submitTextClick}/>
                </div>
                <SimpleSnackbar open={alertOpen} text={alertText} updateOpenState={this.setOpenState} />
            </div>
        )
    }
}

class SimpleSnackbar extends Component {
    render() {
        const {open,updateOpenState} = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.text}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={e=>{
                                updateOpenState(false);
                            }}>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}


export default withRouter(DairyEditPage)
