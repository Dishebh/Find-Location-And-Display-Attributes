<template>
  <div class = "section">
    <div class = "container">
      <div class = "columns" >
        <div class = "column" >
          <simple-upload />
        </div>
        <div class = "column" >

        <dropzone />

        </div>
      </div>
    </div>
    <canvas id="mycanvas2" count="2"></canvas>
    <chartjs-line :datalabel="first_label" :backgroundcolor="first_backgroundcolor" :bordercolor="first_bordercolor" target="mycanvas2" :linetension="first_tension" :fill="true"></chartjs-line>
    <chartjs-line :datalabel="second_label" :data="second_data" target="mycanvas2" :fill="true"></chartjs-line>
  </div>

</template>

<script>
import SimpleUpload from './SimpleUpload.vue';

import Dropzone from './Dropzone.vue';

export default {
  name: 'app',
  components: {
    SimpleUpload, Dropzone
  },
  data () {
    return {
      first_label: "Online Booking",
      first_tension: 0,
      first_backgroundcolor : "rgba(75,192,192,0.1)",
      first_bordercolor : "#00c853",
      second_label: "Car Cancellation",
      second_data: [50, 40, 90, 60],
      }
  }
}
</script>

<style>

</style>
