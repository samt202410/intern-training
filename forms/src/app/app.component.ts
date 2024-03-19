import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicFormComponent } from './basic-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'forms';
}
