import { ICommandPalette, InputDialog } from '@jupyterlab/apputils';
/**
 * Initialization data for the plotly-extension extension.
 */
const plugin = {
    id: 'plotly-extension',
    description: 'Intermediate Developer Assignment for Plotly',
    autoStart: true,
    requires: [ICommandPalette],
    activate: (app, palette) => {
        console.log('JupyterLab extension plotly-extension is activated!');
        console.log('ICommandPalette:', palette);
        const commandID = 'plotly-extension:open-dialog';
        let toggled = false;
        app.commands.addCommand(commandID, {
            label: commandID,
            isEnabled: () => true,
            isVisible: () => true,
            isToggled: () => toggled,
            iconClass: 'some-css-icon-class',
            execute: () => {
                console.log(`Executed ${commandID}`);
                InputDialog.getText({ title: 'Provide a text' }).then(value => {
                    console.log('text ' + value.value);
                });
                // showDialog({
                //   title: 'Dialog title', // Can be text or a react element
                //   body: 'Dialog body', // Can be text, a widget or a react element
                //   host: document.body, // Parent element for rendering the dialog
                //   // buttons: [
                //   //   // List of buttons
                //   //   {
                //   //     label: 'my button', // Button label
                //   //     caption: 'my button title', // Button title
                //   //     className: 'my-button', // Additional button CSS class
                //   //     accept: true, // Whether this button will discard or accept the dialog
                //   //     displayType: 'default' // applies 'default' or 'warn' styles
                //   //   }
                //   // ],
                //   defaultButton: 0, // Index of the default button
                //   focusNodeSelector: '.my-input', // Selector for focussing an input element when dialog opens
                //   hasClose: true
                // });
                toggled = !toggled;
            }
        });
        palette.addItem({
            command: commandID,
            category: 'plotly-category',
            args: {}
        });
    }
};
export default plugin;
//# sourceMappingURL=index.js.map