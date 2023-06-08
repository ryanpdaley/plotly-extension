import { ReactWidget } from '@jupyterlab/apputils';
import React, { useState } from 'react';
const PlotlyDialog = () => {
    const defaultText = 'Please enter some text (max 150 characters)';
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let alertMsg = `You entered: '${text}'`;
        if (text === '') {
            alertMsg = "Hmm... you didn't enter any text.\n\nTry entering some text!";
        }
        alert(alertMsg);
    };
    const handleOnChange = (e) => {
        const currentText = e.target.value;
        if (currentText.length > 150) {
            alert("Whoa - that's a lot of text. Keep it to less than 150 characters!");
        }
        else {
            setText(currentText);
        }
    };
    return (React.createElement("div", { className: "plotly-wrapper" },
        React.createElement("div", { className: "plotly-header" },
            React.createElement("h1", null, "Plotly Widget"),
            React.createElement("hr", null)),
        React.createElement("form", { className: "plotly-form", onSubmit: handleSubmit },
            React.createElement("textarea", { value: text, onChange: handleOnChange, placeholder: defaultText, rows: 4, className: "plotly-textarea", maxLength: 151 }),
            React.createElement("button", { className: "plotly-button-ok", type: "submit" }, "OK"))));
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