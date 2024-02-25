import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-cards.component.html',
  styleUrl: './small-cards.component.scss'
})
export class SmallCardsComponent {
  @Input()
  photoCover: string = '';
  @Input()
  titlePost: string = '';
  @Input()
  descriptionPost: string = '';
  @Input()
  Id: string = '0';

}
