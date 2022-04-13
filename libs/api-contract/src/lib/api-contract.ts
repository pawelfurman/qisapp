type Timestamps = {
  createdAt: Date | string | null,
  updatedAt: Date | string | null,
  deletedAt: Date | string | null
}

export type ApiQuestion = {
  id: number,
  setId: number,
  userId: number,
  firstValue: string,
  secondValue: string,
  firstValueUsage: string,
  secondValueUsage: string,
  firstValueCollocation: string,
  secondValueCollocation: string
} & Timestamps

export type ApiSet = {
  id: number,
  name: string,
  description: string,
  userId: number
} & Timestamps

export type ApiUser = {
  id: number,
  username: string,
  password: string
}

export type ApiUSerLogin  = ApiUser & {
  token: string
}



/** utility types */
export type DBTimestampsUnion = "createdAt" | "deletedAt" | "updatedAt"