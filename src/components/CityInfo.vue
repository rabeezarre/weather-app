<template>
  <div v-if:="info" class="w-4/5 mt-2 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <div class="flex items-center justify-center">
      <img v-bind:src="'https:'+ info.current.condition.icon"/>
    </div>
    <b>Current temperature:</b>
    {{info.current.temp_c + '°C'}}
    <br>
    <b>Feels like:</b>
    {{info.current.feelslike_c + '°C'}}
    <br>
    <b>Condition:</b>
    {{info.current.condition.text}}
    <br>
    <b>Wind:</b>
    {{info.current.wind_mph + ' m/h'}}
    <br>
    <b>Humidity:</b>
    {{info.current.humidity + '%'}}


  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "CityInfo",
  props: {
    city: String
  },
  setup(props) {
    const store = useStore()
    const info = computed(() => store.state.citiesInfo[props.city])
    return {
      info
    }
  }
}
</script>