var exampleObj = {
    items:[
        {message:"Hello"},
        {message:"This"},
        {message:" is"},
        {message:" a "},
        {message:" sentence. "}
    ]
}
var example = new Vue({
    el:"#app-1",
    data:exampleObj,
    methods:{
        addToList:function(){
            var d = new Date().toString();
            this.items.push({message:'Newly added on '+d})
        }
    }
})