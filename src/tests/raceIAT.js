export default function raceIAT(){
  const goodWords = ['Joy', 'Love', 'Peace', 'Wonderful', 'Pleasure', 'Friend', 'Laughter', 'Happy', 'Perfect', 'Smile', 'Caring', 'Enjoy', 'Sweet', 'Pleasant', 'Delightful', 'Lovely', 'Heart', 'Delicious', 'Great', 'Delight', 'Beautiful', 'Affection', 'Serenity', 'Heaven', 'Comfort', 'Honor', 'Flower', 'Brilliant', 'Gentle', 'Caring', 'Paradise', 'Magnificent', 'Glee', 'Tender', 'Sunny', 'Excitement', 'Smiling', 'Kindness', 'Pleasant', 'Delightful', 'Lovely', 'Heart', 'Charm', 'Delicious', 'Great', 'Good', 'Delight', 'Beautiful', 'Glorious', 'Affection', 'Serenity', 'Heaven', 'Comfort', 'Honor', 'Flower', 'Brilliant', 'Gentle', 'Caring', 'Paradise', 'Magnificent', 'Glee', 'Tender', 'Sunny', 'Excitement', 'Smiling', 'Kindness'];
  const badWords = ['Agony', 'Terrible', 'Horrible', 'Nasty', 'Evil', 'War', 'Awful', 'Failure', 'Sick', 'Hate', 'Angry', 'Rotten', 'Pain', 'Poison', 'Nausea', 'Disaster', 'Ugly', 'Dirty', 'Stink', 'Stupid', 'Foul', 'Vomit', 'Sick', 'Rude', 'Yucky', 'Mean', 'Nasty', 'Gross', 'Evil', 'War', 'Awful', 'Failure', 'Miserable', 'Hate', 'Angry', 'Rotten', 'Pain', 'Poison', 'Nausea', 'Disaster', 'Ugly', 'Dirty', 'Stink', 'Stupid', 'Foul', 'Vomit', 'Sick', 'Rude', 'Yucky', 'Mean', 'Nasty', 'Gross', 'Agony', 'Terrible', 'Horrible', 'Nasty', 'Evil', 'War', 'Awful', 'Failure', 'Hate', 'Angry', 'Rotten', 'Pain', 'Poison', 'Nausea', 'Disaster', 'Ugly', 'Dirty', 'Stink', 'Stupid', 'Foul', 'Vomit', 'Sick', 'Rude', 'Yucky', 'Mean', 'Nasty', 'Gross'];
  const blackFaces = ['face1.jpeg', 'face2.jpeg','face51.jpg', 'face9.jpg', 'face10.jpg', 'face12.jpg',  'face14.jpg','face15.jpg','face19.jpg','face20.jpg','face21.jpg','face23.jpg','face25.jpg','face26.jpg','face28.jpg','face33.jpg','face34.jpg','face35.jpg','face46.jpg','face37.jpg','face38.jpg','face39.jpg','face47.jpg','face50.jpg'];
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
        {
          questions: [
            {
              type: 'info',
              contentType: 'text',
              text: 'Now we\'ll practice with both words and faces. Press the left button for good words and white faces, and the right button for bad words and black faces.',
              buttonLabels: ['Let\'s Go!']
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${goodWords[3]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'practice',
              contentType: 'image',
              imgName: `${blackFaces[2]}`,//
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'practice',
              contentType: 'text',
              text: `${badWords[1]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            }
          ]
        },
        {
          // contains scored questions | 4 whitegoodblackbad
          questions: [
            {
              type: 'info',
              contentType: 'text',
              text: 'Now we\'ll start the test. Press the left button for good words and white faces, and the right button for bad words and black faces.',
              buttonLabels: ['Let\'s Go!']
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[4]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[3]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[2]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[1]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'

            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[4]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[5]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[3]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[2]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[5]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[6]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[6]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[4]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            }
          ]
        },
        {
          questions: [ // contains scored questions 5 | blackgoodwhitebad
            {
              type: 'info',
              contentType: 'text',
              text: 'Now, we\'ll switch it up - press the left button for bad words and white faces, and the right button for good words and black faces.',
              buttonLabels: ['Let\'s Go!']
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[17]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[3]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[7]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[12]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[9]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[4]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[5]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[12]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[6]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[5]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[10]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[8]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            }
          ]
        },
        {
          questions: [ // contains scored questions
            {
              type: 'info',
              contentType: 'text',
              text: 'Now, back to the original rules - press the left button for good words and white faces, and the right button for bad words and black faces.',
              buttonLabels: ['Let\'s Go!']
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[18]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[6]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[20]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[7]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[7]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[7]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[9]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[8]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'

            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[10]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'

            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[8]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[9]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[8]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[15]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[9]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Bad\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[11]}`,
              buttonLabels: ['Good\nWhite', 'Bad\nBlack'],
              correctAnswer: 'Good\nWhite'
            }
          ]
        },
        {
          questions: [ // contains scored questions
            {
              type: 'info',
              contentType: 'text',
              text: 'Almost done! We\'ll switch it up one last time - press the left button for bad words and white faces, and the right button for good words and black faces.',
              buttonLabels: ['Let\'s Go!']
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[24]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[14]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[15]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[21]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[13]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[13]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[12]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[22]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[21]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[14]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[20]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${whiteFaces[11]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${badWords[19]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Bad\nWhite'
            },
            {
              type: 'scored',
              contentType: 'image',
              imgName: `${blackFaces[11]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            },
            {
              type: 'scored',
              contentType: 'text',
              text: `${goodWords[19]}`,
              buttonLabels: ['Bad\nWhite', 'Good\nBlack'],
              correctAnswer: 'Good\nBlack'
            }
          ]
        },
        {
          questions: [
            {
              type: 'info',
              contentType: 'text',
              text: 'Great job! Let\'s see your results!',
              buttonLabels: ['Let\'s see!']
            }
          ]
        }
      ],
      evalFnPath: `../tests/raceIATEval` // relative to a file in screens (like InTest.jsx and Results.jsx)
    }
  );
  
}