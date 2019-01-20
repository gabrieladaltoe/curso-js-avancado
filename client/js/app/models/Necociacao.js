class Negociacao {
    constructor(data, quantidade, valor){ // como um constructor funiona como uma função, pode receber parametros
        //o this funciona dentro da instância Negociação
        this._data = data
        this._quantidade = quantidade
        this._valor = valor 
        // o _ é uma convenção, dizendo para o programador que essas propriedades só podem ser acessadas pelos próprios métodos da classe
    }

    //no mundo JS, método é uma espécie de função
    getVolume(){
        return this._quantidade * this._valor
    }

    //metodos acessadores são criados para acessar as propriedades com _ 
    getData(){
        return this._data
    }

    getQuantidade(){
        return this._quantidade
    }

    getValor(){
        return this._valor
    }
}