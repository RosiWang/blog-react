import React, { Component } from 'react'


const divBorderDirection = {
    up: '3px 0 0 0',
    right: '0 3px 0 0',
    bottom: '0 0 3px 0',
    left: '0 0 0 3px',
    leftUp: '3px 0 0 3px'
};
export default class DiaryItem extends Component {

    state = {
    }

    componentDidMount() {
    }


    render() {
        const { data } = this.props;
        let lineDirection = divBorderDirection[data.direction] || 0;

        return (
            <div style={{
                padding: 16,
                width: '45%',
                border: '3px solid',
                borderColor: '#d9d7d6',
                borderWidth: lineDirection
            }}  >
                <img style={{ paddingTop: 16 }}
                    src={data.icon} />
                <div style={{ color: '#a09ea8' }}>
                    <h3>
                        {data.title}
                    </h3>
                    <div style={{ height: 44, overflow: 'hidden' }}>
                        {data.content}
                    </div>
                    <div style={{ border: 'rgb(183, 187, 195) 1px solid', width: 68, borderRadius: 2, margin: '0 auto', marginTop: 10,cursor: 'pointer' }}
                        onClick={e => { this.props.onClick(data) }}>
                        详阅...
                    </div>
                </div>

            </div>
        )
    }
}
