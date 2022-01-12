import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1627372042956-94867aa1d129?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDF4MXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="pict"/>
                <div className ="card-body">
                <h5 className ="card-title">Card title</h5>
                <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className ="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;