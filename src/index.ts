import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the plotly-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'plotly-extension:plugin',
  description: 'Intermediate Developer Assignment for Plotly',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension plotly-extension is activated!');
  }
};

export default plugin;
