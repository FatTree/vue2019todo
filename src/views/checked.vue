<template>
  <div class="checked">
    <h1>CHECKED</h1>
    <list isChecked="true"/>
  </div>
</template>

<script>
import list from '@/components/list'
export default {
  name: 'checked',
  data () {
    return {
      msg: 'this is checked component'
    }
  },
  components: {list}
}
</script>
<style scoped>
</style>
