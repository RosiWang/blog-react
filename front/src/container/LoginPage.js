import React,{Component} from 'react'
import loginImg from '../image/loginImg.png'
import {Input,Button} from '@material-ui/core'
import {withRouter} from 'react-router-dom'


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

    componentDidMount(){
        console.log('555555555555555');
        console.log('666');
    }
    state={
        user:{
            name:'',
            password:''
        }
    }

    loginClick=()=>{
        const {user}= this.state;
        var path = {
            pathname:'/',
            state:user
        }

        this.props.history.push(path);
        console.log('login6666',user.name,user.password);
    }

    render(){
        const inputClass = {
            width:'80%'
        }
        var {user} = this.state;
        return(
            <div style={containerStyle}>
                <div style={boxDivStyle}>
                    <span style={{fontWeight:'bold'}}>____博主登录____</span>
                    <div style={{paddingTop:24}}>
                      <Input value={user.name} placeholder='user'
                             onChange={e=>{
                                 user.name = e.target.value;
                                 this.setState({user});
                             }} />
                    </div>
                    <div style={{paddingTop:24}}>
                        <Input value={user.password} placeholder='password'
                               onChange={e=>{
                                   user.password = e.target.value;
                                   this.setState({user});
                               }} />
                    </div>

                    <div style={{paddingTop:40}}>
                       <Button variant="contained" color="default" onClick={this.loginClick}>
                           登录
                       </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage)
