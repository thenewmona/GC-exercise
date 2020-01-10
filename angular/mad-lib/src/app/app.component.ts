

@Component({
  selector: 'my-first-angular-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mad-lib';
  hideTitle = true;

  returnTitle() {
    return this.title;
  }

  toggleTitle($event) {
    console.log($event)
    this.hideTitle = !this.hideTitle;
  }
}
