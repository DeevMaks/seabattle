<template>
  <section class="chat">
    <ul class="chat__messages">
      <li
        class="chat__message"
        v-for="message in messages"
        v-bind:class="{'chat__message-me': (message.author === me)}"
      >
        <span
          class="chat__author"
          v-bind:class="{'chat__author-me': (message.author === me)}"
        >{{ message.author }}</span>
        <span class="chat__text">{{ message.message }}</span>
      </li>
    </ul>
    <div class="chat__form">
      <form @submit="send">
        <input
          class="chat__me"
          type="text"
          v-model="me"
        />
        <textarea
          class="chat__textarea"
          v-model="message.text"
        ></textarea>
        <input type="submit" class="chat__send" value="Отправить">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: {
        text: ''
      }
    }
  },
  computed: {
    messages: {
      get() {
        return this.$store.getters.messages
      },
    },
    me: {
      get() {
        return this.$store.getters.me
      },
      set(name) {
        this.$store.commit('setName', name)
      }
    }
  },
  methods: {
    send() {
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat {
    padding-top: 30px;
    overflow-y: auto;

    &__messages {
      font-size: 0.8rem;
      max-height: calc(100vh - 180px);
    }

    &__message {
      padding: 10px 15px;

      &:nth-child(even) {
        background-color: rgba(0,0,0,.1);
      }

      &-me{
        text-align: right;
      }
    }

    &__author {
      color: #d2b63d;
      display: block;
      margin-bottom: 5px;

      &::after{
        content: ':';
      }

      &-me{
        color: #90be40;
      }
    }

    &__text {
      font-style: italic;
      margin: 0 15px
    }

    &__form {
      position: absolute;
      bottom: -60px;
    }

    &__me{
      width: calc(100% - 4px);
      background-color: rgba(255,255,255,.05);
      border: 1px solid;
      color: #90be40;
      font-size: 0.8rem;
    }

    &__textarea{
      width: calc(100% - 4px);
      background-color: rgba(255,255,255,.05);
      border: 1px solid;
      color: #d2b63d;
      height: 80px;
      border: none;
      padding: 5px;
      font-size: 0.8rem;
    }

    &__send{
      width: 100%;
      background-color: #90be40;
      border: 1px solid #90be40;
      color: #ffffff;
      height: 40px;
    }
  }
</style>
