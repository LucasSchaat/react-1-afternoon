import React, {Component} from 'react';
export default class Sum extends Component {
    
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    handleFirstChange(value) {
        this.setState ({ number1: parseInt(value,10) });
    }
    
    handleSecondChange(value) {
        this.setState ({ number2: parseInt(value, 10) });
    }

    summation(input1, input2) {
        this.setState({
            sum: input1 + input2
        })
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={e => this.handleFirstChange(e.target.value)}/>
                <input className='inputLine' onChange={e => this.handleSecondChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.summation(this.state.number1, this.state.number2)}>Sum</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}