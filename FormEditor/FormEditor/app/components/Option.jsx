var React = require('react');

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = { label: (props.label === null) ? '' : props.label };
        this.onLabelChange = this.onLabelChange.bind(this);
    }
    onLabelChange(e) {
        var nlabel = e.target.value;
        this.setState({ label: nlabel });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.label != this.state.label) {
            this.props.updateOptionLabel(this.state.label, this.props.num);
        };
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Значение" value={this.state.label} onChange={this.onLabelChange} name='${this.props.num}'/>
            </div>);
    }
}
        
module.exports = Option;