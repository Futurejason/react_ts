import {
  ReportHandler,
} from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      // CLS (Cumulative Layout Shift) :累计布局偏移，得分范围0-1，指的是网页布局在加载期间的偏移量
      // 0表示没有偏移，1表示最大偏移
      getCLS(onPerfEntry);
      // FID (First Input Delay):首次输入延迟。
      getFID(onPerfEntry);
      // FCP(First Contentful Paint)首次内容绘制。
      getFCP(onPerfEntry);
      // LCP (Largest Contentful Paint)：最大内容渲染时间。
      getLCP(onPerfEntry);
      // TTFB (Time to First Byte) 首字节到达的时间点。
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
