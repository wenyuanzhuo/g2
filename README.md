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
#### 辅助元素 GUIDE
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
### 二、api的使用 性能（渲染和重绘）与老版本比较

### 三、结合react使用 
