import { DataTypes, Model, Optional } from "sequelize";
import { LESSON_STEP_CREATED } from "../../features/lessons/events/lesson-step-created";
import { producer, Topics } from "../../kafka/connection";
import { sequelize } from "../connection";

export type ApiLessonsStep = {
    id: number
    questionId: number
    lessonId: number
    userId: number
    correctness: boolean
    userAnswer: string
    createdAt: Date | string | null
    updatedAt: Date | string | null
    deletedAt: Date | string | null
}


type ILessonsStepInput = Optional<ApiLessonsStep, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class ILessonsStep extends Model<ApiLessonsStep, ILessonsStepInput> implements ApiLessonsStep{
    id!: number
    questionId!: number
    lessonId!: number
    userId!: number
    correctness!: boolean
    userAnswer: string
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
    tableName: 'lessons_step',
    hooks: {
        afterCreate: (data, opts) => {
            console.log('STEP CREATED!!')
            console.log(data)
            console.log(opts)
            producer.send({
                topic: 'lesson-steps',
                messages: [{
                    key: Topics.LessonSteps,
                    value: Buffer.from(JSON.stringify(data.get()))
                }]
            })
        }
    }
})

export default ILessonsStep;