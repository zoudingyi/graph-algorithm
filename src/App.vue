<template>
  <div>
    <Header></Header>
    <AppContainer>
      <router-view />
    </AppContainer>
    <Footer></Footer>
  </div>
</template>

<script>
import AppContainer from './components/layout/AppContainer.vue';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    AppContainer,
    Footer
  }
};
</script>
