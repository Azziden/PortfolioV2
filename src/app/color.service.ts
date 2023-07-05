import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColorService {

    private logoColorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    logoColor$ = this.logoColorSubject.asObservable();

    logoColor: string = '';
    typingColor: string = '';

    colors = ['#3182ed', '#FF5733', ''];

    currentIndex: number = 0;

    changeColors() {
        this.logoColor = this.colors[this.currentIndex];
        this.typingColor = this.colors[this.currentIndex];

        this.currentIndex = (this.currentIndex + 1) % this.colors.length;
        this.setLogoColor(this.logoColor);
    }
    setLogoColor(color: string) {
        this.logoColorSubject.next(color);
    }
    constructor() { }
}
