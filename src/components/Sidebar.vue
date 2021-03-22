<template>
    <div class="sidebar">
        <div class="sidebar-top">
            <img src="../assets/img/logo.png"/>
            <img src="../assets/img/menu.png" @click="navigation" class="menu"/>
            <h3 id="username">Ashley Wong</h3>
        </div>
        <div class="sidebar-nav" id="navbar">
            <ul>
                <li class="active"><router-link to="/">Dashboard</router-link></li>
                <li><router-link to="/">Order</router-link></li>
                <li><router-link to="/">Send a gift</router-link></li>
                <li><router-link to="/">Users</router-link></li>
                <li><router-link to="/">Integrations</router-link></li>
                <li><router-link to="/">Setting</router-link></li>
                <li><router-link to="/">Logout</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    navigate: true
    }
  },
  methods: {
    navigation(){
        if(this.navigate == true)
        {
            this.navigate = false
            document.getElementById("username").style.display = "block"; 
            document.getElementById("navbar").style.display = "block"; 
        }else{
            this.navigate = true
            document.getElementById("username").style.display = "none"; 
            document.getElementById("navbar").style.display = "none";
            document.getElementById("navbar").style.height = "100vh";  
        }
    }
  },
}
</script>

<style scoped>

</style>
