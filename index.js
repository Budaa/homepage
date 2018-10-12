// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app';
// const element = <h1>Hello, world</h1>;

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '',
      errorMessage: ''
    };
    window.resolvePromise = (method_name, result, error) => {
      this.setState({
        successMessage: `Params: methodName: ${method_name} result: ${result}, error: ${error}`
      });
    };
  }
  componentDidCatch({ message }, info) {
    console.log(message);
    this.setState({ errorMessage: message });
  }
  handleSetterClick() {
    try {
      window.RanSportJSInterface.messageHandlers.NuggadTracking.postMessage({
        track_nuggad: { track_nuggad: true }
      });
    } catch ({ message }) {
      this.setState({
        errorMessage: message
      });
    }
  }

  handleGetterClick() {
    console.log(window);
    try {
      window.webkit.messageHandlers.NuggadTracking.postMessage({
        is_nuggad_tracked: {}
      });
    } catch ({ message }) {
      this.setState({
        errorMessage: message
      });
    }
  }

  handleSetterClickAndroid() {
    try {
      window.RanSportJSInterface.callCommand('track_nuggad', {
        track_nuggad: true
      });
    } catch ({ message }) {
      this.setState({
        errorMessage: message
      });
    }
  }

  handleGetterClickAndroid() {
    try {
      window.RanSportJSInterface.callCommand('is_nuggad_tracked', {
        callback: isAnalyticsEnabled => {
          this.setState({
            successMessage: `isAnalyticsEnabled: ${isAnalyticsEnabled}`
          });
        }
      });
    } catch ({ message }) {
      this.setState({
        errorMessage: message
      });
    }
  }

  handleNameChange(eventName) {
    this.setState({ eventName });
  }
  handleValueChange(eventValue) {
    this.setState({ eventValue });
  }
  render() {
    return (
      <div className="App">
        <h2>iOS implementation</h2>
        <button onClick={() => this.handleSetterClick()}>Test Setter</button>
        <button onClick={() => this.handleGetterClick()}>Test Getter</button>
        <br />
        <br />
        <h2>Android implementation</h2>
        <button onClick={() => this.handleSetterClickAndroid()}>
          Test Setter
        </button>
        <button onClick={() => this.handleGetterClickAndroid()}>
          Test Getter
        </button>
        <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
        <div style={{ color: 'green' }}>{this.state.successMessage}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
