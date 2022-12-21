import { Component } from "react";

const style = {
    title: {
        marginBottom: '30px',
        marginTop: '30px'
    }
}

export default class Title extends Component {
    render() {
        return(
            <h1 style={style.title}>Shop Tienda</h1>
        )
    }
}