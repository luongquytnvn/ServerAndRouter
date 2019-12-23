import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  key = '';
  meaning = '';

  constructor(private dictionaryService: DictionaryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const key = params.get('key');
      this.key = key;
      this.meaning = this.dictionaryService.findWord(key);
    });
  }

}
