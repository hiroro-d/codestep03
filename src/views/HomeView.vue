<template>
  <div class="home">
    <div class="max-w-screen-md w-full mx-auto">
      <HeaderComp/>
      <TopBtnComp/>
    </div>
    <main>
      <MainVisualComp/>
      <div class="container p-5 max-w-screen-md w-full mx-auto">
        <AboutComp/>
        <WorksComp/>
        <NewsComp/>
        <ContactComp/>
      </div>
    </main>
    <FooterComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import MainVisualComp from '@/components/MainVisualComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import WorksComp from '@/components/WorksComp.vue'
import NewsComp from '@/components/NewsComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import TopBtnComp from '@/components/TopBtnComp.vue'


export default {
  self_name: 'HomeView',
  components: {
    HeaderComp,
    MainVisualComp,
    AboutComp,
    WorksComp,
    NewsComp,
    ContactComp,
    FooterComp,
    TopBtnComp,
  }
}
</script>
