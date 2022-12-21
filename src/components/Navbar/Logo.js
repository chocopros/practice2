import { Component } from "react";
const style = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',

    }
}

export default class Logo extends Component {
    render(){
        return(
            <div style={style.logo}>
                Shop 
            </div>
        )
    }
}