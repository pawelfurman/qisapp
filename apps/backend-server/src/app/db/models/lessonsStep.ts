import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";

export type ApiLessonsStep = {
    id: number
    questionId: number
    lessonId: number
    correctness: boolean
    createdAt: Date | string | null
    updatedAt: Date | string | null
    deletedAt: Date | string | null
}


type ILessonsStepInput = Optional<ApiLessonsStep, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class ILessonsStep extends Model<ApiLessonsStep, ILessonsStepInput> implements ApiLessonsStep{
    id!: number
    questionId!: number
    lessonId!: number
    correctness!: boolean
    createdAt!: Date
    updatedAt!: Date
    deletedAt!: Date
}


ILessonsStep.init({
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
        allowNull: true
    },
    correctness: {
        type: DataTypes.BOOLEAN,
        allowNull: true
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
    tableName: 'lessons_step'
})

export default ILessonsStep;