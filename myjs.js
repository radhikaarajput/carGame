 
      const score = document.querySelector('score');
      const startScreen = document.querySelector('startScreen');
      const gameArea = document.querySelector('gameArea');

      console.log(gameArea);
      startScreen.addEventListener('click',gamePlay);

      let keys = {ArrowUp : false, ArrowDown :false , ArrowLeft: false, ArrowRight : false }
      document.addEventListener('keydown', keyDown);
      document.addEventListener('keyup', keyUp);

      function  keyDown(e){
        e.preventDefault();
        key[e.key]=true;
        console.log(keys);
      }

      function  keyUp(e){
        e.preventDefault();
        key[e.key]=false;
        console.log(keys);
      }

      function start(){
        window.requestAnimationFrame(gamePlay);
      }

      function gamePlay(){
        console.log("hey I'm clicked");
        window.requestAnimationFrame(gamePlay);
      }
    