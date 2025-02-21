export interface signUpType {
    username:string,
    email:string,
    password:string,
    role:"user" | "admin",
    imageUrl:string  | File
}

export interface signUpReturnType {
    message:string,
    success:boolean,
    data:signUpType | null
}

export interface signInUserType {
    email:string,
    password:string
}