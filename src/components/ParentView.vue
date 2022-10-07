  <!-- props -> :프롭스 속성 이름 = "상위 컴포넌트의 데이터 이름" -->
  <template>
  <div id="parent">
    <h1>{{ propsdata }}</h1>
    <!-- <ChildView :message = "ㅎㅇㄹ"/> -->
    <ChildView :message="str2"></ChildView>
  </div>
</template>

<script>
import ChildView from "./ChildView.vue"


export default {
    name : "ParentView",
    data() {
      return {
        str2 : 'Children propsdata'
      }
    },
    components : {
      ChildView,
    },
    props: {
        propsdata : {
            type: String,
            default : ''
        }
    }
}
</script>

<style>

</style>