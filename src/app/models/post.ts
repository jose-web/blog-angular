export class Post{
    constructor(
        public id: number,
        public user_id: number,
        public ctegory_id: number,
        public title: string,
        public content: string,
        public image: string,
        public createdAt: any,
    ){}
}