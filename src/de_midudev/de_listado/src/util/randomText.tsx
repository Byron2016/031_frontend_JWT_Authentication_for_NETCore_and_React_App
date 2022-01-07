export function getRandomText(length: number) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".match(/./g);
  // const text = "";
  let result = ''
  for (let i = 0; i < length; i++){
    if(charset != null) {
      const textRandom = charset[Math.floor(Math.random() * charset.length)];
      result += textRandom
    } else {
      result = 'No generado randómicamente'
    }
    
  } 
  return result;
}