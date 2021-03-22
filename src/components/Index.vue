<template>
  <div>
     <div class="wrapper">
        <div class="container">
          <Sidebar/>
          <div class="main-section">
                <div class="main-auto">
                    <h3>Welcome to Gemnote, Ashley!</h3>
                    <div class="card-section">
                        <div class="number-stat">
                            <div class="num-order">
                                <p>Total Number of orders this month</p>
                                <div>
                                    <a>2,736</a>
                                </div>
                            </div>
                            <div class="shipments">
                                <p>Total Number of shipments/month</p>
                                <div>
                                    <a>364</a>
                                    <button>View Orders</button>
                                </div>
                            </div>
                        </div>
                        <div class="inventory">
                            <div class="round">
                                
                            </div>
                            <div class="view-inventory">
                                <p>Current Inventory</p>
                                <div>
                                    <a>364</a>
                                    <button>View Orders</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="trending">
                        <div class="trending-box">
                          <p>Trending gifts in your store</p>
                          <div class="trend-content">
                            <div class="trending-flex">
                                <img class="trending-item" src="../assets/img/shirt.png"/>
                                <img class="trending-item" src="../assets/img/bag.png"/>
                                <img class="trending-item" src="../assets/img/collection.png"/>
                                <img class="trending-item" src="../assets/img/drink.png"/>
                            </div>
                            <div class="trending-btn">
                                <button> Send a gift </button>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="gift-chart">
                        <div class="chart-box">
                            <a>Trending gifts sent this year</a>
                            <button> Download Report </button>
                            <div class="chart">
                              <!-- Chart Diagram -->
                              <D3BarChart
                                :config="chart_config"
                                :datum="chart_data"
                              ></D3BarChart>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// Import Sidebar
import Sidebar from './Sidebar.vue'
// Import Chart Liabary

import { D3BarChart } from 'vue-d3-charts';
export default {
  name: 'Index',
  components: {
    Sidebar,
    D3BarChart
  },
  data() {
    return {
      chart_data: [
        {hours: 1648, production: 9613, year: 'Jan'},
        {hours: 2479, production: 6315, year: 'Feb'},
        {hours: 2000, production: 6315, year: 'Mar'},
        {hours: 2200, production: 6315, year: 'Apr'},
        {hours: 2500, production: 6315, year: 'May'},
        {hours: 3000, production: 2541, year: 'June'},
        {hours: 3400, production: 2541, year: 'July'},
        {hours: 3000, production: 2541, year: 'Aug'},
        {hours: 3200, production: 2541, year: 'Sept'},
        {hours: 3800, production: 2541, year: 'Oct'},
        {hours: 2300, production: 2541, year: 'Nov'},
        {hours: 1000, production: 2541, year: 'Dec'},
        {hours: 1500, production: 2541, year: ''}
      ],
      chart_config: {
        key: 'year',
        currentKey: '2004',
        values: ['hours'],
        axis: {
          yTicks: 6
        },
        color: {
          default: '#dfdfdf',
          current: '#41B882'
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
