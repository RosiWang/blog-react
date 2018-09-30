import React,{Component} from 'react'
import TopNavigation from './part/TopNavigation'
import DiarySection from './part/DiarySection'
import InfoOverviewContainer from './part/InfoOverviewContainer'
import GeneralButton from "./component/GeneralButton";
import 'whatwg-fetch'
import { withRouter} from 'react-router-dom'
// import LoginPage from './container/LoginPage'

// const url='http://arashivision-oa.ce51fc365833e429ab4b48fffd0f4d22b.cn-shenzhen.alicontainer.com/visitor/getAllMembers';
const userUrl = 'http://localhost:3089/user';

class HomePage extends Component{

    state={
        isLogin:false,
        user:null,
        loginName:null,
        diaryListData:null
    }

    componentDidMount(){
        this.loadUser();
        var locationState = this.props.location.state;
        if(locationState){
            this.setState({isLogin:true,loginName:locationState.username});
            // console.log('location:',username,password);
        }
        console.log('component did mount---locationState',locationState);
    }

    loadUser = ()=>{
        fetch(userUrl).then(response => response.json()).then(data =>{
            console.log("get success:",data,data.length);
            if(data && data.length>0){
                var user = data[0];
                this.setState({user});
            }
        });
    }

    gotoLoginClick =() =>{
        const {user}= this.state;
        var path = {
            pathname:'/login',
            state:user
        }
        this.props.history.push(path);
        // this.setState({isLogin:true});
        console.log('push path:',path,user);
    }
    exitLoginHandler =()=>{
        console.log('退出登录');
        this.props.location.state = null;
        this.setState({isLogin:false,loginName:null});
    }
    addDairyClick = ()=>{
        console.log('添加日志');
        this.props.history.push('/dairy');
    }

    render() {
        const {isLogin} = this.state;
        return (
            <div style={{background:'#f0f3f2'}} >
                <TopNavigation isLogin={isLogin} userName={this.state.loginName} exitLoginHandler={this.exitLoginHandler}
                               gotoLoginClick={this.gotoLoginClick}/>
                <div style={{textAlign:'center',paddingTop:380}}>
                    {
                        isLogin ? <div style={{paddingBottom:24}}>
                            <GeneralButton label='添加日志' onClick={this.addDairyClick}/>
                        </div> : null
                    }
                    <DiarySection />
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

export default withRouter(HomePage);
