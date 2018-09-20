import React,{Component} from 'react'
import config from './config.json'
import styles from './style/Greeter.css';//导入
import CompText from './compt/CompText'
import { Editor } from'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Greeter extends Component{

    render() {
        console.log('greeter start..');
        // const { editorState } = this.state
        return (
            <div >
                <div className={styles.root}>
                    {config.greetText}
                </div>
                <CompText />
                {/*<Editor />*/}
            </div>
        );
    }
}

