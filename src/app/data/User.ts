export interface User {
    // declared by a user upon signing up
    name: string;
    password: string;

    // declared by user upon updating profile
    avatar: string; //naive solution is to store links to pics for now

    // instantiated by backend
    ID: string;
    joinDate: string;

}