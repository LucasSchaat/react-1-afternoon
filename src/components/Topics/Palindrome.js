import React, {Component} from 'react';
export default class Palindrome extends Component {
    
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }
    
    handleChange(value) {
        this.setState ({ userInput: value });
    }

    isPalindrome(userInput) {
        let forward = userInput;
        let backward = userInput;
        backward = backward.split('');
        backward = backward.reverse();
        backward = backward.join('');

        if(forward === backward){
            this.setState({
                palindrome: 'true',
                userInput: ''
            })
        } else {
            this.setState({
                palindrome: 'false',
                userInput: ''
            })
        }
    }
    
    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}