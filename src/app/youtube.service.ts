import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  src = '';
  playlist = [
    {id: 'CX11yw6YL1w', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'},
    {id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];

  constructor(private domSanitizer: DomSanitizer) {
  }


  showVideo(id: string) {
    const index = this.playlist.findIndex(song => song.id = id);
    this.src = 'https://www.youtube.com/embed/' + this.playlist[index].id;
  }

  getSrc() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.src);
  }
}
