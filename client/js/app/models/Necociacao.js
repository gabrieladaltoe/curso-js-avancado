class Negociacao {
    constructor(data, quantidade, valor){ // como um constructor funiona como uma função, pode receber parametros
        //o this funciona dentro da instância Negociação
        this._data = new Date(data.getTime()) // blindagem da classe para evitar que ela seja imutável, formando um novo objeto
        this._quantidade = quantidade
        this._valor = valor 
        Object.freeze(this) // esse this refere-se ao n1. Ou seja, depois de criada uma negociação, ela não poderá ser alterada. 
        // o _ é uma convenção, dizendo para o programador que essas propriedades só podem ser acessadas pelos próprios métodos da classe

/*         Como Object.freeze() é shallow (raso), ele será aplicado nas propriedades do objeto, mas as propriedade que são objetos não serão todas congeladas. A ação ficará apenas na superfície. Para resolver esta questão, falamos um pouco sobre programação defensiva. Quando alguém tentar acessar a data, nós retornaremos uma nova data. Fizemos o mesmo com o construtor e com isso, evitamos que alguém consiga de fora da classe alterar algum item do estado interno. */
    }

    //metodos acessadores são criados para acessar as propriedades com _ 
    //no mundo JS, método é uma espécie de função
/*     getVolume(){
        return this._quantidade * this._valor
    }

    getData(){
        return this._data
    }

    getQuantidade(){
        return this._quantidade
    }

    getValor(){
        return this._valor
    } */


    //como usar a propriedade get:
    //Criei a propriedade getter de acesso à leitura. E mesmo sendo um método, poderemos acessá-lo como uma propriedade. Mas, debaixo dos panos, ele continuará sendo executado como um método. Não podemos atribuir um valor. 

    get volume(){
        return this._quantidade * this._valor
    }

    get data(){
        return new Date(this._data.getTime())
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }

}