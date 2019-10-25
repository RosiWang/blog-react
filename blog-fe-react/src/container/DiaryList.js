import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Api from '../service/ServiceApi'
import Cookies from 'js-cookie'
// import { message } from 'antd';

class DiaryList extends Component {

    state = {
        list: null,
        isLogin: false
    }

    componentDidMount() {
        console.log('DiaryList...', this.props.location);
        const isLogin = Cookies.get('username');
        this.setState({ isLogin })
        this.loadList();
    }

    loadList = () => {
        Api.diary().then(res => {
            if (res && res.code == 0) {
                this.setState({ list: res.articleData });
            }
        })
    }

    openDiaryHandler = (data) => {
        this.props.history.push({ pathname: 'readdiary', state: { ...data } });
    }

    deleteDiary = (id) => {
        Api.deleteDiary(id).then(res => {
            console.log(res.code == 0, res);
            if (res && res.code == '0') {
                this.loadList();
                alert('删除成功！');
            } else {
                alert('删除失败！');
            }
        })
    }

    updateDiary = (data) => {
        this.props.history.push({ pathname: '/diary', state: data });
    }


    render() {
        const { list, isLogin } = this.state;
        return <div>
            <div style={{
                fontSize: 36,
                textAlign: 'center',
                marginTop: 24,
                color: 'rgb(85, 95, 97)'
            }}>____ 日志列表 ____</div>
            {
                list && list.length > 0 ? <div style={{ width: '85%', margin: '0 auto' }} >
                    {
                        list.map((v, k) => {
                            return <div key={k} style={{
                                background: 'rgb(239, 241, 245)',
                                marginTop: 10,
                                borderRadius: 10
                            }}>
                                <div style={{
                                    paddingTop: 14,
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: 'rgb(62, 63, 64)'
                                }}>【 {v.title} 】</div>
                                <div style={{
                                    height: 40,
                                    color: 'rgb(74, 66, 66)',
                                    overflow: 'hidden',
                                    textAlign: 'center',
                                    padding: 16
                                }}>
                                    {v.content}
                                </div>

                                <div style={{ textAlign: 'right', marginTop: 10 }}>
                                    <div style={{ padding: 10, display: 'inline-block', cursor: 'pointer' }}
                                        onClick={() => { this.openDiaryHandler(v) }}>
                                        更多... </div>
                                    {
                                        isLogin ? <div style={{ display: 'inline-block' }}>
                                            <div style={{ padding: 10, display: 'inline-block', cursor: 'pointer', paddingRight: 23 }}
                                                onClick={() => this.updateDiary(v)}>
                                                修改</div>
                                            <div style={{ padding: 10, display: 'inline-block', cursor: 'pointer', paddingRight: 23 }}
                                                onClick={() => this.deleteDiary(v.id)}>
                                                删除</div>

                                        </div> : null
                                    }

                                </div>
                            </div>
                        })
                    }
                </div> : <div style={{ textAlign: 'center' }}>暂无数据</div>
            }
        </div>
    }

}



export default withRouter(DiaryList);