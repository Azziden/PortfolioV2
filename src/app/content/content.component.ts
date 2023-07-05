import { Component } from '@angular/core';
import {ColorService} from "../color.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

    logoColor = "";

    constructor(public colorService: ColorService) { }

    ngOnInit() {
        this.colorService.logoColor$.subscribe(color => {
            this.logoColor = color;
        });
    }

}
