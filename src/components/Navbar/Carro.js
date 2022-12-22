import { Component } from "react";
import BubbleAlert from "./BubbleAlert";


const style = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '8px 10px 5px 8px',
        borderRadius: '15px',
        fontSize: '30px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 12,
    }
}
export default class Carro extends Component {
    render(){
        return(
            <div>
                <span style={style.bubble}>
                    <BubbleAlert
                        value={15}
                    />
                </span>
                <button style={style.carro}>
                    <i className='bx bxs-cart-download' ></i>
                </button>
            </div>
        )
    }
}