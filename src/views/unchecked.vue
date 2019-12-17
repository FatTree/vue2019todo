<template>
  <div class="unchecked">
    <h1><font-awesome-icon :icon="['fas','hand-peace']"/></h1>
    <list isChecked="false"/>
  </div>
</template>

<script>
import list from '@/components/list'
export default {
  name: 'unchecked',
  data () {
    return {
      ii: 'UNCHECKED'
    }
  },
  components: {list}
}
</script>
<style scoped>
</style>
