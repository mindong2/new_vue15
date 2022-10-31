export default {
    namespaced : true,

    state : {
        id : 'hong123',
        name : '홍길동'
    },
    mutations: {

    },
    getters: {
        id(state) {
            return state.id;
        },
        name(state) {
            return state.name;
        }
    },
    actions: {

    }
}