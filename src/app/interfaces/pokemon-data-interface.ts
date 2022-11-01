export interface PokemonDataInterface{
    id : number,
    base : {
        attack : number,
        defense : number,
        hp : number,
        spAttack : number,
        spDefense : number,
        Speed : number
    },
    description: string,
    image : string,
    thumbnail : string,
    name : string,
    type : string []
}