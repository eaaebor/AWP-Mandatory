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
            questions: []
        }
    }

    componentDidMount(){
        this.getQuestions()
    }

    async getQuestions(){
        let response = await fetch("http://localhost:8080/api/questions")
        let data = await response.json()
        this.setState({
            questions: data
        })
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
        const findFunction = questions => questions._id === id; 
        return this.state.questions.find(findFunction)
    }

    submitAnswer(answer, id){
        let state = this.state.questions
        let element = state.find(x=>x.id === id)
        element.comments.unshift(answer);
    }

    render() {
        return (
            <>
            <nav>
                <ul>
                    <Link to="/"><li key="home">Home</li></Link>
                    <Link to="/"><li key ="questions">Questions</li></Link>
                    <Link to="/ask"><li key="ask">Ask a question</li></Link>
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
