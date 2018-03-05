antv蚂蚁金服数据可视化方案
======================
G2 以数据驱动的，具有高度易用性和扩展性的可视化图形语法
----------------------
### 一、 基本介绍
![](https://github.com/wenyuanzhuo/g2/raw/master/g2.png)
#### 1.坐标轴 AXES
在直角坐标系下，为 x 轴和 y 轴，在极坐标轴下，由角度和半径 2 个维度构成。
轴线（line）、刻度线（tickLine）、刻度文本（label）、标题（title）网格线（grid）
#### 2.图例 LEGEND
- shape, color, size 这三个图形属性如果判断接收的参数是数据源的字段时，会自动生成不同的图例；
- shape 属性，会根据不同的 shape 类型生成图例；
- color 属性, 会赋予不同的图例项不同的颜色来区分图形；
- size 属性, 在图例上显示图形的大小。
#### 3.提示信息 TOOLTIP
- title 标题，默认tooltip 的标题取第一项的 title
- name 标题
- value 值
- color 图例项对应的颜色
- index 索引值 所以在回调函数中可以通过修改这几个值，达到自定义tooltip 的目的
```
chart.tooltip(true, {
  containerTpl: '<div class="g2-tooltip">'
    + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
    + '<ul class="g2-tooltip-list"></ul></div>',
  itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>'
});
```
必须要的class
```
<div class="g2-tooltip">
  <!-- tooltip 标题 -->
  <div class="g2-tooltip-title" style="margin:10px 0;"></div>
  <!-- tooltip 内容列表容器 -->
  <ul class="g2-tooltip-list"></ul>
</div>
```
#### 4.辅助元素 GUIDE
- line：辅助线（可带文本），例如表示平均值或者预期分布的直线；
- image：辅助图片，在图表上添加辅助图片；
- text：辅助文本，指定位置添加文本说明；
- region：辅助框，框选一段图区，设置背景、边框等；
- html：辅助 html，指定位置添加自定义 html，显示自定义信息；
- arc：辅助弧线。
```
chart.guide().line({
  start: {object} | {function} | {array}, // 辅助线起始位置，值为原始数据值，支持 callback
  end: {object} | {function}|| {array},// 辅助线结束位置，值为原始数据值，支持 callback
  lineStyle: {
    stroke: '#999', // 线的颜色
    lineDash: [ 0, 2, 2 ], // 虚线的设置
    lineWidth: 3 // 线的宽度
  }, // 图形样式配置
  text: {
    position: 'start' | 'center' | 'end' | '39%' | 0.5, // 文本的显示位置
    autoRotate: {boolean}, // 是否沿线的角度排布，默认为 true
    style: {
      // 文本图形样式配置
    },
    content: {string}, // 文本的内容
    offsetX: {number}, // x 方向的偏移量
    offsetY: {number} // y 方向的偏移量
  } // 文本配置
});
```
```
const DataView = DataSet.DataView;
$.getJSON('/assets/data/diamond.json', function(data) {
  const dv = (new DataView()).source(data);
  const caratAvg = dv.mean('carat'); // 计算克拉数均值
  const priceAvg = dv.mean('price'); // 计算价格均值
  const chart = new G2.Chart({
    container: 'c5',
    forceFit: true,
    height: 450
  });
  chart.source(data);
  chart.point().position('carat*price');
  // 坐标点
  const point = [ 3.5, 12000 ];
  //html字符串
  const tooltipHtml = "<div style='border: 2px solid #0f8de8;width: 50px;height: 26px;color:         #0f8de8;position: relative;'>" +
      "<span style='color:#63c6c2;font-size:15px'>异常值</span>" +
      "<div style='width: 0;height: 0;border-bottom: 8px solid #0f8de8;border-right:10px solid       transparent;position: absolute;top: 16px;left: 46px;'></div>" +
      "</div>";
  chart.guide().html({
    position: point, 
    html: tooltipHtml, 
    alignX: 'right',
    alignY: 'bottom',
    offsetX: 10
  });
  chart.render(); // 图表渲染
});
```
```
![](https://github.com/wenyuanzhuo/g2/raw/master/WX20180305-115818@2x.png)
```
### 二、api的使用 性能（渲染和重绘）与老版本比较

### 三、结合react使用 
