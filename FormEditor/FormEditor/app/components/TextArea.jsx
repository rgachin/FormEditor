var React = require('react');
var Field = require('./Field.jsx');

class TextArea extends React.Component {
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
                    <input type="textarea" />
                </p >
            </div>);
    }
}

module.exports = TextArea;