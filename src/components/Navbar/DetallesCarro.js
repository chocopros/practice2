import { Component } from "react";

const style = {
    detallesCarro: {
        backgroundColor: "#fff",
        color: "black",
        position: "fixed",
        marginTop: 50,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: '7px',
        width: "320px",
        right: 10,
        padding: "5px 10px"

    },
    ul:{
        margin:0,
        padding: 0
    },
    element: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: "5px",
        listStyleType: "none",
        fontSize: "12px",
        margin: "10px 15px",
        borderBottom: "solid 1px rgb(0,0,0,0.2)"
    }
}

export default class Detallescarro extends Component {
    render(){
        const { carro } = this.props
        return(
            <div style={style.detallesCarro}>
                <ul>
                    <h2>Detalle de Carrito:</h2>
                    {
                        carro.map( x => 
                            <li style={style.element} key={x.name}>
                                <img alt={x.name} src={x.img} width="50px" height="32px"></img>
                                {`${x.name}(${x.cantidad})`}
                                <strong>{`Price: $${x.price}`}</strong>
                                <strong>{`Total: $${x.price * x.cantidad}`}</strong>
                            </li>
                        )
                    }
                    <h3>Total Productos: $9999</h3>
                </ul>
            </div>
            
        )
    }
}