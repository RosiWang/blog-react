import React,{Component} from 'react'

export default class DisplayItem extends Component{

    render(){
        return(
            <div style={{padding:16,width:340}}>
                <img style={{paddingTop:16}}
                     src={this.props.icon}/>
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    {this.props.desc}
                </p>
            </div>
        )
    }
}
