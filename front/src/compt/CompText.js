
import React,{Component} from 'react'
import topImg from '../image/topImg.jpg'


export default class CompText extends Component{

    constructor(props){
        super(props);
        this.state = {
           test:'comptext'
        };
    }
    testFunc=()=>{
        console.log(8888);
    }

    render(){
        this.testFunc();
        return(
            <div>
                {this.state.test}
                <img style={{width:'100%'}} src={topImg}/>
            </div>
        )
    }

}
