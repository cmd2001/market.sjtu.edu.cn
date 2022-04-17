import React from 'react';
import { Button, Card, Label } from 'reactstrap';
import { TARGETS } from '../constants/targets';
import '../styles/style.css';

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
      <Card className="form-card">
        <div className="custom-form">
          <Label className="display-4">你想要抢的什么：</Label>
          <div className="custom-control custom-checkbox">
            {TARGETS.map((target, index) => (
              <div key={index} className="target-checkbox">
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
            <div className="target-checkbox">
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
          <div className="align-center">
            <Button
              color="primary"
              onClick={() => {
                this.storage.setItem(
                  'targetCheckbox',
                  JSON.stringify(this.state.checked),
                );
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
