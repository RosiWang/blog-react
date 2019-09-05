import React, { Component } from 'react'
import GeneralButton from "../component/GeneralButton";

export default class ArticalListItem extends Component {

    render() {
        const { data,onClick } = this.props;
        return (
            <div style={{
                background: '#ffffff',
                marginBottom: 24,
                borderRadius: 8,
                paddingBottom: 24
            }}  >
                <img style={{ width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8, height: 430 }} src={data.img} />
                <div style={{ color: '#a09ea8', width: '96%', paddingLeft: '2%' }}>
                    <h3>
                        {data.title}
                    </h3>
                    <p>
                        {data.content}
                    </p>
                </div>
                <GeneralButton style={{ border: '3px solid', borderColor: '#eae8f2' }}
                    label='详阅...'
                    onClick={() => onClick(data.index)} />
            </div>
        )
    }
}
