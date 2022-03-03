export interface UtentiInterface 
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
}
