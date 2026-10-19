//Hero class stats
class Hero{
    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma){
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }
    displayStats(){
        console.log(`Strength: ${this.strength} Dexterity: ${this.dexterity}`);
        console.log(`Constitution: ${this.constitution} Intelligence: ${this.intelligence}`);
        console.log(`Wisdom: ${this.wisdom} Charisma: ${this.charisma}`);
    }
    //Give a +1 or +2 bonus to stat depending on how high the stat is
    bonus(){
        //return
    }

}
let heroStat1 = new Hero(11, 15, 16, 14, 12, 10);
console.log("Hero 1 is a Warrior.");
heroStat1.displayStats();
//Having a Super Class like Hero is not always neccessary 
////when there are only one or very few parameters.
//Each Hero has unique methods
class Warrior{
    constructor(name, hp, defend){
        this.name = name;
        this.hp = hp;
        this.defend = defend;

    }
    getHeroClass(){
        return "Warrior";
    }
    block(){
        this.defend = 5;
        return `Warrior raises shield in defense.`
    }
    health(){
        this.hp = 20;
    }

    attack(){//
        let value = Math.floor(Math.random() * 6 + Math.random() * 6);
        return `The Warrior, ${this.name}, attacks for ${value} damage with his sword.`;
    }

}
//
class Wizard {
    constructor(name, hp, mp){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        
    }
    getHeroClass(){
        return "Wizard";
    }
    health(){
        this.hp = 13;
    }
    magic(){
        this.mp = 60;
    }

    attack(){
        let value = Math.floor(Math.random() * 11);
        this.mp = -1;
        return `The Wizard, ${this.name}, attacks for ${value} damage with his wand.` ;
    }

}
class Cleric {
    constructor(name, hp, mp){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        
    }
    getHeroClass(){
        return "Cleric";
    }
    health(){
        this.hp = 18;
    }
    magic(){
        this.mp = 99;
    }

    heal(){//heal spell
        let value = Math.floor(Math.random() * 9) + 1;
        this.mp = -1;
        return `The Cleric, ${this.name}, heals you for ${value} hp.`;
    }
    attack(){
        let value = Math.floor(Math.random() * 9);
        this.mp = -1;
        return `The Cleric, ${this.name}, attacks for ${value} holy damage.`;
    }

}
//
class Rogue {
    constructor(name, hp, stealth){
        this.name = name;
        this.hp = hp;
        this.stealth = stealth;
    }
    getHeroClass(){
        return "Rogue";
    }
    isInvisible(){

        this.stealth = false;
        if(stealth = false){
            return "Visible";
        }else{
            return "Stealth Mode";
        }
    }
    
    attack(){
        
        if(stealth = false){
            let value = Math.floor(Math.random() * 8);
            return `The Rogue, ${this.name}, attacks for ${value} damage. `;
        }else{
            let value = Math.floor(Math.random() * 8 + Math.random() * 8);
            return `The Rogue, ${this.name}, attacks for ${value} damage. `;
        }
        
    }

}

let hero;
let getClass = document.getElementById("class");
let attackDescription = document.getElementById("attackText");

let createButton = document.getElementById("createButton");
createButton.addEventListener("click", ()=>{
    let name = document.getElementById("nameInput").value; 
    let heroChoice = document.getElementById("heroSelect").value;
    
    if(heroChoice == "warrior"){ 
        hero = new Warrior(name);
    }else if(heroChoice == "wizard"){
        hero = new Wizard(name);
    }else if(heroChoice == "cleric"){
        hero = new Cleric(name);
    }else if(heroChoice == "rogue"){
        hero = new Rogue(name);
    }


    alert("Hero Created.");
    getClass.innerText = hero.getHeroClass();
});


let attackButton = document.getElementById("attackButton");
attackButton.addEventListener("click", ()=>{
    if(hero){ 
        
        attackDescription.innerText = hero.attack(); 
        
    }
});