var React = require('react');
var Field = require('./Field.jsx');
var Option = require('./Option.jsx');

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: [<Option />] };
        this.onAddClick = this.onAddClick.bind(this);
        this.onDelClick = this.onDelClick.bind(this);
    }
    onAddClick() {
        var val = this.state.input.slice();
        val.push(<Option />);
        this.setState({ input: val });
    }
    onDelClick() {
        var val = this.state.input.slice();
        val.pop();
        this.setState({ input: val });
    }
    render() {
        return (
            <div>
                <p>
                    <Field />
                </p>
                <p>
                    {
                        this.state.input.map(function (item) {
                            return (
                                <p>
                                    <input type="checkbox">{item}</input>
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