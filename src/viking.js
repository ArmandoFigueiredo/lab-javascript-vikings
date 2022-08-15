// Soldier
class Soldier {

    constructor(health, strength) { 
        
        this.health = health;
        this.strength = strength;

    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }

}


// Viking
class Viking extends Soldier{

    constructor(name, health, strength) { 
        
        super(health, strength);
        this.name = name;

    }


    receiveDamage(damage) {
        super.receiveDamage(damage);

        let message;

        if(this.health > 0) {
            message = this.name + " has received " + damage + " points of damage";
        } else {
            message = this.name + " has died in act of combat";
        }

        return message;
    } 

    battleCry() {

        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{

    constructor(health, strength) { 
        
        super(health, strength);

    }


    receiveDamage(damage) {
        super.receiveDamage(damage);

        let message;

        if(this.health > 0) {
            message = "A Saxon has received " + damage + " points of damage";
        } else {
            message = "A Saxon has died in combat";
        }

        return message;
    } 

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObj) {

        this.vikingArmy.push(vikingObj);
                
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }

    vikingAttack() {
        
        var saxonPosition = parseInt(Math.random() * this.saxonArmy.length);
        var saxon = this.saxonArmy[saxonPosition];
        var vinkingPosition = parseInt(Math.random() * this.vikingArmy.length);
        var viking = this.vikingArmy[vinkingPosition];

        var result = saxon.receiveDamage(viking.attack());

        console.log("Saude Saxao:" + saxon.health);
        if (saxon.health <= 0){
            this.saxonArmy.splice(saxonPosition, 1);
        }
        
        return result;

    }

    saxonAttack() {
        
        var saxonPosition = parseInt(Math.random() * this.saxonArmy.length);
        var saxon = this.saxonArmy[saxonPosition];
        var vinkingPosition = parseInt(Math.random() * this.vikingArmy.length);
        var viking = this.vikingArmy[vinkingPosition];

        var result = viking.receiveDamage(saxon.attack());

        if (viking.health <= 0){
            this.vikingArmy.splice(vinkingPosition, 1);
        }
        
        return result;

    }

    showStatus() {

        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <=0) {
            return "Saxons have fought for their lives and survived another day..."
        } else  {
            return "Vikings and Saxons are still in the thick of battle."
        }

        }
    }

