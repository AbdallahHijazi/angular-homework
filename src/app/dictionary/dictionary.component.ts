import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryService } from './dictionary.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { empty } from 'rxjs';


@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [TabsModule, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css',
  providers: [DictionaryService]
})
export class DictionaryComponent {

  word: string = '';
  meanings: any[] = [];
  synonyms: string[] = [];
  definitions: string[] = [];
  audio: string = '';

  constructor(private dictionaryService: DictionaryService) { }

  filter() {
    let text = this.isArabicText(this.word);
    if (!text) {
      this.dictionaryService.getWordData(this.word).subscribe(
        (data) => {
          this.meanings = data[0].meanings;
          this.synonyms = this.meanings.flatMap(meaning => meaning.synonyms || []);
          this.definitions = this.meanings.flatMap(meaning => meaning.definitions.map((d: any) => d.definition));
          this.audio = data[0].phonetics[0]?.audio;
        },
      );
    }
    // (error) => {
    //   console.error('This word is not in this dictionary');
    // }
  }

  reset() {
    this.meanings = [];
    this.synonyms = [];
    this.definitions = [];
    this.audio = '';
  }

  searchWord() {
    this.filter();
  }

  isArabicText(text: string): boolean {
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return arabicRegex.test(text);
  }

}
