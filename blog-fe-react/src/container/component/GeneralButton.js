import React,{Component} from 'react'


const buttonStyle={
    width: 176,
    height: 44,
    border: '3px solid',
    borderColor:'#ffffff',
    lineHeight: '44px',
    backgroundColor: '#fff',
    display: 'inline-block',
    borderRadius:6,
    fontSize: 20,
    cursor: 'pointer',
    textAlign:'center'
}

export default class GeneralButton extends Component{

    render(){
       // console.log('label:',this.props.label);
        const btnStyle = Object.assign({}, buttonStyle, this.props.style);
        return(
            <div style={btnStyle} onClick={this.props.onClick}>
                <span style={{color:'#888690'}}>
                      {this.props.label}
                </span>
            </div>
        )
    }
}
