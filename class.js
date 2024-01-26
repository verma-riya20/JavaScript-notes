//classes
/*function pizzaFactory(pizzaSize){
    const crust="original";
    const size=pizzaSize;
    return{
        bake:()=>console.log(`baking a ${size} ${crust} crust pizza`)
    }
}
const mypizza=pizzaFactory("small");
mypizza.bake();
*/






class pizza{
    crust="original";
    #sauce="traditional";
    #size;

    constructor(pizzaSize){
        this.#size=pizzaSize;
       

    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust;

    }

/*class specialtyPizza extends pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type="works";

    }*/
    slice(){
        console.log(`"our ${this.#size} ${this.#sauce} ${this.crust}"`);
    }
}

const special=new pizza("medium")
special.slice();
  
