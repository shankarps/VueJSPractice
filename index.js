var app = new Vue({ 
    //#app means any html element with id=app. Attach to a DOM element with this id.
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  });

var app3 = new Vue({
    el: "#app-3",
    data:{
        seen: true
    }
});  

var app4 = new Vue({
    el: "#app-4",
    data:{
        todos:[
            {text: "Learn JS"},
            {text: "Learn VueJS"}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data:{
        message:'a lower case string'
    },
    methods:{
        toUpperCase: function(){
        this.message = this.message.toUpperCase();
        },
        toLowerCase: function(){
            this.message = this.message.toLowerCase();
            }
    
    }
});
