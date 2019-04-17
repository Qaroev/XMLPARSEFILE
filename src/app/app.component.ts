import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // headers = new HttpHeaders({'Accept': 'application/xml'});
  // add: any;

  constructor(private http: HttpClient, private app: AppService) {
  }

  ngOnInit() {
    // this.getCaseFile()
    //   .subscribe((res: Element) => {
    //     this.getTitle(res);
    //   });

    this.app.getHeroes().subscribe((res) => {
      console.log(res);
    });
  }

  // getCaseFile() {
  //   return this.http.get('assets/config.xml', {responseType: 'text', headers: this.headers})
  //     .pipe(map((response: Element) => {
  //       return response;
  //     }));
  // }
  //
  //
  // parsFrom(str) {
  //   str = str || '';
  //   str = str.replace(/<\/?br\/?>/gm, '<br/>');
  //   const error = null;
  //   let xml: any;
  //   const xmlnsPat = /xmlns="http:\/\/ns\.adobe\.com\/textLayout\/2008"/igm;
  //   str = str.replace(xmlnsPat, '');
  //   if (DOMParser) {
  //     const parser = new DOMParser();
  //     parser['validateOnParse'] = true;
  //     xml = parser.parseFromString(str, 'application/xml');
  //     return xml;
  //   }
  // }
  //
  // getTitle(str: Element) {
  //   const obj: any = this.parsFrom(str);
  //   const xml: Element = obj.xml;
  //   const main = xml.getElementsByTagName('activity')[0] as HTMLElement;
  //   const main1 = xml.getElementsByTagName('element')[0] as HTMLElement;
  //   const s = main1.attributes[1].nodeValue;
  //   this.add = s;
  //   console.log(s);
  // }
}
