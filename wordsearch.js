const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
    
  const verticalJoin = [];
  for (let i = 0; i < letters.length; i++) {
    let sentence = [];
        
    for (let vert of letters) {
      sentence.push(vert[i]);
    }

    let joinedSentence = sentence.join("");
    verticalJoin.push(joinedSentence);
    console.log(verticalJoin);
    sentence = [];
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
