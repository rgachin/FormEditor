"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
'use strict';
const e = React.createElement;
class Field extends React.Component {
    constructor(props) {
        super(props);
        this.header = 'Название поля';
        this.description = 'Возможное описание';
        this.isNecessary = true;
        this.header = props.header;
        this.description = props.description;
        this.isNecessary = props.isNecessary;
    }
}
exports.Field = Field;
class InputField extends Field {
    constructor(props) {
        super(props);
        this.input = props.input;
    }
}
exports.InputField = InputField;
class TextArea extends Field {
    constructor(props) {
        super(props);
        this.input = props.input;
    }
}
exports.TextArea = TextArea;
class Select extends Field {
    constructor(props) {
        super(props);
        this.input = props.input;
    }
}
exports.Select = Select;
class Radio extends Field {
    constructor(props) {
        super(props);
        this.input = props.input;
    }
}
exports.Radio = Radio;
class Email extends Field {
    constructor(props) {
        super(props);
        this.input = props.input;
    }
}
exports.Email = Email;
class Date extends Field {
    constructor(props) {
        super(props);
        this.input = props.input;
    }
}
exports.Date = Date;
//# sourceMappingURL=fields.js.map