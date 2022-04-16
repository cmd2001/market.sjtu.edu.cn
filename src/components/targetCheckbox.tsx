import React from 'react';
import { Button, Card, Form, Label } from 'reactstrap';
import { TARGETS } from '../constants/targets';

export class TargetCheckbox extends React.Component<
  {},
  { checked: boolean[] }
> {
  private readonly storage = window.localStorage;
  constructor(props: {}) {
    super(props);
    const mem: boolean[] = JSON.parse(
      this.storage.getItem('targetCheckbox') || '[]',
    );
    this.state = {
      checked:
        mem.length !== TARGETS.length
          ? new Array(TARGETS.length).fill(false)
          : mem,
    };
    this.storage.setItem('targetCheckbox', JSON.stringify(this.state.checked));
  }
  render(): React.ReactNode {
    return (
      <Card style={{ margin: '5px' }}>
        <Form
          onSubmit={() => {
            this.storage.setItem(
              'targetCheckbox',
              JSON.stringify(this.state.checked),
            );
          }}
          style={{
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          <Label className="display-4">你想要抢的什么：</Label>
          <div className="custom-control custom-checkbox">
            {TARGETS.map((target, index) => (
              <div key={index} style={{ width: '33%', float: 'left' }}>
                <input
                  className="custom-control-input"
                  id={`targetCheckbox-${index}`}
                  type="checkbox"
                  checked={this.state.checked[index]}
                  onChange={() => {
                    const checked = this.state.checked;
                    checked[index] = !checked[index];
                    this.setState({ checked });
                  }}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`targetCheckbox-${index}`}
                >
                  {target.name}
                </label>
              </div>
            ))}
            <div style={{ width: '33%', float: 'left' }}>
              <input
                className="custom-control-input"
                id="targetCheckbox-all"
                type="checkbox"
                checked={this.state.checked.every((v) => v)}
                onChange={() => {
                  const checked = this.state.checked;
                  checked.fill(!checked.every((v) => v));
                  this.setState({ checked });
                }}
              />
              <label
                className="custom-control-label"
                htmlFor="targetCheckbox-all"
              >
                我全都要！
              </label>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button color="primary" type="submit" style={{ width: '66%' }}>
              保存
            </Button>
          </div>
        </Form>
      </Card>
    );
  }
}
