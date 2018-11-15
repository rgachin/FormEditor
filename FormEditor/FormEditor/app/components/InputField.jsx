var React = require('react');
var Field = require('./Field.jsx');

class InputField extends React.Component {
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
                    <input type="text" />
                </p >
            </div>);
    }
}

module.exports = InputField;