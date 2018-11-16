var React = require('react');

class TypeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: "off", fieldtype: 'Field' };
        this.press = this.press.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ fieldtype: e.target.value });
        this.setState({ class: "off" });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.fieldtype != this.state.fieldtype) {
            this.props.updateFieldType(this.state.fieldtype);
        };
    }
    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({ class: className });
    }
    render() {
        return (
            <div>
                <button onClick={this.press}>'���'</button>
                {(this.state.class === "on") && (
                    <div onChange={this.onChange}>
                        <p><input type="radio" name="option" value="InputField" /> '������������ ���� �����'</p>
                        <p><input type="radio" name="option" value="TextArea" /> '������������� ���� �����'</p>
                        <p><input type="radio" name="option" value="CheckBox" /> '������������� �����'</p>
                        <p><input type="radio" name="option" value="Radio" /> '��������� �����'</p>
                        <p><input type="radio" name="option" value="Email" /> '���� email'</p>
                        <p><input type="radio" name="option" value="Date" /> '���� ����'</p>
                    </div>
                )}
            </div>
        );
    }
}

module.exports = TypeButton;