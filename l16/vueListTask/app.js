const app = Vue.createApp({
  data() {
    return {
      isSortNames: false,
      isHow:false,
      newTime:'',
      newText:'',
      todo: [],
      example: [
        {
          time: '12:40',
          text: 'lunch',
          index: 0
        },
        {
          time: '08:00',
          text: 'breakfast',
          index:1
        },
        {
          time: '19:20',
          text: 'dinner',
          index:2
        },
      ]
    }
  },

  methods: {
    renameFn(it) {
      it.text = prompt('new text')
    },
    ediTimeTog(){
      this.isHow = !this.isHow
    },
    ediTimeFn(it){
      it.time = this.newTime
      this.isHow = !this.isHow
    },
    clearFn(it) {
      for(let c=0;c<this.example.length;c++){
        if(this.example[c].index == it.index){
          this.example.splice(c,1)
        }
      }
    },
    takeForm() {
      let lng = this.example.length;
      let newObj={
        time:this.newTime,
        text:this.newText,
        index: lng
      }
      this.example.push(newObj)
    },
    sortNameToggle() {
      this.isSortNames = !this.isSortNames
    }
  },

  computed: {
    todoTime() {
      return this.example.sort(function (a, b) {
        return parseInt(a.time) - parseInt(b.time)
      })
    },
    todoNames() {
      return this.example.sort(function (a, b) {
        const nameA = a.text.toUpperCase();
        const nameB = b.text.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    }
  }
})

app.mount('#app')