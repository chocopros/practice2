import { Component } from "react";

const style = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '8px 10px 5px 8px',
        borderRadius: '15px',
        fontSize: '30px',
        cursor: 'pointer'
    }
}
export default class Carro extends Component {
    render(){
        return(
            <div>
                <span>
                    
                </span>
                <button style={style.carro}>
                    <i className='bx bxs-cart-download' ></i>
                </button>
            </div>
        )
    }
}