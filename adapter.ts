enum Pizza {
    LAYER = 'LAYER',
    TOMATO = 'TOMATO',
    SAUCE = 'SAUCE',
    MAYONNAISE = 'MAYONNAISE',
    ONION = 'ONION',
    CHEESE = 'CHEESE',
    MEAT = 'MEAT',
    FISH = 'FISH',
    MUSHROOMS = 'MUSHROOMS'
}

const ingridientsInOunces = {
    layer: 28,
    tomato: 2,
    sauce: .4,
    mayonnaise: .3,
    onion: 1.2,
    cheese: 4,
    meat: 5,
    fish: 5,
    mushrooms: 6
}

interface PizzaInterface {
    layer: string;
    tomato: string;
    sauce: string;
    mayonnaise: string;
    onion: string;
    cheese: string;
    meat: string;
    fish: string;
    mushrooms: string;
}

class PizzaModel implements PizzaInterface {
    layer: string = Pizza.LAYER;
    tomato: string = Pizza.TOMATO;
    sauce: string = Pizza.SAUCE;
    mayonnaise: string = Pizza.MAYONNAISE;
    onion: string = Pizza.ONION;
    cheese: string = Pizza.CHEESE;
    meat: string = Pizza.MEAT;
    fish: string = Pizza.FISH;
    mushrooms: string = Pizza.MUSHROOMS;
}

class PizzaIngredientsInOunces {

    constructor(
        public model: PizzaModel
    ) { }

    public getIngredients(): string {
        let ingredients: string = '';

        Object.keys(ingridientsInOunces).forEach(key => {
            for (let item in model) {
                item == key ? ingredients += `${model[item]}: ${ingridientsInOunces[key]}oz; ` : null;
            }
        })
        return ingredients;
    }
}

class Adapter {
    private adaptee: PizzaIngredientsInOunces;

    constructor(adaptee: PizzaIngredientsInOunces) {
        this.adaptee = adaptee;
    }

    public getIngridients(): string {
        // return this.adaptee.getIngredients 
    }
}

const model = new PizzaModel();

const pizzaIngridientsInOunces = new PizzaIngredientsInOunces(model);

console.log('standard pizza => ', pizzaIngridientsInOunces.getIngredients())
