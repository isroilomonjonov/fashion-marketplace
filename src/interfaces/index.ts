export interface Data{
    id: number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    };
    quantity:number;

}
export interface LikeDataType{
    id: number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    };
    quantity:number;
    isLiked:boolean;
}