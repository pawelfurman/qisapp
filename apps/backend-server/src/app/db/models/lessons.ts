import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";
import ILessonsQuestions from "./lessonsQuestions";
import ILessonsStatus from "./lessonsStatus";

export type ApiLessons = {
    id: number
    size: number
    userId: number
    repetition: number
    answerIncrement: number
    createdAt: Date | string | null
    updatedAt: Date | string | null
    deletedAt: Date | string | null
}


type ILessonsInput = Optional<ApiLessons, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class ILessons extends Model<ApiLessons, ILessonsInput> implements ApiLessons{
    id!: number
    size!: number
    userId!: number
    repetition!: number
    answerIncrement!: number
    createdAt!: Date
    updatedAt!: Date
    deletedAt!: Date
}

ILessons.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    repetition: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    answerIncrement: {
        type: DataTypes.INTEGER,
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
    tableName: 'lessons'
})


ILessons.hasMany(ILessonsStatus, {
    foreignKey: 'lessonId',
    as: 'status'
})
ILessons.hasMany(ILessonsQuestions, {
    foreignKey: 'lessonId',
    as: 'questions'
})

// ILessonsStatus.belongsTo(ILessons)
// ILessonsQuestions.belongsTo(ILessons)

export default ILessons;


