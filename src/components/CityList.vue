<template>
  <div class="flex flex-wrap justify-around">
      <CityItem
        v-for="city in cities" :key="city"
        v-bind:city="city"
      />
  </div>
</template>

<script>
import CityItem from '@/components/CityItem'
export default {
  props: ['cities'],
  components: {
    CityItem
  }
}
</script>