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

        return <div style={{ marginTop: 24, textAlign: 'center' }}>
            {
                data ? <div>
                    <div style={{ fontSize: 36 }}>{data.title}</div>
                    <div style={{
                        fontSize: 16,
                        margin: '0 auto',
                        lineHeight: '36px',
                        width: '90%',
                        marginTop: 16
                    }}>{data.content}</div>
                </div> : <div style={{ marginTop: 24, textAlign: 'center' }}>暂无数据</div>
            }
        </div>
    }
}

export default withRouter(ReadDiary)