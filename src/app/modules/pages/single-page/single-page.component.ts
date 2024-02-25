import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { dataPosts } from '../../data/dataFake';

@Component({
  selector: 'app-single-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.scss',
})
export class SinglePageComponent {
  photoCover: string = '';
  titlePost: string = '';
  descriptionPost: string = '';
  date: string = '';

  private id: string = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id')?.toString()!;
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string) {
    const result = dataPosts.filter((posts) => posts.id == id)[0];
    this.titlePost = result.title;
    this.descriptionPost = result.description;
    this.photoCover = result.photo;
    this.date = result.date;
  }
}
