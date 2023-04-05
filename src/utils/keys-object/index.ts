export type KeysObject<ExpectKeys extends readonly string[]> = {
  [Key in ExpectKeys[number]]: unknown;
};
