var React = require('react');
var Field = require('./Field.jsx');

class Email extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>
                    <Field />
                </p>
                <p>
                    <input type="email" />
                </p >
            </div>);
    }
}

module.exports = Email;