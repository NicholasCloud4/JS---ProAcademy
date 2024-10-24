let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation);
    }
}

purchase1.totalPrice(); 

let purchase2 = {
    shoes: 200,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation);
    }
}
purchase2.totalPrice(); 

