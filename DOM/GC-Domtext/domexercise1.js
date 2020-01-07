function main() {
    // Add "big" class to grow-me paragraph
    document.getElementById('grow-me').classList.add('big');
    
    // Remove the "big" class from the "shrink-me" paragraph.
    document.getElementById('shrink-me').classList.remove('big');
    
    // Find all the <li>s and log their text content to the console.
        let list = document.querySelectorAll("li");
for (let listItem of list){
    console.log(listItem.innerText);
};
    
  
    // Set the href of the link to "https://www.example.com"       
       let link = document.querySelector('.link');
   link.setAttribute('href',"https://www.example.com");   
   };

  // text to say "somewhere" instead of "nowhere".
link.innerText='somewhere';
    // Set the "display" CSS property of the "hide-me" paragraph to "none".
    document.getElementById('hide-me').style.display('none');
    
    // Set the "display" CSS property of the "show-me" paragraph to "block"
 document.getElementById('show-me').style.display('inline-block');
  
    /* Get the text that the user enters into the "name" input box and use 
    it to set a welcome message in the <h1>, e.g., "Welcome Grant!". */
  let input= document.getElementById('name').value;
  document.getElementById('h1').innerHTML = `Hello${input}`;
       
    // log all variables to console
    
  };