import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TextField, Input } from '@material-ui/core';
import globalStyle from '../style/global.css'
import BrightButton from './component/BrightButton'
import 'whatwg-fetch'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// const submit_url = 'http://localhost:3089/diary/add'
import Api from '../service/ServiceApi'

const contentStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    height: 800
}
//https://www.jianshu.com/p/c6f3a4e5d324 富文本编辑器
class DairyEditPage extends Component {

    state = {
        inputData: {
            title: '',
            content: ''
        },
        alertOpen: false,
        alertText: '',
        isEdit: false
    }

    componentDidMount() {
        const isEdit = this.props.location.state ? true : false;
        if (isEdit) {
            const inputData = this.props.location.state;
            this.setState({ inputData, isEdit });
        } else {
            this.setState({ isEdit });
        }
    }

    submitTextClick = () => {
        const { inputData, isEdit } = this.state;
        if (inputData.title == '' || inputData.content == '') {
            this.setState({ alertOpen: true, alertText: '标题或内容不能为空！' });
            return;
        }
       
        if (!isEdit) {
            Api.addDiary(inputData).then(res => {
                if (res && res.code == 0) {
                    this.setState({ alertOpen: true, alertText: '提交成功！' });
                    //this.props.history.push('/');
                } else {
                    this.setState({ alertOpen: true, alertText: '提交失败！' });
                }
                console.log('edd submit res:', res);
            })
        } else {
            Api.updateDiary(inputData).then(res => {
                if (res && res.code == 0) {
                    this.setState({ alertOpen: true, alertText: '修改成功！' });
                } else {
                    this.setState({ alertOpen: true, alertText: '提交失败！' });
                }
                console.log('edit submit res:', res);
            })
        }

    }

    setOpenState = (open) => {
        this.setState({ alertOpen: open });
    }

    backHandler = () => {
        this.props.history.push('/');
    }

    render() {
        var { inputData, alertOpen, alertText } = this.state;
        return (
            <div style={contentStyle}>
                <div style={{ float: 'right', paddingTop: 24 }}>
                    <BrightButton style={{ width: 50 }} label='返回' onClick={this.backHandler} />
                </div>

                <div style={{ paddingTop: 24 }}>
                    <input style={{ border: 'none', textAlign: 'center', borderBottom: '1px solid rgb(185, 178, 178)', fontSize: 16 }}
                        placeholder='日志标题'
                        value={inputData.title}
                        onChange={e => {
                            inputData.title = e.target.value;
                            this.setState({ inputData });
                        }} />
                </div>
                <div style={{ paddingTop: 24, width: '100%' }}>
                    <TextField
                        className={globalStyle["MuiInputBase-input-42"]}
                        id="outlined-multiline-static"
                        label="心情随笔"
                        multiline
                        rows="20"
                        value={inputData.content}
                        margin="normal"
                        variant="outlined"
                        onChange={e => {
                            inputData.content = e.target.value;
                            this.setState({ inputData });
                        }}
                    />
                </div>
                <div style={{ textAlign: 'center', width: 100, margin: '0 auto', paddingTop: 24 }}>
                    <BrightButton style={{ width: 100 }} label='提交' onClick={this.submitTextClick} />
                </div>
                <SimpleSnackbar open={alertOpen} text={alertText} updateOpenState={this.setOpenState} />
            </div>
        )
    }
}

class SimpleSnackbar extends Component {
    render() {
        const { open, updateOpenState } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.text}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={e => {
                                updateOpenState(false);
                            }}>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}


export default withRouter(DairyEditPage)
