<template>
  <list-products class="mt-8" :products="products" :load="load" />
</template>

<script>
import ListProducts from '@/components/ListProducts'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    ListProducts
  },
  data: () =>({
    load: false,
  }),
  computed: {
    ...mapState(['products']),
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created () {
    this.load = true
    setTimeout( () => {
      this.getProducts().finally( () => this.load = false )
    }, 3000 )
  }


}
</script>
