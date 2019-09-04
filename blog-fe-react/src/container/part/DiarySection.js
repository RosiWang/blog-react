import React, { Component } from 'react'
import DiaryItem from './DiaryItem'
import icon1 from '../../image/itemIcon/01.png'
import icon2 from '../../image/itemIcon/02.png'
import icon3 from '../../image/itemIcon/03.png'
import icon4 from '../../image/itemIcon/04.png'
import 'whatwg-fetch'

const containerStyle = {
    background: '#fff',
    margin: '0 auto',
    width: '92%',
    left: '5.1%',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}
import Api from '../../service/ServiceApi'

export default class DiarySection extends Component {

    state = {
        itemData: []
    }

    componentDidMount() {
        this.getDiaryList();
    }

    getDiaryList = () => {

        Api.diary().then(res => {
            if (res && res.code == 0) {
                const data = res.articleData;
                if (data.length > 0) {
                    let direction;
                    if(data.length % 4 == 0){
                        direction = ['right', '', 'up', 'leftUp'];
                    }else{
                        direction = ['', 'left', 'up', 'leftUp'];
                    }
                    const iconData = [icon1, icon2, icon3, icon4];
                    data.map((v, k) => {
                        v.icon = iconData[k % 4];
                        v.direction = direction[k % 4];
                    });
                    this.setState({ itemData: data });
                }
            }
            console.log('diary:',res);
        })

    }

    render() {
        const { itemData } = this.state;
        return (<div style={containerStyle}>
            {
                itemData.map((v, k) => {
                    return  <DiaryItem key={k}
                    icon={v.icon} title={v.title}
                    container={v.container} direction={v.direction} />
                })
            }
        </div>)
    }
}
