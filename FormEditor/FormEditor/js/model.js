"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_dom_2 = require("react-dom");
'use strict';
const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.liked = false;
    }
    render() {
        if (this.liked) {
            return 'You liked this.';
        }
        return e('button', { onClick: () => this.liked = true }, 'Like');
    }
}
const domContainer = react_dom_2.document.querySelector('#like_button_container');
react_dom_1.default.render(e(LikeButton), domContainer);
/*
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
            '��������'
        );
    }
}

const domContainer = document.querySelector('#model');
ReactDOM.render(e(Model), domContainer);
*/ 
//# sourceMappingURL=model.js.map