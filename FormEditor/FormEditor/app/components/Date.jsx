var React = require('react');
var Field = require('./Field.jsx');

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.updateField = this.updateField.bind(this);
    }
    updateField(nlabel, ndescr) {
        this.props.updateDate({ num: this.props.num, field: { label: nlabel, descr: ndescr } });
    }
    render() {
        return (
            <div>
                <p>
                    <Field label={this.props.field.label} description={this.props.field.description} updateField={this.updateField}/>
                </p>
                <p>
                    <input type="date" />
                </p >
            </div>);
    }
}

module.exports = Date;