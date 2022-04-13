import {factory, primaryKey, nullable} from '@mswjs/data'
import { faker } from '@faker-js/faker'


export const host = "http://localhost:3000"

export const db = factory({
    sets: {
        id: primaryKey(() => faker.unique( () => faker.datatype.number({min: 1, max: 100}))),
        name: faker.name.jobTitle,
        description: faker.name.jobType,
        userId: Number,
        createdAt: () => "",
        updatedAt: () => "",
        deletedAt: () => "", 
    },

    questions: {
        id: primaryKey(() => faker.unique( () => faker.datatype.number({min:1, max: 100})) ),
        setId: faker.datatype.number,
        userId: faker.datatype.number,
        firstValue: faker.word.adjective,
        secondValue: faker.word.adjective,
        firstValueUsage: () => faker.lorem.sentence(2),
        secondValueUsage: () => faker.lorem.sentence(3),
        firstValueCollocation: () => faker.lorem.sentence(4),
        secondValueCollocation: () => faker.lorem.sentence(4),
        createdAt: () => "",
        updatedAt: () => "",
        deletedAt: () => "",
    },
    users: {
        id: primaryKey(() => faker.unique( () => faker.datatype.number({min:1, max: 100})) ),
        username: faker.datatype.string,
        password: faker.datatype.string
    }
})