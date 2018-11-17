var React = require('react');

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = { label: (props.label === null) ? '' : props.label };
        this.onLabelChange = this.onLabelChange.bind(this);
    }
    onLabelChange(e) {
        var val = e.target.value;
        this.setState({ label: val });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Значение" value={this.state.label} onChange={this.onLabelChange} />
            </div>);
    }
}
        
module.exports = Option;