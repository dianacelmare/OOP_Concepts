//1. Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:
// marca (ex: Volvo, Mazda, Dacia)
// model (ex: XC-60, CX-5, BIGGSTER)
// culoare (ex Negru, Verde, Albastru)
// kilometraj (ex 234 000, 111 000, 20 000)
// Pentru aceasta clasa definește un constructor care sa inițializeze proprietățile clasei folosind this.

// Pe lângă constructor, definește o metodă de tip getter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) numita proprietati care va returna proprietățile mașinii sub forma

// Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

// La final, definește separat o funcție numită main, in care se vor crea 3 instanțe ale clasei mașina folosind operatorul new. Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. Afișează proprietățile mașinilor instanțiate folosind getter-ul proprietati.


// Pentru mașinile date in exemplu programul va afișa

// Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]

// Masina[marca=Mazda, model=CX-5, culoare=Verde, kilometraj=111 000]

// Masina[marca=Dacia, model=BIGGSTER, culoare=Albastru, kilometraj=20 000]

class Masina{
  #marca;
  constructor(marca, model, culoare, kilometraj){
    this.#marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  proprietati = function(){
    return `Marca = ${this.#marca}, Model = ${this.model}, Culoare = 
    ${this.culoare}, Kilometraj = ${this.kilometraj}.`
  }
  
  setCuloare = function(culoare){
    this.culoare=culoare;
  }
  
}

  const masina1 = new Masina('Opel', 'Astra', 'negru', 356000);
  const masina2 = new Masina('Suzuki', 'Jimny', 'rosu', 89000)
  const masina3 = new Masina('Opel', '208', 'albastru', 439000);
  console.log(masina1.proprietati());
  masina2.setCuloare('alb')
  console.log(masina2.proprietati());

//    2. Definește încă o clasa numita MasinaDeCurse. Această clasă va moșteni clasa Masina definita la exercițiul 1, folosind cuvantul cheie extends si va avea un constructor in care se va apela super() (adica superconstructorul).

//    MasinaDeCurse va avea o metoda suplimentara numita participaLaCampionat, metoda ce va primi un parametru numit pozitiaInCampionat (un numar). Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului pozitiaInCampionat. Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

// Ex:

// const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
// m1.participaLaCampionat(30);
// //Va afisa mesajul: Am castigat locul 30

// m1.participaLaCampionat(-1);
// //Va afisa mesajul: Nu am castigat niciun premiu
// La final defineste o functie in care sa instantiezi doua masini de curse, prima va paricipa la campionat si va castiga locul 2, iar a doua nu va participa la campionat(folosind metoda definita). De asemenea afiseaza proprietatiile masinilor ca si la exercitiul

class MasinaDeCurse extends Masina{
  constructor(marca, model, culoare, kilometraj, pozitiaInCampionat){
    super(marca, model, culoare, kilometraj);
    this.pozitiaInCampionat = pozitiaInCampionat;
  }

  participaLaCampionat = function(pozitiaInCampionat){
    console.log(`Am castigat locul ${pozitiaInCampionat}`);
    if(pozitiaInCampionat>0){
      console.log('Am castigat premiu!')
    }else console.log('Nu am castigat premiu!')
  }
  //cum preiau getter-ul din parinte?
  proprietati = function(){
    //this.proprietati()
    return ` Pozitia = 
    ${this.pozitiaInCampionat}.`
    
  }
}

const masinaDeCurse1 = new MasinaDeCurse('Ferrari', 'Superamerica', 'rosu', '473000', '3');
console.log(masinaDeCurse1);
console.log(masinaDeCurse1.proprietati());


// 3.Deschide un Pull Request cu solutia ta.

// 4. Încarca link către PR-ul tău, folosind Text Reply.