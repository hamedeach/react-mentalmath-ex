import React, { Component } from "react";



class MathQuestion extends Component {
    constructor(props) {
        super(props)
        const eqValuesArr = this.makeNewQuestion();
        this.state = {

            value1: eqValuesArr[0],
            value2: eqValuesArr[1],
            value3: eqValuesArr[2],
            proposedAnswer: eqValuesArr[3],
            score:0,
            questions:0

        }
    }

    updateState = (newEqu) => {

        this.setState((currentstate) =>
        (
            {

                value1: newEqu[0],
                value2: newEqu[1],
                value3: newEqu[2],
                proposedAnswer: newEqu[3],
                score:newEqu[4],
                questions:(currentstate.questions+1)
            })


        );



    }


    solveEquation = event => {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const correctAnswer = value1 + value2 + value3;
        let score = this.state.score;
        (correctAnswer == proposedAnswer) ? score++  : score += 0;
     
        const eqValuesArr = this.makeNewQuestion();
        eqValuesArr.push(score)
        this.updateState(eqValuesArr);



    }



    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3, proposedAnswer];
    };

    render() {
        return (
            <div>
                <p className="text">
                    {
                        `${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}
                </p>
                <button name="true" onClick={this.solveEquation}>True</button>
                <button name="false" onClick={this.solveEquation}>False</button>
                <p className="text">
                    Your Score: {this.state.score}/{this.state.questions}

                </p>

            </div>

        );
    }



}
export default MathQuestion;