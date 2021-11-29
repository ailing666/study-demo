<template>
  <div id="container"></div>
</template>


<script>
import { Shape, Graph } from '@antv/x6';
export default {
  name: 'Hello',
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
    const rect1 = new Shape.Rect({
      x: 100,
      y: 200,
      width: 80,
      height: 40,
      angle: 30,
      attrs: {
        body: {
          fill: 'blue',
        },
        label: {
          text: 'Hello',
          fill: 'white',
        },
      },
    });
    const rect2 = new Shape.Rect({
      x: 400,
      y: 200,
      width: 80,
      height: 40,
      angle: 30,
      attrs: {
        body: {
          fill: 'blue',
        },
        label: {
          text: 'Hello',
          fill: 'white',
        },
      },
    });
    graph.addNode(rect1);
    graph.addNode(rect2);

    // 创建线
    const edge = new Shape.Edge({
      // // 源节点
      // source: rect1,
      // // 目标节点
      // target: rect2,

      // source: { cell: rect1, port: 'out-port-1' }, // 源节点和链接桩 ID
      // target: { cell: rect2, port: 'in-port-1' }, // 目标节点 ID 和链接桩 ID

      source: rect1, // 源节点 ID
      target: { x: 100, y: 120 }, // 目标点
    });

    // 添加到graph
    graph.addEdge(edge);
  },
};
</script>

<style>
</style>