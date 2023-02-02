module.exports = function check(str, bracketsConfig) {

  const openBrackets = bracketsConfig.map (function (item, index, array){
    for(let i = 0; i < array.length; i++){
      return item [i][0];
    }
  });

  let closeBrackets = {};
  for(let i = 0; i < bracketsConfig.length; i++){
      closeBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let result = [];

  for(let i = 0; i < str.length; i++){
    let currentBracket = str[i];
    
      if(openBrackets.includes(currentBracket)){
        result.push(currentBracket);
      } else {
        if(result.length === 0){
          return false;
        } else {
          if(closeBrackets[currentBracket] === result[result.length - 1]){
            result.pop();
          } else {
            return false;
          }
        }
      }
      
      for(let key in closeBrackets){
        if((result[result.length - 1] === result[result.length - 2]) && (result[result.length - 1] === key)){
          result.pop();
          result.pop();
        }
      }
  }

  if(result.length === 0){
    return true;
  } else {
    return false;
  }
}
