export interface Pokemon {
    name: string;
    id: number;
    sprites: {
        back_default: string,
        back_shiny: string,
        front_default: string,
        front_shiny: string,
    }
}