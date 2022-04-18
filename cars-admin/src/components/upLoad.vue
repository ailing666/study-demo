<template>
  <el-upload
    class="avatar-uploader"
    action="http://up-z2.qiniup.com"
    :show-file-list="false"
    :data="upLoadData"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
import { GetQiniuToken } from '@/api/common'
export default {
  name: 'UpLoad',
  props: {
    // 接收到的数据属于“静态数据”，是单向数据，不能反向修改
    imgUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageUrl: '',
      upLoadData: {}
    }
  },
  beforeMount() {
    this.getQiniuToken()
  },
  watch: {
    imgUrl: {
      handler(newValue) {
        this.imageUrl = newValue
      }
    }
  },
  methods: {
    getQiniuToken() {
      // 在工作中，
      const requestData = {
        ak: 'om140cvYaZmCBoZbLdA9MZ-qu2H12HAsPecOP4zU',
        sk: 'aXnHvHY0GA6rNVN8NJMMKL7_fkRmHsc7U0kGmbUI',
        buckety: 'lovezero'
      }
      GetQiniuToken(requestData).then(response => {
        const data = response.data
        this.upLoadData.token = data.token
      })
    },
    handleAvatarSuccess(res) {
      this.imageUrl = `http://raia7li0w.hn-bkt.clouddn.com/${res.key}`
      this.$emit('update:value', this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  width: 178px;
  height: 178px;
  overflow: hidden;
  border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
