import React from 'react';
import { EventEmitter } from 'events';
import { Card, Input, Label } from 'reactstrap';
import '../styles/style.css';

export const terminalEventBus = new EventEmitter();

export function terminalLog(data: string) {
  terminalEventBus.emit('terminalLog', data);
}

export class Terminal extends React.Component<
  {},
  { terminalEnabled: boolean }
> {
  private readonly storage = window.localStorage;
  private terminalScreen: React.RefObject<HTMLDivElement>;
  constructor(props: {}) {
    super(props);
    this.state = {
      terminalEnabled: JSON.parse(
        this.storage.getItem('terminalEnabled') || 'false',
      ),
    };
    this.terminalScreen = React.createRef();
    this.storage.setItem('terminalEnabled', String(this.state.terminalEnabled));
  }
  render(): React.ReactNode {
    const terminal = this.state.terminalEnabled ? (
      <div ref={this.terminalScreen} className="terminal-text"></div>
    ) : null;
    return (
      <Card className="form-card">
        <div className="terminal-screen">
          <div className="custom-control custom-checkbox">
            <Input
              className="custom-control-input"
              type="checkbox"
              id="enableTerminal"
              checked={this.state.terminalEnabled}
              onChange={() => {
                this.setState({
                  terminalEnabled: !this.state.terminalEnabled,
                });
                this.storage.setItem(
                  'terminalEnabled',
                  String(!this.state.terminalEnabled),
                );
              }}
            />
            <Label className="custom-control-label" htmlFor="enableTerminal">
              启用终端？(可能引起性能损失)
            </Label>
            {terminal}
          </div>
        </div>
      </Card>
    );
  }
  componentDidMount() {
    terminalEventBus.addListener('terminalLog', this.handleListener);
  }
  componentWillUnmount() {
    terminalEventBus.removeListener('terminalLog', this.handleListener);
  }
  handleListener = (arg: string) => {
    const terminalScreen = this.terminalScreen;
    const newElement = document.createElement('div');
    newElement.innerHTML = arg;
    terminalScreen.current?.appendChild(newElement);
    terminalScreen.current?.scrollTo(0, terminalScreen.current?.scrollHeight);
  };
}
