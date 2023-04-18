const result = document.getElementById("szam"); 
const minusz = document.getElementById("minusz"); 
const plusz = document.getElementById("plusz");
const vissza = document.getElementById("vissza");

let szam = 0; 




minusz.addEventListener("click", () =>{ 

 szam = szam-1; 
 console.log (szam);


  result.innerHTML = szam; 
  if(szam<0){ 

    result.classList.add("piros");

  } else { 

    result.classList.remove("piros");

    result.classList.add("zold");

  }

})


plusz.addEventListener("click", () =>{ 

 szam = szam+1; 
 console.log (szam);

  result.innerHTML = szam; 

  if(szam<0){ 

    result.classList.add("piros");

  } else { 
    result.classList.remove("piros");
    result.classList.add("zold");

  }

})


vissza.addEventListener("click", () =>{ 

 szam = 0;
 console.log (szam);

  result.innerHTML = szam; 

})
