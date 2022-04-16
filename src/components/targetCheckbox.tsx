import React from 'react';
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
      <form
        onSubmit={() => {
          this.storage.setItem(
            'targetCheckbox',
            JSON.stringify(this.state.checked),
          );
        }}
      >
        你想要抢的什么：
        {TARGETS.map((target, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={this.state.checked[index]}
              onChange={() => {
                const checked = this.state.checked;
                checked[index] = !checked[index];
                this.setState({ checked });
              }}
            />
            {target.name}
          </label>
        ))}
        <label>
          <input
            type="checkbox"
            checked={this.state.checked.every((v) => v)}
            onChange={() => {
              const checked = this.state.checked;
              const allChecked = !checked.every((v) => v);
              checked.forEach((v, i) => {
                checked[i] = allChecked;
              });
              this.setState({ checked });
            }}
          />
          我全都要！
        </label>
        <input type="submit" value="保存" />
      </form>
    );
  }
}
