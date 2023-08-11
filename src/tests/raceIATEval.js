export default function evalFn(testResults){ 
        

    // white=good,black=bad blockIds: 4,6 , results indexes 0,2
    // white=bad,black=good blockIds 5,7 , results indexes 1,3
    let whiteGoodAffinity = 135;
    let whiteBadAffinity = 135;
    for(const questionResponse of testResults.blocks[0].questions){
      if(questionResponse.responseTime > 5000){
        whiteGoodAffinity -= 5;
      }
      else{
        whiteGoodAffinity -= questionResponse.responseTime/1000;
      }
      if(!questionResponse.correct){
        whiteGoodAffinity -= 1.25;
      }
    }
    for(const questionResponse of testResults.blocks[2].questions){
      if(questionResponse.responseTime > 5000){
        whiteGoodAffinity -= 5;
      }
      else{
        whiteGoodAffinity -= questionResponse.responseTime/1000;
      }
      if(!questionResponse.correct){
        whiteGoodAffinity -= 1.25;
      }
    }
    for(const questionResponse of testResults.blocks[1].questions){
      if(questionResponse.responseTime > 5000){
        whiteBadAffinity -= 5;
      }
      else{
        whiteBadAffinity -= questionResponse.responseTime/1000;
      }
      if(!questionResponse.correct){
        whiteBadAffinity -= 1.25;
      }
    }
    for(const questionResponse of testResults.blocks[3].questions){
      if(questionResponse.responseTime > 5000){
        whiteBadAffinity -= 5;
      }
      else{
        whiteBadAffinity -= questionResponse.responseTime/1000;
      }
      if(!questionResponse.correct){
        whiteBadAffinity -= 1.25;
      }
    }
    // Round whiteGoodAffinity and whiteBadAffinity to the nearest hundredth
    whiteGoodAffinity = Number(whiteGoodAffinity.toFixed(2));
    whiteBadAffinity = Number(whiteBadAffinity.toFixed(2));

    return {id: 0, affinityScores: [whiteGoodAffinity,whiteBadAffinity]};
  }