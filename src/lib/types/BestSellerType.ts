import { StaticImageData } from "next/image";

export interface BestSellerType {
    data:{
        id: number,
        name: string,
        price: number,
        tags: string[],
        company: string,
        model: string,
        description: string,
        picture: string,
    }
}