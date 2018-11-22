var React = require('react');
var Field = require('./Field.jsx');
var Option = require('./Option.jsx');

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: (props.optionlabels === null) ? [{ label: '', num: 0 }] : props.optionlabels
        };
        this.onAddClick = this.onAddClick.bind(this);
        this.onDelClick = this.onDelClick.bind(this);
        this.updateOptionLabel = this.updateOptionLabel.bind(this);
        this.updateField = this.updateField.bind(this);
    }
    updateField(nlabel, ndescr) {
        this.props.updateCheckBox({ num: this.props.num, field: { label: nlabel, descr: ndescr }, labels: this.state.labels });
    }
    onAddClick() {
        var val = this.state.labels.slice();
        var nnum = val[val.length - 1].num + 1;
        val.push({ label: '', num: nnum });
        this.setState({ labels: val });
    }
    onDelClick() {
        var val = this.state.labels.slice();
        val.pop();
        this.setState({ labels: val });
    }
    updateOptionLabel(label, number) {
        var nlabels = this.state.labels.slice();
        nlabels[number][0] = label;
        this.setState({ labels: nlabels });
        this.props.updateCheckBox({ num: this.props.num, field: this.props.field, labels: nlabels });
    }
    render() {
        return (
            <div>
                <p>
                    <Field label={this.props.field.label} description={this.props.field.description} updateField={this.updateField}/>
                </p>
                <p>
                    {
                        this.state.labels.map(function (option) {
                            return (
                                <p>
                                    <input type="checkbox" name='option ${this.props.num}' /><Option label={option.label} num={option.num} updateOptionLabel={this.updateOptionLabel} />
                                </p>
                            );
                        })
                    }
                </p>
                <input type="button" value="+" onClick={this.onAddClick} />
                <input type="button" value="-" onClick={this.onDelClick} />
            </div>);
    }
}

module.exports = CheckBox;