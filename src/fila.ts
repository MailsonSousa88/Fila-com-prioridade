class FilaComPrioridade {
    private capacidade: number;
    private filas: Array<Array<number>>;

    constructor(capacidade: number){
        this.capacidade = capacidade;
        this.filas = [[], [], [], [], []]; 
    }

    tamanho(): number{
        let total = 0;

         for (let fila of this.filas){
        total += fila.length;
    }
    return total;
    }

    estaVazio(): boolean{
        return this.tamanho() == 0;
    }

    enqueue(elemento:number,prioridade:number): void{
        if (this.estaCheia()) {
            console.error("A fila está cheia, não é possível adicionar.");
            return;
        }

        if (prioridade < 1 || prioridade > 5) {
            console.error("Prioridade inválida. Use valores entre 1 e 5.");
            return;
        }

    this.filas[prioridade - 1].push(elemento);
}


    remover(): number | null{
        for(let i = 4; i >= 0; i--){
            if(this.filas[i].length > 0){
                const elementoRemovido = this.filas[i].shift()!;
                return elementoRemovido;
            }
        }

        console.error("A fila está vazia, nada para remover.");
        return null;
    }

    estaCheia(): boolean{
        return this.tamanho() >= this.capacidade;
    }

    verProximo(): number | null{
        for (let i = 4; i >= 0; i--) {
            if (this.filas[i].length > 0){
                return this.filas[i][0]; 
            }
        }
        console.error("A fila está vazia, nada para visualizar.");
        return null;
    }

    limpar(): void{
    this.filas = [[], [], [], [], []];
    }
}