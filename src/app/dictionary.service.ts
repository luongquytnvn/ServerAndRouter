import {Injectable} from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {
      key: 'service',
      meaning: 'dịch vụ'
    }, {
      key: 'service provider',
      meaning: 'nhà cung cấp dịch vụ'
    }, {
      key: 'provide',
      meaning: 'cung cấp'
    }, {
      key: 'efficient',
      meaning: 'hiệu quả'
    }, {
      key: 'snow',
      meaning: 'tuyết'
    }
  ];

  getAll(): IWord[] {
    return this.words;
  }
  findWord(key) {
    if (!key) {
      return '';
    }
    const w = this.words.find(item => item.key === key.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  constructor() {
  }
}
