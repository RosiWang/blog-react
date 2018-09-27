import React,{Component} from 'react'

export default class DisplayItem extends Component{

    render(){
        const divBorderDirection = {up:'3px 0 0 0',
            right:'0 3px 0 0',
            bottom:'0 0 3px 0',
            left:'0 0 0 3px'};
        const {direction} = this.props;
        let lineDirection = divBorderDirection[direction] || 0;
        // console.log('direction:',lineDirection,divBorderDirection[direction]);
        return(
            <div style={{
                padding:16,
                width:'45%',
                border:'3px solid',
                borderColor:'#d9d7d6',
                borderWidth:lineDirection
            }}>
                <img style={{paddingTop:16}}
                     src={this.props.icon}/>
                <div style={{color:'#a09ea8'}}>
                    <h3>
                        {this.props.title}
                    </h3>
                    <p>
                        {this.props.desc}
                    </p>
                </div>

            </div>
        )
    }
}
