import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.youtubeService.showVideo(id);
    });
  }

}
