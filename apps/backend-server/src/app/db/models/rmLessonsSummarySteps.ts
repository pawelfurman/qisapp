import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";

export type ApiRmLessonsSummaryStep = {
    id: number
    stepId: number
    lessonId: number
    lessonName: string
    questionId: number
    firstValue: string
    secondValue: string
    userAnswer: string
    userId: number
    correctness: boolean
    createdAt: Date | string | null
    updatedAt: Date | string | null
    deletedAt: Date | string | null
}


type IRmLessonsSummaryStepInput = Optional<ApiRmLessonsSummaryStep, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class IRmLessonsSummaryStep extends Model<ApiRmLessonsSummaryStep, IRmLessonsSummaryStepInput> implements ApiRmLessonsSummaryStep{
    id!: number
    stepId!: number
    lessonId!: number
    lessonName!: string
    questionId!: number
    firstValue!: string
    secondValue!: string
    userAnswer!: string
    userId!: number
    correctness!: boolean
    createdAt!: Date | string | null
    updatedAt!: Date | string | null
    deletedAt!: Date | string | null
}


IRmLessonsSummaryStep.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stepId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lessonName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    firstValue: {
        type: DataTypes.STRING,
        allowNull: true
    },

    secondValue: {
        type: DataTypes.STRING,
        allowNull: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    correctness: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    userAnswer: {
        type: DataTypes.STRING,
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
    tableName: 'rm_lessons_summary_steps'
})

export default IRmLessonsSummaryStep;