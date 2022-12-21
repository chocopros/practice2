import { Component } from "react";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Productos from "./components/Productos";
import Title from "./components/Title";


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
        <Navbar />
        <Layout>
          <Title/>
          <Productos 
            agregarAlCarro={()=> console.log("agregando")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App