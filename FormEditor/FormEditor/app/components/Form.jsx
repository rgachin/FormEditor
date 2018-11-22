var React = require('react');
var Field = require('./Field.jsx');
var InputField = require('./InputField.jsx');
var TextArea = require('./TextArea.jsx');
var CheckBox = require('./CheckBox.jsx');
var Radio = require('./Radio.jsx');
var Email = require('./Email.jsx');
var Date = require('./Date.jsx');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectednum: 0,
            fields: (props.fields === null) ?
                [{ type: 'InputField', num: 0, field: { label: null, descr: null } }] : props.fields
        }
        this.updateFieldType = this.updateFieldType.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onLoadClick = this.onLoadClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateInputField = this.updateInputField.bind(this);
        this.updateTextArea = this.updateTextArea.bind(this);
        this.updateCheckBox = this.updateCheckBox.bind(this);
        this.updateRadio = this.updateRadio.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }
    updateFieldType(ntype, num) {
        var nfields = this.state.fields.slice();
        switch (ntype) {
            case 'InputField': {
                nfields[num] = { type: ntype, num: 0, field: { label: null, descr: null } };
                break;
            }
            case 'TextArea': {
                nfields[num] = { type: ntype, num: 0, field: { label: null, descr: null } };
                break;
            }
            case 'CheckBox': {
                nfields[num] = { type: ntype, num: 0, field: { label: null, descr: null }, labels: [{ label: '', num: 0 }] };
                break;
            }
            case 'Radio': {
                nfields[num] = { type: ntype, num: 0, field: { label: null, descr: null }, labels: [{ label: '', num: 0 }] };
                break;
            }
            case 'Email': {
                nfields[num] = { type: ntype, num: 0, field: { label: null, descr: null } };
                break;
            }
            case 'Date': {
                nfields[num] = { type: ntype, num: 0, field: { label: null, descr: null } };
                break;
            }
        };
        this.setState({ fields: nfields });
    }
    updateInputField(e) {
        var nfields = this.state.fields.slice();
        nfields[e.num] = { type: 'InputField', num: e.num, field: e.field };
        this.setState({ fields: nfields });
    }
    updateTextArea(e) {
        var nfields = this.state.fields.slice();
        nfields[e.num] = { type: 'TextArea', num: e.num, field: e.field };
        this.setState({ fields: nfields });
    }
    updateEmail(e) {
        var nfields = this.state.fields.slice();
        nfields[e.num] = { type: 'Email', num: e.num, field: e.field };
        this.setState({ fields: nfields });
    }
    updateDate(e) {
        var nfields = this.state.fields.slice();
        nfields[e.num] = { type: 'Date', num: e.num, field: e.field };
        this.setState({ fields: nfields });
    }
    updateCheckBox(e) {
        var nfields = this.state.fields.slice();
        nfields[e.num] = { type: 'CheckBox', num: e.num, field: e.field, labels: e.labels };
        this.setState({ fields: nfields });
    }
    updateRadio(e) {
        var nfields = this.state.fields.slice();
        nfields[e.num] = { type: 'Radio', num: e.num, field: e.field, labels: e.labels };
        this.setState({ fields: nfields });
    }
    onAddClick() {
        var nfields = this.state.fields.slice();
        var nnum = nfields[nfields.length - 1].num + 1;
        nfields.push({ type: 'InputField', num: nnum, field: { label: null, descr: null } });
        this.setState({ fields: nfields });
    }
    onSaveClick() {
    }
    onLoadClick() {
    }
    onChange(e) {
        this.updateFieldType(e.target.value, this.state.selectednum);
    }
    render() {
        return (
            <div>
                <div class="inline">
                    <input type="button" value="Добавить" onClick={this.onAddClick} /> <br/>
                    <input type="button" value="Сохранить" onClick={this.onSaveClick} /> <br />
                    <input type="button" value="Загрузить" onClick={this.onLoadClick} />
                </div>
                <div class="inline">
                    <div>
                        {
                            this.state.fields.map(function (field) {
                                return (
                                    <div>
                                        {(() => {
                                            switch (field.type) {
                                                case 'InputField': {
                                                    <InputField num={field.num} field={field.num} updateInputField={this.updateInputField}/>
                                                    break;
                                                }
                                                case 'TextArea': {
                                                    <TextArea num={field.num} field={field.num} updateTextArea={this.updateTextArea} />
                                                    break;
                                                }
                                                case 'CheckBox': {
                                                    <InputField num={field.num} field={field.num} labels={field.labels} updateCheckBox={this.updateCheckBox} />
                                                    break;
                                                }
                                                case 'Radio': {
                                                    <InputField num={field.num} field={field.num} labels={field.labels} updateRadio={this.updateRadio} />
                                                    break;
                                                }
                                                case 'Email': {
                                                    <Email num={field.num} field={field.num} updateEmail={this.updateEmail} />
                                                    break;
                                                }
                                                case 'Date': {
                                                    <Date num={field.num} field={field.num} updateDate={this.updateDate} />
                                                    break;
                                                }
                                            }
                                        })()}
                                    </div>
                                );
                            })
                        }
                    </div> <br/>
                    <div onChange={this.onChange}>
                        <p><input type="radio" name="option" value="InputField" /> 'Однострочное поле ввода'</p>
                        <p><input type="radio" name="option" value="TextArea" /> 'Многострочное поле ввода'</p>
                        <p><input type="radio" name="option" value="CheckBox" /> 'Множественный выбор'</p>
                        <p><input type="radio" name="option" value="Radio" /> 'Одиночный выбор'</p>
                        <p><input type="radio" name="option" value="Email" /> 'Ввод email'</p>
                        <p><input type="radio" name="option" value="Date" /> 'Ввод даты'</p>
                    </div>
                </div>
            </div>);
    }
}

module.exports = Form;