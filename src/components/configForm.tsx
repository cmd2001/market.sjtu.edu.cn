import React from 'react';
import {
  GET_LIST_INTERVAL_DEFAULT,
  GET_LIST_RETRY_DEFAULT,
  POST_FORM_INTERVAL_MAX_DEFAULT,
  POST_FORM_INTERVAL_MIN_DEFAULT,
  POST_FORM_RETRY_DEFAULT,
} from '../constants/config';

export class ConfigForm extends React.Component<
  {},
  {
    getListInterval: number;
    getListRetry: number;
    postFormIntervalMin: number;
    postFormIntervalMax: number;
    postFormRetry: number;
  }
> {
  private readonly storage = window.localStorage;
  constructor(props: {}) {
    super(props);
    this.state = {
      getListInterval:
        Number(this.storage.getItem('getListInterval')) ||
        GET_LIST_INTERVAL_DEFAULT,
      getListRetry:
        Number(this.storage.getItem('getListRetry')) || GET_LIST_RETRY_DEFAULT,
      postFormIntervalMin:
        Number(this.storage.getItem('postFormIntervalMin')) ||
        POST_FORM_INTERVAL_MIN_DEFAULT,
      postFormIntervalMax:
        Number(this.storage.getItem('postFormIntervalMax')) ||
        POST_FORM_INTERVAL_MAX_DEFAULT,
      postFormRetry:
        Number(this.storage.getItem('postFormRetry')) ||
        POST_FORM_RETRY_DEFAULT,
    };
    this.storage.setItem('getListInterval', String(this.state.getListInterval));
    this.storage.setItem('getListRetry', String(this.state.getListRetry));
    this.storage.setItem(
      'postFormIntervalMin',
      String(this.state.postFormIntervalMin),
    );
    this.storage.setItem(
      'postFormIntervalMax',
      String(this.state.postFormIntervalMax),
    );
    this.storage.setItem('postFormRetry', String(this.state.postFormRetry));
  }
  render(): React.ReactNode {
    return (
      <form
        onSubmit={() => {
          this.storage.setItem(
            'getListInterval',
            String(this.state.getListInterval),
          );
          this.storage.setItem('getListRetry', String(this.state.getListRetry));
          this.storage.setItem(
            'postFormIntervalMin',
            String(this.state.postFormIntervalMin),
          );
          this.storage.setItem(
            'postFormIntervalMax',
            String(this.state.postFormIntervalMax),
          );
          this.storage.setItem(
            'postFormRetry',
            String(this.state.postFormRetry),
          );
        }}
      >
        获取列表间隔：
        <label>
          <input
            type="number"
            value={this.state.getListInterval}
            onChange={(e) => {
              this.setState({ getListInterval: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          获取列表重试次数：
          <input
            type="number"
            value={this.state.getListRetry}
            onChange={(e) => {
              this.setState({ getListRetry: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          提交表单间隔最小值:
          <input
            type="number"
            value={this.state.postFormIntervalMin}
            onChange={(e) => {
              this.setState({ postFormIntervalMin: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          提交表单间隔最大值:
          <input
            type="number"
            value={this.state.postFormIntervalMax}
            onChange={(e) => {
              this.setState({ postFormIntervalMax: Number(e.target.value) });
            }}
          />
        </label>
        提交表单重试次数：
        <label>
          <input
            type="number"
            value={this.state.postFormRetry}
            onChange={(e) => {
              this.setState({ postFormRetry: Number(e.target.value) });
            }}
          />
        </label>
        <button type="submit">保存</button>
      </form>
    );
  }
}