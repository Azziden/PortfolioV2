import { Component } from '@angular/core';
import {ColorService} from "../color.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    logoColor=" ";
    constructor(private colorService: ColorService) { }

    ngOnInit() {
        this.colorService.logoColor$.subscribe(color => {
            this.logoColor = color;
        });

    }

}
