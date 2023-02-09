class Vehicle
{
    // need to initialize above constructor if want properties to be private
    #color
    #make
    #year

    constructor(color, make, year)
    {
        this.#color = color
        this.#make = make
        this.#year = year
    }

    getColor()
    {
        return this.#color
    }
    getMake()
    {
        return this.#make
    }
    getYear()
    {
        return this.#year
    }

    toString()
    {
        return `I am a ${this.#color} vehicle`
    }

    static printMessage()
    {
        console.log('VEHICLES RULE')
    }
}

// two different Vehicle instances
const myCar = new Vehicle('green', 'Cavalier', 1999)
console.log(myCar.getColor())

const yourCar = new Vehicle('red', 'Toyota', 1990)
console.log(yourCar.getColor())

// static method call
Vehicle.printMessage()

console.log(myCar.toString())

// subclass/child class
class ElectricVehicle extends Vehicle
{
    toString()
    {
        return 'I AM AN ELECTRIC VEHICLE'
    }
}

const tesla = new ElectricVehicle('mauve', 'Tesla', 2023)
console.log(tesla.toString())
console.log(tesla.getColor())