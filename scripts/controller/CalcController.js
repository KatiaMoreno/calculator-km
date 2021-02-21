//CLASS
class CalcController{

    constructor(){ // O contrutor e chamando automaticamente.
        
        this.locate = 'pt-en';
        this._displayCalcEl = document.querySelector("#display"); // passar o Id #display
        this._dateEl =  document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate; //dataAtual
        this.initialize();
    }

    initialize(){ // Main method - tudo que eu quizer que a calculadora faca vai esta nesse metodo, tem que colocar este metodo no contruto.

        this.setDisplayDateTime();

        setInterval(()=>{

          this.setDisplayDateTime();

        }, 1000);
    
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons >g, #parts >g");
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this.locate,{
            day: "2-digit",
            month: "short",  //or month: "long",                  
            year: "numeric"  //or year: "2-digit"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locate);

    }

    get displayTime(){
        return this._timeEl.innerHTML;

    }

    set displayTime(valor){
        this._timeEl.innerHTML= valor;

    }

    //------

    get displayDate(){
        return this._dateEl.innerHTML;

    }
    
    set displayDate(valor){
        this._dateEl.innerHTML = valor;

    }

    //------

    get displayCalc(){ // ele vai apenas devolver/ retorna um valor entao colocar o retun
        return this._displayCalcEl.innerHTML;
    }


    set displayCalc(valor){ // ele vai mudar o valor do displayCal , ele receber um novo valor entao, esse valor e passado dentro do parametro que esta dentro do parente()
        this._displayCalcEl.innerHTML = valor;
    }


    get currentDate(){
        return new Date;
    }

    set currentDate(valor){
        this._currentDate = valor;

    }
} 
