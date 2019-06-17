import React, {Component} from 'react';
export default class FilterObject extends Component {
    
    constructor() {
        super();
        this.state = {
            ballers: [
                {
                    name: 'Stephen Curry',
                    age: 31,
                    position: 'PG'
                },
                {
                    name: 'Damian Lillard',
                    age: 28,
                    position: 'PG'
                },
                {
                    name:'Muggsy Bogues',
                    age: 54,
                },

            ],
            userInput: '',
            filteredArray: {}
        }
    }

    handleChange(value) {
        this.setState ({ userInput: value });
    }

    valueFilter(property) {
        let ballers = this.state.ballers.split();
        let filteredArray = []

        for(let i=0; i<ballers.length; i++) {
            if (ballers[i].hasOwnProperty(property)) {
                filteredArray.push(ballers[i])
            }
        }

        this.setState({
            filteredArray: filteredArray
        })
    }
    
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.ballers, null, 10)}</span>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.valueFilter(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}