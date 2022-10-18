export default {
    data() {
        return {
            str:'Mixin data',
            toggle : false, 
        }
    },
    create() {
        console.log(this.data)
    },
    methods: {
        onClick() {
           if(this.toggle === false){
                this.str = ` 체인지`
                this.toggle = true
           }else{
                this.toggle = false
                this.str = `다시체인지`
           }
    },
},
    mounted(){
        console.log('mixin')
    }
}