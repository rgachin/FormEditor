var React = require('react');
var Field = require('./Field.jsx');

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.updateFieldLabel = this.updateFieldLabel.bind(this);
        this.updateFieldDescr = this.updateFieldDescr.bind(this);
    }
    updateFieldLabel(label) {
        this.props.updateInputField(label, null, this.props.num);
    }
    updateFieldDescr(descr) {
        this.props.updateInputField(null, descr, this.props.num);
    }
    render() {
        return (
            <div>
                <p>
                    <Field label={this.props.label} description={this.props.description} updateFieldLabel={this.updateFieldLabel} updateFieldDescr={this.updateFieldDescr}/>
                </p>
                <p>
                    <input type="date" />
                </p >
            </div>);
    }
}

module.exports = Date;