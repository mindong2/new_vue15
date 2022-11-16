<template>
  <div>
    <h2 @click="asdas">방명록</h2>

    <section class="textarea">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-textarea
              class="my_ta"
              outlined
              auto-grow
              name="guestBook"
              label="☆너의 방명록★"
              v-model="userValue"
            ></v-textarea>
            <div class="send_btn">
              <v-btn depressed color="primary" @click="callPostCustom"
                >전송</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="book_list">
      <p>{{ this.bookNum }}</p>
      <p>{{ this.userBook }}</p>

      <!-- <ul>
        <li v-for="item in userBooks" :key="item.userBook">
          {{ item.userBook }}
        </li>
      </ul> -->
    </section>
  </div>
  <!-- <div>
      <input type="text" v-model="getData" />
      <button @click="callPostCustom">전송</button>
    </div>
    <p>{{ this.customData }}</p>
   -->
</template>

<script>
import { getAllCustom,getCustom, postCustom } from "@/services/custom";

export default {
  data() {
    return {
      bookNum : 0,
      userValue: "",
      userBook: [],
      userBooks: {},
      key: 1
    };
  },
  methods: {
    asdas(){
      console.log(this.userBooks)
    },
    async callGetAllCustom() {
      try {
        const response = await getAllCustom();
        console.log(response.data);
      } catch (error) {
        alert("통신실패");
        console.error(error);
      }
    },

    async callGetCustom() {
      try {
        const response = await getCustom(this.bookNum);
        this.userBooks = response.data;
      } catch (error) {
        alert("통신실패");
        console.error(error);
      }
    },
    async callPostCustom() {
      const userValue = this.userValue;
      const bookNum = this.bookNum;
      const response = await postCustom(this.userValue, {
        additionalProp1 : userValue,
        additionalProp2 : bookNum,
      });
      try {
        if (response.status === 200) {
          this.userValue = "";
          this.callGetCustom();
          this.bookNum++;
          alert("등록되었습니다.");
        } else {
          alert("통신실패");
        }
      } catch (error) {
        alert("통신실패");
        console.error(error);
      }
    },
  },
  created() {
    this.callGetCustom();
    this.callGetAllCustom();
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.my_ta {
  resize: none;
}
.send_btn {
  text-align: end;
}
</style>
