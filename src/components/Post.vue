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
          <div dir="rtl" style="direction:rtl;">
            <p v-html="postMessage" v-linkified></p>
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="far fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="far fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="far fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
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
    }
  },
  mounted() {}
};
</script>

<style></style>
