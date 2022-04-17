import React from 'react';
import { Button, Card } from 'reactstrap';
import { TARGETS } from '../constants/targets';
import workOnTarget from '../core/workOnTarget';
import { terminalLog } from './terminal';
import '../styles/style.css';

export class MainFrame extends React.Component<{}, {}> {
  private readonly storage = window.localStorage;
  render(): React.ReactNode {
    return (
      <Card className="form-card">
        <div className="custom-form align-center">
          <Button
            color="danger"
            onClick={async () => {
              const checked = JSON.parse(
                this.storage.getItem('targetCheckbox') || '[]',
              );
              const date = `${this.storage.getItem(
                'year',
              )}-${this.storage.getItem('month')}-${this.storage.getItem(
                'day',
              )}`;
              let currentTime = new Date();
              const targetTime = new Date();
              targetTime.setHours(Number(this.storage.getItem('hour')));
              targetTime.setMinutes(Number(this.storage.getItem('minute')));
              targetTime.setSeconds(Number(this.storage.getItem('second')));
              const waitInterval = Number(this.storage.getItem('waitInterval'));
              while (currentTime < targetTime) {
                currentTime = new Date();
                console.log(
                  `Sleeping for ${waitInterval} ms, Current Time: ${currentTime.toString()}, Target Time: ${targetTime.toString()}`,
                );
                await new Promise((resolve) =>
                  setTimeout(resolve, waitInterval),
                );
              }
              const terminalEnabled = JSON.parse(
                this.storage.getItem('terminalEnabled') || 'false',
              );
              for (let i = 0; i < TARGETS.length; i++) {
                if (checked[i]) {
                  workOnTarget({
                    target: TARGETS[i],
                    date,
                    log: terminalEnabled ? terminalLog : console.log,
                  });
                }
              }
            }}
            className="save-button"
          >
            开始
          </Button>
        </div>
      </Card>
    );
  }
}
