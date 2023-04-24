export interface Http<Type> {
  (arg: Type): Type
  result: Type
  hasErrors: boolean
}
