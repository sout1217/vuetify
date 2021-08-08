<template>
  <div class="btn-div">
    <div class="btn-tab">
      <!-- header -->
      <slot name="header"></slot>

      <!-- content -->
      <span>Content</span>

      <!-- nav -->
      <nav>
        <slot name="nav"></slot>
      </nav>

      <!-- bind -->
      <slot name="img" :childData="childData"> </slot>

      <!-- default -->
      <slot></slot>

      <slot name="age" :childData="childData" :something="somethingData"></slot>
      <slot name="gender" v-bind="somethingData"></slot>
      <!-- footer -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonTab',
  data() {
    return {
      childData: {
        username: 'martin',
        age: 14,
        gender: 'male',
      },
      somethingData: {
        message: 'Hello Something',
        message2: 'Hello Anything',
      },
    }
  },
}
</script>

<style scoped>
.btn-tab {
  background-color: blueviolet;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
