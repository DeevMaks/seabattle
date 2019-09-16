<template>
  <section class="seabattle">
    <div class="seabattle__content">

    </div>
    <div class="seabattle__chat">
      <chat />
    </div>
  </section>
</template>

<script>
import chat from './Chat.vue'
export default {
  components: {
    chat
  }
}
</script>

<style lang="scss" scoped>
  .seabattle {
    display: flex;

    &__content {
      width: 80%;
    }

    &__chat {
      width: 20%;
      height: 100vh;
      border-left: 1px solid;
    }
  }
</style>
