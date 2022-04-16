import React from 'react';

export class DateForm extends React.Component<
  {},
  { year: number; month: number; day: number }
> {
  private readonly storage = window.localStorage;
  constructor(props: {}) {
    super(props);
    const date = new Date();
    date.setDate(date.getDate() + 1);
    this.state = {
      year: Number(this.storage.getItem('year')) || date.getFullYear(),
      month: Number(this.storage.getItem('month')) || date.getMonth() + 1, // 0-11
      day: Number(this.storage.getItem('day')) || date.getDate(),
    };
    this.storage.setItem('year', String(this.state.year));
    this.storage.setItem('month', String(this.state.month));
    this.storage.setItem('day', String(this.state.day));
  }
  render(): React.ReactNode {
    return (
      <form
        onSubmit={() => {
          this.storage.setItem('year', String(this.state.year));
          this.storage.setItem('month', String(this.state.month));
          this.storage.setItem('day', String(this.state.day));
        }}
      >
        想要抢哪天的：
        <label>
          年份:
          <input
            type="number"
            value={this.state.year}
            onChange={(e) => {
              this.setState({ year: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          月份:
          <input
            type="number"
            value={this.state.month}
            onChange={(e) => {
              this.setState({ month: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          日期:
          <input
            type="number"
            value={this.state.day}
            onChange={(e) => {
              this.setState({ day: Number(e.target.value) });
            }}
          />
        </label>
        <input type="submit" value="保存" />
      </form>
    );
  }
}
