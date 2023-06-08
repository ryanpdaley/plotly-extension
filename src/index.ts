import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { reactIcon } from '@jupyterlab/ui-components';
import { ILauncher } from '@jupyterlab/launcher';
import { PlotlyWidget } from './PlotlyWidget';

/**
 * Initialization data for the plotly-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'plotly-extension',
  description: 'Intermediate Developer Assignment for Plotly',
  autoStart: true,
  optional: [ILauncher],
  requires: [ICommandPalette],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    launcher: ILauncher
  ) => {
    const { commands } = app;
    const commandID = 'plotly-extension:open-dialog';

    commands.addCommand(commandID, {
      caption: 'Launch the Plotly React Widget',
      label: commandID,
      icon: reactIcon,
      execute: () => {
        const content = new PlotlyWidget();
        const widget = new MainAreaWidget<PlotlyWidget>({ content });
        widget.title.label = 'Plotly Widget';
        widget.title.icon = reactIcon;
        app.shell.add(widget, 'main');
      }
    });

    palette.addItem({
      command: commandID,
      category: 'plotly'
    });

    if (launcher) {
      launcher.add({
        command: commandID
      });
    }
  }
};

export default plugin;
