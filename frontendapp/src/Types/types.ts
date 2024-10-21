export type UserProps={
    id:number;
    name:string;
    email:string;
    gender:string;
    status:"active" | "inactive";
}[]


export type PostProps={
    id:number;
    user_id:number;
    title:string;
    body:string;
}[]

export type CommentProps={
    id:number;
    post_id:number;
    name:string;
    email:string;
    body:string;

}[]

export type TosoProps={
    id:number;
    user_id:number;
    title:string;
    due_on:Date;
    status:"pending" | "completed"
}