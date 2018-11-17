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
                    <Field label={this.props.label} description={this.props.description} />
                </p>
                <p>
                    <input type="email" />
                </p >
            </div>);
    }
}

module.exports = Email;