import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ReadDiary extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        console.log(this.props.location.state);
        const data = this.props.location.state ? this.props.location.state : null;
        this.setState({ data });
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
                    {
                        data.create_time ?
                            <div style={{ marginLeft: 24, fontSize: 12, color: ' #868181' }}>创建时间：{data.create_time}</div> : null
                    }
                    <div> <div style={{
                        fontSize: 16,
                        margin: '0 auto',
                        lineHeight: '36px',
                        width: '90%',
                        marginTop: 24,
                        border: '1px solid rgb(221, 244, 234)',
                        borderRadius: 3,
                        padding: 16,
                        whiteSpace: 'pre-wrap'
                    }}>{data.content}</div></div>
                </div> : <div style={{ marginTop: 24, textAlign: 'center' }}>暂无数据</div>
            }
        </div>
    }
}

export default withRouter(ReadDiary)