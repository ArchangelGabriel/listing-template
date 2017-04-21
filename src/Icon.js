import React, { Component } from 'react';


class Icon extends Component {

  _mergeStyles(...args) {
    return Object.assign({}, ...args);
  }

  renderGraphic() {
    switch (this.props.icon) {
      case 'photosphere':
        return (
          <g><path d="M22.07 7.59c-1.7-3.88-5.56-6.59-10.07-6.59s-8.37 2.71-10.07 6.59c-.65.28-1.3.58-1.93.91v7c.63.33 1.28.63 1.93.91 1.7 3.88 5.56 6.59 10.07 6.59s8.37-2.71 10.07-6.59c.65-.28 1.29-.58 1.93-.91v-7c-.63-.33-1.28-.63-1.93-.91zm-10.07-5.09c3.31 0 6.23 1.7 7.93 4.28-2.58-.85-5.25-1.28-7.93-1.28-2.68 0-5.35.43-7.93 1.28 1.7-2.58 4.62-4.28 7.93-4.28zm0 19c-3.31 0-6.23-1.7-7.93-4.28 2.58.85 5.25 1.28 7.93 1.28 2.68 0 5.35-.43 7.93-1.28-1.7 2.58-4.62 4.28-7.93 4.28zm10.5-6.92l-.29.13c-1.08.51-2.21.92-3.35 1.27l-3.86-4.42-3 3.44-4-5-4.38 5.47c-.62-.23-1.23-.47-1.83-.75l-.29-.14v-5.16l.29-.13c6.4-2.99 14.02-2.99 20.42 0l.29.13v5.16z"></path></g>
        );
      case 'directions-walk':
        return (
          <g><path d="M14 3.8c.99 0 1.8-.81 1.8-1.8 0-1-.81-1.8-1.8-1.8-1 0-1.8.81-1.8 1.8s.8 1.8 1.8 1.8zm.12 6.2h4.88v-1.8h-3.62l-2-3.33c-.3-.5-.84-.83-1.46-.83-.17 0-.34.03-.49.07l-5.43 1.69v5.2h1.8v-3.67l2.11-.66-3.91 15.33h1.8l2.87-8.11 2.33 3.11v5h1.8v-6.41l-2.49-4.54.73-2.87 1.08 1.82z"></path></g>
        );
      case 'place':
        return (
          <g><path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
        );
    }
  }

  render() {
    let styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    };

    return (
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
        style={this._mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }

}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  size: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  style: React.PropTypes.object
};

Icon.defaultProps = {
  size: 24
};

export default Icon;
