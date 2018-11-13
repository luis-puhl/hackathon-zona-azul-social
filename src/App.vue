<template>
  <div id="app" class="page-container md-layout-column">
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <Map @showNavigation="showNavigation = true"></Map>
    </md-content>
  </div>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'app',
  components: {
    Map
  },
  data () {
     return {
      showNavigation: false,
    }
  }
}
</script>

<style scoped>
md-content {
  height: 100%;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
html, body, md-app, #app, Map {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
