import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import Detallescarro from "./DetallesCarro";


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
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        
        return(
            <div>
                <span style={style.bubble}>

                    {
                        cantidad !== 0 
                        ?  <BubbleAlert
                                value={cantidad}
                            />
                        : null 
                    }
                   
                </span>
                <button onClick={mostrarCarro} style={style.carro}>
                    <i className='bx bxs-cart-download' ></i>
                </button>
                {
                    esCarroVisible ? <Detallescarro carro={carro}/> : null
                }
                
            </div>
        )
    }
}