import Sound from 'react-native-sound'

export class Recording{
    name: string;
    URL: string;
    path: string;
    sound?: Sound;

    
    public constructor(name: string, URL: string, path: string){
        this.name = name;
        this.URL = URL;
        this.path = path;
    }
    public set_sound(sound: Sound): void {
        this.sound = sound;
    }
}