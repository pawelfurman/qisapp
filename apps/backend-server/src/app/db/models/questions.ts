import { ApiQuestion } from "@qisapp/api-contract";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";


type IQuestionInput = Optional<ApiQuestion, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class IQuestion extends Model<ApiQuestion, IQuestionInput> implements ApiQuestion{
    id!: number
    setId!: number
    userId!: number
    firstValue!: string
    secondValue!: string
    firstValueUsage!: string
    secondValueUsage!: string
    firstValueCollocation!: string
    secondValueCollocation!: string
    createdAt!: Date
    updatedAt!: Date
    deletedAt!: Date
}


IQuestion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    setId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    },
    firstValue: {
        type: DataTypes.STRING
    },
    secondValue: {
        type: DataTypes.STRING
    },
    firstValueUsage: {
        type: DataTypes.STRING
    },
    secondValueUsage: {
        type: DataTypes.STRING
    },
    firstValueCollocation: {
        type: DataTypes.STRING
    },
    secondValueCollocation: {
        type: DataTypes.STRING
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
    tableName: 'questions'
})

export default IQuestion;