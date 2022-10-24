<template>
  <div id="app">
    <div class="container">
        <input type="text" name="name" v-model="name"/>
        <input type="text" name="job" v-model="job"/>
        <button @click="register">등록</button>
        <ul>
            <li v-for="item in list" :key="item.id">
                <img :src="item.avatar" />
                <p class="name-card"> {{ item.last_name }} {{ item.first_name }}</p>
                <p>{{ item.email }}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            list : [],
            name : '',
            job : ''
        }
    },
    methods: {

        async callApi() {
            const response = await axios({
                url : "https://reqres.in/api/users",
                method: "GET",
                params: {
                    page: 1,
                },
            });
            this.list = response.data.data
        },

        async register() {
           const response = await axios ({
            url : "https://reqres.in/api/users",
            method: "POST",
            data : {
                name: this.name,
                job: this.job
            }
           });
           console.log(response)
        },
    },
    created() {
        this.callApi();
    }
}
</script>

<style scoped>
.container {
  width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.container ul {
  display: flex;
}

.container ul li {
  list-style: none;
  margin: 0 20px;
}

.container ul li .name-card {
  font-size: 1.2em;
}

.container ul li p {
  text-align: left;
}

.container ul li img {
  width: 200px;
}
</style>>
