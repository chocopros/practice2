import { Component } from "react";
import Productos from "./components/Productos";


class App extends Component {

  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: "/img_productos/tomate.jpg"},
      {name: 'Arbejas', price: 2500, img: "/img_productos/arbejas.jpg"},
      {name: 'Lechuga', price: 1500, img: "/img_productos/lechuga.jpg"}
    ]
  }
  render(){
    return(
      <div>
        <Productos 
          agregarAlCarro={()=> console.log("agregando")}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App