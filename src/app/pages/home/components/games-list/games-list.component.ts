import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {

  @Input() games: Game[];
  @Input() title: string = 'Best games';

  constructor() { }

  ngOnInit() {}

}
