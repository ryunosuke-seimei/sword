import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        title: "Limits-Training"
        // liffのidがはいる
    },
    mutations:{
        setTitle(state, title){
            state.title = title
            // liffでのidを取得する
        }
    },
    actions:{
        getTitle: function(){
            this.commit("setTitle", "Limits")
            // ここにliffの開いた時の処理を書く
        }
    }
})
