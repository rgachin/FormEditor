var React = require('react');
var Field = require('./Field.jsx');
var InputField = require('./InputField.jsx');
var Date = require('./Date.jsx');
var TypeButton = require('./TypeButton.jsx');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { field: <Field />, fieldtype: 'Field'}
        this.onClick = this.onClick.bind(this);
        this.updateFieldType = this.updateFieldType.bind(this);
    }
    updateFieldType = (type) => {
        this.setState({ fieldtype: type });
        var val = <type />
        this.setState({ field: val });
    }
    onClick() {
        var val = <InputField />
        this.setState({ field: val });
    }
    render() {
        return (
            <div>
                {this.state.field}
                <p>
                    <TypeButton updateFieldType={this.updateFieldType}/>
                </p >
            </div>);
    }
}

module.exports = Form;