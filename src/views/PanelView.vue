<template>
  <div id="panel">
    <div class="module">
        {{ name }}, {{ id }}
    </div>
    <ul >
        <li  v-for="item in list" :key="item.id" style="margin-top:10px; list-style:none">
            <div class="img_box">
                <img :src="item.avatar" alt="사람들 사진" />
            </div>
            <p>
                이름 : {{ item.first_name }} {{ item.last_name }}
            </p>
            <p>
                email : {{ item.email }}
            </p>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

    computed : {
        ...mapGetters(["list"]),
        ...mapGetters({name: "user/name", id : "user/id"})
    }
}
</script>

<style>

</style>