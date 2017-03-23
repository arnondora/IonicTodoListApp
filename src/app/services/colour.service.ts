export class ColourService
{
    color:Array<Colour>;

    constructor ()
    {
        this.addNewColor('red','#F44336',0);
    }

    private addNewColor(name:string ,code:string, index:number)
    {
        var newColor = new Colour(name,code);
        this.color[index] = newColor;
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

    constructor (name, code)
    {
        this.name = name;
        if (code.charAt(0) == '#')
            this.code = code;
        else
            this.code = "#" + code;
    }
}