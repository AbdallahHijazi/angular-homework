import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,DictionaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [HttpClientModule]
})
export class AppComponent {
  title = 'angular-homework';
}
