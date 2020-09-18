var obj={
    message:'test Message',
};

var app1 = new Vue({
    el:"#example",
    data:obj,
    methods:{
        doubleMessage: function(){
            return this.message + '|' + this.message 
        }
    },
    computed:{
        //a computed getter
        reversedMessage: function(){
            //"this" points to this Vue instance
            //revers the message
            return this.message.split('').reverse().join();
        }
    }
}
);

var example1Obj = {
    firstName:"George",
    lastName:"Washington"
};

var example1 = new Vue({
    el:"#example-1",
    data:example1Obj,
    computed:{
        fullName:{
            //getter
            get:function(){
                return this.lastName.trim()+", "+this.firstName.trim()
            },
            set:function(newValue){
                var names = newValue.trim().split(",")
                this.firstName = names[1].trim()
                this.lastName = names[0].trim()
            }
        }
    }
});
