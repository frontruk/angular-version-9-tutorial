export interface UserLoginForm {
    username: string;
    password: string;
}
export interface UserDetailsModel{
    token:   string;
    id:  string;
    fullname:  string;
    roletype:  string;
    age:  string;
}

export interface User{
    username: string;
    name: string;
    role: string;
    token:   string;
    age:  string;
}
export interface Person{
    firstname: string;
    lastname: string;
    city: string;
    country: string;
}