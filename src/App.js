import React from "react";
import { beArConvert, arBeConvert } from "./convert";
import * as pack from '../package.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beValue: '',
      arValue: ''
    }

    this.rows = 3;

    this.handleArChange = this.handleArChange.bind(this);
    this.handleBeChange = this.handleBeChange.bind(this);
    this.copyArContents = this.copyArContents.bind(this);
  }


  updateHeight(text) {
    let rows = (text.match(/\n/g) || []).length + 1;

    if (rows < 3) {
      rows = 3;
    }

    this.rows = rows;
  }

  handleBeChange(event) {
    this.setState({
      beValue: event.target.value,
      arValue: beArConvert(event.target.value)
    });
    this.updateHeight(event.target.value);
  }

  handleArChange(event) {
    this.setState({
      beValue: arBeConvert(event.target.value),
      arValue: event.target.value
    });
    this.updateHeight(event.target.value);
  }

  copyArContents() {
    navigator.clipboard.writeText(this.state.arValue);
  }

  render() {
    return (
      <div className="container col-12 col-sm-12 col-md-9 col-lg-7 col-xl-5" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 0 }}>
        <div style={{ padding: '12px' }}>
          <h3>Канвэртар на беларускую арабіцу</h3>
          <textarea style={{ marginBottom: '12px', marginTop: '16px' }} rows={this.rows} className="form-control" value={this.state.beValue} onChange={this.handleBeChange} placeholder="Увядзіце тэкст кірыліцай" />
          <textarea style={{ marginBottom: '12px' }} rows={this.rows} className="form-control" value={this.state.arValue} onChange={this.handleArChange} placeholder="Або ўвядзіце яго арабіцай" />
          <button className="btn btn-primary" onClick={this.copyArContents}>Капіяваць</button>
        </div>
        <div style={{ padding: '12px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>Вэрсыя <a href="https://github.com/ntundt/be-arabic-converter/">{pack.version}</a></div>
          <div><a href="https://vk.com/not.a.whale.fortests">Мікіта Ціхановіч</a>, 2021</div>
        </div>
      </div>
    );
  }
}

export default App;
