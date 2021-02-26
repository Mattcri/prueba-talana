<template>
  <nav>
    <v-app-bar app height="70px">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="deep-purple--text lighten-2"
      />
      <v-container class="d-flex">
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          width="130px"
          height="65px"
          contain
          transition="scale-transition"
          
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary color="grey lighten-3">
      <v-list-item class="d-flex justify-center">
        <v-list-item-avatar>
          <v-icon large v-text="'mdi-account-circle'"></v-icon>
        </v-list-item-avatar>
      </v-list-item>
      <v-divider />

      <v-list rounded>
        <v-subheader>TIPOS DE MASCOTAS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon v-text="'mdi-home-circle-outline'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="'Home'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="(link, i) in links"
            :key="i"
           
            
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
   data: () => ({
    drawer: null,
    selectedItem: 1,
    links: [
      { text: 'Gatos', icon: 'mdi-paw', route: 'generation-ii' },
      { text: 'Perros', icon: 'mdi-paw', route: 'generation-iii' },
      
    ]
  }),


};
</script>

<style>
</style>