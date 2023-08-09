export default function raceIAT(){
  const goodWords = ['Joy', 'Love', 'Peace', 'Wonderful', 'Pleasure', 'Friend', 'Laughter', 'Happy'];
  const badWords = ['Agony', 'Terrible', 'Horrible', 'Nasty', 'Evil', 'War', 'Awful', 'Failure'];
  const blackFaces = ['face1.jpeg', 'face2.jpeg', 'face3.jpeg', 'face4.jpeg'];
  const whiteFaces = ['face5.jpeg', 'face6.jpeg', 'face7.jpeg', 'face8.jpeg'];
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
              buttonColors: ['green', 'red'],
              correctAnswer: 'Good'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${badWords[0]}`,
              buttonLabels: ['Good', 'Bad'],
              buttonColors: ['green', 'red'],
              correctAnswer: 'Bad'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${goodWords[1]}`,
              buttonLabels: ['Good', 'Bad'],
              buttonColors: ['green', 'red'],
              correctAnswer: 'Good'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${goodWords[2]}`,
              buttonLabels: ['Good', 'Bad'],
              buttonColors: ['green', 'red'],
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
              buttonColors: ['#F5DEB3', '#8B4513'],
              correctAnswer: 'White'
            },
            {
              type: 'practice',
              contentType: 'image',
              imgName: `${blackFaces[0]}`,
              buttonLabels: ['White', 'Black'],
              buttonColors: ['#F5DEB3', '#8B4513'],
              correctAnswer: 'Black'
            }
          ]
          
        },
        
      ]
    }
  );
}