import React, { Component } from 'react';
import url from 'url';
import DropdownMenu from './DropdownMenu';
import TextInput from './TextInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      formattedUrl: '',
      protocol: '',
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ inputValue: value });
    this.checkUrl(value);
  }

  checkUrl(inputUrl) {
    const parsedUrl = url.parse(inputUrl, true);
    if (parsedUrl.protocol) {
      this.setState({ protocol: parsedUrl.protocol });
    }
    if (parsedUrl.query) {
      if (parsedUrl.query.url) {
        this.decodeUrl(parsedUrl.query.url);
      } else {
        this.encodeUrl(parsedUrl.href);
      }
    }
  }

  decodeUrl(queryUrl) {
    const formattedUrl = decodeURIComponent(atob(queryUrl));
    this.setState({ formattedUrl });
  }

  encodeUrl(queryUrl) {
    const formattedUrl = `?url=${btoa(encodeURIComponent(queryUrl))}`;
    this.setState({ formattedUrl });
  }

  render() {
    const { inputValue, formattedUrl } = this.state;
    return (
      <div>
        <h1>Url converter</h1>
        <TextInput value={inputValue} onChange={e => this.handleChange(e)} />
        <div>{formattedUrl}</div>
      </div>
    );
  }
}

export default App;
