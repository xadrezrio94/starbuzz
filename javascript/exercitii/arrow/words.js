const words=["engine", "LinkedIn", "login", "hello", "JAva Script", "Amsterdam", "123"]; //para colocar os nomes com letras maiusculos na lista, depois colocar eles em ordem alfabetica
words.sort()
     .filter(words=> words.charAt(0) >= "A" && words.charAt(0) <= "Z");
     .join("<br/>");
    
    var text = words.sort()
         .filter(words=> words.charAt(0) >= "A" && words.charAt(0) <= "Z");
         .join(<br/>)
