import React, { PropTypes, Component } from 'react';
import { Dialog } from '../basic';

export default class NotSupportedLocalhostDialog extends Component {
  static contextTypes = {
    lang: PropTypes.object,
  };

  render() {
    const { lang } = this.context;

    return (
      <Dialog
        title={lang['Dialog.NotSupportedLocalhost.Title']}
        acceptText=""
        cancelText=""
      />
    );
  }
}
