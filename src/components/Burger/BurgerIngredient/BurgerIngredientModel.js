
class BurgerIngredientModel {
    type = "";
    amount = 0

    constructor(type, amount){
        this.type = type;
        this.amount = amount;
    }

    add = () => {
        return new BurgerIngredientModel(this.type, this.amount+1);
    }

    remove = () => {
        if(this.amount > 0){
            return new BurgerIngredientModel(this.type, this.amount-1);
        }
    }
    convert(){
        return Array(this.amount).fill(this.type);
    }

}

export default BurgerIngredientModel;