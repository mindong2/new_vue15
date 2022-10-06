<template>
  <div id="app">
        <ul>
            <!-- <li @click="goToDetail(pageNum)" v-for="pageNum in pageNums" :key="pageNum">{{ pageNum }}번째 게시물입니다.</li> -->
            <li @click="goToDetail(1, 'page1')">1번째 게시물입니다.</li>
            <li @click="goToDetail(2, 'page2')">2번째 게시물입니다.</li>
            <li @click="goToDetail(3, 'page3')">3번째 게시물입니다.</li>
            <li @click="goToDetail(4, 'page4')">4번째 게시물입니다.</li>
            <li @click="goToDetail(5, 'page5')">5번째 게시물입니다.</li>
        </ul>
        <p>
            <button @click="goToHome">goToHome</button>
        </p>
  </div>
</template>

<script>
export default {
    name : "BoardView",
    // data() {
    //     return {
    //         pageNums : [1,2,3,4,5,6,7,8,9,10],
    //     }
    // },
    methods : {
        goToDetail(PAGE_NUM,MESSAGE){
            this.$router.push({
                path : `/detail/${PAGE_NUM}`,
                // 아래는 url로 파라미터를 전송시키는것
                query : {
                    MESSAGE,
                }
            });
        },
        addList(){
            this.pageNums.push(this.pageNums.length + 1);
        },
        goToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
    ul{width: 600px; margin: 0 auto; padding-left: 0; border-top: 1px solid #000; margin-bottom: 20px;}
    ul li {list-style: none; padding: 15px 0; border-bottom: 1px solid #000; cursor: pointer;}
</style>