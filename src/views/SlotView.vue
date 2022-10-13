<template>
  <div id="slot">
    <ModalView>
        <h1 slot="header">header1 {{ this.fromModal }} </h1>
        <br />
        <br />
        <div slot="content">Content1</div>
        <div slot="footer">Footer1</div>

        <!-- 템플릿 자체를 넣을수도있다 -> 이 경우 그냥 div -->
        <template slot="main">
            <div id="app22">
                adasdad
            </div>
        </template>

    </ModalView>
    <ModalView>
        <h1 slot="header">header2</h1>
        <br />
        <br />
        <div slot="content">Content2</div>
        <div slot="footer">Footer2</div>
    </ModalView>
    <ModalView>
        <h1 slot="header">header3</h1>
        <br />
        <br />
        <div slot="content">Content3</div>
        <div slot="footer">Footer3</div>
    </ModalView>
  </div>
</template>

<script>
import ModalView from "../components/ModalView.vue"
export default {
    components: {
        ModalView
    },
    props: {
        fromModal: {
            type: String,
            defalut : ''
        }
    }
}
</script>

<style>

</style>