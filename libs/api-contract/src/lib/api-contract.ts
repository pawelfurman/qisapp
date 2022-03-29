export type ApiQuestion = {
  id: number,
  setId: number,
  userId: number,
  firstValue: string,
  secondValue: string,
  firstValueUsage: string,
  secondValueUsage: string,
  firstValueCollocation: string,
  secondValueCollocation: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date
}


export type ApiSet = {
  id: number,
  name: string,
  description: string,
  userId: number,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date
}


export type ApiUser = {
  id: number,
  username: string,
  password: string
}



/** utility types */
export type DBTimestampsUnion = "createdAt" | "deletedAt" | "updatedAt"