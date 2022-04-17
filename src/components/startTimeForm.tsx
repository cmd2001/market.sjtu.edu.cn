import React from 'react';
import { FormGroup, Input, Button, Label, Card } from 'reactstrap';
import '../styles/style.css';

export class StartTimeForm extends React.Component<
  {},
  { hour: number; minute: number; second: number }
> {
  private readonly storage = window.localStorage;
  constructor(props: {}) {
    super(props);
    this.state = {
      hour: Number(this.storage.getItem('hour') || 20),
      minute: Number(this.storage.getItem('minute') || 30),
      second: Number(this.storage.getItem('second') || 0),
    };
    this.storage.setItem('hour', String(this.state.hour));
    this.storage.setItem('minute', String(this.state.minute));
    this.storage.setItem('second', String(this.state.second));
  }
  render(): React.ReactNode {
    return (
      <Card className="form-card">
        <div className="custom-form">
          <Label className="display-4">今天什么时间开抢：</Label>
          <FormGroup>
            <Label>时：</Label>
            <Input
              placeholder="时"
              type="number"
              value={this.state.hour}
              onChange={(e) => {
                this.setState({ hour: Number(e.target.value) });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>分：</Label>
            <Input
              type="number"
              value={this.state.minute}
              onChange={(e) => {
                this.setState({ minute: Number(e.target.value) });
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>秒：</Label>
            <Input
              type="number"
              value={this.state.second}
              onChange={(e) => {
                this.setState({ second: Number(e.target.value) });
              }}
            />
          </FormGroup>
          <div className="align-center">
            <Button
              color="primary"
              onClick={() => {
                this.storage.setItem('hour', String(this.state.hour));
                this.storage.setItem('minute', String(this.state.minute));
                this.storage.setItem('second', String(this.state.second));
              }}
              className="save-button"
            >
              保存
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}
