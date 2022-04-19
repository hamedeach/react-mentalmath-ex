import React,{Component} from "react";

class MathResult extends Component{
    constructor(props){
        super(props)
        this.state={
            score:0,
            questions:0,
        }


    }

    updateState = (newscore)=>{
        this.setState((currentstate)=>({
            score:(currentstate.score+newscore),
            questions:(currentstate.questions++)
        }));
    }


    //result format 
    //Your Score: {numCorrect}/{numQuestions}
    render() {
        return (
            <p className="text">
               Your Score: {this.state.score}/{this.state.questions}

            </p>
        );
    }
}
export default MathResult;