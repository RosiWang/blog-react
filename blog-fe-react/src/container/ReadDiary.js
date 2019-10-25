import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Api from '../service/ServiceApi'

class ReadDiary extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        const data = this.props.location.state ? this.props.location.state : null;
        this.setState({ data });
    }

    deleteDiary = (id) => {
        Api.deleteDiary(id).then(res => {
            if (res && res.code == '0') {
                alert('删除成功！');
                this.props.history.push('/');
            } else {
                alert('删除失败！');
                // message.error({content:'删除失败'});
            }
        })
    }

    backHandler = () => {
        this.props.history.push('/');
    }

    updateDiary = (data) => {
        const modifyData = { ...data };
        delete modifyData.direction;
        delete modifyData.icon;
        console.log(modifyData);
        this.props.history.push({ pathname: '/diary', state: modifyData });
    }

    render() {
        const { data } = this.state;
        if (data) {
            console.log(data.content);
        }

        return <div style={{ marginTop: 24 }}>
            {
                data ? <div>
                    <div style={{ textAlign: 'center' }} >
                        <span style={{ fontSize: 36, borderBottom: '1px solid rgb(220, 249, 233)', width: '20%' }}>
                            {data.title}
                        </span>
                    </div>
                    <div >
                        <div style={{
                            margin: '0 48px',
                            marginTop: 16
                        }} >
                            {
                                data.create_time ?
                                    <div style={{ fontSize: 12, color: ' #868181' }}>创建时间：{data.create_time}</div> : null
                            }
                        </div>

                        <div style={{ padding: 10, color: '#868181', textAlign: 'right', cursor: 'pointer', paddingRight: 48 }}>
                            <div style={{ display: 'inline-block', marginRight: 16 }} onClick={() => this.backHandler()}>
                                返回</div>
                            <div style={{ display: 'inline-block', marginRight: 16 }} onClick={() => this.updateDiary(data)}>
                                编辑</div>
                            <div style={{ display: 'inline-block' }} onClick={() => this.deleteDiary(data.id)}>
                                删除此篇</div>

                        </div>

                        <div style={{
                            margin: '0 48px',
                            fontSize: 16,
                            lineHeight: '36px',
                            marginTop: 24,
                            border: '1px solid rgb(221, 244, 234)',
                            borderRadius: 3,
                            padding: 16,
                            whiteSpace: 'pre-wrap'
                        }}>{data.content}</div>
                    </div>
                </div> : <div style={{ marginTop: 24, textAlign: 'center' }}>暂无数据</div>
            }
        </div>
    }
}

export default withRouter(ReadDiary)