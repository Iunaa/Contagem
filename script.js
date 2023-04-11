function contar(){
   let start = document.getElementById('start')
   let finish = document.getElementById('finish')
   let step = document.getElementById('step')
   let res = document.getElementById('res')

   if(start.value.length == 0 || finish.value.length == 0 || step.value.length == 0){
    res.innerHTML = 'Impossivel contar!'
    window.alert('[ERRO] Faltam dados!')
    

   }else{
    res.innerHTML = 'Contando: '
    let i = Number(start.value)
    let f = Number(finish.value)
    let s = Number(step.value)

    if(s <= 0){
        window.alert('Passo inválido')
        
    }

    if(i < f){

        //contagem crescente
        for(let c = i; c <= f; c = c + s){
        res.innerHTML += ` ${c} \u{1F449}` // Formataçao com emoji
    }
    res.innerHTML += `\u{1F3C1}`
    } else{

        //contagem regressiva
         for(let c = i; c >= f; c = c - s){
        res.innerHTML += ` ${c} \u{1F449}` // Formataçao com emoji
    }
    res.innerHTML += `\u{1F3C1}`

    }

   
   }
  

   

}

