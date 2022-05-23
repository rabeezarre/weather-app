<template>
  <div class="flex flex-col w-1/5 mb-5 justify-start items-center">
    <button class="w-4/5 inline-block px-7 py-3 border-2 border-blue-600 text-blue-600 font-medium text-s leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            type="button" v-on:click="getCityInfo(city)">
      {{city}}
    </button>
    <CityInfo :city="city"/>
  </div>
</template>

<script>
import {useStore} from "vuex";
import CityInfo from "@/components/CityInfo";

export default {
  components: {CityInfo},
  props: {
    city : String
  },
  setup() {
    const store = useStore()
    return {
      getCityInfo: (city) => store.dispatch('getCityInfo', city)
    }
  }
}
</script>

<!--<style scoped>-->
<!--button {-->
<!--  width: 200px;-->
<!--  background-color: #4CAF50;-->
<!--}-->
<!--</style>-->