<template>
  <div id="child">
    <br/>
    <br/>
    <br/>
    {{ message }}
    <br />
    <br />
    <br />
    <ul>
      <select multiple name="select" id="select" v-model="_selected">
        <option v-for="fruit in fruits" :key="fruit.id">
        {{ fruit.id }} {{ fruit.name }}
        </option>
      </select>
    </ul>
    <p>총 리스트의 개수 : {{ totalLength }}</p>
  </div>
</template>

<script>
    
export default {
    name: "ChildView",
    props : {
        message : {
            type : String ,
            default : ''
        },
        // array, object같은 reference속성들은 이렇게 선언해야한다. (그렇지않으면 모두 같은 객체를 공유하는 형태가 되어버리기 때문)
        fruits: {
          type:Array,
          default: () => {
            return []
          }
        },
        selected: {
          type:Array,
          default: () => {
            return []
          }
        }
    },
    // 자식에서의 props는 read-only이기 때문에 부모의 값을 변경해줄때는 함수를 호출하여 바꿔주면 된다.
    computed: {
      totalLength() {
        return this.fruits.length;
      },
      _selected: {
        set(value){
          this.$emit("change-select", value);
        },
        get(){
          return this.selected;
        }
      }

    }
}
</script>

<style>

</style>