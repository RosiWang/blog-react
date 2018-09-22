
import React,{Component} from 'react'
import topImg from '../image/topImg.jpg'
import GeneralButton from './GeneralButton'
import boxImg from '../image/pic01.jpg'

const topImgStyle = {
    width:'100%',
    height:600,
    backgroundAttachment:'scroll',
    backgroundImage:`url(${topImg})`,
    backgroundPosition:'auto',
    backgroundRepeat:'no-repeat',
    backgroundColor:'#666'
};

const topText = {
    paddingTop:180,
    textAlign:'center',
    color:'#fff'
};



const boxImgStyle = {
    width:'90%',
    background:'#fff',
    margin:'0 auto',
    left:'5%',
    borderRadius:6,
    position:'absolute',
    top:450
}

export default class TopNavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            test:'comptext'
        };
    }

    loginHandler = ()=>{
        console.log('login click');
    }

    render(){
        return(
            <div >
                <div style={topImgStyle}>
                    <div style={topText}>
                        <h2>RosiWorld</h2>
                        <p>Welcome to my world，It's great that you are here..</p>
                    </div>
                    <div style={{textAlign:'center',paddingTop:16}}>
                        <GeneralButton label='Login' onClick={this.loginHandler}/>
                        <span style={{paddingLeft:16}}>
                           <GeneralButton label='Learn More' style={{ border: '3px solid',borderColor:'#d9d7e1'}}
                                     onClick={this.loginHandler}/>
                    </span>
                    </div>
                </div>
                <div style={boxImgStyle}>
                    <div style={{textAlign:'center',
                        paddingTop:32,
                        width:'80%',
                        paddingLeft:'10%'}}>
                        <h2 style={{color:'#888690',paddingBottom:16}}>
                            Introducing the ultimate mobile app for doing stuff with your phone
                        </h2>
                        <hr style={{height:1}} color='#d9d7d6'/>
                        <p style={{color:'#a09ea8',paddingTop:24,paddingBottom:24}}>
                            Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare adipiscing nunc adipiscing. Condimentum turpis massa.
                        </p>
                    </div>
                    <img src={boxImg} style={{width:'100%',height:230,borderRadius:6}} />
                </div>
            </div>
        )
    }

}
