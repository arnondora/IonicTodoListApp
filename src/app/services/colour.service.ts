export class ColourService
{
    color:Array<Colour>;

    constructor ()
    {
        this.color = [
            { name : "Red", code : "red"},
            { name : "Pink", code : "pink"},
            { name : "Blue", code : "blue"},
        ];
    }

    getColourSet()
    {
        return this.color;
    }
}

export class Colour
{
    name:string;
    code:string;

    constructor () {}
}
