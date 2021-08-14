import React from "react";
import { beArConvert, arBeConvert } from "./convert";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beValue: '',
      arValue: ''
    }

    this.handleArChange = this.handleArChange.bind(this);
    this.handleBeChange = this.handleBeChange.bind(this);
    this.copyArContents = this.copyArContents.bind(this);
  }

  handleBeChange(event) {
    this.setState({
      beValue: event.target.value,
      arValue: beArConvert(event.target.value)
    });
  }

  handleArChange(event) {
    this.setState({
      beValue: arBeConvert(event.target.value),
      arValue: event.target.value
    });
  }

  copyArContents() {
    navigator.clipboard.writeText(this.state.arValue);
  }

  render() {
    return (
      <div className="container col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 0 }}>
        <div style={{ padding: '12px' }}>
          <h3>Канвертар на беларускую арабіцу</h3>
          <textarea style={{ marginBottom: '12px', marginTop: '16px' }} className="form-control" value={this.state.beValue} onChange={this.handleBeChange} placeholder="Увядзіце тэкст кірыліцай" />
          <textarea style={{ marginBottom: '12px' }} className="form-control" value={this.state.arValue} onChange={this.handleArChange} placeholder="Або ўвядзіце яго арабіцай" />
          <button className="btn btn-primary" onClick={this.copyArContents}>Капіяваць</button>
        </div>
        <div style={{ padding: '12px' }}>v0.2.2 © <a href="https://github.com/ntundt/">Mikita Tsikhanovich</a>, 2021</div>
      </div>
    );
  }
}

export default App;
