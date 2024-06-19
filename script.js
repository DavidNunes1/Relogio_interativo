function diasemana(diasem){
    switch(diasem){
        case 0:
            return 'Domingo'
            break
        case 1:
            return "Segunda"
            break
        case 2:
            return "Terça"
            break
        case 3:
            return "Quarta"
            break
        case 4:
            return "Quinta"
            break
        case 5:
            return "Sexta"
            break
        case 6:
            return "Sábado"
            break
    }
}


function main(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var titolo = document.getElementById("titolo")
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var diasem1 = data.getDay()
    var diasem = diasemana(diasem1)
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var minutos = minutos.toString()
    if(minutos.length <2){
        minutos = "0" + minutos
    }
    titolo.innerText = `${dia}/${mes}/${ano} - ${diasem}`
    msg.innerHTML = `<strong>${hora}:${minutos}</strong>`
    if (hora >=7 && hora <=12){
        img.src = 'manha.png'
    }
    if (hora >12 && hora <=18){
        img.src = 'tarde.png'
    }else if(hora > 18){
        img.src = 'noite.png'
    }
}


setInterval(main, 1000)
