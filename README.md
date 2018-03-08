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
![](https://github.com/wenyuanzhuo/g2/raw/master/WX20180305-115818@2x.png)
#### 5.图表事件、交互
![](https://github.com/wenyuanzhuo/g2/raw/master/event.png)
- chart.on('eventType', ev => {}); // 绑定事件
- chart.off('eventType', ev => {}); // 移除事件
- chart.on('tooltip:show', ev => {}); // tooltip 展示
- chart.on('tooltip:hide', ev => {}); // tooltip 隐藏
- chart.on('tooltip:change', ev => {}); // tooltip 内容发生变化的时候
- chart.on('point:click', ev => {});
#### 6.图表交互
- active激活
- select选中
```
geom.active(false); // 关闭默认响应
geom.active(true); // 开启默认响应

geom.select([true,] {
  mode: 'single' || 'multiple', // 选中模式，单选、多选
  style: {}, // 选中后 shape 的样式
  cancelable: true | false, // 选中之后是否允许取消选中，默认允许取消选中
  animate: true | false // 选中是否执行动画，默认执行动画
});
```

### 二、api的使用 性能（渲染和重绘）与老版本比较,以及与其他可视化工具的对比
![](https://github.com/wenyuanzhuo/g2/raw/master/data.png)
> 1.数据流：加载数据->对数据分组->保存原始数 ->数据数值化->归一化操作* ->计算绘制点->映射图形属性->渲染

> 2.Antv3.0 通过合并 Canvas 图层、数据处理抽离、不销毁实例实现重绘(重绘时间大大降低的原因)等措施，大幅度提升了图表的渲染性能，chart的任意元素都可以捕获鼠标和触摸时间，以及监听事件，实现多表交互。

> 3.对比

>> (1).antv g2 ————灵活的图形语法能力，抽离数据处理模块,使得chart更加注重高交互，数据行为解耦，维护成本降低
>>> 单独抽离数据处理模块 ———— DataSet(数据连接， 数据处理， 状态量管理)



>> (2). Echarts (canvas) ————拖拽从计算， 动态图表类型切换(折线，柱状)。 支持千万级量级数据,新增的SVG渲染方式，在内存占用方面有很好的表现，以折线图、柱状图、饼图为例，SVG渲染占用的内存是Canvas渲染的十分之一 所以移动端现在可以更好的支持渲染 。 支持PPT中使用Echarts


>> (3).highchart (svg) ————个人觉得好看比Echart,配置更加灵活 但是文档翻译不全，tm企业用还要买版权

>> (4). D3.js ————自由度最高，大量的数据处理、布局算法和计算图形的工具方法，但是api太过底层复用性很低，开发成本过大
### 三、结合react使用 
