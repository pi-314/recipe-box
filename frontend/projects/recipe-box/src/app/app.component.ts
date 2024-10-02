import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lucideMail } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';

import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HlmButtonDirective, HlmIconComponent],
  providers: [provideIcons({ lucideMail })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-box';
}
