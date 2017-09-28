import React, {Component} from 'react';


class RegistrationPage extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        const Mystyle = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            opacity: '0.6',
            backgroundColor: 'black'
        };
        return (
            <form>
                <div style={Mystyle}>
                    <input type="text" value="Enter your id..."></input>
                    <input type="submit" value="submit"></input>
                </div>
            </form>
        );
    }
}

export default RegistrationPage;


