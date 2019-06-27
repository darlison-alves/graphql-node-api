import { Instance, Model, Sequelize, DataTypes } from "sequelize";
import { BaseModelInterface } from "../interfaces/BaseModelInterface";
import { ModelsInterface } from "../interfaces/ModelsInterface";

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
    let Post: PostModel = sequilize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: DataTypes.BLOB({
                length: 'long'
            }),
            allowNull: false
        }
    },{
        tableName: 'posts'
    })

    Post.associate = (models: ModelsInterface): void => {
        Post.belongsTo(models.User, {
            foreignKey:{
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        })
    };

    return Post
}