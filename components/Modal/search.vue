<template>
  <div class="search-container">
    <input id="search-toggle" type="checkbox">
    <label class="search-backdrop" for="search-toggle" />
    <div class="search-content">
      <form id="search-form" action="">
        <input type="search" class="input-search" placeholder="Input what you want to search" required>
        <button id="searchsubmit" type="submit" class="fa fa-search fa-4x" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Basket',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
  }
}
</script>
