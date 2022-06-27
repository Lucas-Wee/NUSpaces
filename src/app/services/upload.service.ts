import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private storage: Storage) { }

  uploadImage(image: File, path: string): Observable<string> {
    const imgRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(imgRef, image));
    return uploadTask.pipe(
      switchMap(result => getDownloadURL(result.ref))
    );
  }



}
