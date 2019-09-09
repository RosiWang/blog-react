import React, { Component } from 'react'
import TopNavigation from './part/TopNavigation'
import DiarySection from './part/DiarySection'
import InfoOverviewContainer from './part/InfoOverviewContainer'
import GeneralButton from "./component/GeneralButton";
import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

class HomePage extends Component {

    state = {
        isLogin: false,
        username: null,
        diaryListData: null
    }

    componentDidMount() {
        const username = Cookies.get('username');
        if (username) {
            this.setState({ isLogin: true, username });
        }
    }

    gotoLoginClick = () => {
        this.props.history.push('/login');
    }

    exitLoginHandler = () => {
        this.props.location.state = null;
        Cookies.remove('username');
        this.setState({ isLogin: false, username: null });
    }

    addDairyClick = () => {
        this.props.history.push('/diary');
    }

    gotoDirayList = () => {
        console.log('more diary');
        this.props.history.push({ pathname: '/diarylist', state: { test: 'rosi' } });
    }

    render() {
        const { isLogin, username } = this.state;
        return (
            <div style={{ background: '#f0f3f2', position: 'absolute', width: '100%' }}>
                {/* 顶部简略图文展示 */}
                <TopNavigation isLogin={isLogin} userName={username}
                    exitLoginHandler={this.exitLoginHandler}
                    gotoLoginClick={this.gotoLoginClick} />
                <div >

                    {/* 日志+文章 */}
                    <div style={{ textAlign: 'center', position: 'relative', top: -150 }}>
                        {
                            isLogin ? <div style={{ paddingTop: 16 }}>
                                <GeneralButton label='添加日志' onClick={this.addDairyClick} />
                            </div> : null
                        }
                        <DiarySection parentProps={this.props} gotoDirayList={this.gotoDirayList} />
                        <div style={{ marginTop: 24, marginBottom: 24 }}>
                            <InfoOverviewContainer />
                        </div>
                        <div style={{
                            background: '#e89980',
                            color: '#fff',
                            paddingTop: 24,
                            paddingBottom: 48,
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
            </div>
        );
    }
}

export default withRouter(HomePage);
