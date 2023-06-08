import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

const PlotlyDialog = (): JSX.Element => {
  const defaultText = 'Please enter some text (max 150 characters)';
  const [text, setText] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let alertMsg = `You entered: '${text}'`;
    if (text === '') {
      alertMsg = "Hmm... you didn't enter any text.\n\nTry entering some text!";
    }

    alert(alertMsg);
  };

  const handleOnChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const currentText = e.target.value;
    if (currentText.length > 150) {
      alert(
        "Whoa - that's a lot of text. Keep it to less than 150 characters!"
      );
    } else {
      setText(currentText);
    }
  };
  return (
    <div className="plotly-wrapper">
      <div className="plotly-header">
        <h1>Plotly Widget</h1>
        <hr></hr>
      </div>
      <form className="plotly-form" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleOnChange}
          placeholder={defaultText}
          rows={4}
          className="plotly-textarea"
          maxLength={151}
        />
        <button className="plotly-button-ok" type="submit">
          OK
        </button>
      </form>
    </div>
  );
};

export class PlotlyWidget extends ReactWidget {
  constructor() {
    super();
    this.addClass('jp-PlotlyWidget');
  }

  render(): JSX.Element {
    return <PlotlyDialog />;
  }
}
