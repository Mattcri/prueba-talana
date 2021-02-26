<template>
  <v-container>

    <div class="spinner" v-show="load">
      <ring-loader :loading="load" class="spinner__element" :color="'#2222BF'" :size="100" />
    </div>

    <v-row v-if="!load" class="d-flex justify-center">
      <v-col cols="12" md="10" >
        <v-text-field
          v-model="search"
          label="Búsca tu Producto"
          placeholder="Por mascota"
          filled
          rounded
          dense
        >
        </v-text-field>
      </v-col>
    </v-row>

  <v-row v-if="!load">
    <v-col cols="12" md="6" v-for="(product, index) in filterProducts" :key="index">

    <v-card
    
    class="mx-auto my-4"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      contain
      :src="product.photo"
    ></v-img>

    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle> {{ product.abstract }} </v-card-subtitle>
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="mt-6 subtitle-1">
        $ {{ product.price }}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title :class="product.stock >= 1 ? 'teal--text accent-3' : 'red--text darken-3' " >
      {{ product.stock >= 1 ? 'Disponible' : 'Sin Stock' }} 

    </v-card-title>

  </v-card>

    </v-col>
  </v-row>

  </v-container>

</template>

<script>
export default {
  name: 'ListProducts',
  data: () => ({
    search: '',
  }),
  props: {
    products: Array,
    load: Boolean,
  },
  computed: {
    filterProducts () {
      return this.products.filter(prod => {
        return prod.name.toLowerCase().includes(this.search.toLowerCase()) 
      })
    },

  },

}
</script>

<style lang="scss" scoped>
  .spinner {
    height: 75vh;
    display: flex;
    &__element {
      margin: auto;
    }
  }

</style>