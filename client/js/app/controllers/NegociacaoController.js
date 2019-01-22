class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document) // o bind faz com que o this. do querySelector se referencie ao document e não ao $
        //usar o this dentro do constructor faz com que o código tenha melhor performance
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
    }
    adiciona(event){
        event.preventDefault()
        // ... é o spread operator, que faz com que a ordem dos parametros é a ordem dos elementos do array
        
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) =>  item - indice % 2) // iremos chamar a função map no array criado e dependendo do elemento, iremos diminuir -1.
                /* if(indice == 1) {
                    return item - 1;
                } return item */ 
            )

        let negociacao = new Negociacao(
            data, 
            this._inputQuantidade.value,
            this._inputValor.value
        )
        console.log(negociacao)

            //limpar campos
            this._inputData.value = ""
            this._inputQuantidade.value = 1
            this._inputValor.value = 0
            //campos[0].focus()

            this._inputData.focus()  
    } 
}