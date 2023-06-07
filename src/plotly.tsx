import { ReactWidget } from '@jupyterlab/apputils';

import React, { useState } from 'react';

const PlotlyDialog = (): JSX.Element => {
  const defaultText = 'Please enter some text';
  const [text, setText] = useState(defaultText);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let alertMsg = `You entered: '${text}'`;
    if (text === defaultText) {
      alertMsg = "Hmm... you didn't enter any text. Try entering some text!";
    }

    alert(alertMsg);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Plotly Extension:</label>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">OK</button>
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
