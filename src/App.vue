<template>
  <div id="app">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item href="/">
          <span class="title">FEE 52 Topics Archive</span>
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-dropdown
          v-if="topics.length != 0"
          :label="'Selected Topic: ' + selectedTopicName"
          hoverable
          active
        >
          <b-navbar-item
            href="#"
            v-for="(topic, i) in topics"
            :key="topic.name"
            v-on:click="selectedIndex = i"
            active
          >
            {{ topic.name }}
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="#" v-else>
          Loading Topics...
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item
          href="https://github.com/TarekkMA/FEE-52-CSE-Topics-Archive/tree/gh-pages"
          target="_blank"
          active
        >
          <b-icon icon="github-circle"></b-icon>
          <span>Web Page</span>
        </b-navbar-item>
        <b-navbar-item
          href="https://github.com/TarekkMA/FEE-52-CSE-Topics-Archive"
          target="_blank"
          active
        >
          <b-icon icon="github-circle"></b-icon>
          <span>Topics Scrapper</span>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
      <div v-if="selectedTopic">
        <Post
          v-for="post in selectedTopic"
          :post="post"
          :key="post.date"
        ></Post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post";
const axios = require("axios").default;

export default {
  name: "App",
  components: {
    Post
  },
  data() {
    return {
      topics: [],
      selectedIndex: -1,
      selectedTopic: null,
      topicsMap: {} //index: topic
    };
  },
  computed: {
    selectedTopicName() {
      return this.selectedIndex == -1
        ? "None"
        : this.topics[this.selectedIndex].name;
    }
  },
  watch: {
    selectedIndex(newVal) {
      this.getTopic(this.topics[newVal].url, newVal);
      this.selectedTopic = this.topicsMap[newVal];
    }
  },
  mounted() {
    axios
      .get(
        "https://api.github.com/repos/TarekkMA/FEE-52-CSE-Topics-Archive/contents/topics?ref=gh-pages"
      )
      .then(res => {
        this.topics = res.data.map(x => {
          return { name: x.name.replace(".json", ""), url: x.download_url };
        });
      });
  },
  methods: {
    getTopic(url, index) {
      axios
        .get(url)
        .then(res => res.data)
        .then(topic => {
          this.topicsMap[index] = topic;
          this.selectedTopic = this.topicsMap[index];
        });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
