import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  static propTypes = {
    metaName: PropTypes.string
  };

  componentDidMount() {
    let title = `${this.props.metaName} | HDC Admin`;
    document.title = title;
  }

  render() {
    return true;
  }
}

export default Title;
