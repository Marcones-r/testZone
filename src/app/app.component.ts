import {Component} from '@angular/core';
import { TestsComponent } from './tests/tests.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TestsComponent],
})
export class AppComponent {
  

}
