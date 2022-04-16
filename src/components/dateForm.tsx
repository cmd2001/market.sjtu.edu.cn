import React from 'react';
import { Button, Card, FormGroup, Input, Label } from 'reactstrap';

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
      year: Number(this.storage.getItem('year') || date.getFullYear()),
      month: Number(this.storage.getItem('month') || date.getMonth() + 1), // 0-11
      day: Number(this.storage.getItem('day') || date.getDate()),
    };
    this.storage.setItem('year', String(this.state.year));
    this.storage.setItem('month', String(this.state.month));
    this.storage.setItem('day', String(this.state.day));
  }
  render(): React.ReactNode {
    return (
      <Card style={{ margin: '5px' }}>
        <div
          style={{
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          <Label className="display-4">想要抢哪天的：</Label>
          <FormGroup>
            <Label>年份:</Label>
            <Input
              type="number"
              value={this.state.year}
              onChange={(e) => {
                this.setState({ year: Number(e.target.value) });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>月份:</Label>
            <Input
              type="number"
              value={this.state.month}
              onChange={(e) => {
                this.setState({ month: Number(e.target.value) });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>日期:</Label>
            <Input
              type="number"
              value={this.state.day}
              onChange={(e) => {
                this.setState({ day: Number(e.target.value) });
              }}
            />
          </FormGroup>
          <div style={{ textAlign: 'center' }}>
            <Button
              color="primary"
              onClick={() => {
                this.storage.setItem('year', String(this.state.year));
                this.storage.setItem('month', String(this.state.month));
                this.storage.setItem('day', String(this.state.day));
              }}
              style={{ width: '66%' }}
            >
              保存
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
