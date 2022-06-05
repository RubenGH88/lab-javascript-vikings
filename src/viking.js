// Soldier
class Soldier {
  constructor(health,strength){
    this.health=health;
    this.strength=strength;
  }

  attack(){return this.strength}

  receiveDamage(damage){
    this.damage=damage
    this.health-=this.damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
super(health,strength);
this.name=name;}
  battleCry(){return "Odin Owns You All!"}
 receiveDamage(damage){
   this.health-=damage;
   if(this.health>0){return `${this.name} has received ${damage} points of damage`}
   return `${this.name} has died in act of combat`
 }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){
    this.health-=damage;
    if(this.health>0){return `A Saxon has received ${damage} points of damage`}
    return `A Saxon has died in combat`
  }
}

// War
class War {
  vikingArmy=[]
  saxonArmy=[]

  addSaxon(Saxon){this.saxonArmy.push(Saxon)}
  addViking(Viking){this.vikingArmy.push(Viking)}


/*
armyAttack(attackers,defenders){
  this.attackers=attackers
  this.defenders=defenders
  let attacker=this.attackers[[Math.floor(Math.random()*this.attackers.length)]];
  let defender=this.defenders[Math.floor(Math.random()*this.defenders.length)];
  let attack=defender.receiveDamage(attacker.attack())
  if (defender.health<=0){this.defenderArmy.splice(defender,1)}
return attack
}

vikingAttack(){armyAttack(vikingArmy,saxonArmy)}
saxonAttack(){armyAttack(saxonArmy,vikingArmy)}*/


  vikingAttack(){
     let someViking=this.vikingArmy[[Math.floor(Math.random()*this.vikingArmy.length)]];
     let someSaxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingAttack=someSaxon.receiveDamage(someViking.attack())
    if (someSaxon.health<=0){this.saxonArmy.splice(someSaxon,1)}
    return vikingAttack
  }

 

  saxonAttack(){
    let someViking=this.vikingArmy[[Math.floor(Math.random()*this.vikingArmy.length)]];
    let someSaxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let saxonAttack=someViking.receiveDamage(someSaxon.attack())
    if(someViking.health<=0){this.vikingArmy.splice(someViking,1)}
    return saxonAttack
  }


  showStatus(){
    if (!this.vikingArmy.length){return "Saxons have fought for their lives and survived another day..."}
    else if (!this.saxonArmy.length){return "Vikings have won the war of the century!"}
    else return "Vikings and Saxons are still in the thick of battle."
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
