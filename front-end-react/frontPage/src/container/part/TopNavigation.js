
import React,{Component} from 'react'
import topImg from '../../image/topImg.jpg'
import GeneralButton from '../component/GeneralButton'
import boxImg from '../../image/pic01.jpg'
import TransparentButton from '../component/TransparentButton'

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

export  default class TopNavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            test:'comptext'
        };
    }

    topLeftBtnClick = ()=>{
        console.log('left click');
    }

    topRightBtnClick = ()=>{
        console.log('right click');
    }

    getHoursStr = () => {
        var now = new Date();
        var hours = now.getHours();
        if(hours > 12){
            return '下午';
        }
        else{
            return '上午';
        }
    }


    render(){
        const {isLogin,userName} = this.props;
        const hoursStr = this.getHoursStr();
        const loginStr = `${hoursStr}好,${userName}`;
        console.log('top isLogin:',isLogin,userName);
        return(
            <div >
                <div style={topImgStyle}>
                    <div style={{float:'right',paddingTop:30,paddingRight:48}}>
                        {
                            isLogin ? <div>
                                <div style={{color:'#EAE8F2',fontWeight:'bold'}}>
                                    {loginStr}
                                </div>
                                <div style={{color:'#EAE8F2',fontSize:14,paddingLeft:25,cursor:'pointer'}}
                                     onClick={this.props.exitLoginHandler}>
                                    <u>退出</u>
                                </div>
                            </div> : <TransparentButton label='Login' onClick={this.props.gotoLoginClick} />
                        }
                    </div>
                    <div style={topText}>
                        <h2>RosiWorld</h2>
                        <p>Welcome to my world，It's great that you are here..</p>
                    </div>
                    <div style={{textAlign:'center',paddingTop:16}}>
                        <GeneralButton label='关于我' onClick={this.topLeftBtnClick}/>
                        <span style={{paddingLeft:16}}>
                           <GeneralButton label='近期日志' style={{ border: '3px solid',borderColor:'#eae8f2'}}
                                          onClick={this.topRightBtnClick}/>
                    </span>
                    </div>
                </div>
                <div style={boxImgStyle}>
                    <div style={{textAlign:'center',
                        paddingTop:32,
                        width:'80%',
                        paddingLeft:'10%'}}>
                        <h2 style={{color:'#888690',paddingBottom:16}}>
                            第一个正式开发的博客
                        </h2>
                        <hr style={{height:1}} color='#d9d7d6'/>
                        <p style={{color:'#a09ea8',paddingTop:24,paddingBottom:24}}>
                            很早就想搭建自己的博客，买了域名服务器，找了很多模板，看着都挺复杂的T_T
                            现在这个是我最喜欢的模板布局，简单大气，看着就很舒服，这次要不是工头说，我应该还是不会尝试去写，所以，还得谢谢他^_^
                            后面会加上数据库的相关功能，慢慢来吧，貌似也没有那么复杂，哈哈
                        </p>
                    </div>
                    <img src={boxImg} style={{width:'100%',height:230,borderRadius:6}} />
                </div>
            </div>
        )
    }
}

