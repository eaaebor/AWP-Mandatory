import React, {Component} from 'react';
import PostAnswer from "./PostAnswer";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
        }
    }

    submit(answer){
        this.setState({
            answer: answer
        }, () => {
            this.props.submitAnswer(this.state.answer, this.state.id)
        });
    }
    
    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id);
        
        const mapFunction = (comment) => <div class="comment">{comment}</div>
        let comments = question.comments.map(mapFunction);
        
        return (
            <>
                <h1>{question.title}</h1>
                <p>{question.question}</p>
                {comments}
                <PostAnswer submit={(answer, id) => this.submit(answer, id)} onClick={_ => this.clicked()}></PostAnswer>
            </>
        );
    }
}

export default Question;

