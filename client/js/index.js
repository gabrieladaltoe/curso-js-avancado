let campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

console.log(campos)

const tbody = document.querySelector("table tbody")

document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault()

    let tr = document.createElement("tr")
    
    // criar colunas para a linha criada
    campos.forEach(function(campo){
        let td = document.createElement("td")
        td.textContent = campo.value
        tr.appendChild(td)
    })

    let tdVolume = document.createElement("td")
    tdVolume.textContent = campos[1].value * campos[2].value

    tr.appendChild(tdVolume)
    tbody.appendChild(tr)

    console.log(campos[0])
    console.log(campos[1])
    console.log(campos[2])


    //limpar campos
    campos[0].value= ""
    campos[1].value = 1
    campos[2].value = 0
    //campos[0].focus()

    campos[0].focus()    
});