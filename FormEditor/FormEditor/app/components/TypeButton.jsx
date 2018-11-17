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
                <button onClick={this.press}>'Тип'</button>
                {(this.state.class === "on") && (
                    <div onChange={this.onChange}>
                        <p><input type="radio" name="option" value="InputField" /> 'Однострочное поле ввода'</p>
                        <p><input type="radio" name="option" value="TextArea" /> 'Многострочное поле ввода'</p>
                        <p><input type="radio" name="option" value="CheckBox" /> 'Множественный выбор'</p>
                        <p><input type="radio" name="option" value="Radio" /> 'Одиночный выбор'</p>
                        <p><input type="radio" name="option" value="Email" /> 'Ввод email'</p>
                        <p><input type="radio" name="option" value="Date" /> 'Ввод даты'</p>
                    </div>
                )}
            </div>
        );
    }
}

module.exports = TypeButton;