import React, {Component} from 'react';
import { Link } from "@reach/router";

class Questions extends Component {
    
    render() {
        let questions = this.props.data;
        const list = questions.map((d) => <Link to={"/question/"+d.id}><li key={d.title}>{d.title}</li></Link>);

        

        return (
            <>
                <h3>All questions</h3>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}

export default Questions;

