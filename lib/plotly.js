import { ReactWidget } from '@jupyterlab/apputils';
import React, { useState } from 'react';
const PlotlyDialog = () => {
    const defaultText = 'Please enter some text';
    const [text, setText] = useState(defaultText);
    const handleSubmit = (e) => {
        e.preventDefault();
        let alertMsg = `You entered: '${text}'`;
        if (text === defaultText) {
            alertMsg = "Hmm... you didn't enter any text. Try entering some text!";
        }
        alert(alertMsg);
    };
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("label", null, "Plotly Extension:"),
            React.createElement("input", { type: "text", value: text, onChange: e => setText(e.target.value) }),
            React.createElement("button", { type: "submit" }, "OK"))));
};
export class PlotlyWidget extends ReactWidget {
    constructor() {
        super();
        this.addClass('jp-PlotlyWidget');
    }
    render() {
        return React.createElement(PlotlyDialog, null);
    }
}
//# sourceMappingURL=plotly.js.map