import React, { Component } from 'react'
import TopNavigation from './part/TopNavigation'
import DiarySection from './part/DiarySection'
import InfoOverviewContainer from './part/InfoOverviewContainer'
import GeneralButton from "./component/GeneralButton";
import 'whatwg-fetch'
import { withRouter } from 'react-router-dom'
// import LoginPage from './container/LoginPage'

const userUrl = 'http://localhost:7002/user';

class HomePage extends Component {

    state = {
        isLogin: false,
        user: null,
        loginName: null,
        diaryListData: null
    }

    componentDidMount() {
        fetch(userUrl).then(response => response.json()).then(res => {
            console.log('user:', res);
            if (res && res.code == 0) {
                this.setState({ user: res.data[0] });
            } else {
                console.log('用户信息获取失败！');
            }
        });
        var locationState = this.props.location.state;
        if (locationState) {
            this.setState({ isLogin: true, loginName: locationState.username });
            console.log('location:', locationState);
        }
        // console.log('component did mount---locationState',locationState);
    }

    gotoLoginClick = () => {
        const { user } = this.state;
        var path = {
            pathname: '/login',
            state: user
        }
        console.log('goto login:', path, user);
        this.props.history.push(path);
    }

    exitLoginHandler = () => {
        console.log('退出登录');
        this.props.location.state = null;
        this.setState({ isLogin: false, loginName: null });
    }

    addDairyClick = () => {
        console.log('添加日志 跳转');
        this.props.history.push('/dairy');
    }

    render() {
        const { isLogin, loginName } = this.state;
        return (
            <div style={{ background: '#f0f3f2' }} >
                <TopNavigation isLogin={isLogin} userName={loginName}
                    exitLoginHandler={this.exitLoginHandler}
                    gotoLoginClick={this.gotoLoginClick} />
                <div style={{ textAlign: 'center', paddingTop: 380 }}>
                    {
                        isLogin ? <div style={{ paddingBottom: 24 }}>
                            <GeneralButton label='添加日志' onClick={this.addDairyClick} />
                        </div> : null
                    }
                    <DiarySection />
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                        <InfoOverviewContainer />
                    </div>
                    <div style={{
                        background: '#e89980',
                        color: '#fff',
                        paddingTop: 24,
                        paddingBottom: 48,
                        marginBottom: 24
                    }}>
                        <div style={{ paddingTop: 16 }}>
                            <h2>这里会加上搜索</h2>
                            <p>Nothing, this is a placeholder</p>
                        </div>
                        <input style={{ width: 240, height: 40 }} placeholder="rosiwang@163.com" />
                        <span style={{ paddingLeft: 16 }}>
                            <GeneralButton style={{ border: '3px solid', borderColor: '#eae8f2' }} label='Search' />
                        </span>
                        <div style={{ paddingTop: 16, fontSize: 12 }}>
                            <a href='http://www.beian.miit.gov.cn' target='_blank'> 粤ICP备18067845号-1 </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HomePage);
