import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {EditorState,convertToRaw,ContentState,convertFromHtml} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftTohtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

//https://www.jianshu.com/p/c6f3a4e5d324 富文本编辑器
class DairyEditPage extends Component{

    state={
        editorState:EditorState.createEmpty()
    }

    render(){
        return(
            <div style={{backgroundColor:'#fff5d1',width:'100%'}}>
                88888sdfsfsafddddddddd
                <Editor editorState={this.state.editorState}/>
            </div>
        )
    }
}

export default withRouter(DairyEditPage)
