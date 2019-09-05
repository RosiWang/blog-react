import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Api from '../service/ServiceApi'

class DiaryList extends Component {

    state = {
        list: null
    }

    componentDidMount() {
        console.log('DiaryList...',this.props.location);
        Api.diary().then(res => {
            if (res && res.code == 0) {
                console.log(res);
                this.setState({ list: res.articleData });
            }
        })
    }

    openDiaryHandler = (data)=>{
        console.log(data);
    }


    render() {
        const { list } = this.state;
        return <div>
            <div style={{ fontSize: 36, textAlign: 'center', marginTop: 24, color: '#89b6bb' }}>____ 日志列表 ____</div>
            {
                list && list.length > 0 ? <div >
                    {
                        list.map((v, k) => {
                            return <div key={k} style={{ background: 'rgb(230, 239, 240)' ,marginTop:24,borderRadius:10}}>
                                <div style={{ fontSize: 16,textAlign:'center' }}>{v.title}</div>
                                <div style={{ height: 30, overflow: 'hidden' ,textAlign:'center',padding:'16 auto'}}>
                                    {v.content}
                                </div>
                                <div style={{textAlign:'right',padding:10,cursor:'pointer'}} onClick={(e,v,k)=>{console.log(v,k)}}>
                                    更多...
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