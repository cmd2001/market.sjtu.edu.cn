import React from 'react';
import {
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
  Container,
  Label,
} from 'reactstrap';

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
      <div
        style={{
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '5px',
          backgroundColor: '#f6f9fc',
        }}
      >
        <Form
          onSubmit={() => {
            this.storage.setItem('hour', String(this.state.hour));
            this.storage.setItem('minute', String(this.state.minute));
            this.storage.setItem('second', String(this.state.second));
          }}
          style={{
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          <Label className="display-4">今天什么时间开抢：</Label>
          <Row>
            <Col>
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
            </Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
          </Row>
          <div style={{ textAlign: 'center' }}>
            <Button color="primary" type="submit" style={{ width: '66%' }}>
              保存
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
