export class ColourService
{
    color:Array<Colour>;

    constructor ()
    {
        this.color = [
            { name : "Red", code : "F44336"},
            { name : "Pink", code : "E91E63"},
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
