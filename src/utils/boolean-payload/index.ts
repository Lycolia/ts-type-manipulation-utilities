type TruthyPayload<T> = {
  isTruthy: true;
  payload: T;
};

type FalsyPayload<T> = {
  isTruthy: false;
  payload: T;
};

export type BooleanPayload<TruthyPayl, FalsyPayl = TruthyPayl> =
  | TruthyPayload<TruthyPayl>
  | FalsyPayload<FalsyPayl>;
