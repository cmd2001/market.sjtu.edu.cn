import React from 'react';

export class StartTimeForm extends React.Component<
  {},
  { hour: number; minute: number; second: number }
> {
  private readonly storage = window.localStorage;
  constructor(props: {}) {
    super(props);
    this.state = {
      hour: Number(this.storage.getItem('hour')) || 20,
      minute: Number(this.storage.getItem('minute')) || 30,
      second: Number(this.storage.getItem('second')) || 0,
    };
    this.storage.setItem('hour', String(this.state.hour));
    this.storage.setItem('minute', String(this.state.minute));
    this.storage.setItem('second', String(this.state.second));
  }
  render(): React.ReactNode {
    return (
      <form
        onSubmit={() => {
          this.storage.setItem('hour', String(this.state.hour));
          this.storage.setItem('minute', String(this.state.minute));
          this.storage.setItem('second', String(this.state.second));
        }}
      >
        今天什么时间开抢：
        <label>
          时:
          <input
            type="number"
            value={this.state.hour}
            onChange={(e) => {
              this.setState({ hour: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          分:
          <input
            type="number"
            value={this.state.minute}
            onChange={(e) => {
              this.setState({ minute: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          秒:
          <input
            type="number"
            value={this.state.second}
            onChange={(e) => {
              this.setState({ second: Number(e.target.value) });
            }}
          />
        </label>
        <input type="submit" value="保存" />
      </form>
    );
  }
}
