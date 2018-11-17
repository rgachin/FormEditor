var React = require('react');
var Field = require('./Field.jsx');

class Date extends React.Component {
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
                    <input type="date" />
                </p >
            </div>);
    }
}

module.exports = Date;