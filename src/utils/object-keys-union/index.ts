export type ObjectKeysUnion<ObjectType> = {
  [Key in keyof ObjectType]: Key;
}[keyof ObjectType];
