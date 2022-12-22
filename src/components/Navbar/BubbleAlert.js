import { Component } from "react";

const style = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        color: '#fff',
        fontSize: '0.85rem',
        padding: '5px 7px',
        borderRadius: '15px',
        cursor: 'pointer'
    }
}

export default class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) {
            return ''
        } else {
            return n > 9 ? '9+': n
        }
    }
    render(){
        const { value } = this.props
        return(
            <span style={style.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}