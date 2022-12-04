import { ApiQuestion } from "@qisapp/api-contract";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";

export type ApiLessonsStatus = {
    id: number
    lessonId: number
    status: "created" | "initialized" | "finished" | "interupted"
    createdAt: Date | string | null
    updatedAt: Date | string | null
    deletedAt: Date | string | null
}


type ILessonsStatusInput = Optional<ApiLessonsStatus, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

class ILessonsStatus extends Model<ApiLessonsStatus, ILessonsStatusInput> implements ApiLessonsStatus{
    id!: number
    lessonId!: number
    status!: "created" | "initialized" | "finished" | "interupted"
    createdAt!: Date
    updatedAt!: Date
    deletedAt!: Date
}


ILessonsStatus.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    status: {
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
    tableName: 'lessons_status'
})

export default ILessonsStatus;