import { Component } from "react";

const style = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    container: {
        maxWidth: '1200px'
    }
}

export default class Layout extends Component {
    render(){
        return(
            <div className="content-center" style={style.layout}>
                 <div className="content" style={style.container}>
                    {this.props.children}
                 </div>
                 
            </div>
        )
    }
}