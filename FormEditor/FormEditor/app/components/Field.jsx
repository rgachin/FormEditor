var React = require('react');

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = { label: '', description: '' };
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