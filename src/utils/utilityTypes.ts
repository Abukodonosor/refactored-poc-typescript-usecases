enum Types {
  string,
  boolean,
  number,
}

export enum resultStatus {
  SUCCESS = 0,
  FAILURE = 1,
}

export type Result<T> = {
  status: resultStatus; // aka: boolean
  data?: T;
  message: string;
};

export type UResult<T, E = Error> =
  | { status: true; data: T; message?: string }
  | { status: false; error: E; message?: string };

export type NonNullable<T> = T extends null | undefined ? never : T;
export type Nullable<T> = T | null;
export type NullableBool<T extends Types.boolean | null> = T extends Types.boolean
  ? Types.boolean
  : null;
export type ActionResponse<T> = Nullable<T> | Promise<Awaited<Nullable<T>>>;
export type PromiseActionResponse<T> = Promise<Awaited<T | Nullable<T> | null>>;
export type NullIfInputIsNull<C, T> = C extends null | undefined ? null | undefined : T;
