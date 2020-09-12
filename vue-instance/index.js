var obj = {
    message: 'Hello Vue!'
  }
 obj.message = obj.message+' appended'
Object.freeze(obj)



//change the object 
//No change - because obj is frozen
obj.message = obj.message+' appended again'
var app = new Vue({ 
    //#app means any html element with id=app. Attach to a DOM element with this id.
    el: '#app',
    data: obj
});

app1Data = {
    a: 5
}

var app1 = new Vue({
    el:"#app-1",
    data:app1Data,
    created: function(){
        console.log('Component created');
    },
    mounted: function(){
        console.log('Component mounted');
    },
    updated: function(){
        console.log('Component updated');
    },
    destroyed: function(){
        console.log('Component destroyed');
    }
});

//Attach a watcher function
app1.$watch('a', function(newVal, oldVal){
    //Called when value of 'a' changes.
    console.log('Value of a changed from '+oldVal+' to '+newVal);
})

app1.a=50
