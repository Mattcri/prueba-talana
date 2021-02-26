<template>
  <v-app>
    <cp-nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CpNavBar from '@/components/CpNavBar';
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    CpNavBar,
  },

  data: () => ({
    //
  }),
};
</script>
