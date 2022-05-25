export interface Post {
    // declared by user
    image: string;
    comment: string;

    // instantiated by backend
    ID: string;
    date: string;
    time: string;

    userName: string;
    userAvatar: string; //naive solution: in future supply the User interface to access both attributes
}