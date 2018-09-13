
class BurgerIngredientModel {
    type = "";
    amount = 0

    constructor(type, amount){
        this.type = type;
        this.amount = amount;
    }

    convert(){
        if(this.amount > 0 && this.type) {
            return Array(this.amount).fill(this.type);
        }
    }

}

export default BurgerIngredientModel;