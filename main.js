
class Casa {
    constructor(janela, porta, quintal) {
        this.janela = janela;
        this.porta = porta;
        this.quintal = quintal;
    }
}


class Casa1 extends Casa {
    constructor(janela, porta, quintal, garagem) {
        super(janela, porta, quintal);
        this.garagem = garagem;
    }

    declara1() {
        console.log(`A casa 1 tem ${this.janela} janelas, ${this.porta} portas, e ${this.garagem} garagem.`);
    }
}


class Casa2 extends Casa {
    constructor(janela, porta, quintal, jardim) {
        super(janela, porta, quintal);
        this.jardim = jardim;
    }

    declara2() {
        console.log(`A casa 2 tem ${this.janela} janelas, ${this.porta} portas, e um jardim: ${this.jardim}.`);
    }
}


class Casa3 extends Casa{
    constructor(janela, porta, quintal, metroQuadrado){
        super(janela, porta, quintal)
        this.metroQuadrado = metroQuadrado
    }

    declara3(){
        console.log(`A casa 3 tem ${this.metroQuadrado} metros quadrado, sendo a maior casa, e ${this.quintal} quintal enorme`)
    }
}


const minhaCasa1 = new Casa1(4, 2, true, 1);
const minhaCasa2 = new Casa2(6, 3, true, "grande");
const minhaCasa3 = new Casa3(5, 3, 1, 200);


minhaCasa1.declara1();  
minhaCasa2.declara2();  
minhaCasa3.declara3()
