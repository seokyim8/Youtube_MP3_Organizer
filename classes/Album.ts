export class Album{
    name: string;
    recordings: Array<Recording>;

    public constructor(name: string, recordings: Array<Recording>){
        this.name = name;
        this.recordings = recordings;
    }
    
    public add_recording(recording: Recording): void{
        this.recordings.push(recording);
    }
}