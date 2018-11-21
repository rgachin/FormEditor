var React = require('react');
var Field = require('./Field.jsx');
var InputField = require('./InputField.jsx');
var TextArea = require('./TextArea.jsx');
var CheckBox = require('./CheckBox.jsx');
var Radio = require('./Radio.jsx');
var Email = require('./Email.jsx');
var Date = require('./Date.jsx');
var TypeButton = require('./TypeButton.jsx');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { field: <Field />, fieldtype: 'Field'}
        this.onClick = this.onClick.bind(this);
        this.updateFieldType = this.updateFieldType.bind(this);
        this.changeField = this.changeField.bind(this);
    }
    updateFieldType(type) {
        this.setState({ fieldtype: type });
        this.changeField(type);
        console.log(type);
    }
    changeField(type) {
        switch (type) {
            case 'InputField': {
                this.setState({ field: <InputField /> });
                break;
            }
            case 'TextArea': {
                this.setState({ field: <TextArea /> });
                break;
            }
            case 'CheckBox': {
                this.setState({ field: <CheckBox /> });
                break;
            }
            case 'Radio': {
                this.setState({ field: <Radio /> });
                break;
            }
            case 'Email': {
                this.setState({ field: <Email /> });
                break;
            }
            case 'Date': {
                this.setState({ field: <Date /> });
                break;
            }
            default: {
                this.setState({ field: <Field /> });
            }
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.field}</p>
                <p>
                    <TypeButton updateFieldType={this.updateFieldType}/>
                </p >
            </div>);
    }
}

module.exports = Form;