import React from 'react';

class TextSwitcher extends React.Component {
  state = {
    showText1: true // Initial state to show the first text
  };

  componentDidMount() {
    // After 3 seconds, switch to show the second text
    this.timer = setTimeout(() => {
      this.setState({ showText1: false });
    }, 3000);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearTimeout(this.timer);
  }

  render() {
    const { showText1 } = this.state;

    return (
      <div>
        <h3>hi</h3>
        {showText1 ? (
          <h3>developer</h3>
        ) : (
          <h3>dancer</h3>
        )}
      </div>
    );
  }
}

export default TextSwitcher;
