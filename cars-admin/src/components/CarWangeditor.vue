<template>
  <div ref="editorDom" style="text-align: left;"></div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'CarWangeditor',
  data () {
    return {
      editor: null
    }
  },
  props: {
    context: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.createEditor()
  },
  watch: {
    context (newV) {
      this.editor.txt.html(newV)
    }
  },
  methods: {
    // 富文本
    createEditor () {
      this.editor = new E(this.$refs.editorDom)
      this.editor.customConfig.onchange = html => {
        this.$emit('update:context', html)
      }
      this.editor.create()
    },
    // 清除值
    clear () {
      this.editor.txt.clear()
    }
  }
}

</script>
<style lang='scss' scoped>
</style>