export interface Equipo {
    name: string;
    countryName: string;
    alternativeName: string[];
    colors: string[];
    wonTittles: Titulo[]; 
    coachName: string;
    captainName: string;
    logo: string;
    abbreviation: string;
    topScorer:Goleador;
    estadio: Estadio;
    jugadores: Player[];

}
export interface Titulo {

    name: string;
    numberOfWins:number;
    yearsOfWins: number[];

}

export interface Goleador{
    name: string;
    numberOfGoals: number;
}

export interface Estadio{

    name:string;
    nickname:string;
    location:string;
    capacity:number;
}
export interface Player {
    name:string;
    lastname:string;
    age: number;
    height:string;
    placeOfBirth: string;
    position:string;
    currentClub:string;
    shirtNumber:number;
}