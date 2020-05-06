import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  langSubscription: Subscription;
  constructor(
    private translate: TranslateService,
    private _snackBar: MatSnackBar) {}

  displaySnack(lang: string) {
    this.langSubscription = this.translate.use(lang).subscribe(() => {
      const message = this.translate.instant("SNACK.MODIFY")
      this._snackBar.open(message, null, {
        duration: 2000,
      });
      this.unsubscribe();
    });
  }

  unsubscribe() {
    if(this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  public ngOnDestroy(): void {
    this.unsubscribe();
  }

}
