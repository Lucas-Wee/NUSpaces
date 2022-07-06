import { Component , OnInit} from "@angular/core";
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
    selector: "app-reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.css"],
})

export class ResetPasswordComponent implements OnInit {

  email : string = '';

  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}