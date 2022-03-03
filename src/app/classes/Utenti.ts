import { UtentiInterface } from "../interfaces/utenti";


export class Utenti implements UtentiInterface
{

    id: number;
    macrosezione: string;
    paragrafo: string;
    testo: string;
    dettagli : {
      eta : number,
      provenienza: string,
      altezza : number
}
  
  
    constructor() {
      this.id = 0;
      this.macrosezione = "null"
      this.testo = "null"
      this.paragrafo = "null"
      this.dettagli = {
        eta : 0,
        provenienza: "NN",
        altezza : 0
 }

    }
  }


