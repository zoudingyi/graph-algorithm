<template>
  <div>
    <Header></Header>
    <Content>
      <router-view />
    </Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Content from './components/layout/Content.vue';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
};
</script>
