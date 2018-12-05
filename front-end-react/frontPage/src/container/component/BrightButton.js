import React,{Component} from 'react'

const btnStyle = {
    borderRadius:8,
    backgroundColor:'rgba(255, 255, 255, 0)',
    textAlign:'center',
    borderColor:'#6f6f6f',
    borderStyle:'double',
    cursor: 'pointer',
}

export default class BrightButton extends Component{

    componentDidMount(){
        // console.log('999999999999999');
    }

    render(){
        // console.log(this.props.onClick);
        const btnStyleS = Object.assign({}, btnStyle, this.props.style);
        return(
            <div style={btnStyleS} onClick={this.props.onClick}>
                <span style={{lineHeight:'30px',color:'#7d7f7b'}}>
                   {this.props.label}
               </span>
            </div>
        )
    }
}
