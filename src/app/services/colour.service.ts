export class ColourService
{
    color:Array<Colour>;

    constructor ()
    {
        this.color = [
            { name : "Red", code : "red"},
            { name : "Pink", code : "pink"},
            { name : "Purple", code : "purple"},
            { name : "Deep Purple", code : "deeppurple"},
            { name : "Indigo", code : "indigo"},
            { name : "Blue", code : "blue"},
            { name : "Lightblue", code : "Lightblue"},
            { name : "Cyan", code : "cyan"},
            { name : "Teal", code : "teal"},
            { name : "Green", code : "green"},
            { name : "Light Green", code : "lightgreen"},
            { name : "Lime", code : "lime"},
            { name : "Yellow", code : "yellow"},
            { name : "Orange", code : "orange"},
            { name : "Deep Orange", code : "deeporange"},
            { name : "Brown", code : "brown"},
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
