import { ApiSet } from "@qisapp/api-contract";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";

export interface ISetAttributes extends ApiSet{}
export interface ISetInput extends Optional<ISetAttributes, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>{}
export interface ISetOutput extends Required<ISetAttributes>{}

class ISet extends Model<ISetAttributes, ISetInput> implements ISetAttributes{
    id!: number
    name!: string
    description!: string
    userId!: number
    createdAt!: Date
    updatedAt!: Date
    deletedAt!: Date
}


ISet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.NUMBER
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    paranoid: true,
    timestamps: true,
    tableName: 'sets'
})

export default ISet;