import React, { Component } from 'react'
import styled from 'react-emotion'
import TestContainer from '../components/testComponents/TestContainer'
import Question from '../components/testComponents/Question'
import TestStartButton from '../components/testComponents/TestStartButton';
import Timer from '../components/testComponents/Timer'


const TestPageWrapper = styled('div') ({
    backgroundColor: '#A9A9A9',
    width: '100%',
    height: '1000px',
})

class Test extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          version: 1,
          showQuestions: false,
          
        };
        this.handleClick = this.handleClick.bind(this);
      }

    componentDidUpdate() {
        console.log(this.state);
    }


    handleClick = (e) => {
        e.preventDefault();
        console.log('foo');
        
        this.setState({
            showQuestions: true
        });
        console.log(this.state.showQuestions);
    }

    displayQuestions = () => {
        if(this.state.showQuestions) {
            return(
                <Question/>
            )
        }
    }
    


    render() {



        return(
            <TestPageWrapper>
                <Timer display={this.state.showQuestions}/>
                <TestStartButton handleClick={this.handleClick}/>
                <button >click</button>
                <TestContainer handleClick={this.handleClick}  displayQuestions={this.displayQuestions}>
                
                </TestContainer>
            </TestPageWrapper>

        );
    }
}

export default Test;