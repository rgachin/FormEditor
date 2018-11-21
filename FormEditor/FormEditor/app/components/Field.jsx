var React = require('react');

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: (props.label === null) ? '' : props.label,
            description: (props.description === null) ? '' : props.description
        };
        this.onLabelChange = this.onLabelChange.bind(this);
        this.onDescrChange = this.onDescrChange.bind(this);
    }
    onLabelChange(e) {
        var val = e.target.value;
        this.setState({ label: val });
    }
    onDescrChange(e) {
        var val = e.target.value;
        this.setState({ description: val });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.label != this.state.label) {
            this.props.updateFieldLabel(this.state.label);
        };
        if (prevState.description != this.state.description) {
            this.props.updateFieldDescr(this.state.description);
        };
    }
    render() {
        return (
            <div>
                <p>
                    <input type="text" placeholder="Название поля" value={this.state.label} onChange={this.onLabelChange} />
                </p>
                <p>
                    <input type="text" placeholder="Возможное описание" value={this.state.description} onChange={this.onDescrChange} />
                </p >
            </div>);
    }
}

module.exports = Field;