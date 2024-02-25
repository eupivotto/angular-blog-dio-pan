import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardsComponent } from "../../components/small-cards/small-cards.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, BigCardComponent, SmallCardsComponent]
})
export class HomeComponent {
    

}
