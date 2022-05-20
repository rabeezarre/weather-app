<template>
  <div class="shadow-md py-10 bg-blue-700 mb-8">
    <h1 class="text-3xl font-bold underline inline text-white ml-8">
      Weather forecast
    </h1>
    <h2 class="text-3xl font-normal inline ml-4 text-white">{{currentDate()}}</h2>
  </div>

  <CityList
    v-bind:cities="cities"
  />
</template>

<script>
import CityList from '@/components/CityList'
export default {
  name: 'App',
  data() {
    return {
      cities: ['Karagandy', 'Batman', 'Okay', 'Dinosaur', 'Bukhalovo']
    }
  },
  components: {
    CityList
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  }
}
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
