import { Component, OnInit } from '@angular/core';
import { CategorySelectorService } from '../category-selector.service';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {

  categoriesList = [
    {
      "categoryName": "Pokemon",
      "categoryItems": [
        "Bulbasaur",
        "Pikachu"
      ]
    },
    {
      "categoryName": "Pokemon2",
      "categoryItems": [
        "Bulbasaur2",
        "Pikachu2"
      ]
    }
  ]

  constructor(private categorySelector : CategorySelectorService) { }

  ngOnInit(): void {
  }

}
