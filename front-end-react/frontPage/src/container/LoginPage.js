import React,{Component} from 'react'
import loginImg from '../image/loginImg.png'
import {Input,Button} from '@material-ui/core'
import {withRouter} from 'react-router-dom'

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const containerStyle= {
    backgroundImage:`url(${loginImg})`,
    backgroundColor:'#fff5d1',
    width:'100%',
    height:800
}

const boxDivStyle={backgroundColor:'#fff',
    width:'60%',
    height:360,
    position:'absolute',
    top:120,
    left:'20%',
    borderRadius:6,
    paddingTop:160,
    textAlign:'center'
}

 class LoginPage extends Component{

     state={
         inputUser:{
             username:'',
             password:''
         },
         sqlUser:null,
         alertOpen:false
     }
    componentDidMount(){
        console.log('555555555555555');
        var locationState = this.props.location.state;
        this.setState({sqlUser:locationState});
        console.log('login location state:',locationState);
    }
    loginClick=()=>{
        const {inputUser,sqlUser}= this.state;
        if(!sqlUser || inputUser.username != sqlUser.username || inputUser.password != sqlUser.password){
           this.setState({alertOpen:true});
            return;
        }
        var path = {
            pathname:'/',
            state:inputUser
        }
        this.props.history.push(path);
        console.log('login6666',inputUser.username,inputUser.password);
    }

     setOpenState = (open)=>{
         this.setState({alertOpen:open});
     }

    render(){

        var {inputUser,alertOpen} = this.state;
        return(
            <div style={containerStyle}>
                <div style={boxDivStyle}>
                    <span style={{fontWeight:'bold'}}>____博主登录____</span>
                    <div style={{paddingTop:24}}>
                      <Input value={inputUser.username} placeholder='user'
                             onChange={e=>{
                                 inputUser.username = e.target.value;
                                 this.setState({inputUser});
                             }} />
                    </div>
                    <div style={{paddingTop:24}}>
                        <Input value={inputUser.password} type='password' placeholder='password'
                               onChange={e=>{
                                   inputUser.password = e.target.value;
                                   this.setState({inputUser});
                               }} />
                    </div>

                    <div style={{paddingTop:40}}>
                       <Button variant="contained" color="default" onClick={this.loginClick}>
                           登录
                       </Button>
                    </div>

                    <SimpleSnackbar open={alertOpen} text='用户名或密码错误！' updateOpenState={this.setOpenState} />
                </div>
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

export default withRouter(LoginPage)
