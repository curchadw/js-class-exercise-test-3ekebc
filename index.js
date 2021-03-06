// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


class Game {

  /**
   * Sets up the game
   * @param {string} player1Name The name of player 1
   * @param {string} player2Name The name of player 2
   */
  constructor(player1Name="pl1", player2Name="pl2"){
    this.theEnd = false; 

    this.player1 = {
      name: player1Name,
      health: 100
    }

    this.player2 = {
      name: player2Name,
      health: 100
    }
    
  }

  /**
   * Starts the game and logs out the status of players
   */
  start(){
    this.reset()
    while(!this.theEnd){
      this.pl1AttackPl2()
      this.pl2Heal()
      this.pl2AttackPl1();
      this.pl1Heal()
      this.playerStatus()
      this.checkTheEnd()
    }
    this.declareWinner()
  }

  /**
   * Console log the winner of the battle
   */
  declareWinner(){
    while(this.player1.health > 0|| this.player2.health > 0){
      if (this.player1.health === 0 && this.player2.health > 0){
        this.theEnd = true
        console.log(this.player2.declareWinner())
      }else if(this.player2.health === 0 && this.player1.health > 0){
        this.theEnd = true
        console.log(this.player1.declareWinner())
      }
    }
  }

  /**
   * If player 1 or player 2 health is below 0
   * Mark theEnd true, to stop the game
   */
  checkTheEnd(){
    this.declareWinner()
  }

  /**
   * Console log the name and health of both players
   * Ex: Player 1: 100 | Player 2: 50
   */
  playerStatus(){ 
    while(!this.theEnd){
      console.log(`${this.player1.name}: ${this.player1.health} | ${this.player2.name}: ${this.player2.health}`)
    }


  }

  /**
   * Reset health of player 1 and player 2 to 100
   * Reset theEnd to false
   */
  reset(){ 
    this.theEnd = false
    this.player1.health = 100
    this.player2.helath = 100
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 2
   */
  pl1AttackPl2(){ 
    let decrease = Math.floor(Math.random()*10) + 1
    return this.player2.health - decrease
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 1
   */
  pl2AttackPl1(){ 
    let decrease = Math.floor(Math.random()*10) + 1
    return this.player1.health - decrease
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 1
   */
  pl1Heal(){
    let increase = Math.floor(Math.random()*10) + 1
    return this.player1.health + increase
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 2
   */
  pl2Heal(){ 
    let increase = Math.floor(Math.random()*10) + 1
    return this.player2.health + increase
  }

}

// Initialize the class here
// Call the start function of the game

let game1 = new Game()
game1.start()
console.log(game1)