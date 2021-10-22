<template>
  <div id="container"></div>
</template>


<script>
import { Graph, Shape } from '@antv/x6';
export default {
  name: 'Cell',
  mounted() {
    const graph = new Graph({
      container: document.getElementById('container'),
      width: 800,
      height: 600,
      // 画布平移
      panning: true,

      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
    });
    const rect = new Shape.Rect({
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'rect',
      zIndex: 2,
    });

    const circle = new Shape.Circle({
      id: 'node2',
      x: 280,
      y: 200,
      width: 60,
      height: 60,
      label: 'circle',
      zIndex: 2,
    });

    const edge = new Shape.Edge({
      id: 'edge1',
      source: rect,
      target: circle,
      zIndex: 1,
    });
    // 矩形
    graph.addNode(rect);
    // 圆形
    graph.addNode(circle);
    // 线
    graph.addEdge(edge);

    const rect2 = new Shape.Rect({
      x: 40,
      y: 300,
      width: 100,
      height: 40,
      attrs: {
        rect: {
          // 使用 rect css 选择器替代预定义的 body 选择器
          fill: '#2ECC71',
          stroke: '#000',
        },
        text: {
          // 使用 text css 选择器替代预定义的 label 选择器
          text: 'rect',
          fill: '#333',
          fontSize: 13,
        },
      },
    });
    // 将label改为hello
    rect2.attr('label/text', 'hello');
    graph.addNode(rect2);

    // 添加节点
    graph.addNode({
      shape: 'rect',
      x: 200,
      y: 60,
      width: 70,
      height: 70,
      markup: [
        {
          tagName: 'rect',
          selector: 'r1',
        },
        {
          tagName: 'circle',
          selector: 'c1',
        },
      ],
      attrs: {
        r1: {
          width: 30,
          height: 30,
          stroke: '#ccc',
          rx: 12,
          ry: 12,
        },
        c1: {
          r: 10,
          cx: 15,
          cy: 15,
          fill: '#000',
        },
      },
    });

    const rect3 = new Shape.Rect({
      x: 40,
      y: 500,
      width: 100,
      height: 40,
      data: {
        bizID: 125,
        date: '20200630',
        price: 89.0,
      },
    });
    graph.addNode(rect3);
    Shape.Rect.config({
      width: 80,
      height: 40,
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        body: {
          fill: '#fff',
          stroke: 'red',
          strokeWidth: 2,
        },
        label: {
          fontSize: 14,
          fill: '#333',
          fontFamily: 'Arial, helvetica, sans-serif',
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
        },
      },
    });
    const rect4 = graph.addNode({
      x: 100,
      y: 100,
      attrs: {
        label: {
          text: 'rect',
        },
      },
    });
    graph.addNode(rect4);

    const edge2 = graph.addEdge({
      shape: 'double-edge',
      source: rect2,
      target: circle,
    });
    graph.addNode(edge2);
  },
};
</script>
<style scoped>
</style>