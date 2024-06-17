function pintar(elemento, color='green'){
  const ele = document.getElementById(elemento)
  ele.addEventListener("click", function(event){
  ele.style.backgroundColor = color
  })
  }
  pintar("ele1","yellow")


