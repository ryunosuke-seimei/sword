# Sword Front
cmd + k　⇨ v でプレビューが表示される  
[sample link markdown](https://codechord.com/2012/01/readme-markdown/)

## サイトの機能
Vue.jsでのSPA
- 連続で何日入力を行なったかの表示
- データの入力（Axios）
- 個人情報の登録

## sample
liffとvueの連結
- https://titanicrising.jp/blog/vue-liff
- https://zenn.dev/kmiura55/articles/6524c0f7e21183

npmでのline-sdk
- https://www.npmjs.com/package/@line/bot-sdk

axiosでのやりとり
- https://qiita.com/right1121/items/092ac7ff747e1c47b2b1

axiosでやりとりをする際の注意点
- https://qiita.com/right1121/items/092ac7ff747e1c47b2b1
- https://github.com/imcvampire/vue-axios

axios async await sample
- https://secure.sakura.ad.jp/vps/


.env file
- https://qiita.com/h-reader/items/9e2f8dbc3b9eaec4f5ee
- https://qiita.com/yoshi0518/items/f8cd408f8ef86fb02d74

vuexについて⇨間違っている点が何点かある
- https://blog.codecamp.jp/vuejp-vuex-commentary

```sotre.js
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        title: "Limits-Training"
    },
    mutations:{
        setTitle(state, title){
            state.title = title
        }
    }
})
```
```app.vue
export default {
  name: 'App',
  computed:{
    title(){
      return this.$store.state.title
    }
  },
  methods:{
    change(){
      this.$store.commit("setTitle", "title")
    }
  }
}
```

Vuexに対する理解が深まるパート
- https://reffect.co.jp/vue/understaind-vue-basic  
Actionからmutationsやcommit dispatchを一通り使ったサンプル


---

## tips
1. vueでaxiosを叩くときにはvue-axiosも同時にinstallしないとprotocol errorが起きる
[git issue](https://github.com/imcvampire/vue-axios)

2. vuexはモジュールごとに分割することができる。  
今回はやっていない

