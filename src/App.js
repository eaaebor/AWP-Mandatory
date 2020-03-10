import React, {Component} from 'react';
import { Router, Link } from "@reach/router";
import AskQuestion from './AskQuestion';
import Question from './Question';
import Questions from './Questions';
import './style.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                {id: 0, title: "What is React.js and where do i download it?", question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ornare purus, id blandit dolor. Sed iaculis odio vitae scelerisque vulputate. Praesent finibus nulla et neque efficitur cursus. Nunc vitae placerat lectus. Proin sit amet ligula est. Aenean sodales est velit, quis accumsan dolor suscipit vitae. Proin molestie massa arcu, vehicula sodales nulla pharetra vel. Phasellus sollicitudin congue finibus. Suspendisse luctus varius risus vitae molestie. Vivamus sed neque porta, ultrices massa eu, rhoncus lectus. Praesent vestibulum egestas neque sed congue. Donec dignissim vitae orci tristique rutrum. Donec at tellus leo. Praesent id lobortis eros. Donec id massa urna. Praesent tempor est sit amet massa pharetra lacinia.", comments: []},
                {id: 1, title: "How to cook a pizza in 12 minutes with React.js?", question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ornare purus, id blandit dolor. Sed iaculis odio vitae scelerisque vulputate. Praesent finibus nulla et neque efficitur cursus. Nunc vitae placerat lectus. Proin sit amet ligula est. Aenean sodales est velit, quis accumsan dolor suscipit vitae. Proin molestie massa arcu, vehicula sodales nulla pharetra vel. Phasellus sollicitudin congue finibus. Suspendisse luctus varius risus vitae molestie. Vivamus sed neque porta, ultrices massa eu, rhoncus lectus. Praesent vestibulum egestas neque sed congue. Donec dignissim vitae orci tristique rutrum. Donec at tellus leo. Praesent id lobortis eros. Donec id massa urna. Praesent tempor est sit amet massa pharetra lacinia.", comments: []},
                {id: 2, title: "Can i use React.js to impress girls?", question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ornare purus, id blandit dolor. Sed iaculis odio vitae scelerisque vulputate. Praesent finibus nulla et neque efficitur cursus. Nunc vitae placerat lectus. Proin sit amet ligula est. Aenean sodales est velit, quis accumsan dolor suscipit vitae. Proin molestie massa arcu, vehicula sodales nulla pharetra vel. Phasellus sollicitudin congue finibus. Suspendisse luctus varius risus vitae molestie. Vivamus sed neque porta, ultrices massa eu, rhoncus lectus. Praesent vestibulum egestas neque sed congue. Donec dignissim vitae orci tristique rutrum. Donec at tellus leo. Praesent id lobortis eros. Donec id massa urna. Praesent tempor est sit amet massa pharetra lacinia.", comments: []},
                {id: 3, title: "How do you hack a bank and get rich with React.js?", question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ornare purus, id blandit dolor. Sed iaculis odio vitae scelerisque vulputate. Praesent finibus nulla et neque efficitur cursus. Nunc vitae placerat lectus. Proin sit amet ligula est. Aenean sodales est velit, quis accumsan dolor suscipit vitae. Proin molestie massa arcu, vehicula sodales nulla pharetra vel. Phasellus sollicitudin congue finibus. Suspendisse luctus varius risus vitae molestie. Vivamus sed neque porta, ultrices massa eu, rhoncus lectus. Praesent vestibulum egestas neque sed congue. Donec dignissim vitae orci tristique rutrum. Donec at tellus leo. Praesent id lobortis eros. Donec id massa urna. Praesent tempor est sit amet massa pharetra lacinia.", comments: []},
            ]
        }
    }

    submit(title, desc, comments) {
        let last = this.state.questions[this.state.questions.length -1]
        const newQuestion = {
            id: last.id + 1,
            title: title,
            question: desc,
            comments: comments
        };
        this.setState({
            questions: [...this.state.questions, newQuestion]
        })
    }

    getQuestion(id) {
        const findFunction = question => question.id === parseInt(id);
        return this.state.questions.find(findFunction);
    }

    submitAnswer(answer, id){
        console.log(answer, id)
        let state = this.state.questions
        let element = state.find(x=>x.id === parseInt(id))
        element.comments.unshift(answer);
        console.log(element)
    }

    render() {
        return (
            <>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Questions</li></Link>
                    <Link to="/ask"><li>Ask a question</li></Link>
                </ul>
            </nav>
                <Router>
                  <AskQuestion path="/ask" submit={(title, desc, comments) => this.submit(title, desc, comments)}></AskQuestion>
                  <Question path="/question/:id" getQuestion={(id) => this.getQuestion(id)} submitAnswer={(answer, id) => this.submitAnswer(answer, id)}></Question>
                  <Questions path="/" data={this.state.questions}></Questions>
                </Router>

            </>
        );
    }
}

export default App;
