export class Recording{
    name: string;
    URL: string;
    path: string;
    
    public constructor(name: string, URL: string, path: string){
        this.name = name;
        this.URL = URL;
        this.path = path;
    }
}