


function retornarTracos() {
    let nome_atleta = document.getElementById('nome').value
    document.getElementById('resposta').innerHTML = nome_atleta 
    let nome = toString(nome_atleta)
    for (i = 0; i < nome.length(); i++) {
        if (nome.charAt(i) == " "){
            document.getElementById('resposta').innerHTML += " "
        } 
        else document.getElementById('resposta').innerHTML += "-"
    }

}

function categorizarAluno(){
    let idade = parseInt(document.getElementById('idade').value)

    if(idade <= 12){
        document.getElementById('resposta').innerHTML += "<br/>Categoria: Infantil" 
    }
    else if(idade > 18){
        document.getElementById('resposta').innerHTML += "<br/>Categoria: Adulto"
    }
    else document.getElementById('resposta').innerHTML += "<br/>Categoria: Juvenil"
}



let btn_categorizar = document.getElementById('categorizar')
btn_categorizar.addEventListener('click', retornarTracos)
btn_categorizar.addEventListener('click', categorizarAluno)
