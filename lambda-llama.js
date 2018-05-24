const llamaNamer = function () {

    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = function () {
        return Math.floor(Math.random() * 7)
    }
    const suffix = " the Llama";

    let myTest = randomizer();
    console.log(myTest);

    let name = possibleNames[randomizer()];
    console.log(name);

    return name + suffix;
}

console.log(llamaNamer());