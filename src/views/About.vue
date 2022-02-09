<template>
  <div class="about">
    <h1>This is an about page</h1>



    <div>
      <table>
        <th>Avatar</th>
        <th>Email</th>
        <th>Ad</th>
        <th>Soyad</th>

        <tr v-for="(item, itemIndex) in apiResult" :key="itemIndex">
          <td><img v-bind:src="item.avatar"/></td>
          <td><a v-bind:href="'mailto:'+ item.email">{{item.email}}</a></td>
          <td>{{item.first_name}}</td>
          <td>{{item.last_name}}</td>
        </tr>
      </table>

    </div>
  </div>
</template>


<script>

import axios from "axios";

export default {
  name: "About",
  data(){
    return {
      apiResult: {}
    }
  },
  methods: {
    getDataFromApi() {
      // let url = "https://www.metaweather.com/api/location/search/?query=san"
      // let url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
      let url = "https://reqres.in/api/users?page=1"
      let promise = axios.get(url)
      promise.then((res)=>{
        console.log(res.data.data)
        this.apiResult = res.data.data
      })
    },

  },
  mounted() {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'GET';
    this.getDataFromApi()
  }
}
</script>