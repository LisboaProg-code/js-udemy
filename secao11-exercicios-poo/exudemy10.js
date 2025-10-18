class WordCounter{
    constructor(){
        this.obj = {}
    }

    countWords(string){
        const palavras = string.split(" ");
        return palavras.length;
    }
}

let minhaString = new WordCounter()
let quantidade = minhaString.countWords("Boa noite tudo bom")
console.log(quantidade)