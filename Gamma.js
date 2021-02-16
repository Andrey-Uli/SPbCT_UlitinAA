function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let input, output,key;
  let inp, k;
  input = prompt("Введите текст");
  key = prompt("Введите ключ, размером с сообщение");
  if ((key.length) < (input.length)) {
      alert("Ключ короче сообщения. Скопируйте сгенерированный ключ.");
      key = "";
      for (let i = 0; i < input.length; i++) {
          key += String.fromCharCode(getRandomInt(0,5986));
      }
      console.log("Сгенерированный ключ:");
      console.log(key);
  } 
  output = "";
  for (i = 0; i < input.length; i++) {
      inp = input.charCodeAt(i);
      k = key.charCodeAt(i);
      output += String.fromCharCode(inp ^ k); 
  }
  console.log("Результат шифрования данных (гаммирование):");
  console.log(output);