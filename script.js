function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar, faltam dados!'
    // window.alert ('[ERRO] Faltam Dados')
} else {
    res.innerHTML = ' Contando: <br> '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <=0 ){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
    if (1 < f){
        for(let c = 1; c <= f; c += p){
        res.innerHTML +=`${c} 👉🏽`
    } // Contagem crescente
    
    
}   else {
    for (let c = i; c >= f; c -= p) {
    res.innerHTML +=`${c} 👉🏽`
    // Contagem regressiva
}
}   res.innerHTML += "🏁"
    
}
}