<template>
  <BarChart :chartdata="chartData" :options="chartOptions"></BarChart>
</template>

<script>
import BarChart from "../../components/BarChart.vue";
export default {
  name: "Dashboard",
  props: {},
  components: { BarChart },
  data: () => ({
    chartData: {
      labels: ["January", "February"],
      datasets: [
        {
          label: "David",
          backgroundColor: "#f87979",
          data: [40, 20],
        },

        {
          label: "Levi",
          backgroundColor: "#00FF00",
          data: [60, 25],
        },
      ]},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
  }),
}
</script>