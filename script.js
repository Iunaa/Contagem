function contar(){
   let start = document.getElementById('start')
   let finish = document.getElementById('finish')
   let step = document.getElementById('step')
   let res = document.getElementById('res')

   if(start.value.length == 0 || step.value.length == 0){
    window.alert('[ERRO] Faltam dados!')
   }else{
    res.innerHTML = 'Contando: '
    let i = Number(start.value)
    let f = Number(finish.value)
    let s = Number(step.value)

    for(let c = i; c <= f; c = c + s){
        res.innerHTML += `${c}`
    }
   }
  

   

}

