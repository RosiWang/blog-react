import React,{Component} from 'react'

export default class TestPage extends Component{

    // constructor(props){
    //     super(props);
    //     this.testClick = this.testClick.bind(this);
    // }

    state = {
        testNum:0,
        list:[1,2,3,4],
        current:1
    }

    testClick = ()=>{
        let {testNum} = this.state;
        testNum ++;
        this.setState({testNum});
        console.log('click',testNum);
    }

    listClick=(value)=>{
        console.log(value);
    }

    render(){
        let {testNum,list,current} = this.state;
        return(
            <div>
                <p>{testNum}</p>
                <button onClick={this.testClick}>测试</button>
                {
                    list.map((item,k)=>{
                      // return(<li key={k} onClick={this.listClick(item)}> {item} </li>)
                        return(<li key={k} onClick={e=>{this.listClick(item)}}> {item} </li>)
                    })

                }
            </div>
        )
    }
}