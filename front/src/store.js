import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state:() => ({
        title: "Limits-Training",
        token:"ryu-token",
        name:"name",
        // liffのidがはいる
    }),
    getters:{
        title(state){return state.title},
        name(state){return state.name}
    },
    mutations:{
        setTitle(state, title){
            state.title = title
        },
        setName(state, name){
            state.name = name
        }
        // liffでのidを取得する
    },
    actions:{
        getTitle: function(){
            this.commit("setTitle", "Limits")
        },
        getName: function(){
            this.commit("setName", "ryu");
        },
        async getName_sample() {
            // ここにliffの開いた時の処理を書く
            let result = await axios.get('https://www.reina-ryu-f.xyz/Wedding/PHP/count.php').then(
                (res) => res.data,
                () => ''
            );
            this.commit("setName", result);
        }
    }
})
