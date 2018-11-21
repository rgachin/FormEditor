var React = require('react');
var Field = require('./Field.jsx');
var Option = require('./Option.jsx');

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: (props.optionlabels === null) ? [['', 0]] : props.optionlabels
        };
        this.onAddClick = this.onAddClick.bind(this);
        this.onDelClick = this.onDelClick.bind(this);
        this.updateOptionLabel = this.updateOptionLabel.bind(this);
    }
    onAddClick() {
        var val = this.state.labels.slice();
        var num = val[val.length - 1][1] + 1;
        val.push(['', num]);
        this.setState({ labels: val });
    }
    onDelClick() {
        var val = this.state.labels.slice();
        val.pop();
        this.setState({ labels: val });
    }
    updateOptionLabel(label, number) {
        var val = this.state.labels.slice();
        val[number][0] = label;
        this.setState({ labels: val });
        this.props.updateRadio(labels, this.props.num);
    }
    render() {
        return (
            <div>
                <p>
                    <Field />
                </p>
                <p>
                    {
                        this.state.labels.map(function (option) {
                            return (
                                <p>
                                    <input type="radio" name='option ${this.props.num}' /><Option label={option[0]} num={option[1]} updateOptionLabel={this.updateOptionLabel}/>
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