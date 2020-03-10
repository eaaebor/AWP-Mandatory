import React, {Component} from 'react';

class PostAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit() {
        this.props.submit(this.state.answer, this.state.id);
    }

    render() {
        return (
            <>
                <h3>Comments</h3>
                <input autoComplete="off" name="answer" onChange={event => this.onChange(event)} type="text"/>
                <button onClick={_ => this.onSubmit()}>Send Answer</button>
            </>
        );
    }
}

export default PostAnswer;

