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

export interface menuLinktype   {
    id:number,
    name:string,
    path:string
}

export interface typeSlideImages {
    id:number,
    src:string,
    name:string 
}