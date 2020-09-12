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

var app6 = new Vue({
    el:"#app-6",
    data:{
        message:"V-Model message"
    }
});

//Define a Vue custom component

Vue.component('todo-item', {
    //This component accepts props.
    props:['todo'],
    //component's template evaluates the code
    template:'<li>{{todo.text}}</li>'
});

var app7 = new Vue(
    {
        el:"#app-7",
        data:{
            todoList:[
                {id:0, text:"First item"},
                {id:1, text:"Second item"},
                {id:2, text:'Third item'}
            ]
        }
    }
);


