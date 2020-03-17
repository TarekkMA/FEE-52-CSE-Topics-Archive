<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="profilePicture" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <span>
            <a :href="post.authorLink" target="_blank"
              ><strong>{{ post.authorName }}</strong></a
            >
            <small> {{ postTime }}</small>
            <br />
            <small> @{{ username }}</small>
            <br />
            <p dir="rtl" v-linkified v-html="postMessage"></p>

            <p></p
          ></span>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a
              class="level-item"
              aria-label="retweet"
              :href="post.link"
              target="_blank"
            >
              <b-icon icon="link"></b-icon>
              Original Post
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
const moment = require("moment");

export default {
  props: ["post"],
  data() {
    return {
      //Placeholder
      profilePicture:
        "https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif"
    };
  },
  computed: {
    postMessage() {
      return this.post.message.replace("\n", "<br/>");
    },
    username() {
      return this.post.authorLink.replace("https://www.facebook.com/", "");
    },
    postTime() {
      let x = moment.unix(parseInt(this.post.date));
      return x.fromNow() + " - " + x.format("dddd, MMMM Do YYYY, h:mm:ss a");
    }
  },
  mounted() {}
};
</script>

<style></style>
