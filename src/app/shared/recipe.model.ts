export class Recipe {
    public id: number;
    public name: string;
    public variant: string;
    public description: string;
    public weight: number;
    public starttemp?: number;
    public temp: number;

    constructor(id, name, variant, description, weight, starttemp, temp) {
        this.id = id;
        this.name = name;
        this.variant = variant;
        this.description = description;
        this.weight = weight;
        this.starttemp = starttemp;
        this.temp = temp;
    }
}
