import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { User } from '../../data/User';
import { UsersService } from 'app/services/users.service';
import { UploadService } from 'app/services/upload.service';

@Component({
  selector: 'app-profile-dynamic',
  templateUrl: './profile-dynamic.component.html',
  styleUrls: ['./profile-dynamic.component.css']
})
export class ProfileDynamicComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(
    private toast: HotToastService,
    private usersService: UsersService,
    private uploadService: UploadService
  ) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      .subscribe((user) => {
        this.profileForm.patchValue({...user});
      })
  }

  saveProfile() {
    const profileData = this.profileForm.value;
    this.usersService
      .updateUser(profileData)
      .pipe(
        this.toast.observe({
          loading: 'Saving profile data...',
          success: 'Profile updated successfully',
          error: 'There was an error in updating the profile',
        })
      )
      .subscribe();
  }

  uploadFile(event: any, {uid}: User) {
    this.uploadService
      .uploadImage(event.target.files[0], `images/profile/${uid}`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
        switchMap((photoURL) =>
          this.usersService.updateUser({
            uid,
            photoURL,
          })
        )
      )
      .subscribe();
  }

}
