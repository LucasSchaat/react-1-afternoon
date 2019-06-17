import React, {Component} from 'react';
export default class FilterObject extends Component {
    
    constructor() {
        super();
        this.state = {
            names: ['Ashley','Remi','Brian','Mary','Rick','Beverly','Stacy','Ricky','Kim','Kelly'],
            userInput: '',
            filteredArray: {}
        }
    }

    handleChange(value) {
        this.setState ({ userInput: value });
    }

    filterString(str) {
        let names = this.state.names;
        let filteredArray = []

        for(let i=0; i<names.length; i++) {
            if (names[i].includes(str)) {
                filteredArray.push(names[i])
            }
        }

        this.setState({
            filteredArray: filteredArray
        })
    }
    
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}