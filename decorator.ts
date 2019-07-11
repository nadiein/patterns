enum Pizza {
    BREAD = 'BREAD',
    TOMATO = 'TOMATO',
    SAUCE = 'SAUCE',
    MAYONNAISE = 'MAYONNAISE',
    ONION = 'ONION',
    CHEESE = 'CHEESE',
    MEAT = 'MEAT',
    FISH = 'FISH'
}

interface PizzaInterface {
    bread: string;
    tomato: string;
    sauce: string;
    mayonnaise: string;
    onion: string;
    cheese: string;
}

class PizzaVO implements PizzaInterface {
    bread: string = Pizza.BREAD;
    tomato: string = Pizza.TOMATO;
    sauce: string = Pizza.SAUCE;
    mayonnaise: string = Pizza.MAYONNAISE;
    onion: string = Pizza.ONION;
    cheese: string = Pizza.CHEESE;
    meat: string;
    fish: string;
}

interface MakePizza {
    operation(): PizzaVO;
}

class MakePizzaStandard implements MakePizza {
    public operation(): PizzaVO {
        return new PizzaVO(); 
    }
}

class MakePizzaWithMeat implements MakePizza {
    public operation(): PizzaVO {
        let pizza = new PizzaVO();
        pizza['meat'] = Pizza.MEAT;
        return pizza;
    }
}

class MakePizzaWithFish implements MakePizza {
    public operation(): PizzaVO {
        let pizza = new PizzaVO();
        pizza['fish'] = Pizza.FISH;
        return pizza;
    }
}

class Decorator implements MakePizza {
    protected component: MakePizza;

    constructor(
        component: MakePizza
    ) {
        this.component = component;
    }

    public operation(): PizzaVO {
        return this.component.operation();
    }
}

const pizzaStandaard = new MakePizzaStandard();
const pizzaWithMeat = new MakePizzaWithMeat();
const pizzaWithFish = new MakePizzaWithFish();

console.log('standard pizza => ', pizzaStandaard.operation())
console.log('meat pizza => ', pizzaWithMeat.operation())
console.log('fish pizza => ', pizzaWithFish.operation())
