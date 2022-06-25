import { Timestamp } from "@angular/fire/firestore";

export interface Post {
    // declared by user
    comment: string;
    category: number;
    photoID: string;


    // instantiated by backend
    ID: string;
    time: Timestamp;

    userName: string;
    userAvatar: string; 
}