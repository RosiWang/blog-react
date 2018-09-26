import React,{Component} from 'react'

const btnStyle = {
    borderRadius:8,
    backgroundColor:'rgba(255, 255, 255, 0)',
    textAlign:'center',width:100,
    borderColor:'#fff',
    borderStyle:'double',
    cursor: 'pointer',
}

export default class TransparentButton extends Component{

    componentDidMount(){
        // console.log('999999999999999');
    }

    render(){
        console.log(this.props.onClick);
        return(
            <div  style={btnStyle} onClick={this.props.onClick}>
                <span style={{lineHeight:'30px',color:'#f0f3f2'}}>
                   {this.props.label}
               </span>
            </div>
        )
    }
}
