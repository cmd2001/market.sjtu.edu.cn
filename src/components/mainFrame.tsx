import React from 'react';
import { Button, Card } from 'reactstrap';
import { TARGETS } from '../constants/targets';
import workOnTarget from '../core/workOnTarget';

export class MainFrame extends React.Component<{}, {}> {
  private readonly storage = window.localStorage;
  render(): React.ReactNode {
    return (
      <Card style={{ margin: '5px' }}>
        <div
          style={{
            textAlign: 'center',
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          <Button
            style={{ width: '66%' }}
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
              console.log(checked);
              for (let i = 0; i < TARGETS.length; i++) {
                if (checked[i]) {
                  workOnTarget(TARGETS[i], date);
                }
              }
            }}
          >
            开始
          </Button>
        </div>
      </Card>
    );
  }
}
