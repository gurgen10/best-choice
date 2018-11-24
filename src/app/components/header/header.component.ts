import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/core/Services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public langName: string = 'Armenian';
  private storageLangKey: string;

  constructor(private translate: TranslateService) {
    this.storageLangKey = StorageService.getData('language');
    
    if (this.storageLangKey) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang(this.storageLangKey);
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(this.storageLangKey);

    } else {
      translate.setDefaultLang('am');
      translate.use('am');
    }
  }

  ngOnInit() {
    switch (this.storageLangKey) {
      case 'am': this.langName = 'Armenian';
        break;
      case 'ru': this.langName = 'Russian';
        break;
      case 'en': this.langName = 'English';
        break;
      default: this.langName = 'Armenian'; break;
    }
  }

  public switchLang(lang) {
    this.translate.use(lang);

    switch (lang) {
      case 'am': this.langName = 'Armenian';
        StorageService.saveItem('language', 'am');
        break;
      case 'ru': this.langName = 'Russian';
        StorageService.saveItem('language', 'ru');
        break;
      case 'en': this.langName = 'English';
        StorageService.saveItem('language', 'en');
        break;
      default: this.langName = 'Armenian';
        StorageService.saveItem('language', 'am');
        break;
    }
  }
}
