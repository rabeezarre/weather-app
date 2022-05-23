import { createStore } from 'vuex'

const store = createStore({
    state: {
        citiesInfo: {}
    },
    mutations: {
        addCityInfo (state, payload) {
            state.citiesInfo[payload.city] = payload.json
        },
        removeCityInfo (state, payload) {
            delete state.citiesInfo[payload]
        }
    },
    actions: {
        getCityInfo (context, city) {
            if (!(city in context.state.citiesInfo)) {
                fetch('https://api.weatherapi.com/v1/current.json?key=77759dbfac0444c5ab2150250221805&q=' + city)
                      .then(response => response.json())
                      .then(json => {
                          context.commit("addCityInfo", {city, json})
                      })
            } else {
                context.commit('removeCityInfo', city)
            }
        }
    }
})

export default store
