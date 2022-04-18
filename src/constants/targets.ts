export interface Target {
  name: string;
  getUrl: string;
  lineType: string;
  postUrl: string;
}
export const TARGETS: Target[] = [
  {
    name: '玉兰苑罗森',
    getUrl:
      'https://dailyreport.sjtu.edu.cn/market/frontend/market/schedule/list',
    lineType: 'YLYLS',
    postUrl:
      'https://dailyreport.sjtu.edu.cn/market/frontend/market/appointment/save/',
  },
  {
    name: '西区教育超市',
    getUrl:
      'https://dailyreport.sjtu.edu.cn/market/frontend/market/schedule/list',
    lineType: 'XQJYCS',
    postUrl:
      'https://dailyreport.sjtu.edu.cn/market/frontend/market/appointment/save/',
  },
  {
    name: '东区教育超市',
    getUrl:
      'https://dailyreport.sjtu.edu.cn/market/frontend/market/schedule/list',
    lineType: 'DQJYCS',
    postUrl:
      'https://dailyreport.sjtu.edu.cn/market/frontend/market/appointment/save/',
  },
  {
    name: '二餐理发',
    getUrl:
      'https://dailyreport.sjtu.edu.cn/haircut/frontend/bus/schedule/list',
    lineType: 'TWO',
    postUrl:
      'https://dailyreport.sjtu.edu.cn/haircut/frontend/bus/appointment/save/',
  },
  {
    name: '三餐理发',
    getUrl:
      'https://dailyreport.sjtu.edu.cn/haircut/frontend/bus/schedule/list',
    lineType: 'THIRD',
    postUrl:
      'https://dailyreport.sjtu.edu.cn/haircut/frontend/bus/appointment/save/',
  },
  {
    name: '四餐理发',
    getUrl:
      'https://dailyreport.sjtu.edu.cn/haircut/frontend/bus/schedule/list',
    lineType: 'FOURTH',
    postUrl:
      'https://dailyreport.sjtu.edu.cn/haircut/frontend/bus/appointment/save/',
  },
];
