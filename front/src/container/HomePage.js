import React,{Component} from 'react'
import TopNavigation from './part/TopNavigation'
import DisplayContainer from './part/DisplayItemContainer'
import InfoOverviewContainer from './part/InfoOverviewContainer'
import GeneralButton from "./component/GeneralButton";
import 'whatwg-fetch'
import { withRouter} from 'react-router-dom'
// import LoginPage from './container/LoginPage'

// const url='http://arashivision-oa.ce51fc365833e429ab4b48fffd0f4d22b.cn-shenzhen.alicontainer.com/visitor/getAllMembers';
const url = 'http://localhost:3089/';

 class HomePage extends Component{

     state={
         isLogin:false,
         userName:''
     }

    componentDidMount(){
        console.log('component did mount');
        fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept':'application/json,text/plain,*/*'
            }
        }).then(response => response.json()).then(data =>{
            console.log("get success:",data);
        });
        var locationState = this.props.location.state;
        if(locationState){
            var {name,password} = locationState;
            this.setState({isLogin:true,userName:name})
            console.log('location:',name,password);
        }

    }

     gotoLoginClick =() =>{
         this.props.history.push('/login');
         // this.setState({isLogin:true});
         console.log('history:',this.props.history);

     }

     render() {
        // const {isLogin} = this.state;
        // console.log('login666666:',this.state.isLogin);
        return (
            <div style={{background:'#f0f3f2'}} >
                <TopNavigation isLogin={this.state.isLogin} userName={this.state.userName}
                               gotoLoginClick={this.gotoLoginClick}/>
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

export default withRouter(HomePage);
