import quiz from './quiz.json';


export const quizData = [
  {
    name: "1-10",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 10 && item.age >= 1).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 10 && item.age >= 1).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 10 && item.age >= 1).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 10 && item.age >= 1).length,
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 10 && item.age >= 1).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 10 && item.age >= 1).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 10 && item.age >= 1).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 10 && item.age >= 1).length,
  },
  {
    name: "11-20",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 20 && item.age >= 11).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 20 && item.age >= 11).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 20 && item.age >= 11).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 20 && item.age >= 11).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 20 && item.age >= 11).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 20 && item.age >= 11).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 20 && item.age >= 11).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 20 && item.age >= 11).length,
  },
  {
    name: "21-30",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 30 && item.age >= 21).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 30 && item.age >= 21).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 30 && item.age >= 21).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 30 && item.age >= 21).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 30 && item.age >= 21).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 30 && item.age >= 21).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 30 && item.age >= 21).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 30 && item.age >= 21).length,
  },
  {
    name: "31-40",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 40 && item.age >= 31).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 40 && item.age >= 31).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 40 && item.age >= 11).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 40 && item.age >= 11).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 40 && item.age >= 31).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 40 && item.age >= 31).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 40 && item.age >= 31).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 40 && item.age >= 31).length,
  },
  {
    name: "41-50",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 50 && item.age >= 41).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 50 && item.age >= 41).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 50 && item.age >= 11).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 50 && item.age >= 11).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 50 && item.age >= 41).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 50 && item.age >= 41).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 50 && item.age >= 41).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 50 && item.age >= 41).length,
  },
  {
    name: "51-60",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 60 && item.age >= 51).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 60 && item.age >= 51).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 60 && item.age >= 11).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 60 && item.age >= 11).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 60 && item.age >= 51).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 60 && item.age >= 51).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 60 && item.age >= 51).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 60 && item.age >= 51).length,
  },
  {
    name: "61-70",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 70 && item.age >= 61).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 70 && item.age >= 61).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 70 && item.age >= 11).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 70 && item.age >= 1).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 70 && item.age >= 61).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 70 && item.age >= 61).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 70 && item.age >= 61).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 70 && item.age >= 61).length,
  },
  {
    nam: "71-80",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 80 && item.age >= 71).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 80 && item.age >= 71).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 80 && item.age >= 71).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 80 && item.age >= 71).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 80 && item.age >= 71).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 80 && item.age >= 71).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 80 && item.age >= 71).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 80 && item.age >= 71).length,
  },
  {
    name: "81-90",
    male: quiz.filter((item) => item.gender === 'Male' && item.age <= 90 && item.age >= 81).length,
    female: quiz.filter((item) => item.gender === 'Female' && item.age <= 90 && item.age >= 81).length,
    bigender: quiz.filter((item) => item.gender === 'Bigender' && item.age <= 90 && item.age >= 81).length,
    polygender: quiz.filter((item) => item.gender === 'Polygender' && item.age <= 90 && item.age >= 81).length,
    
    genderfluid: quiz.filter((item) => item.gender === 'Genderfluid' && item.age <= 90 && item.age >= 81).length,
    nonbinary: quiz.filter((item) => item.gender === 'Non-binary' && item.age <= 90 && item.age >= 81).length,
    agender: quiz.filter((item) => item.gender === 'Agender' && item.age <= 90 && item.age >= 81).length,
    genderqueer: quiz.filter((item) => item.gender === 'Genderqueer' && item.age <= 90 && item.age >= 81).length,
  },
];

