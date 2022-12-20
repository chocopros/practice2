import { Component } from "react";

const style = {
    bodyCard: {
        width: "220px",
        border: "solid 1px rgb(0,0,0)",
        borderRadius: "15px",
        padding: "20px"
    },
    body: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    img: {
        width: "100%"
    }
}

export default class Producto extends Component {
    render(){
        const { producto } = this.props
        return(
            <div className="card" style={style.bodyCard}>
                <h2>{producto.name}</h2>
                <img style={style.img} src={producto.img}></img>

                <div style={style.body}>
                    <p>{producto.price}</p>
                    <button>Agregar</button>
                </div>

            </div>
        )
    }
}