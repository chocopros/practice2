import { Component } from "react";
import Button from "./Button";


const style = {
    bodyCard: {
        width: "280px",
        border: "solid 2px rgb(0,0,0, 0.2)",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: '0 5px 5px rgb(0,0,0,0.3)'
    },
    body: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    img: {
        width: "100%"
    },
    button:{
        backgroundColor: 'rgb(0,0,0)',
        color: '#fff',
        borderStyle: 'none',
        padding: '7px 14px',
        borderRadius: '15px',
        fontSize: '10px'
    }
}

export default class Producto extends Component {
    render(){
        const { producto, agregarAlCarro} = this.props
        return(
            <div className="card" style={style.bodyCard}>
                <h2>{producto.name}</h2>
                <img style={style.img} src={producto.img} alt={producto.name}></img>

                <div style={style.body}>
                    <p>{`Price: $${producto.price}`}</p>
                    <Button
                        style={style.button}
                        onClick={() => agregarAlCarro(producto)}                   
                    >Agregar al carro</Button>
                </div>

            </div>
        )
    }
}