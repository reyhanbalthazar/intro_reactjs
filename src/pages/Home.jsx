import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Home Page</h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita aperiam fugit enim dolores est ab delectus? Animi dolorum soluta nihil quae nesciunt iusto est perferendis excepturi fugiat modi! Voluptatem!
                    </p>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}

export default HomePage;