import { ApiUser } from "@qisapp/api-contract";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";


export interface IUserAttributes extends ApiUser{}

export interface IUserInput extends Optional<IUserAttributes, 'id'>{}
export interface IUserOutput extends Required<IUserAttributes> {}

class IUser extends Model<IUserAttributes, IUserInput> implements IUserAttributes {
    public id!: number
    public username!: string
    public password!: string
  }


IUser.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true            
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'users',
        timestamps: false,
        sequelize: sequelize,
    })


export default IUser;