import * as React from 'react';
import { Field } from './fields';
import ReactDOM from 'react-dom';
import { document } from 'react-dom';

'use strict';

const e = React.createElement;

export class Model extends React.Component {

    public fields: Array<Field>;

    render() {
        return e(
            'button',
            {
                onClick: () => {
                    let newField: Field = new Field(null);
                    this.fields.push(newField);
                }
            },
            'Добавить'
        );
    }
}

const domContainer = document.querySelector('#model');
ReactDOM.render(e(Model), domContainer);