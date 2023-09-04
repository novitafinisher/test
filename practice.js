var val= {

    key:[{name: "Rice", quantity: 2, price: 60},
        {name: "Dal", quantity: 3, price: 50},
        {name: "Salt", quantity: 1, price: 20}],
    
    total : function(){
         ans=0;
        for(var i=0; i<this.key.length;i++){
            ans += this.key[i].quantity * this.key[i].price
        }
        return ans;

    }
};
console.log(val.total());
    

    