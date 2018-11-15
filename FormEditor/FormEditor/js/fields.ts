import * as React from 'react';

'use strict';

const e = React.createElement;

export class Field extends React.Component {

    public header: string = 'Название поля';
    public description: string = 'Возможное описание';
    public isNecessary: boolean = true;

    constructor(props) {
        super(props);
        this.header = props.header;
        this.description = props.description;
        this.isNecessary = props.isNecessary;
    }
}

export class InputField extends Field {

    public input: string;

    constructor(props) {
        super(props);
        this.input = props.input;
    }
}

export class TextArea extends Field {

    public input: string;

    constructor(props) {
        super(props);
        this.input = props.input;
    }
}

export class Select extends Field {

    public input: [boolean, string];

    constructor(props) {
        super(props);
        this.input = props.input;
    }
}

export class Radio extends Field {

    public input: [boolean, string];

    constructor(props) {
        super(props);
        this.input = props.input;
    }
}

export class Email extends Field {

    public input: string;

    constructor(props) {
        super(props);
        this.input = props.input;
    }
}

export class Date extends Field {

    public input: string;

    constructor(props) {
        super(props);
        this.input = props.input;
    }
}