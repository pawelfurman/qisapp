import { ApiQuestion } from "@qisapp/api-contract";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";
import IQuestion from "./questions";

export type ApiLessonsQuestions = {
    id: number
    questionId: number
    lessonId: number
    createdAt: Date | string | null
    updatedAt: Date | string | null
    deletedAt: Date | string | null
}


type ILessonsQuestionsInput = Optional<ApiLessonsQuestions, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class ILessonsQuestions extends Model<ApiLessonsQuestions, ILessonsQuestionsInput> implements ApiLessonsQuestions{
    id!: number
    questionId!: number
    lessonId!: number
    createdAt!: Date
    updatedAt!: Date
    deletedAt!: Date
}


ILessonsQuestions.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'lessons',
            key: 'id'
        }
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
    tableName: 'lessons_questions'
})

ILessonsQuestions.hasOne(IQuestion, {
    as: 'question',
    foreignKey: 'id'
})

export default ILessonsQuestions;