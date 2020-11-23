function bounceoff(gameObj1,gameObj2) {
    if (gameObj1.y-gameObj2.y<gameObj2.height/2+gameObj1.height/2 && 
      gameObj2.y-gameObj1.y<gameObj2.height/2+gameObj1.height/2) 
      { gameObj2.velocityY=-gameObj2.velocityY;
      gameObj1.velocityY=-gameObj1.velocityY;
    }
    }