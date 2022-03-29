import IUser, { IUserOutput } from "../../db/models/users"

export const getUsers = async (): Promise<IUserOutput[]> => {
    return await IUser.findAll({raw: true})
}


export const getUsersByUsernameAndPassword = async (username: string, password: string): Promise<IUserOutput> => {
    return await IUser.findOne({
        where: {
            username,
            password
        },
        raw: true
    }) as IUserOutput
}