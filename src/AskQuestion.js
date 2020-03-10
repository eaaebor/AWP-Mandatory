import React, {Component} from 'react';

class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            comments: []
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit() {
        this.props.submit(this.state.title, this.state.desc, this.state.comments);
    }

    render() {
        return (
            <>
                <input placeholder="Write a title here" name="title" onChange={event => this.onChange(event)} type="text"/>
                <input placeholder="Write your question here" name="desc" onChange={event => this.onChange(event)} type="text"/>
                <button onClick={_ => this.onSubmit()}>Ask Question</button>
            </>
        )
    }
}

export default AskQuestion;
