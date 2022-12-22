import { Component } from "react";
import Producto from "./Producto";

const style = {
    containerProductos:{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px"
    }
}

export default class Productos extends Component {
    render(){
        

        const { productos, agregarAlCarro } = this.props
        //console.log(productos)

        return(

            <div className="container-productos" style={style.containerProductos}>
                {
                    productos.map(producto => 
                        <Producto
                            key={producto.name}
                            agregarAlCarro={agregarAlCarro}
                            producto={producto}
                        />
                    )
                }
            </div>
            
        )
    }
}