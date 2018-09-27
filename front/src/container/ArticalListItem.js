import React,{Component} from 'react'
import GeneralButton from "./GeneralButton";

export default class ArticalListItem extends Component{

    render(){
        return(
            <div style={{
                background:'#ffffff',
                marginBottom:24,
                borderRadius:8,
                paddingBottom:24
            }}  >
                <img style={{width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8}} src={this.props.img}/>
                <div style={{color:'#a09ea8',width:'96%',paddingLeft:'2%'}}>
                    <h3>
                        {this.props.title}
                    </h3>
                    <p>
                        {this.props.desc}
                    </p>
                </div>
                <GeneralButton style={{ border: '3px solid',borderColor:'#eae8f2'}} label='Read More'/>
            </div>
        )
    }
}
