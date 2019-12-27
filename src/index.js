import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 87,
            waitlistedStudents: 8,
            addAmount: 0
        };
    }


    increment1() {
        this.setState({ enrolledStudents: this.state.enrolledStudents + 1});
    }
    increment2() {
    this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount)
        });
    };

    increment3() {
        this.setState({ waitlistedStudents: this.state.waitlistedStudents + 1});
    }
    increment4() {
    this.setState({
        waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmount)
    });
    };




    render() {
        return (
            <div>
                <h2>Enrolled Students: {this.state.enrolledStudents}</h2>
                <button onClick={this.increment1.bind(this)}>Add 1 Enrolled Student</button>
                <h3>Add Multiple Enrolled Students</h3>
                <input
                    type="number"
                    onChange={event => this.setState({ addAmount: event.target.value })}
                    value={this.state.addAmount}
                />
                <button onClick={this.increment2.bind(this)}>Increase Students</button>
                
                <h2>Waitlisted Students: {this.state.waitlistedStudents}</h2>
                <button onClick={this.increment3.bind(this)}>Add 1 Waitlisted Student</button>
                <h3>Add Multiple Waitlisted Students</h3>
                <input
                    type="number"
                    onChange={event => this.setState({ addAmount: event.target.value })}
                    value={this.state.addAmount}
                />
                <button onClick={this.increment4.bind(this)}>Increase Students</button>
           </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'));