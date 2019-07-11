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

class PizzaBuilder {

    _pizzaBase: string;
    // pizza types
    _isStandard: boolean;
    _isWithMeat: boolean;
    _isWithFish: boolean;
    _isWithMushrooms: boolean;
    // pizza ingridients
    _addMayonnaise: string;
    _addSauce: string;
    _addCheese: string;
    _addOnion: string;
    _addTomato: string;
    _addMushrooms: string;
    _addFish: string;
    _addMeat: string;

    static standard(): PizzaBuilder {
        let build = new PizzaBuilder();
        build._pizzaBase = Pizza.LAYER;
        build._isStandard = true;
        return build;
    }

    static withMeat(): PizzaBuilder {
        let build = new PizzaBuilder();
        build._pizzaBase = Pizza.LAYER;
        build._isWithMeat = true;
        return build;
    }

    static withFish(): PizzaBuilder {
        let build = new PizzaBuilder();
        build._pizzaBase = Pizza.LAYER;
        build._isWithFish = true;
        return build;
    }

    static withMushrooms(): PizzaBuilder {
        let build = new PizzaBuilder();
        build._pizzaBase = Pizza.LAYER;
        build._isWithMushrooms = true;
        return build;
    }

    addMayonnaise(mayonnaise: string): PizzaBuilder {
        this._addMayonnaise = mayonnaise;
        return this;
    }

    addSauce(sauce: string): PizzaBuilder {
        this._addSauce = sauce;
        return this;
    }

    addCheese(cheese: string): PizzaBuilder {
        this._addCheese = cheese;
        return this;
    }

    addOnion(onion: string): PizzaBuilder {
        this._addOnion = onion;
        return this;
    }

    addTomato(tomato: string): PizzaBuilder {
        this._addTomato = tomato;
        return this;
    }

    addMushrooms(mushrooms: string): PizzaBuilder {
        this._addMushrooms = mushrooms;
        return this;
    }

    addFish(fish: string): PizzaBuilder {
        this._addFish = fish;
        return this;
    }

    addMeat(meat: string): PizzaBuilder {
        this._addMeat = meat;
        return this;
    }
    
    build(): string {
        let pizza: string = this._pizzaBase;

        pizza += ` with ${this._addMayonnaise}`;
        pizza += ` and ${this._addSauce}`;
        pizza += ` and ${this._addTomato}`;
        pizza += ` and ${this._addOnion}`;

        if (this._isWithMeat) {
            pizza += ` and ${this._addMeat}`;
        }

        if (this._isWithFish) {
            pizza += ` and ${this._addFish}`;
        }

        if (this._isWithMushrooms) {
            pizza += ` and ${this._addMushrooms}`;
        }

        return pizza;
    }
}

const model = new PizzaModel();

const pizzaStandard = PizzaBuilder
    .standard()
    .addMayonnaise(model.mayonnaise)
    .addSauce(model.sauce)
    .addTomato(model.tomato)
    .addOnion(model.onion)
    .addCheese(model.cheese)
    .build();
const pizzaWithMeat = PizzaBuilder
    .withMeat()
    .addMayonnaise(model.mayonnaise)
    .addSauce(model.sauce)
    .addTomato(model.tomato)
    .addOnion(model.onion)
    .addCheese(model.cheese)
    .addMeat(model.meat)
    .build();
const pizzaWithFish = PizzaBuilder
    .withFish()
    .addMayonnaise(model.mayonnaise)
    .addSauce(model.sauce)
    .addTomato(model.tomato)
    .addOnion(model.onion)
    .addCheese(model.cheese)
    .addFish(model.fish)
    .build();
const pizzaWithMushrooms = PizzaBuilder
    .withMushrooms()
    .addMayonnaise(model.mayonnaise)
    .addSauce(model.sauce)
    .addTomato(model.tomato)
    .addOnion(model.onion)
    .addCheese(model.cheese)
    .addMushrooms(model.mushrooms)
    .build();

console.log('standard pizza => ', pizzaStandard)
console.log('meat pizza => ', pizzaWithMeat)
console.log('fish pizza => ', pizzaWithFish)
console.log('mushrooms pizza => ', pizzaWithMushrooms)
