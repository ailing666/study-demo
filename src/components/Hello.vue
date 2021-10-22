<template>
  <div id="container"></div>
</template>


<script>
import { Graph } from '@antv/x6';
export default {
  name: 'Hello',
  mounted() {
    const data = {
      nodes: [
        {
          id: 'node1',
          x: 40,
          y: 40,
          width: 100,
          height: 40,
          attrs: {
            body: {
              fill: '#2ECC71',
              stroke: '#000',
              strokeDasharray: '10,2',
            },
            label: {
              text: 'Hello',
              fill: '#333',
              fontSize: 13,
            },
          },
        },
        {
          id: 'node2',
          x: 180,
          y: 240,
          width: 100,
          height: 40,
          attrs: {
            body: {
              fill: '#F39C12',
              stroke: '#000',
              rx: 16,
              ry: 16,
            },
            label: {
              text: 'World',
              fill: '#333',
              fontSize: 18,
              fontWeight: 'bold',
              fontVariant: 'small-caps',
            },
          },
        },
      ],
      edges: [
        {
          source: 'node1',
          target: 'node2',
          shape: 'shadow-edge',
          attrs: {
            line: {
              stroke: 'orange',
            },
          },
        },
      ],
    };
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
    graph.fromJSON(data);
    // 负数是缩小，正数是放大
    graph.zoom(-0.1);
    // 节点的平移(x,y)
    graph.translate(100, 40);
    // 居中
    graph.centerContent();
  },
};
</script>

<style>
</style>