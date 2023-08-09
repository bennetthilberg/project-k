export default function raceIAT(){
  const goodWords = ['Joy', 'Love', 'Peace', 'Wonderful', 'Pleasure', 'Friend', 'Laughter', 'Happy'];
  const badWords = ['Agony', 'Terrible', 'Horrible', 'Nasty', 'Evil', 'War', 'Awful', 'Failure'];
  const blackFaces = ['face1.jpeg', 'face2.jpeg','face4.jpeg', 'face9.jpg', 'face10.jpg', 'face12.jpg',  'face14.jpg','face15.jpg','face19.jpg','face20.jpg','face21.jpg','face23.jpg','face25.jpg','face26.jpg','face28.jpg','face33.jpg','face34.jpg','face35.jpg','face46.jpg','face37.jpg','face38.jpg','face39.jpg','face47.jpg','face50.jpg'];
  const whiteFaces = ['face5.jpeg', 'face6.jpeg', 'face7.jpeg', 'face8.jpeg', 'face11.jpg', 'face13.jpg','face16.jpg','face17.jpg','face22.jpg','face24.jpg','face27.jpg','face29.jpg','face30.jpg','face31.jpg','face46.jpg','face43.jpg','face45.jpg','face46.jpg','face49.jpg','face53.jpg','face54.jpg','face59.jpg','face60.jpg','face61.jpg'];
  // 11063 in trn
  return(
    {
      id: 0,
      name: 'Race Implicit Association Test',
      description: 'This test will measure your implicit racial bias.',
      complete: false,
      blocks: [
        {
          questions: [{
            type: 'info',
            contentType: 'text',
            text: 'Welcome to the Race Implicit Association Test. This test will measure your implicit racial bias.',
            buttonLabels: ['Continue']
          },
          {
            type: 'info',
            contentType: 'text',
            text: 'You will be shown a series of words and faces. You will be asked to categorize each word or face as either "Good" or "Bad" or "Black" or "White".',
            buttonLabels: ['Continue']
          },
          {
            type: 'info',
            contentType: 'text',
            text: 'We\'ll start with a practice round. Press the green button for good words, and the red button for bad words.',
            buttonLabels: ['Let\'s Go!']
          }]
        },
        {
          questions: [
            {
              type: 'practice',
              contentType: 'text',
              text: `${goodWords[0]}`,
              buttonLabels: ['Good', 'Bad'],
              correctAnswer: 'Good'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${badWords[0]}`,
              buttonLabels: ['Good', 'Bad'],
              correctAnswer: 'Bad'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${goodWords[1]}`,
              buttonLabels: ['Good', 'Bad'],
              correctAnswer: 'Good'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${goodWords[2]}`,
              buttonLabels: ['Good', 'Bad'],
              correctAnswer: 'Good'
            }
          ]
        },
        {
          questions: [
            {
              type: 'info',
              contentType: 'text',
              text: 'Now we\'ll practice with faces. Press the green button for white faces, and the red button for black faces.',
              buttonLabels: ['Let\'s Go!']
            },
            {
              type: 'practice',
              contentType: 'image',
              imgName: `${whiteFaces[0]}`,
              buttonLabels: ['White', 'Black'],
              correctAnswer: 'White'
            },
            {
              type: 'practice',
              contentType: 'image',
              imgName: `${blackFaces[0]}`,
              buttonLabels: ['White', 'Black'],
              correctAnswer: 'Black'
            },
            {
              type: 'practice',
              contentType: 'image',
              imgName: `${blackFaces[1]}`,
              buttonLabels: ['White', 'Black'],
              correctAnswer: 'Black'
            }
          ]
          
        },
        
      ]
    }
  );
}