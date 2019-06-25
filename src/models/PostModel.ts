import { Instance, Model, Sequelize, DataTypes } from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";

export interface PostAttributes {
    id?: number;
    title?: string;
    content?: string;
    photo?: string;
    author?:string;
    createdAt?:string;
    updatedAt?:string;
}

export interface PostInstance extends Instance<PostAttributes>{}

export interface PostModel extends BaseModelInterface, Model<PostInstance, PostAttributes>{}

export default ( sequilize: Sequelize, DataTypes: DataTypes): PostModel => {
    const post: PostModel = sequilize.define('Post', {
        
    })
}