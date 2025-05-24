
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserQuestion
 * 
 */
export type UserQuestion = $Result.DefaultSelection<Prisma.$UserQuestionPayload>
/**
 * Model Thread
 * 
 */
export type Thread = $Result.DefaultSelection<Prisma.$ThreadPayload>
/**
 * Model ThreadSubscription
 * 
 */
export type ThreadSubscription = $Result.DefaultSelection<Prisma.$ThreadSubscriptionPayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model NewsEdit
 * 
 */
export type NewsEdit = $Result.DefaultSelection<Prisma.$NewsEditPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model Validation
 * 
 */
export type Validation = $Result.DefaultSelection<Prisma.$ValidationPayload>
/**
 * Model ScoreHistory
 * 
 */
export type ScoreHistory = $Result.DefaultSelection<Prisma.$ScoreHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IssueType: {
  bias: 'bias',
  subjectivity: 'subjectivity',
  contradiction: 'contradiction',
  ad: 'ad',
  false_fact: 'false_fact',
  off_topic: 'off_topic',
  opinion: 'opinion',
  sentiment_bias: 'sentiment_bias'
};

export type IssueType = (typeof IssueType)[keyof typeof IssueType]


export const Sentiment: {
  positive: 'positive',
  negative: 'negative',
  neutral: 'neutral'
};

export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment]


export const ValidationStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected',
  no_answer: 'no_answer'
};

export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus]

}

export type IssueType = $Enums.IssueType

export const IssueType: typeof $Enums.IssueType

export type Sentiment = $Enums.Sentiment

export const Sentiment: typeof $Enums.Sentiment

export type ValidationStatus = $Enums.ValidationStatus

export const ValidationStatus: typeof $Enums.ValidationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuestion`: Exposes CRUD operations for the **UserQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuestions
    * const userQuestions = await prisma.userQuestion.findMany()
    * ```
    */
  get userQuestion(): Prisma.UserQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.threadSubscription`: Exposes CRUD operations for the **ThreadSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThreadSubscriptions
    * const threadSubscriptions = await prisma.threadSubscription.findMany()
    * ```
    */
  get threadSubscription(): Prisma.ThreadSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsEdit`: Exposes CRUD operations for the **NewsEdit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsEdits
    * const newsEdits = await prisma.newsEdit.findMany()
    * ```
    */
  get newsEdit(): Prisma.NewsEditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.validation`: Exposes CRUD operations for the **Validation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Validations
    * const validations = await prisma.validation.findMany()
    * ```
    */
  get validation(): Prisma.ValidationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scoreHistory`: Exposes CRUD operations for the **ScoreHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoreHistories
    * const scoreHistories = await prisma.scoreHistory.findMany()
    * ```
    */
  get scoreHistory(): Prisma.ScoreHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserQuestion: 'UserQuestion',
    Thread: 'Thread',
    ThreadSubscription: 'ThreadSubscription',
    Topic: 'Topic',
    News: 'News',
    NewsEdit: 'NewsEdit',
    Issue: 'Issue',
    Validation: 'Validation',
    ScoreHistory: 'ScoreHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userQuestion" | "thread" | "threadSubscription" | "topic" | "news" | "newsEdit" | "issue" | "validation" | "scoreHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserQuestion: {
        payload: Prisma.$UserQuestionPayload<ExtArgs>
        fields: Prisma.UserQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          findFirst: {
            args: Prisma.UserQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          findMany: {
            args: Prisma.UserQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>[]
          }
          create: {
            args: Prisma.UserQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          createMany: {
            args: Prisma.UserQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>[]
          }
          delete: {
            args: Prisma.UserQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          update: {
            args: Prisma.UserQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>[]
          }
          upsert: {
            args: Prisma.UserQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          aggregate: {
            args: Prisma.UserQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuestion>
          }
          groupBy: {
            args: Prisma.UserQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionCountAggregateOutputType> | number
          }
        }
      }
      Thread: {
        payload: Prisma.$ThreadPayload<ExtArgs>
        fields: Prisma.ThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          deleteMany: {
            args: Prisma.ThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          upsert: {
            args: Prisma.ThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          aggregate: {
            args: Prisma.ThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThread>
          }
          groupBy: {
            args: Prisma.ThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadCountArgs<ExtArgs>
            result: $Utils.Optional<ThreadCountAggregateOutputType> | number
          }
        }
      }
      ThreadSubscription: {
        payload: Prisma.$ThreadSubscriptionPayload<ExtArgs>
        fields: Prisma.ThreadSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.ThreadSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>
          }
          findMany: {
            args: Prisma.ThreadSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>[]
          }
          create: {
            args: Prisma.ThreadSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>
          }
          createMany: {
            args: Prisma.ThreadSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThreadSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.ThreadSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>
          }
          update: {
            args: Prisma.ThreadSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.ThreadSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThreadSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.ThreadSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.ThreadSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThreadSubscription>
          }
          groupBy: {
            args: Prisma.ThreadSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThreadSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<ThreadSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      NewsEdit: {
        payload: Prisma.$NewsEditPayload<ExtArgs>
        fields: Prisma.NewsEditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsEditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsEditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>
          }
          findFirst: {
            args: Prisma.NewsEditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsEditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>
          }
          findMany: {
            args: Prisma.NewsEditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>[]
          }
          create: {
            args: Prisma.NewsEditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>
          }
          createMany: {
            args: Prisma.NewsEditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsEditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>[]
          }
          delete: {
            args: Prisma.NewsEditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>
          }
          update: {
            args: Prisma.NewsEditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>
          }
          deleteMany: {
            args: Prisma.NewsEditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsEditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsEditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>[]
          }
          upsert: {
            args: Prisma.NewsEditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEditPayload>
          }
          aggregate: {
            args: Prisma.NewsEditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsEdit>
          }
          groupBy: {
            args: Prisma.NewsEditGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsEditGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsEditCountArgs<ExtArgs>
            result: $Utils.Optional<NewsEditCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      Validation: {
        payload: Prisma.$ValidationPayload<ExtArgs>
        fields: Prisma.ValidationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValidationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValidationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>
          }
          findFirst: {
            args: Prisma.ValidationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValidationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>
          }
          findMany: {
            args: Prisma.ValidationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>[]
          }
          create: {
            args: Prisma.ValidationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>
          }
          createMany: {
            args: Prisma.ValidationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValidationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>[]
          }
          delete: {
            args: Prisma.ValidationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>
          }
          update: {
            args: Prisma.ValidationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>
          }
          deleteMany: {
            args: Prisma.ValidationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValidationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValidationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>[]
          }
          upsert: {
            args: Prisma.ValidationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidationPayload>
          }
          aggregate: {
            args: Prisma.ValidationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValidation>
          }
          groupBy: {
            args: Prisma.ValidationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValidationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValidationCountArgs<ExtArgs>
            result: $Utils.Optional<ValidationCountAggregateOutputType> | number
          }
        }
      }
      ScoreHistory: {
        payload: Prisma.$ScoreHistoryPayload<ExtArgs>
        fields: Prisma.ScoreHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>
          }
          findFirst: {
            args: Prisma.ScoreHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>
          }
          findMany: {
            args: Prisma.ScoreHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>[]
          }
          create: {
            args: Prisma.ScoreHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>
          }
          createMany: {
            args: Prisma.ScoreHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>[]
          }
          delete: {
            args: Prisma.ScoreHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>
          }
          update: {
            args: Prisma.ScoreHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ScoreHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ScoreHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreHistoryPayload>
          }
          aggregate: {
            args: Prisma.ScoreHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoreHistory>
          }
          groupBy: {
            args: Prisma.ScoreHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userQuestion?: UserQuestionOmit
    thread?: ThreadOmit
    threadSubscription?: ThreadSubscriptionOmit
    topic?: TopicOmit
    news?: NewsOmit
    newsEdit?: NewsEditOmit
    issue?: IssueOmit
    validation?: ValidationOmit
    scoreHistory?: ScoreHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    threads: number
    news: number
    validations: number
    scoreHistory: number
    threadSubscriptions: number
    newsEdit: number
    userQuestions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | UserCountOutputTypeCountThreadsArgs
    news?: boolean | UserCountOutputTypeCountNewsArgs
    validations?: boolean | UserCountOutputTypeCountValidationsArgs
    scoreHistory?: boolean | UserCountOutputTypeCountScoreHistoryArgs
    threadSubscriptions?: boolean | UserCountOutputTypeCountThreadSubscriptionsArgs
    newsEdit?: boolean | UserCountOutputTypeCountNewsEditArgs
    userQuestions?: boolean | UserCountOutputTypeCountUserQuestionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoreHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsEditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsEditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionWhereInput
  }


  /**
   * Count Type ThreadCountOutputType
   */

  export type ThreadCountOutputType = {
    topics: number
    news: number
    threadSubscriptions: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | ThreadCountOutputTypeCountTopicsArgs
    news?: boolean | ThreadCountOutputTypeCountNewsArgs
    threadSubscriptions?: boolean | ThreadCountOutputTypeCountThreadSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountThreadSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadSubscriptionWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    news: number
    userQuestions: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | TopicCountOutputTypeCountNewsArgs
    userQuestions?: boolean | TopicCountOutputTypeCountUserQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountUserQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    issues: number
    validations: number
    scoreHistory: number
    newsEdit: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | NewsCountOutputTypeCountIssuesArgs
    validations?: boolean | NewsCountOutputTypeCountValidationsArgs
    scoreHistory?: boolean | NewsCountOutputTypeCountScoreHistoryArgs
    newsEdit?: boolean | NewsCountOutputTypeCountNewsEditArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountValidationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidationWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountScoreHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreHistoryWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountNewsEditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsEditWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    score: number | null
  }

  export type UserSumAggregateOutputType = {
    score: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    score?: true
  }

  export type UserSumAggregateInputType = {
    score?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    threads?: boolean | User$threadsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    validations?: boolean | User$validationsArgs<ExtArgs>
    scoreHistory?: boolean | User$scoreHistoryArgs<ExtArgs>
    threadSubscriptions?: boolean | User$threadSubscriptionsArgs<ExtArgs>
    newsEdit?: boolean | User$newsEditArgs<ExtArgs>
    userQuestions?: boolean | User$userQuestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | User$threadsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    validations?: boolean | User$validationsArgs<ExtArgs>
    scoreHistory?: boolean | User$scoreHistoryArgs<ExtArgs>
    threadSubscriptions?: boolean | User$threadSubscriptionsArgs<ExtArgs>
    newsEdit?: boolean | User$newsEditArgs<ExtArgs>
    userQuestions?: boolean | User$userQuestionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      threads: Prisma.$ThreadPayload<ExtArgs>[]
      news: Prisma.$NewsPayload<ExtArgs>[]
      validations: Prisma.$ValidationPayload<ExtArgs>[]
      scoreHistory: Prisma.$ScoreHistoryPayload<ExtArgs>[]
      threadSubscriptions: Prisma.$ThreadSubscriptionPayload<ExtArgs>[]
      newsEdit: Prisma.$NewsEditPayload<ExtArgs>[]
      userQuestions: Prisma.$UserQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    threads<T extends User$threadsArgs<ExtArgs> = {}>(args?: Subset<T, User$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validations<T extends User$validationsArgs<ExtArgs> = {}>(args?: Subset<T, User$validationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scoreHistory<T extends User$scoreHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$scoreHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    threadSubscriptions<T extends User$threadSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$threadSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsEdit<T extends User$newsEditArgs<ExtArgs> = {}>(args?: Subset<T, User$newsEditArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userQuestions<T extends User$userQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly score: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.threads
   */
  export type User$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.validations
   */
  export type User$validationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    where?: ValidationWhereInput
    orderBy?: ValidationOrderByWithRelationInput | ValidationOrderByWithRelationInput[]
    cursor?: ValidationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValidationScalarFieldEnum | ValidationScalarFieldEnum[]
  }

  /**
   * User.scoreHistory
   */
  export type User$scoreHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    where?: ScoreHistoryWhereInput
    orderBy?: ScoreHistoryOrderByWithRelationInput | ScoreHistoryOrderByWithRelationInput[]
    cursor?: ScoreHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreHistoryScalarFieldEnum | ScoreHistoryScalarFieldEnum[]
  }

  /**
   * User.threadSubscriptions
   */
  export type User$threadSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    where?: ThreadSubscriptionWhereInput
    orderBy?: ThreadSubscriptionOrderByWithRelationInput | ThreadSubscriptionOrderByWithRelationInput[]
    cursor?: ThreadSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadSubscriptionScalarFieldEnum | ThreadSubscriptionScalarFieldEnum[]
  }

  /**
   * User.newsEdit
   */
  export type User$newsEditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    where?: NewsEditWhereInput
    orderBy?: NewsEditOrderByWithRelationInput | NewsEditOrderByWithRelationInput[]
    cursor?: NewsEditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsEditScalarFieldEnum | NewsEditScalarFieldEnum[]
  }

  /**
   * User.userQuestions
   */
  export type User$userQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    where?: UserQuestionWhereInput
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    cursor?: UserQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserQuestion
   */

  export type AggregateUserQuestion = {
    _count: UserQuestionCountAggregateOutputType | null
    _min: UserQuestionMinAggregateOutputType | null
    _max: UserQuestionMaxAggregateOutputType | null
  }

  export type UserQuestionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    question: string | null
    answered: boolean | null
    answer: string | null
    createdAt: Date | null
  }

  export type UserQuestionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    question: string | null
    answered: boolean | null
    answer: string | null
    createdAt: Date | null
  }

  export type UserQuestionCountAggregateOutputType = {
    id: number
    userId: number
    topicId: number
    question: number
    answered: number
    answer: number
    createdAt: number
    _all: number
  }


  export type UserQuestionMinAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    question?: true
    answered?: true
    answer?: true
    createdAt?: true
  }

  export type UserQuestionMaxAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    question?: true
    answered?: true
    answer?: true
    createdAt?: true
  }

  export type UserQuestionCountAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    question?: true
    answered?: true
    answer?: true
    createdAt?: true
    _all?: true
  }

  export type UserQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestion to aggregate.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuestions
    **/
    _count?: true | UserQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestionMaxAggregateInputType
  }

  export type GetUserQuestionAggregateType<T extends UserQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuestion[P]>
      : GetScalarType<T[P], AggregateUserQuestion[P]>
  }




  export type UserQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionWhereInput
    orderBy?: UserQuestionOrderByWithAggregationInput | UserQuestionOrderByWithAggregationInput[]
    by: UserQuestionScalarFieldEnum[] | UserQuestionScalarFieldEnum
    having?: UserQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestionCountAggregateInputType | true
    _min?: UserQuestionMinAggregateInputType
    _max?: UserQuestionMaxAggregateInputType
  }

  export type UserQuestionGroupByOutputType = {
    id: string
    userId: string
    topicId: string
    question: string
    answered: boolean
    answer: string | null
    createdAt: Date
    _count: UserQuestionCountAggregateOutputType | null
    _min: UserQuestionMinAggregateOutputType | null
    _max: UserQuestionMaxAggregateOutputType | null
  }

  type GetUserQuestionGroupByPayload<T extends UserQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestionGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    question?: boolean
    answered?: boolean
    answer?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestion"]>

  export type UserQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    question?: boolean
    answered?: boolean
    answer?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestion"]>

  export type UserQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    question?: boolean
    answered?: boolean
    answer?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestion"]>

  export type UserQuestionSelectScalar = {
    id?: boolean
    userId?: boolean
    topicId?: boolean
    question?: boolean
    answered?: boolean
    answer?: boolean
    createdAt?: boolean
  }

  export type UserQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topicId" | "question" | "answered" | "answer" | "createdAt", ExtArgs["result"]["userQuestion"]>
  export type UserQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type UserQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type UserQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $UserQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topicId: string
      question: string
      answered: boolean
      answer: string | null
      createdAt: Date
    }, ExtArgs["result"]["userQuestion"]>
    composites: {}
  }

  type UserQuestionGetPayload<S extends boolean | null | undefined | UserQuestionDefaultArgs> = $Result.GetResult<Prisma.$UserQuestionPayload, S>

  type UserQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuestionCountAggregateInputType | true
    }

  export interface UserQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuestion'], meta: { name: 'UserQuestion' } }
    /**
     * Find zero or one UserQuestion that matches the filter.
     * @param {UserQuestionFindUniqueArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuestionFindUniqueArgs>(args: SelectSubset<T, UserQuestionFindUniqueArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuestionFindUniqueOrThrowArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionFindFirstArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuestionFindFirstArgs>(args?: SelectSubset<T, UserQuestionFindFirstArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionFindFirstOrThrowArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuestions
     * const userQuestions = await prisma.userQuestion.findMany()
     * 
     * // Get first 10 UserQuestions
     * const userQuestions = await prisma.userQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestionWithIdOnly = await prisma.userQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuestionFindManyArgs>(args?: SelectSubset<T, UserQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuestion.
     * @param {UserQuestionCreateArgs} args - Arguments to create a UserQuestion.
     * @example
     * // Create one UserQuestion
     * const UserQuestion = await prisma.userQuestion.create({
     *   data: {
     *     // ... data to create a UserQuestion
     *   }
     * })
     * 
     */
    create<T extends UserQuestionCreateArgs>(args: SelectSubset<T, UserQuestionCreateArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuestions.
     * @param {UserQuestionCreateManyArgs} args - Arguments to create many UserQuestions.
     * @example
     * // Create many UserQuestions
     * const userQuestion = await prisma.userQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuestionCreateManyArgs>(args?: SelectSubset<T, UserQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuestions and returns the data saved in the database.
     * @param {UserQuestionCreateManyAndReturnArgs} args - Arguments to create many UserQuestions.
     * @example
     * // Create many UserQuestions
     * const userQuestion = await prisma.userQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuestions and only return the `id`
     * const userQuestionWithIdOnly = await prisma.userQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuestion.
     * @param {UserQuestionDeleteArgs} args - Arguments to delete one UserQuestion.
     * @example
     * // Delete one UserQuestion
     * const UserQuestion = await prisma.userQuestion.delete({
     *   where: {
     *     // ... filter to delete one UserQuestion
     *   }
     * })
     * 
     */
    delete<T extends UserQuestionDeleteArgs>(args: SelectSubset<T, UserQuestionDeleteArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuestion.
     * @param {UserQuestionUpdateArgs} args - Arguments to update one UserQuestion.
     * @example
     * // Update one UserQuestion
     * const userQuestion = await prisma.userQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuestionUpdateArgs>(args: SelectSubset<T, UserQuestionUpdateArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuestions.
     * @param {UserQuestionDeleteManyArgs} args - Arguments to filter UserQuestions to delete.
     * @example
     * // Delete a few UserQuestions
     * const { count } = await prisma.userQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuestionDeleteManyArgs>(args?: SelectSubset<T, UserQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuestions
     * const userQuestion = await prisma.userQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuestionUpdateManyArgs>(args: SelectSubset<T, UserQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestions and returns the data updated in the database.
     * @param {UserQuestionUpdateManyAndReturnArgs} args - Arguments to update many UserQuestions.
     * @example
     * // Update many UserQuestions
     * const userQuestion = await prisma.userQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuestions and only return the `id`
     * const userQuestionWithIdOnly = await prisma.userQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuestion.
     * @param {UserQuestionUpsertArgs} args - Arguments to update or create a UserQuestion.
     * @example
     * // Update or create a UserQuestion
     * const userQuestion = await prisma.userQuestion.upsert({
     *   create: {
     *     // ... data to create a UserQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuestion we want to update
     *   }
     * })
     */
    upsert<T extends UserQuestionUpsertArgs>(args: SelectSubset<T, UserQuestionUpsertArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionCountArgs} args - Arguments to filter UserQuestions to count.
     * @example
     * // Count the number of UserQuestions
     * const count = await prisma.userQuestion.count({
     *   where: {
     *     // ... the filter for the UserQuestions we want to count
     *   }
     * })
    **/
    count<T extends UserQuestionCountArgs>(
      args?: Subset<T, UserQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuestionAggregateArgs>(args: Subset<T, UserQuestionAggregateArgs>): Prisma.PrismaPromise<GetUserQuestionAggregateType<T>>

    /**
     * Group by UserQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestionGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuestion model
   */
  readonly fields: UserQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserQuestion model
   */
  interface UserQuestionFieldRefs {
    readonly id: FieldRef<"UserQuestion", 'String'>
    readonly userId: FieldRef<"UserQuestion", 'String'>
    readonly topicId: FieldRef<"UserQuestion", 'String'>
    readonly question: FieldRef<"UserQuestion", 'String'>
    readonly answered: FieldRef<"UserQuestion", 'Boolean'>
    readonly answer: FieldRef<"UserQuestion", 'String'>
    readonly createdAt: FieldRef<"UserQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuestion findUnique
   */
  export type UserQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion findUniqueOrThrow
   */
  export type UserQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion findFirst
   */
  export type UserQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestions.
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestions.
     */
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * UserQuestion findFirstOrThrow
   */
  export type UserQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestions.
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestions.
     */
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * UserQuestion findMany
   */
  export type UserQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestions to fetch.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuestions.
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * UserQuestion create
   */
  export type UserQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuestion.
     */
    data: XOR<UserQuestionCreateInput, UserQuestionUncheckedCreateInput>
  }

  /**
   * UserQuestion createMany
   */
  export type UserQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuestions.
     */
    data: UserQuestionCreateManyInput | UserQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestion createManyAndReturn
   */
  export type UserQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuestions.
     */
    data: UserQuestionCreateManyInput | UserQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuestion update
   */
  export type UserQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuestion.
     */
    data: XOR<UserQuestionUpdateInput, UserQuestionUncheckedUpdateInput>
    /**
     * Choose, which UserQuestion to update.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion updateMany
   */
  export type UserQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuestions.
     */
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestions to update
     */
    where?: UserQuestionWhereInput
    /**
     * Limit how many UserQuestions to update.
     */
    limit?: number
  }

  /**
   * UserQuestion updateManyAndReturn
   */
  export type UserQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * The data used to update UserQuestions.
     */
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestions to update
     */
    where?: UserQuestionWhereInput
    /**
     * Limit how many UserQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuestion upsert
   */
  export type UserQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuestion to update in case it exists.
     */
    where: UserQuestionWhereUniqueInput
    /**
     * In case the UserQuestion found by the `where` argument doesn't exist, create a new UserQuestion with this data.
     */
    create: XOR<UserQuestionCreateInput, UserQuestionUncheckedCreateInput>
    /**
     * In case the UserQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestionUpdateInput, UserQuestionUncheckedUpdateInput>
  }

  /**
   * UserQuestion delete
   */
  export type UserQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter which UserQuestion to delete.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion deleteMany
   */
  export type UserQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestions to delete
     */
    where?: UserQuestionWhereInput
    /**
     * Limit how many UserQuestions to delete.
     */
    limit?: number
  }

  /**
   * UserQuestion without action
   */
  export type UserQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Thread
   */

  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadMinAggregateOutputType = {
    id: string | null
    title: string | null
    descriptionPrompt: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThreadMaxAggregateOutputType = {
    id: string | null
    title: string | null
    descriptionPrompt: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThreadCountAggregateOutputType = {
    id: number
    title: number
    descriptionPrompt: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ThreadMinAggregateInputType = {
    id?: true
    title?: true
    descriptionPrompt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThreadMaxAggregateInputType = {
    id?: true
    title?: true
    descriptionPrompt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThreadCountAggregateInputType = {
    id?: true
    title?: true
    descriptionPrompt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithAggregationInput | ThreadOrderByWithAggregationInput[]
    by: ThreadScalarFieldEnum[] | ThreadScalarFieldEnum
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }

  export type ThreadGroupByOutputType = {
    id: string
    title: string
    descriptionPrompt: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptionPrompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    topics?: boolean | Thread$topicsArgs<ExtArgs>
    news?: boolean | Thread$newsArgs<ExtArgs>
    threadSubscriptions?: boolean | Thread$threadSubscriptionsArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptionPrompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptionPrompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectScalar = {
    id?: boolean
    title?: boolean
    descriptionPrompt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descriptionPrompt" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["thread"]>
  export type ThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    topics?: boolean | Thread$topicsArgs<ExtArgs>
    news?: boolean | Thread$newsArgs<ExtArgs>
    threadSubscriptions?: boolean | Thread$threadSubscriptionsArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thread"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      topics: Prisma.$TopicPayload<ExtArgs>[]
      news: Prisma.$NewsPayload<ExtArgs>[]
      threadSubscriptions: Prisma.$ThreadSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      descriptionPrompt: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["thread"]>
    composites: {}
  }

  type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = $Result.GetResult<Prisma.$ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thread'], meta: { name: 'Thread' } }
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThreadFindUniqueArgs>(args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThreadFindFirstArgs>(args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThreadFindManyArgs>(args?: SelectSubset<T, ThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
     */
    create<T extends ThreadCreateArgs>(args: SelectSubset<T, ThreadCreateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Threads.
     * @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThreadCreateManyArgs>(args?: SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Threads and returns the data saved in the database.
     * @param {ThreadCreateManyAndReturnArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Threads and only return the `id`
     * const threadWithIdOnly = await prisma.thread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, ThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
     */
    delete<T extends ThreadDeleteArgs>(args: SelectSubset<T, ThreadDeleteArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThreadUpdateArgs>(args: SelectSubset<T, ThreadUpdateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThreadDeleteManyArgs>(args?: SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThreadUpdateManyArgs>(args: SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads and returns the data updated in the database.
     * @param {ThreadUpdateManyAndReturnArgs} args - Arguments to update many Threads.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Threads and only return the `id`
     * const threadWithIdOnly = await prisma.thread.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, ThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
     */
    upsert<T extends ThreadUpsertArgs>(args: SelectSubset<T, ThreadUpsertArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thread model
   */
  readonly fields: ThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topics<T extends Thread$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Thread$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends Thread$newsArgs<ExtArgs> = {}>(args?: Subset<T, Thread$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    threadSubscriptions<T extends Thread$threadSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Thread$threadSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Thread model
   */
  interface ThreadFieldRefs {
    readonly id: FieldRef<"Thread", 'String'>
    readonly title: FieldRef<"Thread", 'String'>
    readonly descriptionPrompt: FieldRef<"Thread", 'String'>
    readonly authorId: FieldRef<"Thread", 'String'>
    readonly createdAt: FieldRef<"Thread", 'DateTime'>
    readonly updatedAt: FieldRef<"Thread", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Thread findUnique
   */
  export type ThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findFirst
   */
  export type ThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }

  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thread createManyAndReturn
   */
  export type ThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
  }

  /**
   * Thread updateManyAndReturn
   */
  export type ThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }

  /**
   * Thread delete
   */
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to delete.
     */
    limit?: number
  }

  /**
   * Thread.topics
   */
  export type Thread$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Thread.news
   */
  export type Thread$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Thread.threadSubscriptions
   */
  export type Thread$threadSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    where?: ThreadSubscriptionWhereInput
    orderBy?: ThreadSubscriptionOrderByWithRelationInput | ThreadSubscriptionOrderByWithRelationInput[]
    cursor?: ThreadSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadSubscriptionScalarFieldEnum | ThreadSubscriptionScalarFieldEnum[]
  }

  /**
   * Thread without action
   */
  export type ThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
  }


  /**
   * Model ThreadSubscription
   */

  export type AggregateThreadSubscription = {
    _count: ThreadSubscriptionCountAggregateOutputType | null
    _min: ThreadSubscriptionMinAggregateOutputType | null
    _max: ThreadSubscriptionMaxAggregateOutputType | null
  }

  export type ThreadSubscriptionMinAggregateOutputType = {
    id: string | null
    threadId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ThreadSubscriptionMaxAggregateOutputType = {
    id: string | null
    threadId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ThreadSubscriptionCountAggregateOutputType = {
    id: number
    threadId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ThreadSubscriptionMinAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    createdAt?: true
  }

  export type ThreadSubscriptionMaxAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    createdAt?: true
  }

  export type ThreadSubscriptionCountAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ThreadSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThreadSubscription to aggregate.
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadSubscriptions to fetch.
     */
    orderBy?: ThreadSubscriptionOrderByWithRelationInput | ThreadSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThreadSubscriptions
    **/
    _count?: true | ThreadSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadSubscriptionMaxAggregateInputType
  }

  export type GetThreadSubscriptionAggregateType<T extends ThreadSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateThreadSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreadSubscription[P]>
      : GetScalarType<T[P], AggregateThreadSubscription[P]>
  }




  export type ThreadSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadSubscriptionWhereInput
    orderBy?: ThreadSubscriptionOrderByWithAggregationInput | ThreadSubscriptionOrderByWithAggregationInput[]
    by: ThreadSubscriptionScalarFieldEnum[] | ThreadSubscriptionScalarFieldEnum
    having?: ThreadSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadSubscriptionCountAggregateInputType | true
    _min?: ThreadSubscriptionMinAggregateInputType
    _max?: ThreadSubscriptionMaxAggregateInputType
  }

  export type ThreadSubscriptionGroupByOutputType = {
    id: string
    threadId: string
    userId: string
    createdAt: Date
    _count: ThreadSubscriptionCountAggregateOutputType | null
    _min: ThreadSubscriptionMinAggregateOutputType | null
    _max: ThreadSubscriptionMaxAggregateOutputType | null
  }

  type GetThreadSubscriptionGroupByPayload<T extends ThreadSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    createdAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threadSubscription"]>

  export type ThreadSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    createdAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threadSubscription"]>

  export type ThreadSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    createdAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["threadSubscription"]>

  export type ThreadSubscriptionSelectScalar = {
    id?: boolean
    threadId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ThreadSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "userId" | "createdAt", ExtArgs["result"]["threadSubscription"]>
  export type ThreadSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThreadSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThreadSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ThreadSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ThreadSubscription"
    objects: {
      thread: Prisma.$ThreadPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      threadId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["threadSubscription"]>
    composites: {}
  }

  type ThreadSubscriptionGetPayload<S extends boolean | null | undefined | ThreadSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$ThreadSubscriptionPayload, S>

  type ThreadSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThreadSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThreadSubscriptionCountAggregateInputType | true
    }

  export interface ThreadSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ThreadSubscription'], meta: { name: 'ThreadSubscription' } }
    /**
     * Find zero or one ThreadSubscription that matches the filter.
     * @param {ThreadSubscriptionFindUniqueArgs} args - Arguments to find a ThreadSubscription
     * @example
     * // Get one ThreadSubscription
     * const threadSubscription = await prisma.threadSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThreadSubscriptionFindUniqueArgs>(args: SelectSubset<T, ThreadSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ThreadSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThreadSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a ThreadSubscription
     * @example
     * // Get one ThreadSubscription
     * const threadSubscription = await prisma.threadSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThreadSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ThreadSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThreadSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionFindFirstArgs} args - Arguments to find a ThreadSubscription
     * @example
     * // Get one ThreadSubscription
     * const threadSubscription = await prisma.threadSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThreadSubscriptionFindFirstArgs>(args?: SelectSubset<T, ThreadSubscriptionFindFirstArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThreadSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionFindFirstOrThrowArgs} args - Arguments to find a ThreadSubscription
     * @example
     * // Get one ThreadSubscription
     * const threadSubscription = await prisma.threadSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThreadSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ThreadSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ThreadSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThreadSubscriptions
     * const threadSubscriptions = await prisma.threadSubscription.findMany()
     * 
     * // Get first 10 ThreadSubscriptions
     * const threadSubscriptions = await prisma.threadSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadSubscriptionWithIdOnly = await prisma.threadSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThreadSubscriptionFindManyArgs>(args?: SelectSubset<T, ThreadSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ThreadSubscription.
     * @param {ThreadSubscriptionCreateArgs} args - Arguments to create a ThreadSubscription.
     * @example
     * // Create one ThreadSubscription
     * const ThreadSubscription = await prisma.threadSubscription.create({
     *   data: {
     *     // ... data to create a ThreadSubscription
     *   }
     * })
     * 
     */
    create<T extends ThreadSubscriptionCreateArgs>(args: SelectSubset<T, ThreadSubscriptionCreateArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ThreadSubscriptions.
     * @param {ThreadSubscriptionCreateManyArgs} args - Arguments to create many ThreadSubscriptions.
     * @example
     * // Create many ThreadSubscriptions
     * const threadSubscription = await prisma.threadSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThreadSubscriptionCreateManyArgs>(args?: SelectSubset<T, ThreadSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ThreadSubscriptions and returns the data saved in the database.
     * @param {ThreadSubscriptionCreateManyAndReturnArgs} args - Arguments to create many ThreadSubscriptions.
     * @example
     * // Create many ThreadSubscriptions
     * const threadSubscription = await prisma.threadSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ThreadSubscriptions and only return the `id`
     * const threadSubscriptionWithIdOnly = await prisma.threadSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThreadSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ThreadSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ThreadSubscription.
     * @param {ThreadSubscriptionDeleteArgs} args - Arguments to delete one ThreadSubscription.
     * @example
     * // Delete one ThreadSubscription
     * const ThreadSubscription = await prisma.threadSubscription.delete({
     *   where: {
     *     // ... filter to delete one ThreadSubscription
     *   }
     * })
     * 
     */
    delete<T extends ThreadSubscriptionDeleteArgs>(args: SelectSubset<T, ThreadSubscriptionDeleteArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ThreadSubscription.
     * @param {ThreadSubscriptionUpdateArgs} args - Arguments to update one ThreadSubscription.
     * @example
     * // Update one ThreadSubscription
     * const threadSubscription = await prisma.threadSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThreadSubscriptionUpdateArgs>(args: SelectSubset<T, ThreadSubscriptionUpdateArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ThreadSubscriptions.
     * @param {ThreadSubscriptionDeleteManyArgs} args - Arguments to filter ThreadSubscriptions to delete.
     * @example
     * // Delete a few ThreadSubscriptions
     * const { count } = await prisma.threadSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThreadSubscriptionDeleteManyArgs>(args?: SelectSubset<T, ThreadSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThreadSubscriptions
     * const threadSubscription = await prisma.threadSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThreadSubscriptionUpdateManyArgs>(args: SelectSubset<T, ThreadSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadSubscriptions and returns the data updated in the database.
     * @param {ThreadSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many ThreadSubscriptions.
     * @example
     * // Update many ThreadSubscriptions
     * const threadSubscription = await prisma.threadSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ThreadSubscriptions and only return the `id`
     * const threadSubscriptionWithIdOnly = await prisma.threadSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThreadSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ThreadSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ThreadSubscription.
     * @param {ThreadSubscriptionUpsertArgs} args - Arguments to update or create a ThreadSubscription.
     * @example
     * // Update or create a ThreadSubscription
     * const threadSubscription = await prisma.threadSubscription.upsert({
     *   create: {
     *     // ... data to create a ThreadSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThreadSubscription we want to update
     *   }
     * })
     */
    upsert<T extends ThreadSubscriptionUpsertArgs>(args: SelectSubset<T, ThreadSubscriptionUpsertArgs<ExtArgs>>): Prisma__ThreadSubscriptionClient<$Result.GetResult<Prisma.$ThreadSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ThreadSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionCountArgs} args - Arguments to filter ThreadSubscriptions to count.
     * @example
     * // Count the number of ThreadSubscriptions
     * const count = await prisma.threadSubscription.count({
     *   where: {
     *     // ... the filter for the ThreadSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends ThreadSubscriptionCountArgs>(
      args?: Subset<T, ThreadSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThreadSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadSubscriptionAggregateArgs>(args: Subset<T, ThreadSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetThreadSubscriptionAggregateType<T>>

    /**
     * Group by ThreadSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: ThreadSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ThreadSubscription model
   */
  readonly fields: ThreadSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ThreadSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ThreadSubscription model
   */
  interface ThreadSubscriptionFieldRefs {
    readonly id: FieldRef<"ThreadSubscription", 'String'>
    readonly threadId: FieldRef<"ThreadSubscription", 'String'>
    readonly userId: FieldRef<"ThreadSubscription", 'String'>
    readonly createdAt: FieldRef<"ThreadSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ThreadSubscription findUnique
   */
  export type ThreadSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ThreadSubscription to fetch.
     */
    where: ThreadSubscriptionWhereUniqueInput
  }

  /**
   * ThreadSubscription findUniqueOrThrow
   */
  export type ThreadSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ThreadSubscription to fetch.
     */
    where: ThreadSubscriptionWhereUniqueInput
  }

  /**
   * ThreadSubscription findFirst
   */
  export type ThreadSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ThreadSubscription to fetch.
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadSubscriptions to fetch.
     */
    orderBy?: ThreadSubscriptionOrderByWithRelationInput | ThreadSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThreadSubscriptions.
     */
    cursor?: ThreadSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThreadSubscriptions.
     */
    distinct?: ThreadSubscriptionScalarFieldEnum | ThreadSubscriptionScalarFieldEnum[]
  }

  /**
   * ThreadSubscription findFirstOrThrow
   */
  export type ThreadSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ThreadSubscription to fetch.
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadSubscriptions to fetch.
     */
    orderBy?: ThreadSubscriptionOrderByWithRelationInput | ThreadSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThreadSubscriptions.
     */
    cursor?: ThreadSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThreadSubscriptions.
     */
    distinct?: ThreadSubscriptionScalarFieldEnum | ThreadSubscriptionScalarFieldEnum[]
  }

  /**
   * ThreadSubscription findMany
   */
  export type ThreadSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which ThreadSubscriptions to fetch.
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThreadSubscriptions to fetch.
     */
    orderBy?: ThreadSubscriptionOrderByWithRelationInput | ThreadSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThreadSubscriptions.
     */
    cursor?: ThreadSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThreadSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThreadSubscriptions.
     */
    skip?: number
    distinct?: ThreadSubscriptionScalarFieldEnum | ThreadSubscriptionScalarFieldEnum[]
  }

  /**
   * ThreadSubscription create
   */
  export type ThreadSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ThreadSubscription.
     */
    data: XOR<ThreadSubscriptionCreateInput, ThreadSubscriptionUncheckedCreateInput>
  }

  /**
   * ThreadSubscription createMany
   */
  export type ThreadSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ThreadSubscriptions.
     */
    data: ThreadSubscriptionCreateManyInput | ThreadSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ThreadSubscription createManyAndReturn
   */
  export type ThreadSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many ThreadSubscriptions.
     */
    data: ThreadSubscriptionCreateManyInput | ThreadSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThreadSubscription update
   */
  export type ThreadSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ThreadSubscription.
     */
    data: XOR<ThreadSubscriptionUpdateInput, ThreadSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which ThreadSubscription to update.
     */
    where: ThreadSubscriptionWhereUniqueInput
  }

  /**
   * ThreadSubscription updateMany
   */
  export type ThreadSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ThreadSubscriptions.
     */
    data: XOR<ThreadSubscriptionUpdateManyMutationInput, ThreadSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which ThreadSubscriptions to update
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * Limit how many ThreadSubscriptions to update.
     */
    limit?: number
  }

  /**
   * ThreadSubscription updateManyAndReturn
   */
  export type ThreadSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update ThreadSubscriptions.
     */
    data: XOR<ThreadSubscriptionUpdateManyMutationInput, ThreadSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which ThreadSubscriptions to update
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * Limit how many ThreadSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThreadSubscription upsert
   */
  export type ThreadSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ThreadSubscription to update in case it exists.
     */
    where: ThreadSubscriptionWhereUniqueInput
    /**
     * In case the ThreadSubscription found by the `where` argument doesn't exist, create a new ThreadSubscription with this data.
     */
    create: XOR<ThreadSubscriptionCreateInput, ThreadSubscriptionUncheckedCreateInput>
    /**
     * In case the ThreadSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadSubscriptionUpdateInput, ThreadSubscriptionUncheckedUpdateInput>
  }

  /**
   * ThreadSubscription delete
   */
  export type ThreadSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which ThreadSubscription to delete.
     */
    where: ThreadSubscriptionWhereUniqueInput
  }

  /**
   * ThreadSubscription deleteMany
   */
  export type ThreadSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThreadSubscriptions to delete
     */
    where?: ThreadSubscriptionWhereInput
    /**
     * Limit how many ThreadSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * ThreadSubscription without action
   */
  export type ThreadSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadSubscription
     */
    select?: ThreadSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThreadSubscription
     */
    omit?: ThreadSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    trendingScore: number | null
  }

  export type TopicSumAggregateOutputType = {
    trendingScore: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    trendingScore: number | null
    threadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    trendingScore: number | null
    threadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    title: number
    trendingScore: number
    threadId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    trendingScore?: true
  }

  export type TopicSumAggregateInputType = {
    trendingScore?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    title?: true
    trendingScore?: true
    threadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    title?: true
    trendingScore?: true
    threadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    title?: true
    trendingScore?: true
    threadId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    title: string
    trendingScore: number
    threadId: string
    createdAt: Date
    updatedAt: Date
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    trendingScore?: boolean
    threadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    news?: boolean | Topic$newsArgs<ExtArgs>
    userQuestions?: boolean | Topic$userQuestionsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    trendingScore?: boolean
    threadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    trendingScore?: boolean
    threadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    title?: boolean
    trendingScore?: boolean
    threadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "trendingScore" | "threadId" | "createdAt" | "updatedAt", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    news?: boolean | Topic$newsArgs<ExtArgs>
    userQuestions?: boolean | Topic$userQuestionsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      thread: Prisma.$ThreadPayload<ExtArgs>
      news: Prisma.$NewsPayload<ExtArgs>[]
      userQuestions: Prisma.$UserQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      trendingScore: number
      threadId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    news<T extends Topic$newsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userQuestions<T extends Topic$userQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$userQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly title: FieldRef<"Topic", 'String'>
    readonly trendingScore: FieldRef<"Topic", 'Int'>
    readonly threadId: FieldRef<"Topic", 'String'>
    readonly createdAt: FieldRef<"Topic", 'DateTime'>
    readonly updatedAt: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.news
   */
  export type Topic$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Topic.userQuestions
   */
  export type Topic$userQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    where?: UserQuestionWhereInput
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    cursor?: UserQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    validationScore: number | null
  }

  export type NewsSumAggregateOutputType = {
    validationScore: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    validationScore: number | null
    threadId: string | null
    topicId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    validationScore: number | null
    threadId: string | null
    topicId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    validationScore: number
    threadId: number
    topicId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    validationScore?: true
  }

  export type NewsSumAggregateInputType = {
    validationScore?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    validationScore?: true
    threadId?: true
    topicId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    validationScore?: true
    threadId?: true
    topicId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    validationScore?: true
    threadId?: true
    topicId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    content: string
    validationScore: number
    threadId: string
    topicId: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    validationScore?: boolean
    threadId?: boolean
    topicId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    issues?: boolean | News$issuesArgs<ExtArgs>
    validations?: boolean | News$validationsArgs<ExtArgs>
    scoreHistory?: boolean | News$scoreHistoryArgs<ExtArgs>
    newsEdit?: boolean | News$newsEditArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    validationScore?: boolean
    threadId?: boolean
    topicId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    validationScore?: boolean
    threadId?: boolean
    topicId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    validationScore?: boolean
    threadId?: boolean
    topicId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "validationScore" | "threadId" | "topicId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    issues?: boolean | News$issuesArgs<ExtArgs>
    validations?: boolean | News$validationsArgs<ExtArgs>
    scoreHistory?: boolean | News$scoreHistoryArgs<ExtArgs>
    newsEdit?: boolean | News$newsEditArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      thread: Prisma.$ThreadPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      issues: Prisma.$IssuePayload<ExtArgs>[]
      validations: Prisma.$ValidationPayload<ExtArgs>[]
      scoreHistory: Prisma.$ScoreHistoryPayload<ExtArgs>[]
      newsEdit: Prisma.$NewsEditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      validationScore: number
      threadId: string
      topicId: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issues<T extends News$issuesArgs<ExtArgs> = {}>(args?: Subset<T, News$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validations<T extends News$validationsArgs<ExtArgs> = {}>(args?: Subset<T, News$validationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scoreHistory<T extends News$scoreHistoryArgs<ExtArgs> = {}>(args?: Subset<T, News$scoreHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsEdit<T extends News$newsEditArgs<ExtArgs> = {}>(args?: Subset<T, News$newsEditArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly validationScore: FieldRef<"News", 'Int'>
    readonly threadId: FieldRef<"News", 'String'>
    readonly topicId: FieldRef<"News", 'String'>
    readonly authorId: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.issues
   */
  export type News$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * News.validations
   */
  export type News$validationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    where?: ValidationWhereInput
    orderBy?: ValidationOrderByWithRelationInput | ValidationOrderByWithRelationInput[]
    cursor?: ValidationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValidationScalarFieldEnum | ValidationScalarFieldEnum[]
  }

  /**
   * News.scoreHistory
   */
  export type News$scoreHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    where?: ScoreHistoryWhereInput
    orderBy?: ScoreHistoryOrderByWithRelationInput | ScoreHistoryOrderByWithRelationInput[]
    cursor?: ScoreHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreHistoryScalarFieldEnum | ScoreHistoryScalarFieldEnum[]
  }

  /**
   * News.newsEdit
   */
  export type News$newsEditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    where?: NewsEditWhereInput
    orderBy?: NewsEditOrderByWithRelationInput | NewsEditOrderByWithRelationInput[]
    cursor?: NewsEditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsEditScalarFieldEnum | NewsEditScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model NewsEdit
   */

  export type AggregateNewsEdit = {
    _count: NewsEditCountAggregateOutputType | null
    _min: NewsEditMinAggregateOutputType | null
    _max: NewsEditMaxAggregateOutputType | null
  }

  export type NewsEditMinAggregateOutputType = {
    id: string | null
    newsId: string | null
    editedById: string | null
    oldContent: string | null
    newContent: string | null
    createdAt: Date | null
  }

  export type NewsEditMaxAggregateOutputType = {
    id: string | null
    newsId: string | null
    editedById: string | null
    oldContent: string | null
    newContent: string | null
    createdAt: Date | null
  }

  export type NewsEditCountAggregateOutputType = {
    id: number
    newsId: number
    editedById: number
    oldContent: number
    newContent: number
    createdAt: number
    _all: number
  }


  export type NewsEditMinAggregateInputType = {
    id?: true
    newsId?: true
    editedById?: true
    oldContent?: true
    newContent?: true
    createdAt?: true
  }

  export type NewsEditMaxAggregateInputType = {
    id?: true
    newsId?: true
    editedById?: true
    oldContent?: true
    newContent?: true
    createdAt?: true
  }

  export type NewsEditCountAggregateInputType = {
    id?: true
    newsId?: true
    editedById?: true
    oldContent?: true
    newContent?: true
    createdAt?: true
    _all?: true
  }

  export type NewsEditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsEdit to aggregate.
     */
    where?: NewsEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEdits to fetch.
     */
    orderBy?: NewsEditOrderByWithRelationInput | NewsEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsEdits
    **/
    _count?: true | NewsEditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsEditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsEditMaxAggregateInputType
  }

  export type GetNewsEditAggregateType<T extends NewsEditAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsEdit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsEdit[P]>
      : GetScalarType<T[P], AggregateNewsEdit[P]>
  }




  export type NewsEditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsEditWhereInput
    orderBy?: NewsEditOrderByWithAggregationInput | NewsEditOrderByWithAggregationInput[]
    by: NewsEditScalarFieldEnum[] | NewsEditScalarFieldEnum
    having?: NewsEditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsEditCountAggregateInputType | true
    _min?: NewsEditMinAggregateInputType
    _max?: NewsEditMaxAggregateInputType
  }

  export type NewsEditGroupByOutputType = {
    id: string
    newsId: string
    editedById: string
    oldContent: string
    newContent: string
    createdAt: Date
    _count: NewsEditCountAggregateOutputType | null
    _min: NewsEditMinAggregateOutputType | null
    _max: NewsEditMaxAggregateOutputType | null
  }

  type GetNewsEditGroupByPayload<T extends NewsEditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsEditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsEditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsEditGroupByOutputType[P]>
            : GetScalarType<T[P], NewsEditGroupByOutputType[P]>
        }
      >
    >


  export type NewsEditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    editedById?: boolean
    oldContent?: boolean
    newContent?: boolean
    createdAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    editedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsEdit"]>

  export type NewsEditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    editedById?: boolean
    oldContent?: boolean
    newContent?: boolean
    createdAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    editedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsEdit"]>

  export type NewsEditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    editedById?: boolean
    oldContent?: boolean
    newContent?: boolean
    createdAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    editedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsEdit"]>

  export type NewsEditSelectScalar = {
    id?: boolean
    newsId?: boolean
    editedById?: boolean
    oldContent?: boolean
    newContent?: boolean
    createdAt?: boolean
  }

  export type NewsEditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "newsId" | "editedById" | "oldContent" | "newContent" | "createdAt", ExtArgs["result"]["newsEdit"]>
  export type NewsEditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    editedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsEditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    editedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsEditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    editedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsEditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsEdit"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      editedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      newsId: string
      editedById: string
      oldContent: string
      newContent: string
      createdAt: Date
    }, ExtArgs["result"]["newsEdit"]>
    composites: {}
  }

  type NewsEditGetPayload<S extends boolean | null | undefined | NewsEditDefaultArgs> = $Result.GetResult<Prisma.$NewsEditPayload, S>

  type NewsEditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsEditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsEditCountAggregateInputType | true
    }

  export interface NewsEditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsEdit'], meta: { name: 'NewsEdit' } }
    /**
     * Find zero or one NewsEdit that matches the filter.
     * @param {NewsEditFindUniqueArgs} args - Arguments to find a NewsEdit
     * @example
     * // Get one NewsEdit
     * const newsEdit = await prisma.newsEdit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsEditFindUniqueArgs>(args: SelectSubset<T, NewsEditFindUniqueArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsEdit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsEditFindUniqueOrThrowArgs} args - Arguments to find a NewsEdit
     * @example
     * // Get one NewsEdit
     * const newsEdit = await prisma.newsEdit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsEditFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsEditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsEdit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditFindFirstArgs} args - Arguments to find a NewsEdit
     * @example
     * // Get one NewsEdit
     * const newsEdit = await prisma.newsEdit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsEditFindFirstArgs>(args?: SelectSubset<T, NewsEditFindFirstArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsEdit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditFindFirstOrThrowArgs} args - Arguments to find a NewsEdit
     * @example
     * // Get one NewsEdit
     * const newsEdit = await prisma.newsEdit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsEditFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsEditFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsEdits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsEdits
     * const newsEdits = await prisma.newsEdit.findMany()
     * 
     * // Get first 10 NewsEdits
     * const newsEdits = await prisma.newsEdit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsEditWithIdOnly = await prisma.newsEdit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsEditFindManyArgs>(args?: SelectSubset<T, NewsEditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsEdit.
     * @param {NewsEditCreateArgs} args - Arguments to create a NewsEdit.
     * @example
     * // Create one NewsEdit
     * const NewsEdit = await prisma.newsEdit.create({
     *   data: {
     *     // ... data to create a NewsEdit
     *   }
     * })
     * 
     */
    create<T extends NewsEditCreateArgs>(args: SelectSubset<T, NewsEditCreateArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsEdits.
     * @param {NewsEditCreateManyArgs} args - Arguments to create many NewsEdits.
     * @example
     * // Create many NewsEdits
     * const newsEdit = await prisma.newsEdit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsEditCreateManyArgs>(args?: SelectSubset<T, NewsEditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsEdits and returns the data saved in the database.
     * @param {NewsEditCreateManyAndReturnArgs} args - Arguments to create many NewsEdits.
     * @example
     * // Create many NewsEdits
     * const newsEdit = await prisma.newsEdit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsEdits and only return the `id`
     * const newsEditWithIdOnly = await prisma.newsEdit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsEditCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsEditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsEdit.
     * @param {NewsEditDeleteArgs} args - Arguments to delete one NewsEdit.
     * @example
     * // Delete one NewsEdit
     * const NewsEdit = await prisma.newsEdit.delete({
     *   where: {
     *     // ... filter to delete one NewsEdit
     *   }
     * })
     * 
     */
    delete<T extends NewsEditDeleteArgs>(args: SelectSubset<T, NewsEditDeleteArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsEdit.
     * @param {NewsEditUpdateArgs} args - Arguments to update one NewsEdit.
     * @example
     * // Update one NewsEdit
     * const newsEdit = await prisma.newsEdit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsEditUpdateArgs>(args: SelectSubset<T, NewsEditUpdateArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsEdits.
     * @param {NewsEditDeleteManyArgs} args - Arguments to filter NewsEdits to delete.
     * @example
     * // Delete a few NewsEdits
     * const { count } = await prisma.newsEdit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsEditDeleteManyArgs>(args?: SelectSubset<T, NewsEditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsEdits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsEdits
     * const newsEdit = await prisma.newsEdit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsEditUpdateManyArgs>(args: SelectSubset<T, NewsEditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsEdits and returns the data updated in the database.
     * @param {NewsEditUpdateManyAndReturnArgs} args - Arguments to update many NewsEdits.
     * @example
     * // Update many NewsEdits
     * const newsEdit = await prisma.newsEdit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsEdits and only return the `id`
     * const newsEditWithIdOnly = await prisma.newsEdit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsEditUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsEditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsEdit.
     * @param {NewsEditUpsertArgs} args - Arguments to update or create a NewsEdit.
     * @example
     * // Update or create a NewsEdit
     * const newsEdit = await prisma.newsEdit.upsert({
     *   create: {
     *     // ... data to create a NewsEdit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsEdit we want to update
     *   }
     * })
     */
    upsert<T extends NewsEditUpsertArgs>(args: SelectSubset<T, NewsEditUpsertArgs<ExtArgs>>): Prisma__NewsEditClient<$Result.GetResult<Prisma.$NewsEditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsEdits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditCountArgs} args - Arguments to filter NewsEdits to count.
     * @example
     * // Count the number of NewsEdits
     * const count = await prisma.newsEdit.count({
     *   where: {
     *     // ... the filter for the NewsEdits we want to count
     *   }
     * })
    **/
    count<T extends NewsEditCountArgs>(
      args?: Subset<T, NewsEditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsEditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsEdit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsEditAggregateArgs>(args: Subset<T, NewsEditAggregateArgs>): Prisma.PrismaPromise<GetNewsEditAggregateType<T>>

    /**
     * Group by NewsEdit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsEditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsEditGroupByArgs['orderBy'] }
        : { orderBy?: NewsEditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsEditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsEditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsEdit model
   */
  readonly fields: NewsEditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsEdit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsEditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsEdit model
   */
  interface NewsEditFieldRefs {
    readonly id: FieldRef<"NewsEdit", 'String'>
    readonly newsId: FieldRef<"NewsEdit", 'String'>
    readonly editedById: FieldRef<"NewsEdit", 'String'>
    readonly oldContent: FieldRef<"NewsEdit", 'String'>
    readonly newContent: FieldRef<"NewsEdit", 'String'>
    readonly createdAt: FieldRef<"NewsEdit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsEdit findUnique
   */
  export type NewsEditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * Filter, which NewsEdit to fetch.
     */
    where: NewsEditWhereUniqueInput
  }

  /**
   * NewsEdit findUniqueOrThrow
   */
  export type NewsEditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * Filter, which NewsEdit to fetch.
     */
    where: NewsEditWhereUniqueInput
  }

  /**
   * NewsEdit findFirst
   */
  export type NewsEditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * Filter, which NewsEdit to fetch.
     */
    where?: NewsEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEdits to fetch.
     */
    orderBy?: NewsEditOrderByWithRelationInput | NewsEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsEdits.
     */
    cursor?: NewsEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsEdits.
     */
    distinct?: NewsEditScalarFieldEnum | NewsEditScalarFieldEnum[]
  }

  /**
   * NewsEdit findFirstOrThrow
   */
  export type NewsEditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * Filter, which NewsEdit to fetch.
     */
    where?: NewsEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEdits to fetch.
     */
    orderBy?: NewsEditOrderByWithRelationInput | NewsEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsEdits.
     */
    cursor?: NewsEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsEdits.
     */
    distinct?: NewsEditScalarFieldEnum | NewsEditScalarFieldEnum[]
  }

  /**
   * NewsEdit findMany
   */
  export type NewsEditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * Filter, which NewsEdits to fetch.
     */
    where?: NewsEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEdits to fetch.
     */
    orderBy?: NewsEditOrderByWithRelationInput | NewsEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsEdits.
     */
    cursor?: NewsEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEdits.
     */
    skip?: number
    distinct?: NewsEditScalarFieldEnum | NewsEditScalarFieldEnum[]
  }

  /**
   * NewsEdit create
   */
  export type NewsEditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsEdit.
     */
    data: XOR<NewsEditCreateInput, NewsEditUncheckedCreateInput>
  }

  /**
   * NewsEdit createMany
   */
  export type NewsEditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsEdits.
     */
    data: NewsEditCreateManyInput | NewsEditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsEdit createManyAndReturn
   */
  export type NewsEditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * The data used to create many NewsEdits.
     */
    data: NewsEditCreateManyInput | NewsEditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsEdit update
   */
  export type NewsEditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsEdit.
     */
    data: XOR<NewsEditUpdateInput, NewsEditUncheckedUpdateInput>
    /**
     * Choose, which NewsEdit to update.
     */
    where: NewsEditWhereUniqueInput
  }

  /**
   * NewsEdit updateMany
   */
  export type NewsEditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsEdits.
     */
    data: XOR<NewsEditUpdateManyMutationInput, NewsEditUncheckedUpdateManyInput>
    /**
     * Filter which NewsEdits to update
     */
    where?: NewsEditWhereInput
    /**
     * Limit how many NewsEdits to update.
     */
    limit?: number
  }

  /**
   * NewsEdit updateManyAndReturn
   */
  export type NewsEditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * The data used to update NewsEdits.
     */
    data: XOR<NewsEditUpdateManyMutationInput, NewsEditUncheckedUpdateManyInput>
    /**
     * Filter which NewsEdits to update
     */
    where?: NewsEditWhereInput
    /**
     * Limit how many NewsEdits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsEdit upsert
   */
  export type NewsEditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsEdit to update in case it exists.
     */
    where: NewsEditWhereUniqueInput
    /**
     * In case the NewsEdit found by the `where` argument doesn't exist, create a new NewsEdit with this data.
     */
    create: XOR<NewsEditCreateInput, NewsEditUncheckedCreateInput>
    /**
     * In case the NewsEdit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsEditUpdateInput, NewsEditUncheckedUpdateInput>
  }

  /**
   * NewsEdit delete
   */
  export type NewsEditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
    /**
     * Filter which NewsEdit to delete.
     */
    where: NewsEditWhereUniqueInput
  }

  /**
   * NewsEdit deleteMany
   */
  export type NewsEditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsEdits to delete
     */
    where?: NewsEditWhereInput
    /**
     * Limit how many NewsEdits to delete.
     */
    limit?: number
  }

  /**
   * NewsEdit without action
   */
  export type NewsEditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEdit
     */
    select?: NewsEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEdit
     */
    omit?: NewsEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEditInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueAvgAggregateOutputType = {
    positionStart: number | null
    positionEnd: number | null
  }

  export type IssueSumAggregateOutputType = {
    positionStart: number | null
    positionEnd: number | null
  }

  export type IssueMinAggregateOutputType = {
    id: string | null
    newsId: string | null
    type: $Enums.IssueType | null
    description: string | null
    positionStart: number | null
    positionEnd: number | null
    sentiment: $Enums.Sentiment | null
    createdAt: Date | null
  }

  export type IssueMaxAggregateOutputType = {
    id: string | null
    newsId: string | null
    type: $Enums.IssueType | null
    description: string | null
    positionStart: number | null
    positionEnd: number | null
    sentiment: $Enums.Sentiment | null
    createdAt: Date | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    newsId: number
    type: number
    description: number
    positionStart: number
    positionEnd: number
    sentiment: number
    createdAt: number
    _all: number
  }


  export type IssueAvgAggregateInputType = {
    positionStart?: true
    positionEnd?: true
  }

  export type IssueSumAggregateInputType = {
    positionStart?: true
    positionEnd?: true
  }

  export type IssueMinAggregateInputType = {
    id?: true
    newsId?: true
    type?: true
    description?: true
    positionStart?: true
    positionEnd?: true
    sentiment?: true
    createdAt?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    newsId?: true
    type?: true
    description?: true
    positionStart?: true
    positionEnd?: true
    sentiment?: true
    createdAt?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    newsId?: true
    type?: true
    description?: true
    positionStart?: true
    positionEnd?: true
    sentiment?: true
    createdAt?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _avg?: IssueAvgAggregateInputType
    _sum?: IssueSumAggregateInputType
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: string
    newsId: string
    type: $Enums.IssueType
    description: string
    positionStart: number | null
    positionEnd: number | null
    sentiment: $Enums.Sentiment | null
    createdAt: Date
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    type?: boolean
    description?: boolean
    positionStart?: boolean
    positionEnd?: boolean
    sentiment?: boolean
    createdAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    type?: boolean
    description?: boolean
    positionStart?: boolean
    positionEnd?: boolean
    sentiment?: boolean
    createdAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    type?: boolean
    description?: boolean
    positionStart?: boolean
    positionEnd?: boolean
    sentiment?: boolean
    createdAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    newsId?: boolean
    type?: boolean
    description?: boolean
    positionStart?: boolean
    positionEnd?: boolean
    sentiment?: boolean
    createdAt?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "newsId" | "type" | "description" | "positionStart" | "positionEnd" | "sentiment" | "createdAt", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type IssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type IssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      newsId: string
      type: $Enums.IssueType
      description: string
      positionStart: number | null
      positionEnd: number | null
      sentiment: $Enums.Sentiment | null
      createdAt: Date
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issue model
   */
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'String'>
    readonly newsId: FieldRef<"Issue", 'String'>
    readonly type: FieldRef<"Issue", 'IssueType'>
    readonly description: FieldRef<"Issue", 'String'>
    readonly positionStart: FieldRef<"Issue", 'Int'>
    readonly positionEnd: FieldRef<"Issue", 'Int'>
    readonly sentiment: FieldRef<"Issue", 'Sentiment'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue updateManyAndReturn
   */
  export type IssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model Validation
   */

  export type AggregateValidation = {
    _count: ValidationCountAggregateOutputType | null
    _min: ValidationMinAggregateOutputType | null
    _max: ValidationMaxAggregateOutputType | null
  }

  export type ValidationMinAggregateOutputType = {
    id: string | null
    newsId: string | null
    validatedByUserId: string | null
    info: string | null
    isCorrectionSuggestion: boolean | null
    status: $Enums.ValidationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ValidationMaxAggregateOutputType = {
    id: string | null
    newsId: string | null
    validatedByUserId: string | null
    info: string | null
    isCorrectionSuggestion: boolean | null
    status: $Enums.ValidationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ValidationCountAggregateOutputType = {
    id: number
    newsId: number
    validatedByUserId: number
    info: number
    isCorrectionSuggestion: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ValidationMinAggregateInputType = {
    id?: true
    newsId?: true
    validatedByUserId?: true
    info?: true
    isCorrectionSuggestion?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ValidationMaxAggregateInputType = {
    id?: true
    newsId?: true
    validatedByUserId?: true
    info?: true
    isCorrectionSuggestion?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ValidationCountAggregateInputType = {
    id?: true
    newsId?: true
    validatedByUserId?: true
    info?: true
    isCorrectionSuggestion?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ValidationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Validation to aggregate.
     */
    where?: ValidationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validations to fetch.
     */
    orderBy?: ValidationOrderByWithRelationInput | ValidationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValidationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Validations
    **/
    _count?: true | ValidationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValidationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValidationMaxAggregateInputType
  }

  export type GetValidationAggregateType<T extends ValidationAggregateArgs> = {
        [P in keyof T & keyof AggregateValidation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValidation[P]>
      : GetScalarType<T[P], AggregateValidation[P]>
  }




  export type ValidationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidationWhereInput
    orderBy?: ValidationOrderByWithAggregationInput | ValidationOrderByWithAggregationInput[]
    by: ValidationScalarFieldEnum[] | ValidationScalarFieldEnum
    having?: ValidationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValidationCountAggregateInputType | true
    _min?: ValidationMinAggregateInputType
    _max?: ValidationMaxAggregateInputType
  }

  export type ValidationGroupByOutputType = {
    id: string
    newsId: string
    validatedByUserId: string
    info: string | null
    isCorrectionSuggestion: boolean
    status: $Enums.ValidationStatus
    createdAt: Date
    updatedAt: Date
    _count: ValidationCountAggregateOutputType | null
    _min: ValidationMinAggregateOutputType | null
    _max: ValidationMaxAggregateOutputType | null
  }

  type GetValidationGroupByPayload<T extends ValidationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValidationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValidationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValidationGroupByOutputType[P]>
            : GetScalarType<T[P], ValidationGroupByOutputType[P]>
        }
      >
    >


  export type ValidationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    validatedByUserId?: boolean
    info?: boolean
    isCorrectionSuggestion?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    validatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["validation"]>

  export type ValidationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    validatedByUserId?: boolean
    info?: boolean
    isCorrectionSuggestion?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    validatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["validation"]>

  export type ValidationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsId?: boolean
    validatedByUserId?: boolean
    info?: boolean
    isCorrectionSuggestion?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    validatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["validation"]>

  export type ValidationSelectScalar = {
    id?: boolean
    newsId?: boolean
    validatedByUserId?: boolean
    info?: boolean
    isCorrectionSuggestion?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ValidationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "newsId" | "validatedByUserId" | "info" | "isCorrectionSuggestion" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["validation"]>
  export type ValidationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    validatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ValidationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    validatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ValidationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    validatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ValidationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Validation"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      validatedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      newsId: string
      validatedByUserId: string
      info: string | null
      isCorrectionSuggestion: boolean
      status: $Enums.ValidationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["validation"]>
    composites: {}
  }

  type ValidationGetPayload<S extends boolean | null | undefined | ValidationDefaultArgs> = $Result.GetResult<Prisma.$ValidationPayload, S>

  type ValidationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValidationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValidationCountAggregateInputType | true
    }

  export interface ValidationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Validation'], meta: { name: 'Validation' } }
    /**
     * Find zero or one Validation that matches the filter.
     * @param {ValidationFindUniqueArgs} args - Arguments to find a Validation
     * @example
     * // Get one Validation
     * const validation = await prisma.validation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValidationFindUniqueArgs>(args: SelectSubset<T, ValidationFindUniqueArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Validation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValidationFindUniqueOrThrowArgs} args - Arguments to find a Validation
     * @example
     * // Get one Validation
     * const validation = await prisma.validation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValidationFindUniqueOrThrowArgs>(args: SelectSubset<T, ValidationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Validation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationFindFirstArgs} args - Arguments to find a Validation
     * @example
     * // Get one Validation
     * const validation = await prisma.validation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValidationFindFirstArgs>(args?: SelectSubset<T, ValidationFindFirstArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Validation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationFindFirstOrThrowArgs} args - Arguments to find a Validation
     * @example
     * // Get one Validation
     * const validation = await prisma.validation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValidationFindFirstOrThrowArgs>(args?: SelectSubset<T, ValidationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Validations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Validations
     * const validations = await prisma.validation.findMany()
     * 
     * // Get first 10 Validations
     * const validations = await prisma.validation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const validationWithIdOnly = await prisma.validation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValidationFindManyArgs>(args?: SelectSubset<T, ValidationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Validation.
     * @param {ValidationCreateArgs} args - Arguments to create a Validation.
     * @example
     * // Create one Validation
     * const Validation = await prisma.validation.create({
     *   data: {
     *     // ... data to create a Validation
     *   }
     * })
     * 
     */
    create<T extends ValidationCreateArgs>(args: SelectSubset<T, ValidationCreateArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Validations.
     * @param {ValidationCreateManyArgs} args - Arguments to create many Validations.
     * @example
     * // Create many Validations
     * const validation = await prisma.validation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValidationCreateManyArgs>(args?: SelectSubset<T, ValidationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Validations and returns the data saved in the database.
     * @param {ValidationCreateManyAndReturnArgs} args - Arguments to create many Validations.
     * @example
     * // Create many Validations
     * const validation = await prisma.validation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Validations and only return the `id`
     * const validationWithIdOnly = await prisma.validation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValidationCreateManyAndReturnArgs>(args?: SelectSubset<T, ValidationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Validation.
     * @param {ValidationDeleteArgs} args - Arguments to delete one Validation.
     * @example
     * // Delete one Validation
     * const Validation = await prisma.validation.delete({
     *   where: {
     *     // ... filter to delete one Validation
     *   }
     * })
     * 
     */
    delete<T extends ValidationDeleteArgs>(args: SelectSubset<T, ValidationDeleteArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Validation.
     * @param {ValidationUpdateArgs} args - Arguments to update one Validation.
     * @example
     * // Update one Validation
     * const validation = await prisma.validation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValidationUpdateArgs>(args: SelectSubset<T, ValidationUpdateArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Validations.
     * @param {ValidationDeleteManyArgs} args - Arguments to filter Validations to delete.
     * @example
     * // Delete a few Validations
     * const { count } = await prisma.validation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValidationDeleteManyArgs>(args?: SelectSubset<T, ValidationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Validations
     * const validation = await prisma.validation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValidationUpdateManyArgs>(args: SelectSubset<T, ValidationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validations and returns the data updated in the database.
     * @param {ValidationUpdateManyAndReturnArgs} args - Arguments to update many Validations.
     * @example
     * // Update many Validations
     * const validation = await prisma.validation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Validations and only return the `id`
     * const validationWithIdOnly = await prisma.validation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ValidationUpdateManyAndReturnArgs>(args: SelectSubset<T, ValidationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Validation.
     * @param {ValidationUpsertArgs} args - Arguments to update or create a Validation.
     * @example
     * // Update or create a Validation
     * const validation = await prisma.validation.upsert({
     *   create: {
     *     // ... data to create a Validation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Validation we want to update
     *   }
     * })
     */
    upsert<T extends ValidationUpsertArgs>(args: SelectSubset<T, ValidationUpsertArgs<ExtArgs>>): Prisma__ValidationClient<$Result.GetResult<Prisma.$ValidationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Validations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationCountArgs} args - Arguments to filter Validations to count.
     * @example
     * // Count the number of Validations
     * const count = await prisma.validation.count({
     *   where: {
     *     // ... the filter for the Validations we want to count
     *   }
     * })
    **/
    count<T extends ValidationCountArgs>(
      args?: Subset<T, ValidationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValidationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Validation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValidationAggregateArgs>(args: Subset<T, ValidationAggregateArgs>): Prisma.PrismaPromise<GetValidationAggregateType<T>>

    /**
     * Group by Validation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValidationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValidationGroupByArgs['orderBy'] }
        : { orderBy?: ValidationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValidationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Validation model
   */
  readonly fields: ValidationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Validation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValidationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    validatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Validation model
   */
  interface ValidationFieldRefs {
    readonly id: FieldRef<"Validation", 'String'>
    readonly newsId: FieldRef<"Validation", 'String'>
    readonly validatedByUserId: FieldRef<"Validation", 'String'>
    readonly info: FieldRef<"Validation", 'String'>
    readonly isCorrectionSuggestion: FieldRef<"Validation", 'Boolean'>
    readonly status: FieldRef<"Validation", 'ValidationStatus'>
    readonly createdAt: FieldRef<"Validation", 'DateTime'>
    readonly updatedAt: FieldRef<"Validation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Validation findUnique
   */
  export type ValidationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * Filter, which Validation to fetch.
     */
    where: ValidationWhereUniqueInput
  }

  /**
   * Validation findUniqueOrThrow
   */
  export type ValidationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * Filter, which Validation to fetch.
     */
    where: ValidationWhereUniqueInput
  }

  /**
   * Validation findFirst
   */
  export type ValidationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * Filter, which Validation to fetch.
     */
    where?: ValidationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validations to fetch.
     */
    orderBy?: ValidationOrderByWithRelationInput | ValidationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validations.
     */
    cursor?: ValidationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validations.
     */
    distinct?: ValidationScalarFieldEnum | ValidationScalarFieldEnum[]
  }

  /**
   * Validation findFirstOrThrow
   */
  export type ValidationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * Filter, which Validation to fetch.
     */
    where?: ValidationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validations to fetch.
     */
    orderBy?: ValidationOrderByWithRelationInput | ValidationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validations.
     */
    cursor?: ValidationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validations.
     */
    distinct?: ValidationScalarFieldEnum | ValidationScalarFieldEnum[]
  }

  /**
   * Validation findMany
   */
  export type ValidationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * Filter, which Validations to fetch.
     */
    where?: ValidationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validations to fetch.
     */
    orderBy?: ValidationOrderByWithRelationInput | ValidationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Validations.
     */
    cursor?: ValidationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validations.
     */
    skip?: number
    distinct?: ValidationScalarFieldEnum | ValidationScalarFieldEnum[]
  }

  /**
   * Validation create
   */
  export type ValidationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * The data needed to create a Validation.
     */
    data: XOR<ValidationCreateInput, ValidationUncheckedCreateInput>
  }

  /**
   * Validation createMany
   */
  export type ValidationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Validations.
     */
    data: ValidationCreateManyInput | ValidationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Validation createManyAndReturn
   */
  export type ValidationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * The data used to create many Validations.
     */
    data: ValidationCreateManyInput | ValidationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Validation update
   */
  export type ValidationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * The data needed to update a Validation.
     */
    data: XOR<ValidationUpdateInput, ValidationUncheckedUpdateInput>
    /**
     * Choose, which Validation to update.
     */
    where: ValidationWhereUniqueInput
  }

  /**
   * Validation updateMany
   */
  export type ValidationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Validations.
     */
    data: XOR<ValidationUpdateManyMutationInput, ValidationUncheckedUpdateManyInput>
    /**
     * Filter which Validations to update
     */
    where?: ValidationWhereInput
    /**
     * Limit how many Validations to update.
     */
    limit?: number
  }

  /**
   * Validation updateManyAndReturn
   */
  export type ValidationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * The data used to update Validations.
     */
    data: XOR<ValidationUpdateManyMutationInput, ValidationUncheckedUpdateManyInput>
    /**
     * Filter which Validations to update
     */
    where?: ValidationWhereInput
    /**
     * Limit how many Validations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Validation upsert
   */
  export type ValidationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * The filter to search for the Validation to update in case it exists.
     */
    where: ValidationWhereUniqueInput
    /**
     * In case the Validation found by the `where` argument doesn't exist, create a new Validation with this data.
     */
    create: XOR<ValidationCreateInput, ValidationUncheckedCreateInput>
    /**
     * In case the Validation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValidationUpdateInput, ValidationUncheckedUpdateInput>
  }

  /**
   * Validation delete
   */
  export type ValidationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
    /**
     * Filter which Validation to delete.
     */
    where: ValidationWhereUniqueInput
  }

  /**
   * Validation deleteMany
   */
  export type ValidationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Validations to delete
     */
    where?: ValidationWhereInput
    /**
     * Limit how many Validations to delete.
     */
    limit?: number
  }

  /**
   * Validation without action
   */
  export type ValidationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validation
     */
    select?: ValidationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validation
     */
    omit?: ValidationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValidationInclude<ExtArgs> | null
  }


  /**
   * Model ScoreHistory
   */

  export type AggregateScoreHistory = {
    _count: ScoreHistoryCountAggregateOutputType | null
    _avg: ScoreHistoryAvgAggregateOutputType | null
    _sum: ScoreHistorySumAggregateOutputType | null
    _min: ScoreHistoryMinAggregateOutputType | null
    _max: ScoreHistoryMaxAggregateOutputType | null
  }

  export type ScoreHistoryAvgAggregateOutputType = {
    validationScore: number | null
    scoreIncrement: number | null
  }

  export type ScoreHistorySumAggregateOutputType = {
    validationScore: number | null
    scoreIncrement: number | null
  }

  export type ScoreHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    newsId: string | null
    validationScore: number | null
    scoreIncrement: number | null
    updatedAt: Date | null
  }

  export type ScoreHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    newsId: string | null
    validationScore: number | null
    scoreIncrement: number | null
    updatedAt: Date | null
  }

  export type ScoreHistoryCountAggregateOutputType = {
    id: number
    userId: number
    newsId: number
    validationScore: number
    scoreIncrement: number
    updatedAt: number
    _all: number
  }


  export type ScoreHistoryAvgAggregateInputType = {
    validationScore?: true
    scoreIncrement?: true
  }

  export type ScoreHistorySumAggregateInputType = {
    validationScore?: true
    scoreIncrement?: true
  }

  export type ScoreHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    newsId?: true
    validationScore?: true
    scoreIncrement?: true
    updatedAt?: true
  }

  export type ScoreHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    newsId?: true
    validationScore?: true
    scoreIncrement?: true
    updatedAt?: true
  }

  export type ScoreHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    newsId?: true
    validationScore?: true
    scoreIncrement?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoreHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreHistory to aggregate.
     */
    where?: ScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreHistories to fetch.
     */
    orderBy?: ScoreHistoryOrderByWithRelationInput | ScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoreHistories
    **/
    _count?: true | ScoreHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreHistoryMaxAggregateInputType
  }

  export type GetScoreHistoryAggregateType<T extends ScoreHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreHistory[P]>
      : GetScalarType<T[P], AggregateScoreHistory[P]>
  }




  export type ScoreHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreHistoryWhereInput
    orderBy?: ScoreHistoryOrderByWithAggregationInput | ScoreHistoryOrderByWithAggregationInput[]
    by: ScoreHistoryScalarFieldEnum[] | ScoreHistoryScalarFieldEnum
    having?: ScoreHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreHistoryCountAggregateInputType | true
    _avg?: ScoreHistoryAvgAggregateInputType
    _sum?: ScoreHistorySumAggregateInputType
    _min?: ScoreHistoryMinAggregateInputType
    _max?: ScoreHistoryMaxAggregateInputType
  }

  export type ScoreHistoryGroupByOutputType = {
    id: string
    userId: string
    newsId: string
    validationScore: number
    scoreIncrement: number
    updatedAt: Date
    _count: ScoreHistoryCountAggregateOutputType | null
    _avg: ScoreHistoryAvgAggregateOutputType | null
    _sum: ScoreHistorySumAggregateOutputType | null
    _min: ScoreHistoryMinAggregateOutputType | null
    _max: ScoreHistoryMaxAggregateOutputType | null
  }

  type GetScoreHistoryGroupByPayload<T extends ScoreHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ScoreHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsId?: boolean
    validationScore?: boolean
    scoreIncrement?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreHistory"]>

  export type ScoreHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsId?: boolean
    validationScore?: boolean
    scoreIncrement?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreHistory"]>

  export type ScoreHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsId?: boolean
    validationScore?: boolean
    scoreIncrement?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreHistory"]>

  export type ScoreHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    newsId?: boolean
    validationScore?: boolean
    scoreIncrement?: boolean
    updatedAt?: boolean
  }

  export type ScoreHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "newsId" | "validationScore" | "scoreIncrement" | "updatedAt", ExtArgs["result"]["scoreHistory"]>
  export type ScoreHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type ScoreHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type ScoreHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }

  export type $ScoreHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoreHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      news: Prisma.$NewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      newsId: string
      validationScore: number
      scoreIncrement: number
      updatedAt: Date
    }, ExtArgs["result"]["scoreHistory"]>
    composites: {}
  }

  type ScoreHistoryGetPayload<S extends boolean | null | undefined | ScoreHistoryDefaultArgs> = $Result.GetResult<Prisma.$ScoreHistoryPayload, S>

  type ScoreHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreHistoryCountAggregateInputType | true
    }

  export interface ScoreHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoreHistory'], meta: { name: 'ScoreHistory' } }
    /**
     * Find zero or one ScoreHistory that matches the filter.
     * @param {ScoreHistoryFindUniqueArgs} args - Arguments to find a ScoreHistory
     * @example
     * // Get one ScoreHistory
     * const scoreHistory = await prisma.scoreHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreHistoryFindUniqueArgs>(args: SelectSubset<T, ScoreHistoryFindUniqueArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScoreHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreHistoryFindUniqueOrThrowArgs} args - Arguments to find a ScoreHistory
     * @example
     * // Get one ScoreHistory
     * const scoreHistory = await prisma.scoreHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryFindFirstArgs} args - Arguments to find a ScoreHistory
     * @example
     * // Get one ScoreHistory
     * const scoreHistory = await prisma.scoreHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreHistoryFindFirstArgs>(args?: SelectSubset<T, ScoreHistoryFindFirstArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryFindFirstOrThrowArgs} args - Arguments to find a ScoreHistory
     * @example
     * // Get one ScoreHistory
     * const scoreHistory = await prisma.scoreHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScoreHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreHistories
     * const scoreHistories = await prisma.scoreHistory.findMany()
     * 
     * // Get first 10 ScoreHistories
     * const scoreHistories = await prisma.scoreHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreHistoryWithIdOnly = await prisma.scoreHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreHistoryFindManyArgs>(args?: SelectSubset<T, ScoreHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScoreHistory.
     * @param {ScoreHistoryCreateArgs} args - Arguments to create a ScoreHistory.
     * @example
     * // Create one ScoreHistory
     * const ScoreHistory = await prisma.scoreHistory.create({
     *   data: {
     *     // ... data to create a ScoreHistory
     *   }
     * })
     * 
     */
    create<T extends ScoreHistoryCreateArgs>(args: SelectSubset<T, ScoreHistoryCreateArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScoreHistories.
     * @param {ScoreHistoryCreateManyArgs} args - Arguments to create many ScoreHistories.
     * @example
     * // Create many ScoreHistories
     * const scoreHistory = await prisma.scoreHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreHistoryCreateManyArgs>(args?: SelectSubset<T, ScoreHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScoreHistories and returns the data saved in the database.
     * @param {ScoreHistoryCreateManyAndReturnArgs} args - Arguments to create many ScoreHistories.
     * @example
     * // Create many ScoreHistories
     * const scoreHistory = await prisma.scoreHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScoreHistories and only return the `id`
     * const scoreHistoryWithIdOnly = await prisma.scoreHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScoreHistory.
     * @param {ScoreHistoryDeleteArgs} args - Arguments to delete one ScoreHistory.
     * @example
     * // Delete one ScoreHistory
     * const ScoreHistory = await prisma.scoreHistory.delete({
     *   where: {
     *     // ... filter to delete one ScoreHistory
     *   }
     * })
     * 
     */
    delete<T extends ScoreHistoryDeleteArgs>(args: SelectSubset<T, ScoreHistoryDeleteArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScoreHistory.
     * @param {ScoreHistoryUpdateArgs} args - Arguments to update one ScoreHistory.
     * @example
     * // Update one ScoreHistory
     * const scoreHistory = await prisma.scoreHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreHistoryUpdateArgs>(args: SelectSubset<T, ScoreHistoryUpdateArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScoreHistories.
     * @param {ScoreHistoryDeleteManyArgs} args - Arguments to filter ScoreHistories to delete.
     * @example
     * // Delete a few ScoreHistories
     * const { count } = await prisma.scoreHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreHistoryDeleteManyArgs>(args?: SelectSubset<T, ScoreHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreHistories
     * const scoreHistory = await prisma.scoreHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreHistoryUpdateManyArgs>(args: SelectSubset<T, ScoreHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreHistories and returns the data updated in the database.
     * @param {ScoreHistoryUpdateManyAndReturnArgs} args - Arguments to update many ScoreHistories.
     * @example
     * // Update many ScoreHistories
     * const scoreHistory = await prisma.scoreHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScoreHistories and only return the `id`
     * const scoreHistoryWithIdOnly = await prisma.scoreHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScoreHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScoreHistory.
     * @param {ScoreHistoryUpsertArgs} args - Arguments to update or create a ScoreHistory.
     * @example
     * // Update or create a ScoreHistory
     * const scoreHistory = await prisma.scoreHistory.upsert({
     *   create: {
     *     // ... data to create a ScoreHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreHistory we want to update
     *   }
     * })
     */
    upsert<T extends ScoreHistoryUpsertArgs>(args: SelectSubset<T, ScoreHistoryUpsertArgs<ExtArgs>>): Prisma__ScoreHistoryClient<$Result.GetResult<Prisma.$ScoreHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScoreHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryCountArgs} args - Arguments to filter ScoreHistories to count.
     * @example
     * // Count the number of ScoreHistories
     * const count = await prisma.scoreHistory.count({
     *   where: {
     *     // ... the filter for the ScoreHistories we want to count
     *   }
     * })
    **/
    count<T extends ScoreHistoryCountArgs>(
      args?: Subset<T, ScoreHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoreHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreHistoryAggregateArgs>(args: Subset<T, ScoreHistoryAggregateArgs>): Prisma.PrismaPromise<GetScoreHistoryAggregateType<T>>

    /**
     * Group by ScoreHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ScoreHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoreHistory model
   */
  readonly fields: ScoreHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoreHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScoreHistory model
   */
  interface ScoreHistoryFieldRefs {
    readonly id: FieldRef<"ScoreHistory", 'String'>
    readonly userId: FieldRef<"ScoreHistory", 'String'>
    readonly newsId: FieldRef<"ScoreHistory", 'String'>
    readonly validationScore: FieldRef<"ScoreHistory", 'Int'>
    readonly scoreIncrement: FieldRef<"ScoreHistory", 'Int'>
    readonly updatedAt: FieldRef<"ScoreHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScoreHistory findUnique
   */
  export type ScoreHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreHistory to fetch.
     */
    where: ScoreHistoryWhereUniqueInput
  }

  /**
   * ScoreHistory findUniqueOrThrow
   */
  export type ScoreHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreHistory to fetch.
     */
    where: ScoreHistoryWhereUniqueInput
  }

  /**
   * ScoreHistory findFirst
   */
  export type ScoreHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreHistory to fetch.
     */
    where?: ScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreHistories to fetch.
     */
    orderBy?: ScoreHistoryOrderByWithRelationInput | ScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreHistories.
     */
    cursor?: ScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreHistories.
     */
    distinct?: ScoreHistoryScalarFieldEnum | ScoreHistoryScalarFieldEnum[]
  }

  /**
   * ScoreHistory findFirstOrThrow
   */
  export type ScoreHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreHistory to fetch.
     */
    where?: ScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreHistories to fetch.
     */
    orderBy?: ScoreHistoryOrderByWithRelationInput | ScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreHistories.
     */
    cursor?: ScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreHistories.
     */
    distinct?: ScoreHistoryScalarFieldEnum | ScoreHistoryScalarFieldEnum[]
  }

  /**
   * ScoreHistory findMany
   */
  export type ScoreHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreHistories to fetch.
     */
    where?: ScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreHistories to fetch.
     */
    orderBy?: ScoreHistoryOrderByWithRelationInput | ScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoreHistories.
     */
    cursor?: ScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreHistories.
     */
    skip?: number
    distinct?: ScoreHistoryScalarFieldEnum | ScoreHistoryScalarFieldEnum[]
  }

  /**
   * ScoreHistory create
   */
  export type ScoreHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoreHistory.
     */
    data: XOR<ScoreHistoryCreateInput, ScoreHistoryUncheckedCreateInput>
  }

  /**
   * ScoreHistory createMany
   */
  export type ScoreHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreHistories.
     */
    data: ScoreHistoryCreateManyInput | ScoreHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoreHistory createManyAndReturn
   */
  export type ScoreHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ScoreHistories.
     */
    data: ScoreHistoryCreateManyInput | ScoreHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreHistory update
   */
  export type ScoreHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoreHistory.
     */
    data: XOR<ScoreHistoryUpdateInput, ScoreHistoryUncheckedUpdateInput>
    /**
     * Choose, which ScoreHistory to update.
     */
    where: ScoreHistoryWhereUniqueInput
  }

  /**
   * ScoreHistory updateMany
   */
  export type ScoreHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreHistories.
     */
    data: XOR<ScoreHistoryUpdateManyMutationInput, ScoreHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ScoreHistories to update
     */
    where?: ScoreHistoryWhereInput
    /**
     * Limit how many ScoreHistories to update.
     */
    limit?: number
  }

  /**
   * ScoreHistory updateManyAndReturn
   */
  export type ScoreHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ScoreHistories.
     */
    data: XOR<ScoreHistoryUpdateManyMutationInput, ScoreHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ScoreHistories to update
     */
    where?: ScoreHistoryWhereInput
    /**
     * Limit how many ScoreHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreHistory upsert
   */
  export type ScoreHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoreHistory to update in case it exists.
     */
    where: ScoreHistoryWhereUniqueInput
    /**
     * In case the ScoreHistory found by the `where` argument doesn't exist, create a new ScoreHistory with this data.
     */
    create: XOR<ScoreHistoryCreateInput, ScoreHistoryUncheckedCreateInput>
    /**
     * In case the ScoreHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreHistoryUpdateInput, ScoreHistoryUncheckedUpdateInput>
  }

  /**
   * ScoreHistory delete
   */
  export type ScoreHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter which ScoreHistory to delete.
     */
    where: ScoreHistoryWhereUniqueInput
  }

  /**
   * ScoreHistory deleteMany
   */
  export type ScoreHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreHistories to delete
     */
    where?: ScoreHistoryWhereInput
    /**
     * Limit how many ScoreHistories to delete.
     */
    limit?: number
  }

  /**
   * ScoreHistory without action
   */
  export type ScoreHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreHistory
     */
    select?: ScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreHistory
     */
    omit?: ScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserQuestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topicId: 'topicId',
    question: 'question',
    answered: 'answered',
    answer: 'answer',
    createdAt: 'createdAt'
  };

  export type UserQuestionScalarFieldEnum = (typeof UserQuestionScalarFieldEnum)[keyof typeof UserQuestionScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descriptionPrompt: 'descriptionPrompt',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const ThreadSubscriptionScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ThreadSubscriptionScalarFieldEnum = (typeof ThreadSubscriptionScalarFieldEnum)[keyof typeof ThreadSubscriptionScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    trendingScore: 'trendingScore',
    threadId: 'threadId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    validationScore: 'validationScore',
    threadId: 'threadId',
    topicId: 'topicId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const NewsEditScalarFieldEnum: {
    id: 'id',
    newsId: 'newsId',
    editedById: 'editedById',
    oldContent: 'oldContent',
    newContent: 'newContent',
    createdAt: 'createdAt'
  };

  export type NewsEditScalarFieldEnum = (typeof NewsEditScalarFieldEnum)[keyof typeof NewsEditScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    id: 'id',
    newsId: 'newsId',
    type: 'type',
    description: 'description',
    positionStart: 'positionStart',
    positionEnd: 'positionEnd',
    sentiment: 'sentiment',
    createdAt: 'createdAt'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const ValidationScalarFieldEnum: {
    id: 'id',
    newsId: 'newsId',
    validatedByUserId: 'validatedByUserId',
    info: 'info',
    isCorrectionSuggestion: 'isCorrectionSuggestion',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ValidationScalarFieldEnum = (typeof ValidationScalarFieldEnum)[keyof typeof ValidationScalarFieldEnum]


  export const ScoreHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    newsId: 'newsId',
    validationScore: 'validationScore',
    scoreIncrement: 'scoreIncrement',
    updatedAt: 'updatedAt'
  };

  export type ScoreHistoryScalarFieldEnum = (typeof ScoreHistoryScalarFieldEnum)[keyof typeof ScoreHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'IssueType'
   */
  export type EnumIssueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueType'>
    


  /**
   * Reference to a field of type 'IssueType[]'
   */
  export type ListEnumIssueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueType[]'>
    


  /**
   * Reference to a field of type 'Sentiment'
   */
  export type EnumSentimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sentiment'>
    


  /**
   * Reference to a field of type 'Sentiment[]'
   */
  export type ListEnumSentimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sentiment[]'>
    


  /**
   * Reference to a field of type 'ValidationStatus'
   */
  export type EnumValidationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ValidationStatus'>
    


  /**
   * Reference to a field of type 'ValidationStatus[]'
   */
  export type ListEnumValidationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ValidationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    score?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    threads?: ThreadListRelationFilter
    news?: NewsListRelationFilter
    validations?: ValidationListRelationFilter
    scoreHistory?: ScoreHistoryListRelationFilter
    threadSubscriptions?: ThreadSubscriptionListRelationFilter
    newsEdit?: NewsEditListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    threads?: ThreadOrderByRelationAggregateInput
    news?: NewsOrderByRelationAggregateInput
    validations?: ValidationOrderByRelationAggregateInput
    scoreHistory?: ScoreHistoryOrderByRelationAggregateInput
    threadSubscriptions?: ThreadSubscriptionOrderByRelationAggregateInput
    newsEdit?: NewsEditOrderByRelationAggregateInput
    userQuestions?: UserQuestionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    score?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    threads?: ThreadListRelationFilter
    news?: NewsListRelationFilter
    validations?: ValidationListRelationFilter
    scoreHistory?: ScoreHistoryListRelationFilter
    threadSubscriptions?: ThreadSubscriptionListRelationFilter
    newsEdit?: NewsEditListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    score?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserQuestionWhereInput = {
    AND?: UserQuestionWhereInput | UserQuestionWhereInput[]
    OR?: UserQuestionWhereInput[]
    NOT?: UserQuestionWhereInput | UserQuestionWhereInput[]
    id?: StringFilter<"UserQuestion"> | string
    userId?: StringFilter<"UserQuestion"> | string
    topicId?: StringFilter<"UserQuestion"> | string
    question?: StringFilter<"UserQuestion"> | string
    answered?: BoolFilter<"UserQuestion"> | boolean
    answer?: StringNullableFilter<"UserQuestion"> | string | null
    createdAt?: DateTimeFilter<"UserQuestion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type UserQuestionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type UserQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserQuestionWhereInput | UserQuestionWhereInput[]
    OR?: UserQuestionWhereInput[]
    NOT?: UserQuestionWhereInput | UserQuestionWhereInput[]
    userId?: StringFilter<"UserQuestion"> | string
    topicId?: StringFilter<"UserQuestion"> | string
    question?: StringFilter<"UserQuestion"> | string
    answered?: BoolFilter<"UserQuestion"> | boolean
    answer?: StringNullableFilter<"UserQuestion"> | string | null
    createdAt?: DateTimeFilter<"UserQuestion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id">

  export type UserQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserQuestionCountOrderByAggregateInput
    _max?: UserQuestionMaxOrderByAggregateInput
    _min?: UserQuestionMinOrderByAggregateInput
  }

  export type UserQuestionScalarWhereWithAggregatesInput = {
    AND?: UserQuestionScalarWhereWithAggregatesInput | UserQuestionScalarWhereWithAggregatesInput[]
    OR?: UserQuestionScalarWhereWithAggregatesInput[]
    NOT?: UserQuestionScalarWhereWithAggregatesInput | UserQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserQuestion"> | string
    userId?: StringWithAggregatesFilter<"UserQuestion"> | string
    topicId?: StringWithAggregatesFilter<"UserQuestion"> | string
    question?: StringWithAggregatesFilter<"UserQuestion"> | string
    answered?: BoolWithAggregatesFilter<"UserQuestion"> | boolean
    answer?: StringNullableWithAggregatesFilter<"UserQuestion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserQuestion"> | Date | string
  }

  export type ThreadWhereInput = {
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    id?: StringFilter<"Thread"> | string
    title?: StringFilter<"Thread"> | string
    descriptionPrompt?: StringFilter<"Thread"> | string
    authorId?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    topics?: TopicListRelationFilter
    news?: NewsListRelationFilter
    threadSubscriptions?: ThreadSubscriptionListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionPrompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    topics?: TopicOrderByRelationAggregateInput
    news?: NewsOrderByRelationAggregateInput
    threadSubscriptions?: ThreadSubscriptionOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    descriptionPrompt?: StringFilter<"Thread"> | string
    authorId?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    topics?: TopicListRelationFilter
    news?: NewsListRelationFilter
    threadSubscriptions?: ThreadSubscriptionListRelationFilter
  }, "id" | "title">

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionPrompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    OR?: ThreadScalarWhereWithAggregatesInput[]
    NOT?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Thread"> | string
    title?: StringWithAggregatesFilter<"Thread"> | string
    descriptionPrompt?: StringWithAggregatesFilter<"Thread"> | string
    authorId?: StringWithAggregatesFilter<"Thread"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
  }

  export type ThreadSubscriptionWhereInput = {
    AND?: ThreadSubscriptionWhereInput | ThreadSubscriptionWhereInput[]
    OR?: ThreadSubscriptionWhereInput[]
    NOT?: ThreadSubscriptionWhereInput | ThreadSubscriptionWhereInput[]
    id?: StringFilter<"ThreadSubscription"> | string
    threadId?: StringFilter<"ThreadSubscription"> | string
    userId?: StringFilter<"ThreadSubscription"> | string
    createdAt?: DateTimeFilter<"ThreadSubscription"> | Date | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ThreadSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ThreadSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ThreadSubscriptionWhereInput | ThreadSubscriptionWhereInput[]
    OR?: ThreadSubscriptionWhereInput[]
    NOT?: ThreadSubscriptionWhereInput | ThreadSubscriptionWhereInput[]
    threadId?: StringFilter<"ThreadSubscription"> | string
    userId?: StringFilter<"ThreadSubscription"> | string
    createdAt?: DateTimeFilter<"ThreadSubscription"> | Date | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ThreadSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ThreadSubscriptionCountOrderByAggregateInput
    _max?: ThreadSubscriptionMaxOrderByAggregateInput
    _min?: ThreadSubscriptionMinOrderByAggregateInput
  }

  export type ThreadSubscriptionScalarWhereWithAggregatesInput = {
    AND?: ThreadSubscriptionScalarWhereWithAggregatesInput | ThreadSubscriptionScalarWhereWithAggregatesInput[]
    OR?: ThreadSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: ThreadSubscriptionScalarWhereWithAggregatesInput | ThreadSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ThreadSubscription"> | string
    threadId?: StringWithAggregatesFilter<"ThreadSubscription"> | string
    userId?: StringWithAggregatesFilter<"ThreadSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ThreadSubscription"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    title?: StringFilter<"Topic"> | string
    trendingScore?: IntFilter<"Topic"> | number
    threadId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    news?: NewsListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    trendingScore?: SortOrder
    threadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    news?: NewsOrderByRelationAggregateInput
    userQuestions?: UserQuestionOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    title?: StringFilter<"Topic"> | string
    trendingScore?: IntFilter<"Topic"> | number
    threadId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    news?: NewsListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    trendingScore?: SortOrder
    threadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    title?: StringWithAggregatesFilter<"Topic"> | string
    trendingScore?: IntWithAggregatesFilter<"Topic"> | number
    threadId?: StringWithAggregatesFilter<"Topic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    validationScore?: IntFilter<"News"> | number
    threadId?: StringFilter<"News"> | string
    topicId?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    issues?: IssueListRelationFilter
    validations?: ValidationListRelationFilter
    scoreHistory?: ScoreHistoryListRelationFilter
    newsEdit?: NewsEditListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    validationScore?: SortOrder
    threadId?: SortOrder
    topicId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
    validations?: ValidationOrderByRelationAggregateInput
    scoreHistory?: ScoreHistoryOrderByRelationAggregateInput
    newsEdit?: NewsEditOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    validationScore?: IntFilter<"News"> | number
    threadId?: StringFilter<"News"> | string
    topicId?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    issues?: IssueListRelationFilter
    validations?: ValidationListRelationFilter
    scoreHistory?: ScoreHistoryListRelationFilter
    newsEdit?: NewsEditListRelationFilter
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    validationScore?: SortOrder
    threadId?: SortOrder
    topicId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    validationScore?: IntWithAggregatesFilter<"News"> | number
    threadId?: StringWithAggregatesFilter<"News"> | string
    topicId?: StringWithAggregatesFilter<"News"> | string
    authorId?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type NewsEditWhereInput = {
    AND?: NewsEditWhereInput | NewsEditWhereInput[]
    OR?: NewsEditWhereInput[]
    NOT?: NewsEditWhereInput | NewsEditWhereInput[]
    id?: StringFilter<"NewsEdit"> | string
    newsId?: StringFilter<"NewsEdit"> | string
    editedById?: StringFilter<"NewsEdit"> | string
    oldContent?: StringFilter<"NewsEdit"> | string
    newContent?: StringFilter<"NewsEdit"> | string
    createdAt?: DateTimeFilter<"NewsEdit"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    editedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NewsEditOrderByWithRelationInput = {
    id?: SortOrder
    newsId?: SortOrder
    editedById?: SortOrder
    oldContent?: SortOrder
    newContent?: SortOrder
    createdAt?: SortOrder
    news?: NewsOrderByWithRelationInput
    editedBy?: UserOrderByWithRelationInput
  }

  export type NewsEditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsEditWhereInput | NewsEditWhereInput[]
    OR?: NewsEditWhereInput[]
    NOT?: NewsEditWhereInput | NewsEditWhereInput[]
    newsId?: StringFilter<"NewsEdit"> | string
    editedById?: StringFilter<"NewsEdit"> | string
    oldContent?: StringFilter<"NewsEdit"> | string
    newContent?: StringFilter<"NewsEdit"> | string
    createdAt?: DateTimeFilter<"NewsEdit"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    editedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NewsEditOrderByWithAggregationInput = {
    id?: SortOrder
    newsId?: SortOrder
    editedById?: SortOrder
    oldContent?: SortOrder
    newContent?: SortOrder
    createdAt?: SortOrder
    _count?: NewsEditCountOrderByAggregateInput
    _max?: NewsEditMaxOrderByAggregateInput
    _min?: NewsEditMinOrderByAggregateInput
  }

  export type NewsEditScalarWhereWithAggregatesInput = {
    AND?: NewsEditScalarWhereWithAggregatesInput | NewsEditScalarWhereWithAggregatesInput[]
    OR?: NewsEditScalarWhereWithAggregatesInput[]
    NOT?: NewsEditScalarWhereWithAggregatesInput | NewsEditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsEdit"> | string
    newsId?: StringWithAggregatesFilter<"NewsEdit"> | string
    editedById?: StringWithAggregatesFilter<"NewsEdit"> | string
    oldContent?: StringWithAggregatesFilter<"NewsEdit"> | string
    newContent?: StringWithAggregatesFilter<"NewsEdit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsEdit"> | Date | string
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: StringFilter<"Issue"> | string
    newsId?: StringFilter<"Issue"> | string
    type?: EnumIssueTypeFilter<"Issue"> | $Enums.IssueType
    description?: StringFilter<"Issue"> | string
    positionStart?: IntNullableFilter<"Issue"> | number | null
    positionEnd?: IntNullableFilter<"Issue"> | number | null
    sentiment?: EnumSentimentNullableFilter<"Issue"> | $Enums.Sentiment | null
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    newsId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    positionStart?: SortOrderInput | SortOrder
    positionEnd?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    news?: NewsOrderByWithRelationInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    newsId?: StringFilter<"Issue"> | string
    type?: EnumIssueTypeFilter<"Issue"> | $Enums.IssueType
    description?: StringFilter<"Issue"> | string
    positionStart?: IntNullableFilter<"Issue"> | number | null
    positionEnd?: IntNullableFilter<"Issue"> | number | null
    sentiment?: EnumSentimentNullableFilter<"Issue"> | $Enums.Sentiment | null
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    newsId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    positionStart?: SortOrderInput | SortOrder
    positionEnd?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _avg?: IssueAvgOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
    _sum?: IssueSumOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Issue"> | string
    newsId?: StringWithAggregatesFilter<"Issue"> | string
    type?: EnumIssueTypeWithAggregatesFilter<"Issue"> | $Enums.IssueType
    description?: StringWithAggregatesFilter<"Issue"> | string
    positionStart?: IntNullableWithAggregatesFilter<"Issue"> | number | null
    positionEnd?: IntNullableWithAggregatesFilter<"Issue"> | number | null
    sentiment?: EnumSentimentNullableWithAggregatesFilter<"Issue"> | $Enums.Sentiment | null
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
  }

  export type ValidationWhereInput = {
    AND?: ValidationWhereInput | ValidationWhereInput[]
    OR?: ValidationWhereInput[]
    NOT?: ValidationWhereInput | ValidationWhereInput[]
    id?: StringFilter<"Validation"> | string
    newsId?: StringFilter<"Validation"> | string
    validatedByUserId?: StringFilter<"Validation"> | string
    info?: StringNullableFilter<"Validation"> | string | null
    isCorrectionSuggestion?: BoolFilter<"Validation"> | boolean
    status?: EnumValidationStatusFilter<"Validation"> | $Enums.ValidationStatus
    createdAt?: DateTimeFilter<"Validation"> | Date | string
    updatedAt?: DateTimeFilter<"Validation"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    validatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ValidationOrderByWithRelationInput = {
    id?: SortOrder
    newsId?: SortOrder
    validatedByUserId?: SortOrder
    info?: SortOrderInput | SortOrder
    isCorrectionSuggestion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news?: NewsOrderByWithRelationInput
    validatedBy?: UserOrderByWithRelationInput
  }

  export type ValidationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ValidationWhereInput | ValidationWhereInput[]
    OR?: ValidationWhereInput[]
    NOT?: ValidationWhereInput | ValidationWhereInput[]
    newsId?: StringFilter<"Validation"> | string
    validatedByUserId?: StringFilter<"Validation"> | string
    info?: StringNullableFilter<"Validation"> | string | null
    isCorrectionSuggestion?: BoolFilter<"Validation"> | boolean
    status?: EnumValidationStatusFilter<"Validation"> | $Enums.ValidationStatus
    createdAt?: DateTimeFilter<"Validation"> | Date | string
    updatedAt?: DateTimeFilter<"Validation"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    validatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ValidationOrderByWithAggregationInput = {
    id?: SortOrder
    newsId?: SortOrder
    validatedByUserId?: SortOrder
    info?: SortOrderInput | SortOrder
    isCorrectionSuggestion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ValidationCountOrderByAggregateInput
    _max?: ValidationMaxOrderByAggregateInput
    _min?: ValidationMinOrderByAggregateInput
  }

  export type ValidationScalarWhereWithAggregatesInput = {
    AND?: ValidationScalarWhereWithAggregatesInput | ValidationScalarWhereWithAggregatesInput[]
    OR?: ValidationScalarWhereWithAggregatesInput[]
    NOT?: ValidationScalarWhereWithAggregatesInput | ValidationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Validation"> | string
    newsId?: StringWithAggregatesFilter<"Validation"> | string
    validatedByUserId?: StringWithAggregatesFilter<"Validation"> | string
    info?: StringNullableWithAggregatesFilter<"Validation"> | string | null
    isCorrectionSuggestion?: BoolWithAggregatesFilter<"Validation"> | boolean
    status?: EnumValidationStatusWithAggregatesFilter<"Validation"> | $Enums.ValidationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Validation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Validation"> | Date | string
  }

  export type ScoreHistoryWhereInput = {
    AND?: ScoreHistoryWhereInput | ScoreHistoryWhereInput[]
    OR?: ScoreHistoryWhereInput[]
    NOT?: ScoreHistoryWhereInput | ScoreHistoryWhereInput[]
    id?: StringFilter<"ScoreHistory"> | string
    userId?: StringFilter<"ScoreHistory"> | string
    newsId?: StringFilter<"ScoreHistory"> | string
    validationScore?: IntFilter<"ScoreHistory"> | number
    scoreIncrement?: IntFilter<"ScoreHistory"> | number
    updatedAt?: DateTimeFilter<"ScoreHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }

  export type ScoreHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    news?: NewsOrderByWithRelationInput
  }

  export type ScoreHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    newsId?: string
    AND?: ScoreHistoryWhereInput | ScoreHistoryWhereInput[]
    OR?: ScoreHistoryWhereInput[]
    NOT?: ScoreHistoryWhereInput | ScoreHistoryWhereInput[]
    userId?: StringFilter<"ScoreHistory"> | string
    validationScore?: IntFilter<"ScoreHistory"> | number
    scoreIncrement?: IntFilter<"ScoreHistory"> | number
    updatedAt?: DateTimeFilter<"ScoreHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }, "id" | "newsId">

  export type ScoreHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoreHistoryCountOrderByAggregateInput
    _avg?: ScoreHistoryAvgOrderByAggregateInput
    _max?: ScoreHistoryMaxOrderByAggregateInput
    _min?: ScoreHistoryMinOrderByAggregateInput
    _sum?: ScoreHistorySumOrderByAggregateInput
  }

  export type ScoreHistoryScalarWhereWithAggregatesInput = {
    AND?: ScoreHistoryScalarWhereWithAggregatesInput | ScoreHistoryScalarWhereWithAggregatesInput[]
    OR?: ScoreHistoryScalarWhereWithAggregatesInput[]
    NOT?: ScoreHistoryScalarWhereWithAggregatesInput | ScoreHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoreHistory"> | string
    userId?: StringWithAggregatesFilter<"ScoreHistory"> | string
    newsId?: StringWithAggregatesFilter<"ScoreHistory"> | string
    validationScore?: IntWithAggregatesFilter<"ScoreHistory"> | number
    scoreIncrement?: IntWithAggregatesFilter<"ScoreHistory"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ScoreHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionCreateInput = {
    id?: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserQuestionsInput
    topic: TopicCreateNestedOneWithoutUserQuestionsInput
  }

  export type UserQuestionUncheckedCreateInput = {
    id?: string
    userId: string
    topicId: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
  }

  export type UserQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserQuestionsNestedInput
    topic?: TopicUpdateOneRequiredWithoutUserQuestionsNestedInput
  }

  export type UserQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionCreateManyInput = {
    id?: string
    userId: string
    topicId: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
  }

  export type UserQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadsInput
    topics?: TopicCreateNestedManyWithoutThreadInput
    news?: NewsCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateInput = {
    id?: string
    title: string
    descriptionPrompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutThreadInput
    news?: NewsUncheckedCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadsNestedInput
    topics?: TopicUpdateManyWithoutThreadNestedInput
    news?: NewsUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutThreadNestedInput
    news?: NewsUncheckedUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadCreateManyInput = {
    id?: string
    title: string
    descriptionPrompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    thread: ThreadCreateNestedOneWithoutThreadSubscriptionsInput
    user: UserCreateNestedOneWithoutThreadSubscriptionsInput
  }

  export type ThreadSubscriptionUncheckedCreateInput = {
    id?: string
    threadId: string
    userId: string
    createdAt?: Date | string
  }

  export type ThreadSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutThreadSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutThreadSubscriptionsNestedInput
  }

  export type ThreadSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionCreateManyInput = {
    id?: string
    threadId: string
    userId: string
    createdAt?: Date | string
  }

  export type ThreadSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    title: string
    trendingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutTopicsInput
    news?: NewsCreateNestedManyWithoutTopicInput
    userQuestions?: UserQuestionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    title: string
    trendingScore?: number
    threadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutTopicInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutTopicsNestedInput
    news?: NewsUpdateManyWithoutTopicNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutTopicNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    title: string
    trendingScore?: number
    threadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    topic: TopicCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditCreateInput = {
    id?: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
    news: NewsCreateNestedOneWithoutNewsEditInput
    editedBy: UserCreateNestedOneWithoutNewsEditInput
  }

  export type NewsEditUncheckedCreateInput = {
    id?: string
    newsId: string
    editedById: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
  }

  export type NewsEditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutNewsEditNestedInput
    editedBy?: UserUpdateOneRequiredWithoutNewsEditNestedInput
  }

  export type NewsEditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    editedById?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditCreateManyInput = {
    id?: string
    newsId: string
    editedById: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
  }

  export type NewsEditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    editedById?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateInput = {
    id?: string
    type: $Enums.IssueType
    description: string
    positionStart?: number | null
    positionEnd?: number | null
    sentiment?: $Enums.Sentiment | null
    createdAt?: Date | string
    news: NewsCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateInput = {
    id?: string
    newsId: string
    type: $Enums.IssueType
    description: string
    positionStart?: number | null
    positionEnd?: number | null
    sentiment?: $Enums.Sentiment | null
    createdAt?: Date | string
  }

  export type IssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyInput = {
    id?: string
    newsId: string
    type: $Enums.IssueType
    description: string
    positionStart?: number | null
    positionEnd?: number | null
    sentiment?: $Enums.Sentiment | null
    createdAt?: Date | string
  }

  export type IssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationCreateInput = {
    id?: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    news: NewsCreateNestedOneWithoutValidationsInput
    validatedBy: UserCreateNestedOneWithoutValidationsInput
  }

  export type ValidationUncheckedCreateInput = {
    id?: string
    newsId: string
    validatedByUserId: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutValidationsNestedInput
    validatedBy?: UserUpdateOneRequiredWithoutValidationsNestedInput
  }

  export type ValidationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    validatedByUserId?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationCreateManyInput = {
    id?: string
    newsId: string
    validatedByUserId: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    validatedByUserId?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryCreateInput = {
    id?: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScoreHistoryInput
    news: NewsCreateNestedOneWithoutScoreHistoryInput
  }

  export type ScoreHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    newsId: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
  }

  export type ScoreHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScoreHistoryNestedInput
    news?: NewsUpdateOneRequiredWithoutScoreHistoryNestedInput
  }

  export type ScoreHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryCreateManyInput = {
    id?: string
    userId: string
    newsId: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
  }

  export type ScoreHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type ValidationListRelationFilter = {
    every?: ValidationWhereInput
    some?: ValidationWhereInput
    none?: ValidationWhereInput
  }

  export type ScoreHistoryListRelationFilter = {
    every?: ScoreHistoryWhereInput
    some?: ScoreHistoryWhereInput
    none?: ScoreHistoryWhereInput
  }

  export type ThreadSubscriptionListRelationFilter = {
    every?: ThreadSubscriptionWhereInput
    some?: ThreadSubscriptionWhereInput
    none?: ThreadSubscriptionWhereInput
  }

  export type NewsEditListRelationFilter = {
    every?: NewsEditWhereInput
    some?: NewsEditWhereInput
    none?: NewsEditWhereInput
  }

  export type UserQuestionListRelationFilter = {
    every?: UserQuestionWhereInput
    some?: UserQuestionWhereInput
    none?: UserQuestionWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValidationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsEditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionPrompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionPrompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptionPrompt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadScalarRelationFilter = {
    is?: ThreadWhereInput
    isNot?: ThreadWhereInput
  }

  export type ThreadSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ThreadSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ThreadSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    trendingScore?: SortOrder
    threadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    trendingScore?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    trendingScore?: SortOrder
    threadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    trendingScore?: SortOrder
    threadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    trendingScore?: SortOrder
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    validationScore?: SortOrder
    threadId?: SortOrder
    topicId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    validationScore?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    validationScore?: SortOrder
    threadId?: SortOrder
    topicId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    validationScore?: SortOrder
    threadId?: SortOrder
    topicId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    validationScore?: SortOrder
  }

  export type NewsScalarRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type NewsEditCountOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    editedById?: SortOrder
    oldContent?: SortOrder
    newContent?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsEditMaxOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    editedById?: SortOrder
    oldContent?: SortOrder
    newContent?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsEditMinOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    editedById?: SortOrder
    oldContent?: SortOrder
    newContent?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumIssueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeFilter<$PrismaModel> | $Enums.IssueType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSentimentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentNullableFilter<$PrismaModel> | $Enums.Sentiment | null
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    positionStart?: SortOrder
    positionEnd?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueAvgOrderByAggregateInput = {
    positionStart?: SortOrder
    positionEnd?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    positionStart?: SortOrder
    positionEnd?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    positionStart?: SortOrder
    positionEnd?: SortOrder
    sentiment?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueSumOrderByAggregateInput = {
    positionStart?: SortOrder
    positionEnd?: SortOrder
  }

  export type EnumIssueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeWithAggregatesFilter<$PrismaModel> | $Enums.IssueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueTypeFilter<$PrismaModel>
    _max?: NestedEnumIssueTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSentimentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sentiment | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSentimentNullableFilter<$PrismaModel>
    _max?: NestedEnumSentimentNullableFilter<$PrismaModel>
  }

  export type EnumValidationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusFilter<$PrismaModel> | $Enums.ValidationStatus
  }

  export type ValidationCountOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    validatedByUserId?: SortOrder
    info?: SortOrder
    isCorrectionSuggestion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ValidationMaxOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    validatedByUserId?: SortOrder
    info?: SortOrder
    isCorrectionSuggestion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ValidationMinOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    validatedByUserId?: SortOrder
    info?: SortOrder
    isCorrectionSuggestion?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumValidationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ValidationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumValidationStatusFilter<$PrismaModel>
    _max?: NestedEnumValidationStatusFilter<$PrismaModel>
  }

  export type ScoreHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreHistoryAvgOrderByAggregateInput = {
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
  }

  export type ScoreHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreHistorySumOrderByAggregateInput = {
    validationScore?: SortOrder
    scoreIncrement?: SortOrder
  }

  export type ThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ValidationCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<ValidationCreateWithoutValidatedByInput, ValidationUncheckedCreateWithoutValidatedByInput> | ValidationCreateWithoutValidatedByInput[] | ValidationUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutValidatedByInput | ValidationCreateOrConnectWithoutValidatedByInput[]
    createMany?: ValidationCreateManyValidatedByInputEnvelope
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
  }

  export type ScoreHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreHistoryCreateWithoutUserInput, ScoreHistoryUncheckedCreateWithoutUserInput> | ScoreHistoryCreateWithoutUserInput[] | ScoreHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutUserInput | ScoreHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ScoreHistoryCreateManyUserInputEnvelope
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
  }

  export type ThreadSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutUserInput, ThreadSubscriptionUncheckedCreateWithoutUserInput> | ThreadSubscriptionCreateWithoutUserInput[] | ThreadSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutUserInput | ThreadSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: ThreadSubscriptionCreateManyUserInputEnvelope
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
  }

  export type NewsEditCreateNestedManyWithoutEditedByInput = {
    create?: XOR<NewsEditCreateWithoutEditedByInput, NewsEditUncheckedCreateWithoutEditedByInput> | NewsEditCreateWithoutEditedByInput[] | NewsEditUncheckedCreateWithoutEditedByInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutEditedByInput | NewsEditCreateOrConnectWithoutEditedByInput[]
    createMany?: NewsEditCreateManyEditedByInputEnvelope
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
  }

  export type UserQuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ValidationUncheckedCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<ValidationCreateWithoutValidatedByInput, ValidationUncheckedCreateWithoutValidatedByInput> | ValidationCreateWithoutValidatedByInput[] | ValidationUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutValidatedByInput | ValidationCreateOrConnectWithoutValidatedByInput[]
    createMany?: ValidationCreateManyValidatedByInputEnvelope
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
  }

  export type ScoreHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreHistoryCreateWithoutUserInput, ScoreHistoryUncheckedCreateWithoutUserInput> | ScoreHistoryCreateWithoutUserInput[] | ScoreHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutUserInput | ScoreHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ScoreHistoryCreateManyUserInputEnvelope
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
  }

  export type ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutUserInput, ThreadSubscriptionUncheckedCreateWithoutUserInput> | ThreadSubscriptionCreateWithoutUserInput[] | ThreadSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutUserInput | ThreadSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: ThreadSubscriptionCreateManyUserInputEnvelope
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
  }

  export type NewsEditUncheckedCreateNestedManyWithoutEditedByInput = {
    create?: XOR<NewsEditCreateWithoutEditedByInput, NewsEditUncheckedCreateWithoutEditedByInput> | NewsEditCreateWithoutEditedByInput[] | NewsEditUncheckedCreateWithoutEditedByInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutEditedByInput | NewsEditCreateOrConnectWithoutEditedByInput[]
    createMany?: NewsEditCreateManyEditedByInputEnvelope
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
  }

  export type UserQuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput | ThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput | ThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput | ThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ValidationUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<ValidationCreateWithoutValidatedByInput, ValidationUncheckedCreateWithoutValidatedByInput> | ValidationCreateWithoutValidatedByInput[] | ValidationUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutValidatedByInput | ValidationCreateOrConnectWithoutValidatedByInput[]
    upsert?: ValidationUpsertWithWhereUniqueWithoutValidatedByInput | ValidationUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: ValidationCreateManyValidatedByInputEnvelope
    set?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    disconnect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    delete?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    update?: ValidationUpdateWithWhereUniqueWithoutValidatedByInput | ValidationUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: ValidationUpdateManyWithWhereWithoutValidatedByInput | ValidationUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: ValidationScalarWhereInput | ValidationScalarWhereInput[]
  }

  export type ScoreHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreHistoryCreateWithoutUserInput, ScoreHistoryUncheckedCreateWithoutUserInput> | ScoreHistoryCreateWithoutUserInput[] | ScoreHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutUserInput | ScoreHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ScoreHistoryUpsertWithWhereUniqueWithoutUserInput | ScoreHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreHistoryCreateManyUserInputEnvelope
    set?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    disconnect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    delete?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    update?: ScoreHistoryUpdateWithWhereUniqueWithoutUserInput | ScoreHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreHistoryUpdateManyWithWhereWithoutUserInput | ScoreHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreHistoryScalarWhereInput | ScoreHistoryScalarWhereInput[]
  }

  export type ThreadSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutUserInput, ThreadSubscriptionUncheckedCreateWithoutUserInput> | ThreadSubscriptionCreateWithoutUserInput[] | ThreadSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutUserInput | ThreadSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: ThreadSubscriptionUpsertWithWhereUniqueWithoutUserInput | ThreadSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadSubscriptionCreateManyUserInputEnvelope
    set?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    disconnect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    delete?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    update?: ThreadSubscriptionUpdateWithWhereUniqueWithoutUserInput | ThreadSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadSubscriptionUpdateManyWithWhereWithoutUserInput | ThreadSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadSubscriptionScalarWhereInput | ThreadSubscriptionScalarWhereInput[]
  }

  export type NewsEditUpdateManyWithoutEditedByNestedInput = {
    create?: XOR<NewsEditCreateWithoutEditedByInput, NewsEditUncheckedCreateWithoutEditedByInput> | NewsEditCreateWithoutEditedByInput[] | NewsEditUncheckedCreateWithoutEditedByInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutEditedByInput | NewsEditCreateOrConnectWithoutEditedByInput[]
    upsert?: NewsEditUpsertWithWhereUniqueWithoutEditedByInput | NewsEditUpsertWithWhereUniqueWithoutEditedByInput[]
    createMany?: NewsEditCreateManyEditedByInputEnvelope
    set?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    disconnect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    delete?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    update?: NewsEditUpdateWithWhereUniqueWithoutEditedByInput | NewsEditUpdateWithWhereUniqueWithoutEditedByInput[]
    updateMany?: NewsEditUpdateManyWithWhereWithoutEditedByInput | NewsEditUpdateManyWithWhereWithoutEditedByInput[]
    deleteMany?: NewsEditScalarWhereInput | NewsEditScalarWhereInput[]
  }

  export type UserQuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutUserInput | UserQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutUserInput | UserQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutUserInput | UserQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput | ThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput | ThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput | ThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ValidationUncheckedUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<ValidationCreateWithoutValidatedByInput, ValidationUncheckedCreateWithoutValidatedByInput> | ValidationCreateWithoutValidatedByInput[] | ValidationUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutValidatedByInput | ValidationCreateOrConnectWithoutValidatedByInput[]
    upsert?: ValidationUpsertWithWhereUniqueWithoutValidatedByInput | ValidationUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: ValidationCreateManyValidatedByInputEnvelope
    set?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    disconnect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    delete?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    update?: ValidationUpdateWithWhereUniqueWithoutValidatedByInput | ValidationUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: ValidationUpdateManyWithWhereWithoutValidatedByInput | ValidationUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: ValidationScalarWhereInput | ValidationScalarWhereInput[]
  }

  export type ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreHistoryCreateWithoutUserInput, ScoreHistoryUncheckedCreateWithoutUserInput> | ScoreHistoryCreateWithoutUserInput[] | ScoreHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutUserInput | ScoreHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ScoreHistoryUpsertWithWhereUniqueWithoutUserInput | ScoreHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreHistoryCreateManyUserInputEnvelope
    set?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    disconnect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    delete?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    update?: ScoreHistoryUpdateWithWhereUniqueWithoutUserInput | ScoreHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreHistoryUpdateManyWithWhereWithoutUserInput | ScoreHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreHistoryScalarWhereInput | ScoreHistoryScalarWhereInput[]
  }

  export type ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutUserInput, ThreadSubscriptionUncheckedCreateWithoutUserInput> | ThreadSubscriptionCreateWithoutUserInput[] | ThreadSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutUserInput | ThreadSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: ThreadSubscriptionUpsertWithWhereUniqueWithoutUserInput | ThreadSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadSubscriptionCreateManyUserInputEnvelope
    set?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    disconnect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    delete?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    update?: ThreadSubscriptionUpdateWithWhereUniqueWithoutUserInput | ThreadSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadSubscriptionUpdateManyWithWhereWithoutUserInput | ThreadSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadSubscriptionScalarWhereInput | ThreadSubscriptionScalarWhereInput[]
  }

  export type NewsEditUncheckedUpdateManyWithoutEditedByNestedInput = {
    create?: XOR<NewsEditCreateWithoutEditedByInput, NewsEditUncheckedCreateWithoutEditedByInput> | NewsEditCreateWithoutEditedByInput[] | NewsEditUncheckedCreateWithoutEditedByInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutEditedByInput | NewsEditCreateOrConnectWithoutEditedByInput[]
    upsert?: NewsEditUpsertWithWhereUniqueWithoutEditedByInput | NewsEditUpsertWithWhereUniqueWithoutEditedByInput[]
    createMany?: NewsEditCreateManyEditedByInputEnvelope
    set?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    disconnect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    delete?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    update?: NewsEditUpdateWithWhereUniqueWithoutEditedByInput | NewsEditUpdateWithWhereUniqueWithoutEditedByInput[]
    updateMany?: NewsEditUpdateManyWithWhereWithoutEditedByInput | NewsEditUpdateManyWithWhereWithoutEditedByInput[]
    deleteMany?: NewsEditScalarWhereInput | NewsEditScalarWhereInput[]
  }

  export type UserQuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutUserInput | UserQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutUserInput | UserQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutUserInput | UserQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserQuestionsInput = {
    create?: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutUserQuestionsInput = {
    create?: XOR<TopicCreateWithoutUserQuestionsInput, TopicUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutUserQuestionsInput
    connect?: TopicWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutUserQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestionsInput
    upsert?: UserUpsertWithoutUserQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserQuestionsInput, UserUpdateWithoutUserQuestionsInput>, UserUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type TopicUpdateOneRequiredWithoutUserQuestionsNestedInput = {
    create?: XOR<TopicCreateWithoutUserQuestionsInput, TopicUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutUserQuestionsInput
    upsert?: TopicUpsertWithoutUserQuestionsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutUserQuestionsInput, TopicUpdateWithoutUserQuestionsInput>, TopicUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type UserCreateNestedOneWithoutThreadsInput = {
    create?: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput
    connect?: UserWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutThreadInput = {
    create?: XOR<TopicCreateWithoutThreadInput, TopicUncheckedCreateWithoutThreadInput> | TopicCreateWithoutThreadInput[] | TopicUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutThreadInput | TopicCreateOrConnectWithoutThreadInput[]
    createMany?: TopicCreateManyThreadInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type NewsCreateNestedManyWithoutThreadInput = {
    create?: XOR<NewsCreateWithoutThreadInput, NewsUncheckedCreateWithoutThreadInput> | NewsCreateWithoutThreadInput[] | NewsUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutThreadInput | NewsCreateOrConnectWithoutThreadInput[]
    createMany?: NewsCreateManyThreadInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ThreadSubscriptionCreateNestedManyWithoutThreadInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutThreadInput, ThreadSubscriptionUncheckedCreateWithoutThreadInput> | ThreadSubscriptionCreateWithoutThreadInput[] | ThreadSubscriptionUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutThreadInput | ThreadSubscriptionCreateOrConnectWithoutThreadInput[]
    createMany?: ThreadSubscriptionCreateManyThreadInputEnvelope
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<TopicCreateWithoutThreadInput, TopicUncheckedCreateWithoutThreadInput> | TopicCreateWithoutThreadInput[] | TopicUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutThreadInput | TopicCreateOrConnectWithoutThreadInput[]
    createMany?: TopicCreateManyThreadInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<NewsCreateWithoutThreadInput, NewsUncheckedCreateWithoutThreadInput> | NewsCreateWithoutThreadInput[] | NewsUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutThreadInput | NewsCreateOrConnectWithoutThreadInput[]
    createMany?: NewsCreateManyThreadInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ThreadSubscriptionUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutThreadInput, ThreadSubscriptionUncheckedCreateWithoutThreadInput> | ThreadSubscriptionCreateWithoutThreadInput[] | ThreadSubscriptionUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutThreadInput | ThreadSubscriptionCreateOrConnectWithoutThreadInput[]
    createMany?: ThreadSubscriptionCreateManyThreadInputEnvelope
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutThreadsNestedInput = {
    create?: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput
    upsert?: UserUpsertWithoutThreadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadsInput, UserUpdateWithoutThreadsInput>, UserUncheckedUpdateWithoutThreadsInput>
  }

  export type TopicUpdateManyWithoutThreadNestedInput = {
    create?: XOR<TopicCreateWithoutThreadInput, TopicUncheckedCreateWithoutThreadInput> | TopicCreateWithoutThreadInput[] | TopicUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutThreadInput | TopicCreateOrConnectWithoutThreadInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutThreadInput | TopicUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: TopicCreateManyThreadInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutThreadInput | TopicUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutThreadInput | TopicUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type NewsUpdateManyWithoutThreadNestedInput = {
    create?: XOR<NewsCreateWithoutThreadInput, NewsUncheckedCreateWithoutThreadInput> | NewsCreateWithoutThreadInput[] | NewsUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutThreadInput | NewsCreateOrConnectWithoutThreadInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutThreadInput | NewsUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: NewsCreateManyThreadInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutThreadInput | NewsUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutThreadInput | NewsUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ThreadSubscriptionUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutThreadInput, ThreadSubscriptionUncheckedCreateWithoutThreadInput> | ThreadSubscriptionCreateWithoutThreadInput[] | ThreadSubscriptionUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutThreadInput | ThreadSubscriptionCreateOrConnectWithoutThreadInput[]
    upsert?: ThreadSubscriptionUpsertWithWhereUniqueWithoutThreadInput | ThreadSubscriptionUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ThreadSubscriptionCreateManyThreadInputEnvelope
    set?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    disconnect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    delete?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    update?: ThreadSubscriptionUpdateWithWhereUniqueWithoutThreadInput | ThreadSubscriptionUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ThreadSubscriptionUpdateManyWithWhereWithoutThreadInput | ThreadSubscriptionUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ThreadSubscriptionScalarWhereInput | ThreadSubscriptionScalarWhereInput[]
  }

  export type TopicUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<TopicCreateWithoutThreadInput, TopicUncheckedCreateWithoutThreadInput> | TopicCreateWithoutThreadInput[] | TopicUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutThreadInput | TopicCreateOrConnectWithoutThreadInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutThreadInput | TopicUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: TopicCreateManyThreadInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutThreadInput | TopicUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutThreadInput | TopicUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<NewsCreateWithoutThreadInput, NewsUncheckedCreateWithoutThreadInput> | NewsCreateWithoutThreadInput[] | NewsUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutThreadInput | NewsCreateOrConnectWithoutThreadInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutThreadInput | NewsUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: NewsCreateManyThreadInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutThreadInput | NewsUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutThreadInput | NewsUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ThreadSubscriptionUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ThreadSubscriptionCreateWithoutThreadInput, ThreadSubscriptionUncheckedCreateWithoutThreadInput> | ThreadSubscriptionCreateWithoutThreadInput[] | ThreadSubscriptionUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ThreadSubscriptionCreateOrConnectWithoutThreadInput | ThreadSubscriptionCreateOrConnectWithoutThreadInput[]
    upsert?: ThreadSubscriptionUpsertWithWhereUniqueWithoutThreadInput | ThreadSubscriptionUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ThreadSubscriptionCreateManyThreadInputEnvelope
    set?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    disconnect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    delete?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    connect?: ThreadSubscriptionWhereUniqueInput | ThreadSubscriptionWhereUniqueInput[]
    update?: ThreadSubscriptionUpdateWithWhereUniqueWithoutThreadInput | ThreadSubscriptionUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ThreadSubscriptionUpdateManyWithWhereWithoutThreadInput | ThreadSubscriptionUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ThreadSubscriptionScalarWhereInput | ThreadSubscriptionScalarWhereInput[]
  }

  export type ThreadCreateNestedOneWithoutThreadSubscriptionsInput = {
    create?: XOR<ThreadCreateWithoutThreadSubscriptionsInput, ThreadUncheckedCreateWithoutThreadSubscriptionsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadSubscriptionsInput
    connect?: ThreadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThreadSubscriptionsInput = {
    create?: XOR<UserCreateWithoutThreadSubscriptionsInput, UserUncheckedCreateWithoutThreadSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadUpdateOneRequiredWithoutThreadSubscriptionsNestedInput = {
    create?: XOR<ThreadCreateWithoutThreadSubscriptionsInput, ThreadUncheckedCreateWithoutThreadSubscriptionsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadSubscriptionsInput
    upsert?: ThreadUpsertWithoutThreadSubscriptionsInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutThreadSubscriptionsInput, ThreadUpdateWithoutThreadSubscriptionsInput>, ThreadUncheckedUpdateWithoutThreadSubscriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutThreadSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutThreadSubscriptionsInput, UserUncheckedCreateWithoutThreadSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadSubscriptionsInput
    upsert?: UserUpsertWithoutThreadSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadSubscriptionsInput, UserUpdateWithoutThreadSubscriptionsInput>, UserUncheckedUpdateWithoutThreadSubscriptionsInput>
  }

  export type ThreadCreateNestedOneWithoutTopicsInput = {
    create?: XOR<ThreadCreateWithoutTopicsInput, ThreadUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutTopicsInput
    connect?: ThreadWhereUniqueInput
  }

  export type NewsCreateNestedManyWithoutTopicInput = {
    create?: XOR<NewsCreateWithoutTopicInput, NewsUncheckedCreateWithoutTopicInput> | NewsCreateWithoutTopicInput[] | NewsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTopicInput | NewsCreateOrConnectWithoutTopicInput[]
    createMany?: NewsCreateManyTopicInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type UserQuestionCreateNestedManyWithoutTopicInput = {
    create?: XOR<UserQuestionCreateWithoutTopicInput, UserQuestionUncheckedCreateWithoutTopicInput> | UserQuestionCreateWithoutTopicInput[] | UserQuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutTopicInput | UserQuestionCreateOrConnectWithoutTopicInput[]
    createMany?: UserQuestionCreateManyTopicInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<NewsCreateWithoutTopicInput, NewsUncheckedCreateWithoutTopicInput> | NewsCreateWithoutTopicInput[] | NewsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTopicInput | NewsCreateOrConnectWithoutTopicInput[]
    createMany?: NewsCreateManyTopicInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type UserQuestionUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<UserQuestionCreateWithoutTopicInput, UserQuestionUncheckedCreateWithoutTopicInput> | UserQuestionCreateWithoutTopicInput[] | UserQuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutTopicInput | UserQuestionCreateOrConnectWithoutTopicInput[]
    createMany?: UserQuestionCreateManyTopicInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type ThreadUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<ThreadCreateWithoutTopicsInput, ThreadUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutTopicsInput
    upsert?: ThreadUpsertWithoutTopicsInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutTopicsInput, ThreadUpdateWithoutTopicsInput>, ThreadUncheckedUpdateWithoutTopicsInput>
  }

  export type NewsUpdateManyWithoutTopicNestedInput = {
    create?: XOR<NewsCreateWithoutTopicInput, NewsUncheckedCreateWithoutTopicInput> | NewsCreateWithoutTopicInput[] | NewsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTopicInput | NewsCreateOrConnectWithoutTopicInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTopicInput | NewsUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: NewsCreateManyTopicInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTopicInput | NewsUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTopicInput | NewsUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type UserQuestionUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UserQuestionCreateWithoutTopicInput, UserQuestionUncheckedCreateWithoutTopicInput> | UserQuestionCreateWithoutTopicInput[] | UserQuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutTopicInput | UserQuestionCreateOrConnectWithoutTopicInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutTopicInput | UserQuestionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UserQuestionCreateManyTopicInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutTopicInput | UserQuestionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutTopicInput | UserQuestionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<NewsCreateWithoutTopicInput, NewsUncheckedCreateWithoutTopicInput> | NewsCreateWithoutTopicInput[] | NewsUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTopicInput | NewsCreateOrConnectWithoutTopicInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTopicInput | NewsUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: NewsCreateManyTopicInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTopicInput | NewsUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTopicInput | NewsUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type UserQuestionUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UserQuestionCreateWithoutTopicInput, UserQuestionUncheckedCreateWithoutTopicInput> | UserQuestionCreateWithoutTopicInput[] | UserQuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutTopicInput | UserQuestionCreateOrConnectWithoutTopicInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutTopicInput | UserQuestionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UserQuestionCreateManyTopicInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutTopicInput | UserQuestionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutTopicInput | UserQuestionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type ThreadCreateNestedOneWithoutNewsInput = {
    create?: XOR<ThreadCreateWithoutNewsInput, ThreadUncheckedCreateWithoutNewsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutNewsInput
    connect?: ThreadWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutNewsInput = {
    create?: XOR<TopicCreateWithoutNewsInput, TopicUncheckedCreateWithoutNewsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutNewsInput
    connect?: TopicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutNewsInput = {
    create?: XOR<IssueCreateWithoutNewsInput, IssueUncheckedCreateWithoutNewsInput> | IssueCreateWithoutNewsInput[] | IssueUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutNewsInput | IssueCreateOrConnectWithoutNewsInput[]
    createMany?: IssueCreateManyNewsInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type ValidationCreateNestedManyWithoutNewsInput = {
    create?: XOR<ValidationCreateWithoutNewsInput, ValidationUncheckedCreateWithoutNewsInput> | ValidationCreateWithoutNewsInput[] | ValidationUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutNewsInput | ValidationCreateOrConnectWithoutNewsInput[]
    createMany?: ValidationCreateManyNewsInputEnvelope
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
  }

  export type ScoreHistoryCreateNestedManyWithoutNewsInput = {
    create?: XOR<ScoreHistoryCreateWithoutNewsInput, ScoreHistoryUncheckedCreateWithoutNewsInput> | ScoreHistoryCreateWithoutNewsInput[] | ScoreHistoryUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutNewsInput | ScoreHistoryCreateOrConnectWithoutNewsInput[]
    createMany?: ScoreHistoryCreateManyNewsInputEnvelope
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
  }

  export type NewsEditCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsEditCreateWithoutNewsInput, NewsEditUncheckedCreateWithoutNewsInput> | NewsEditCreateWithoutNewsInput[] | NewsEditUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutNewsInput | NewsEditCreateOrConnectWithoutNewsInput[]
    createMany?: NewsEditCreateManyNewsInputEnvelope
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<IssueCreateWithoutNewsInput, IssueUncheckedCreateWithoutNewsInput> | IssueCreateWithoutNewsInput[] | IssueUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutNewsInput | IssueCreateOrConnectWithoutNewsInput[]
    createMany?: IssueCreateManyNewsInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type ValidationUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<ValidationCreateWithoutNewsInput, ValidationUncheckedCreateWithoutNewsInput> | ValidationCreateWithoutNewsInput[] | ValidationUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutNewsInput | ValidationCreateOrConnectWithoutNewsInput[]
    createMany?: ValidationCreateManyNewsInputEnvelope
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
  }

  export type ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<ScoreHistoryCreateWithoutNewsInput, ScoreHistoryUncheckedCreateWithoutNewsInput> | ScoreHistoryCreateWithoutNewsInput[] | ScoreHistoryUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutNewsInput | ScoreHistoryCreateOrConnectWithoutNewsInput[]
    createMany?: ScoreHistoryCreateManyNewsInputEnvelope
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
  }

  export type NewsEditUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsEditCreateWithoutNewsInput, NewsEditUncheckedCreateWithoutNewsInput> | NewsEditCreateWithoutNewsInput[] | NewsEditUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutNewsInput | NewsEditCreateOrConnectWithoutNewsInput[]
    createMany?: NewsEditCreateManyNewsInputEnvelope
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
  }

  export type ThreadUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<ThreadCreateWithoutNewsInput, ThreadUncheckedCreateWithoutNewsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutNewsInput
    upsert?: ThreadUpsertWithoutNewsInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutNewsInput, ThreadUpdateWithoutNewsInput>, ThreadUncheckedUpdateWithoutNewsInput>
  }

  export type TopicUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<TopicCreateWithoutNewsInput, TopicUncheckedCreateWithoutNewsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutNewsInput
    upsert?: TopicUpsertWithoutNewsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutNewsInput, TopicUpdateWithoutNewsInput>, TopicUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type IssueUpdateManyWithoutNewsNestedInput = {
    create?: XOR<IssueCreateWithoutNewsInput, IssueUncheckedCreateWithoutNewsInput> | IssueCreateWithoutNewsInput[] | IssueUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutNewsInput | IssueCreateOrConnectWithoutNewsInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutNewsInput | IssueUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: IssueCreateManyNewsInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutNewsInput | IssueUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutNewsInput | IssueUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type ValidationUpdateManyWithoutNewsNestedInput = {
    create?: XOR<ValidationCreateWithoutNewsInput, ValidationUncheckedCreateWithoutNewsInput> | ValidationCreateWithoutNewsInput[] | ValidationUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutNewsInput | ValidationCreateOrConnectWithoutNewsInput[]
    upsert?: ValidationUpsertWithWhereUniqueWithoutNewsInput | ValidationUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: ValidationCreateManyNewsInputEnvelope
    set?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    disconnect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    delete?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    update?: ValidationUpdateWithWhereUniqueWithoutNewsInput | ValidationUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: ValidationUpdateManyWithWhereWithoutNewsInput | ValidationUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: ValidationScalarWhereInput | ValidationScalarWhereInput[]
  }

  export type ScoreHistoryUpdateManyWithoutNewsNestedInput = {
    create?: XOR<ScoreHistoryCreateWithoutNewsInput, ScoreHistoryUncheckedCreateWithoutNewsInput> | ScoreHistoryCreateWithoutNewsInput[] | ScoreHistoryUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutNewsInput | ScoreHistoryCreateOrConnectWithoutNewsInput[]
    upsert?: ScoreHistoryUpsertWithWhereUniqueWithoutNewsInput | ScoreHistoryUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: ScoreHistoryCreateManyNewsInputEnvelope
    set?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    disconnect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    delete?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    update?: ScoreHistoryUpdateWithWhereUniqueWithoutNewsInput | ScoreHistoryUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: ScoreHistoryUpdateManyWithWhereWithoutNewsInput | ScoreHistoryUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: ScoreHistoryScalarWhereInput | ScoreHistoryScalarWhereInput[]
  }

  export type NewsEditUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsEditCreateWithoutNewsInput, NewsEditUncheckedCreateWithoutNewsInput> | NewsEditCreateWithoutNewsInput[] | NewsEditUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutNewsInput | NewsEditCreateOrConnectWithoutNewsInput[]
    upsert?: NewsEditUpsertWithWhereUniqueWithoutNewsInput | NewsEditUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsEditCreateManyNewsInputEnvelope
    set?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    disconnect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    delete?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    update?: NewsEditUpdateWithWhereUniqueWithoutNewsInput | NewsEditUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsEditUpdateManyWithWhereWithoutNewsInput | NewsEditUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsEditScalarWhereInput | NewsEditScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<IssueCreateWithoutNewsInput, IssueUncheckedCreateWithoutNewsInput> | IssueCreateWithoutNewsInput[] | IssueUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutNewsInput | IssueCreateOrConnectWithoutNewsInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutNewsInput | IssueUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: IssueCreateManyNewsInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutNewsInput | IssueUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutNewsInput | IssueUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type ValidationUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<ValidationCreateWithoutNewsInput, ValidationUncheckedCreateWithoutNewsInput> | ValidationCreateWithoutNewsInput[] | ValidationUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ValidationCreateOrConnectWithoutNewsInput | ValidationCreateOrConnectWithoutNewsInput[]
    upsert?: ValidationUpsertWithWhereUniqueWithoutNewsInput | ValidationUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: ValidationCreateManyNewsInputEnvelope
    set?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    disconnect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    delete?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    connect?: ValidationWhereUniqueInput | ValidationWhereUniqueInput[]
    update?: ValidationUpdateWithWhereUniqueWithoutNewsInput | ValidationUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: ValidationUpdateManyWithWhereWithoutNewsInput | ValidationUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: ValidationScalarWhereInput | ValidationScalarWhereInput[]
  }

  export type ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<ScoreHistoryCreateWithoutNewsInput, ScoreHistoryUncheckedCreateWithoutNewsInput> | ScoreHistoryCreateWithoutNewsInput[] | ScoreHistoryUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: ScoreHistoryCreateOrConnectWithoutNewsInput | ScoreHistoryCreateOrConnectWithoutNewsInput[]
    upsert?: ScoreHistoryUpsertWithWhereUniqueWithoutNewsInput | ScoreHistoryUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: ScoreHistoryCreateManyNewsInputEnvelope
    set?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    disconnect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    delete?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    connect?: ScoreHistoryWhereUniqueInput | ScoreHistoryWhereUniqueInput[]
    update?: ScoreHistoryUpdateWithWhereUniqueWithoutNewsInput | ScoreHistoryUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: ScoreHistoryUpdateManyWithWhereWithoutNewsInput | ScoreHistoryUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: ScoreHistoryScalarWhereInput | ScoreHistoryScalarWhereInput[]
  }

  export type NewsEditUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsEditCreateWithoutNewsInput, NewsEditUncheckedCreateWithoutNewsInput> | NewsEditCreateWithoutNewsInput[] | NewsEditUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsEditCreateOrConnectWithoutNewsInput | NewsEditCreateOrConnectWithoutNewsInput[]
    upsert?: NewsEditUpsertWithWhereUniqueWithoutNewsInput | NewsEditUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: NewsEditCreateManyNewsInputEnvelope
    set?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    disconnect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    delete?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    connect?: NewsEditWhereUniqueInput | NewsEditWhereUniqueInput[]
    update?: NewsEditUpdateWithWhereUniqueWithoutNewsInput | NewsEditUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsEditUpdateManyWithWhereWithoutNewsInput | NewsEditUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsEditScalarWhereInput | NewsEditScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutNewsEditInput = {
    create?: XOR<NewsCreateWithoutNewsEditInput, NewsUncheckedCreateWithoutNewsEditInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNewsEditInput
    connect?: NewsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNewsEditInput = {
    create?: XOR<UserCreateWithoutNewsEditInput, UserUncheckedCreateWithoutNewsEditInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsEditInput
    connect?: UserWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutNewsEditNestedInput = {
    create?: XOR<NewsCreateWithoutNewsEditInput, NewsUncheckedCreateWithoutNewsEditInput>
    connectOrCreate?: NewsCreateOrConnectWithoutNewsEditInput
    upsert?: NewsUpsertWithoutNewsEditInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutNewsEditInput, NewsUpdateWithoutNewsEditInput>, NewsUncheckedUpdateWithoutNewsEditInput>
  }

  export type UserUpdateOneRequiredWithoutNewsEditNestedInput = {
    create?: XOR<UserCreateWithoutNewsEditInput, UserUncheckedCreateWithoutNewsEditInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsEditInput
    upsert?: UserUpsertWithoutNewsEditInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsEditInput, UserUpdateWithoutNewsEditInput>, UserUncheckedUpdateWithoutNewsEditInput>
  }

  export type NewsCreateNestedOneWithoutIssuesInput = {
    create?: XOR<NewsCreateWithoutIssuesInput, NewsUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutIssuesInput
    connect?: NewsWhereUniqueInput
  }

  export type EnumIssueTypeFieldUpdateOperationsInput = {
    set?: $Enums.IssueType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumSentimentFieldUpdateOperationsInput = {
    set?: $Enums.Sentiment | null
  }

  export type NewsUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<NewsCreateWithoutIssuesInput, NewsUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutIssuesInput
    upsert?: NewsUpsertWithoutIssuesInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutIssuesInput, NewsUpdateWithoutIssuesInput>, NewsUncheckedUpdateWithoutIssuesInput>
  }

  export type NewsCreateNestedOneWithoutValidationsInput = {
    create?: XOR<NewsCreateWithoutValidationsInput, NewsUncheckedCreateWithoutValidationsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutValidationsInput
    connect?: NewsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidationsInput = {
    create?: XOR<UserCreateWithoutValidationsInput, UserUncheckedCreateWithoutValidationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumValidationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ValidationStatus
  }

  export type NewsUpdateOneRequiredWithoutValidationsNestedInput = {
    create?: XOR<NewsCreateWithoutValidationsInput, NewsUncheckedCreateWithoutValidationsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutValidationsInput
    upsert?: NewsUpsertWithoutValidationsInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutValidationsInput, NewsUpdateWithoutValidationsInput>, NewsUncheckedUpdateWithoutValidationsInput>
  }

  export type UserUpdateOneRequiredWithoutValidationsNestedInput = {
    create?: XOR<UserCreateWithoutValidationsInput, UserUncheckedCreateWithoutValidationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsInput
    upsert?: UserUpsertWithoutValidationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidationsInput, UserUpdateWithoutValidationsInput>, UserUncheckedUpdateWithoutValidationsInput>
  }

  export type UserCreateNestedOneWithoutScoreHistoryInput = {
    create?: XOR<UserCreateWithoutScoreHistoryInput, UserUncheckedCreateWithoutScoreHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoreHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type NewsCreateNestedOneWithoutScoreHistoryInput = {
    create?: XOR<NewsCreateWithoutScoreHistoryInput, NewsUncheckedCreateWithoutScoreHistoryInput>
    connectOrCreate?: NewsCreateOrConnectWithoutScoreHistoryInput
    connect?: NewsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScoreHistoryNestedInput = {
    create?: XOR<UserCreateWithoutScoreHistoryInput, UserUncheckedCreateWithoutScoreHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoreHistoryInput
    upsert?: UserUpsertWithoutScoreHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoreHistoryInput, UserUpdateWithoutScoreHistoryInput>, UserUncheckedUpdateWithoutScoreHistoryInput>
  }

  export type NewsUpdateOneRequiredWithoutScoreHistoryNestedInput = {
    create?: XOR<NewsCreateWithoutScoreHistoryInput, NewsUncheckedCreateWithoutScoreHistoryInput>
    connectOrCreate?: NewsCreateOrConnectWithoutScoreHistoryInput
    upsert?: NewsUpsertWithoutScoreHistoryInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutScoreHistoryInput, NewsUpdateWithoutScoreHistoryInput>, NewsUncheckedUpdateWithoutScoreHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIssueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeFilter<$PrismaModel> | $Enums.IssueType
  }

  export type NestedEnumSentimentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentNullableFilter<$PrismaModel> | $Enums.Sentiment | null
  }

  export type NestedEnumIssueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueType | EnumIssueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueType[] | ListEnumIssueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueTypeWithAggregatesFilter<$PrismaModel> | $Enums.IssueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueTypeFilter<$PrismaModel>
    _max?: NestedEnumIssueTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSentimentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sentiment | EnumSentimentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sentiment[] | ListEnumSentimentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSentimentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sentiment | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSentimentNullableFilter<$PrismaModel>
    _max?: NestedEnumSentimentNullableFilter<$PrismaModel>
  }

  export type NestedEnumValidationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusFilter<$PrismaModel> | $Enums.ValidationStatus
  }

  export type NestedEnumValidationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ValidationStatus | EnumValidationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ValidationStatus[] | ListEnumValidationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumValidationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ValidationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumValidationStatusFilter<$PrismaModel>
    _max?: NestedEnumValidationStatusFilter<$PrismaModel>
  }

  export type ThreadCreateWithoutAuthorInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicCreateNestedManyWithoutThreadInput
    news?: NewsCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutThreadInput
    news?: NewsUncheckedCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadCreateManyAuthorInputEnvelope = {
    data: ThreadCreateManyAuthorInput | ThreadCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type NewsCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    topic: TopicCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ValidationCreateWithoutValidatedByInput = {
    id?: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    news: NewsCreateNestedOneWithoutValidationsInput
  }

  export type ValidationUncheckedCreateWithoutValidatedByInput = {
    id?: string
    newsId: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidationCreateOrConnectWithoutValidatedByInput = {
    where: ValidationWhereUniqueInput
    create: XOR<ValidationCreateWithoutValidatedByInput, ValidationUncheckedCreateWithoutValidatedByInput>
  }

  export type ValidationCreateManyValidatedByInputEnvelope = {
    data: ValidationCreateManyValidatedByInput | ValidationCreateManyValidatedByInput[]
    skipDuplicates?: boolean
  }

  export type ScoreHistoryCreateWithoutUserInput = {
    id?: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
    news: NewsCreateNestedOneWithoutScoreHistoryInput
  }

  export type ScoreHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    newsId: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
  }

  export type ScoreHistoryCreateOrConnectWithoutUserInput = {
    where: ScoreHistoryWhereUniqueInput
    create: XOR<ScoreHistoryCreateWithoutUserInput, ScoreHistoryUncheckedCreateWithoutUserInput>
  }

  export type ScoreHistoryCreateManyUserInputEnvelope = {
    data: ScoreHistoryCreateManyUserInput | ScoreHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThreadSubscriptionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    thread: ThreadCreateNestedOneWithoutThreadSubscriptionsInput
  }

  export type ThreadSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    threadId: string
    createdAt?: Date | string
  }

  export type ThreadSubscriptionCreateOrConnectWithoutUserInput = {
    where: ThreadSubscriptionWhereUniqueInput
    create: XOR<ThreadSubscriptionCreateWithoutUserInput, ThreadSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type ThreadSubscriptionCreateManyUserInputEnvelope = {
    data: ThreadSubscriptionCreateManyUserInput | ThreadSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsEditCreateWithoutEditedByInput = {
    id?: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
    news: NewsCreateNestedOneWithoutNewsEditInput
  }

  export type NewsEditUncheckedCreateWithoutEditedByInput = {
    id?: string
    newsId: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
  }

  export type NewsEditCreateOrConnectWithoutEditedByInput = {
    where: NewsEditWhereUniqueInput
    create: XOR<NewsEditCreateWithoutEditedByInput, NewsEditUncheckedCreateWithoutEditedByInput>
  }

  export type NewsEditCreateManyEditedByInputEnvelope = {
    data: NewsEditCreateManyEditedByInput | NewsEditCreateManyEditedByInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestionCreateWithoutUserInput = {
    id?: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
    topic: TopicCreateNestedOneWithoutUserQuestionsInput
  }

  export type UserQuestionUncheckedCreateWithoutUserInput = {
    id?: string
    topicId: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
  }

  export type UserQuestionCreateOrConnectWithoutUserInput = {
    where: UserQuestionWhereUniqueInput
    create: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionCreateManyUserInputEnvelope = {
    data: UserQuestionCreateManyUserInput | UserQuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    OR?: ThreadScalarWhereInput[]
    NOT?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    id?: StringFilter<"Thread"> | string
    title?: StringFilter<"Thread"> | string
    descriptionPrompt?: StringFilter<"Thread"> | string
    authorId?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    validationScore?: IntFilter<"News"> | number
    threadId?: StringFilter<"News"> | string
    topicId?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type ValidationUpsertWithWhereUniqueWithoutValidatedByInput = {
    where: ValidationWhereUniqueInput
    update: XOR<ValidationUpdateWithoutValidatedByInput, ValidationUncheckedUpdateWithoutValidatedByInput>
    create: XOR<ValidationCreateWithoutValidatedByInput, ValidationUncheckedCreateWithoutValidatedByInput>
  }

  export type ValidationUpdateWithWhereUniqueWithoutValidatedByInput = {
    where: ValidationWhereUniqueInput
    data: XOR<ValidationUpdateWithoutValidatedByInput, ValidationUncheckedUpdateWithoutValidatedByInput>
  }

  export type ValidationUpdateManyWithWhereWithoutValidatedByInput = {
    where: ValidationScalarWhereInput
    data: XOR<ValidationUpdateManyMutationInput, ValidationUncheckedUpdateManyWithoutValidatedByInput>
  }

  export type ValidationScalarWhereInput = {
    AND?: ValidationScalarWhereInput | ValidationScalarWhereInput[]
    OR?: ValidationScalarWhereInput[]
    NOT?: ValidationScalarWhereInput | ValidationScalarWhereInput[]
    id?: StringFilter<"Validation"> | string
    newsId?: StringFilter<"Validation"> | string
    validatedByUserId?: StringFilter<"Validation"> | string
    info?: StringNullableFilter<"Validation"> | string | null
    isCorrectionSuggestion?: BoolFilter<"Validation"> | boolean
    status?: EnumValidationStatusFilter<"Validation"> | $Enums.ValidationStatus
    createdAt?: DateTimeFilter<"Validation"> | Date | string
    updatedAt?: DateTimeFilter<"Validation"> | Date | string
  }

  export type ScoreHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ScoreHistoryWhereUniqueInput
    update: XOR<ScoreHistoryUpdateWithoutUserInput, ScoreHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ScoreHistoryCreateWithoutUserInput, ScoreHistoryUncheckedCreateWithoutUserInput>
  }

  export type ScoreHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ScoreHistoryWhereUniqueInput
    data: XOR<ScoreHistoryUpdateWithoutUserInput, ScoreHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ScoreHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ScoreHistoryScalarWhereInput
    data: XOR<ScoreHistoryUpdateManyMutationInput, ScoreHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ScoreHistoryScalarWhereInput = {
    AND?: ScoreHistoryScalarWhereInput | ScoreHistoryScalarWhereInput[]
    OR?: ScoreHistoryScalarWhereInput[]
    NOT?: ScoreHistoryScalarWhereInput | ScoreHistoryScalarWhereInput[]
    id?: StringFilter<"ScoreHistory"> | string
    userId?: StringFilter<"ScoreHistory"> | string
    newsId?: StringFilter<"ScoreHistory"> | string
    validationScore?: IntFilter<"ScoreHistory"> | number
    scoreIncrement?: IntFilter<"ScoreHistory"> | number
    updatedAt?: DateTimeFilter<"ScoreHistory"> | Date | string
  }

  export type ThreadSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: ThreadSubscriptionWhereUniqueInput
    update: XOR<ThreadSubscriptionUpdateWithoutUserInput, ThreadSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<ThreadSubscriptionCreateWithoutUserInput, ThreadSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type ThreadSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: ThreadSubscriptionWhereUniqueInput
    data: XOR<ThreadSubscriptionUpdateWithoutUserInput, ThreadSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ThreadSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: ThreadSubscriptionScalarWhereInput
    data: XOR<ThreadSubscriptionUpdateManyMutationInput, ThreadSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type ThreadSubscriptionScalarWhereInput = {
    AND?: ThreadSubscriptionScalarWhereInput | ThreadSubscriptionScalarWhereInput[]
    OR?: ThreadSubscriptionScalarWhereInput[]
    NOT?: ThreadSubscriptionScalarWhereInput | ThreadSubscriptionScalarWhereInput[]
    id?: StringFilter<"ThreadSubscription"> | string
    threadId?: StringFilter<"ThreadSubscription"> | string
    userId?: StringFilter<"ThreadSubscription"> | string
    createdAt?: DateTimeFilter<"ThreadSubscription"> | Date | string
  }

  export type NewsEditUpsertWithWhereUniqueWithoutEditedByInput = {
    where: NewsEditWhereUniqueInput
    update: XOR<NewsEditUpdateWithoutEditedByInput, NewsEditUncheckedUpdateWithoutEditedByInput>
    create: XOR<NewsEditCreateWithoutEditedByInput, NewsEditUncheckedCreateWithoutEditedByInput>
  }

  export type NewsEditUpdateWithWhereUniqueWithoutEditedByInput = {
    where: NewsEditWhereUniqueInput
    data: XOR<NewsEditUpdateWithoutEditedByInput, NewsEditUncheckedUpdateWithoutEditedByInput>
  }

  export type NewsEditUpdateManyWithWhereWithoutEditedByInput = {
    where: NewsEditScalarWhereInput
    data: XOR<NewsEditUpdateManyMutationInput, NewsEditUncheckedUpdateManyWithoutEditedByInput>
  }

  export type NewsEditScalarWhereInput = {
    AND?: NewsEditScalarWhereInput | NewsEditScalarWhereInput[]
    OR?: NewsEditScalarWhereInput[]
    NOT?: NewsEditScalarWhereInput | NewsEditScalarWhereInput[]
    id?: StringFilter<"NewsEdit"> | string
    newsId?: StringFilter<"NewsEdit"> | string
    editedById?: StringFilter<"NewsEdit"> | string
    oldContent?: StringFilter<"NewsEdit"> | string
    newContent?: StringFilter<"NewsEdit"> | string
    createdAt?: DateTimeFilter<"NewsEdit"> | Date | string
  }

  export type UserQuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuestionWhereUniqueInput
    update: XOR<UserQuestionUpdateWithoutUserInput, UserQuestionUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuestionWhereUniqueInput
    data: XOR<UserQuestionUpdateWithoutUserInput, UserQuestionUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestionUpdateManyWithWhereWithoutUserInput = {
    where: UserQuestionScalarWhereInput
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuestionScalarWhereInput = {
    AND?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
    OR?: UserQuestionScalarWhereInput[]
    NOT?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
    id?: StringFilter<"UserQuestion"> | string
    userId?: StringFilter<"UserQuestion"> | string
    topicId?: StringFilter<"UserQuestion"> | string
    question?: StringFilter<"UserQuestion"> | string
    answered?: BoolFilter<"UserQuestion"> | boolean
    answer?: StringNullableFilter<"UserQuestion"> | string | null
    createdAt?: DateTimeFilter<"UserQuestion"> | Date | string
  }

  export type UserCreateWithoutUserQuestionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
  }

  export type UserUncheckedCreateWithoutUserQuestionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
  }

  export type UserCreateOrConnectWithoutUserQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
  }

  export type TopicCreateWithoutUserQuestionsInput = {
    id?: string
    title: string
    trendingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutTopicsInput
    news?: NewsCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutUserQuestionsInput = {
    id?: string
    title: string
    trendingScore?: number
    threadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutUserQuestionsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutUserQuestionsInput, TopicUncheckedCreateWithoutUserQuestionsInput>
  }

  export type UserUpsertWithoutUserQuestionsInput = {
    update: XOR<UserUpdateWithoutUserQuestionsInput, UserUncheckedUpdateWithoutUserQuestionsInput>
    create: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserQuestionsInput, UserUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type UserUpdateWithoutUserQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUserQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
  }

  export type TopicUpsertWithoutUserQuestionsInput = {
    update: XOR<TopicUpdateWithoutUserQuestionsInput, TopicUncheckedUpdateWithoutUserQuestionsInput>
    create: XOR<TopicCreateWithoutUserQuestionsInput, TopicUncheckedCreateWithoutUserQuestionsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutUserQuestionsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutUserQuestionsInput, TopicUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type TopicUpdateWithoutUserQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutTopicsNestedInput
    news?: NewsUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutUserQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type UserCreateWithoutThreadsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
  }

  export type TopicCreateWithoutThreadInput = {
    id?: string
    title: string
    trendingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutTopicInput
    userQuestions?: UserQuestionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutThreadInput = {
    id?: string
    title: string
    trendingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutTopicInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutThreadInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutThreadInput, TopicUncheckedCreateWithoutThreadInput>
  }

  export type TopicCreateManyThreadInputEnvelope = {
    data: TopicCreateManyThreadInput | TopicCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type NewsCreateWithoutThreadInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: TopicCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutThreadInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutThreadInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutThreadInput, NewsUncheckedCreateWithoutThreadInput>
  }

  export type NewsCreateManyThreadInputEnvelope = {
    data: NewsCreateManyThreadInput | NewsCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type ThreadSubscriptionCreateWithoutThreadInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutThreadSubscriptionsInput
  }

  export type ThreadSubscriptionUncheckedCreateWithoutThreadInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ThreadSubscriptionCreateOrConnectWithoutThreadInput = {
    where: ThreadSubscriptionWhereUniqueInput
    create: XOR<ThreadSubscriptionCreateWithoutThreadInput, ThreadSubscriptionUncheckedCreateWithoutThreadInput>
  }

  export type ThreadSubscriptionCreateManyThreadInputEnvelope = {
    data: ThreadSubscriptionCreateManyThreadInput | ThreadSubscriptionCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutThreadsInput = {
    update: XOR<UserUpdateWithoutThreadsInput, UserUncheckedUpdateWithoutThreadsInput>
    create: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadsInput, UserUncheckedUpdateWithoutThreadsInput>
  }

  export type UserUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TopicUpsertWithWhereUniqueWithoutThreadInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutThreadInput, TopicUncheckedUpdateWithoutThreadInput>
    create: XOR<TopicCreateWithoutThreadInput, TopicUncheckedCreateWithoutThreadInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutThreadInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutThreadInput, TopicUncheckedUpdateWithoutThreadInput>
  }

  export type TopicUpdateManyWithWhereWithoutThreadInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutThreadInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: StringFilter<"Topic"> | string
    title?: StringFilter<"Topic"> | string
    trendingScore?: IntFilter<"Topic"> | number
    threadId?: StringFilter<"Topic"> | string
    createdAt?: DateTimeFilter<"Topic"> | Date | string
    updatedAt?: DateTimeFilter<"Topic"> | Date | string
  }

  export type NewsUpsertWithWhereUniqueWithoutThreadInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutThreadInput, NewsUncheckedUpdateWithoutThreadInput>
    create: XOR<NewsCreateWithoutThreadInput, NewsUncheckedCreateWithoutThreadInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutThreadInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutThreadInput, NewsUncheckedUpdateWithoutThreadInput>
  }

  export type NewsUpdateManyWithWhereWithoutThreadInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutThreadInput>
  }

  export type ThreadSubscriptionUpsertWithWhereUniqueWithoutThreadInput = {
    where: ThreadSubscriptionWhereUniqueInput
    update: XOR<ThreadSubscriptionUpdateWithoutThreadInput, ThreadSubscriptionUncheckedUpdateWithoutThreadInput>
    create: XOR<ThreadSubscriptionCreateWithoutThreadInput, ThreadSubscriptionUncheckedCreateWithoutThreadInput>
  }

  export type ThreadSubscriptionUpdateWithWhereUniqueWithoutThreadInput = {
    where: ThreadSubscriptionWhereUniqueInput
    data: XOR<ThreadSubscriptionUpdateWithoutThreadInput, ThreadSubscriptionUncheckedUpdateWithoutThreadInput>
  }

  export type ThreadSubscriptionUpdateManyWithWhereWithoutThreadInput = {
    where: ThreadSubscriptionScalarWhereInput
    data: XOR<ThreadSubscriptionUpdateManyMutationInput, ThreadSubscriptionUncheckedUpdateManyWithoutThreadInput>
  }

  export type ThreadCreateWithoutThreadSubscriptionsInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadsInput
    topics?: TopicCreateNestedManyWithoutThreadInput
    news?: NewsCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutThreadSubscriptionsInput = {
    id?: string
    title: string
    descriptionPrompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutThreadInput
    news?: NewsUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutThreadSubscriptionsInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutThreadSubscriptionsInput, ThreadUncheckedCreateWithoutThreadSubscriptionsInput>
  }

  export type UserCreateWithoutThreadSubscriptionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadSubscriptionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadSubscriptionsInput, UserUncheckedCreateWithoutThreadSubscriptionsInput>
  }

  export type ThreadUpsertWithoutThreadSubscriptionsInput = {
    update: XOR<ThreadUpdateWithoutThreadSubscriptionsInput, ThreadUncheckedUpdateWithoutThreadSubscriptionsInput>
    create: XOR<ThreadCreateWithoutThreadSubscriptionsInput, ThreadUncheckedCreateWithoutThreadSubscriptionsInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutThreadSubscriptionsInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutThreadSubscriptionsInput, ThreadUncheckedUpdateWithoutThreadSubscriptionsInput>
  }

  export type ThreadUpdateWithoutThreadSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadsNestedInput
    topics?: TopicUpdateManyWithoutThreadNestedInput
    news?: NewsUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutThreadSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutThreadNestedInput
    news?: NewsUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type UserUpsertWithoutThreadSubscriptionsInput = {
    update: XOR<UserUpdateWithoutThreadSubscriptionsInput, UserUncheckedUpdateWithoutThreadSubscriptionsInput>
    create: XOR<UserCreateWithoutThreadSubscriptionsInput, UserUncheckedCreateWithoutThreadSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadSubscriptionsInput, UserUncheckedUpdateWithoutThreadSubscriptionsInput>
  }

  export type UserUpdateWithoutThreadSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadCreateWithoutTopicsInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadsInput
    news?: NewsCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutTopicsInput = {
    id?: string
    title: string
    descriptionPrompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutTopicsInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutTopicsInput, ThreadUncheckedCreateWithoutTopicsInput>
  }

  export type NewsCreateWithoutTopicInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutTopicInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutTopicInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutTopicInput, NewsUncheckedCreateWithoutTopicInput>
  }

  export type NewsCreateManyTopicInputEnvelope = {
    data: NewsCreateManyTopicInput | NewsCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestionCreateWithoutTopicInput = {
    id?: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserQuestionsInput
  }

  export type UserQuestionUncheckedCreateWithoutTopicInput = {
    id?: string
    userId: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
  }

  export type UserQuestionCreateOrConnectWithoutTopicInput = {
    where: UserQuestionWhereUniqueInput
    create: XOR<UserQuestionCreateWithoutTopicInput, UserQuestionUncheckedCreateWithoutTopicInput>
  }

  export type UserQuestionCreateManyTopicInputEnvelope = {
    data: UserQuestionCreateManyTopicInput | UserQuestionCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithoutTopicsInput = {
    update: XOR<ThreadUpdateWithoutTopicsInput, ThreadUncheckedUpdateWithoutTopicsInput>
    create: XOR<ThreadCreateWithoutTopicsInput, ThreadUncheckedCreateWithoutTopicsInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutTopicsInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutTopicsInput, ThreadUncheckedUpdateWithoutTopicsInput>
  }

  export type ThreadUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadsNestedInput
    news?: NewsUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type NewsUpsertWithWhereUniqueWithoutTopicInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutTopicInput, NewsUncheckedUpdateWithoutTopicInput>
    create: XOR<NewsCreateWithoutTopicInput, NewsUncheckedCreateWithoutTopicInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutTopicInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutTopicInput, NewsUncheckedUpdateWithoutTopicInput>
  }

  export type NewsUpdateManyWithWhereWithoutTopicInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutTopicInput>
  }

  export type UserQuestionUpsertWithWhereUniqueWithoutTopicInput = {
    where: UserQuestionWhereUniqueInput
    update: XOR<UserQuestionUpdateWithoutTopicInput, UserQuestionUncheckedUpdateWithoutTopicInput>
    create: XOR<UserQuestionCreateWithoutTopicInput, UserQuestionUncheckedCreateWithoutTopicInput>
  }

  export type UserQuestionUpdateWithWhereUniqueWithoutTopicInput = {
    where: UserQuestionWhereUniqueInput
    data: XOR<UserQuestionUpdateWithoutTopicInput, UserQuestionUncheckedUpdateWithoutTopicInput>
  }

  export type UserQuestionUpdateManyWithWhereWithoutTopicInput = {
    where: UserQuestionScalarWhereInput
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyWithoutTopicInput>
  }

  export type ThreadCreateWithoutNewsInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadsInput
    topics?: TopicCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutNewsInput = {
    id?: string
    title: string
    descriptionPrompt: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutThreadInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutNewsInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutNewsInput, ThreadUncheckedCreateWithoutNewsInput>
  }

  export type TopicCreateWithoutNewsInput = {
    id?: string
    title: string
    trendingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutTopicsInput
    userQuestions?: UserQuestionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutNewsInput = {
    id?: string
    title: string
    trendingScore?: number
    threadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutNewsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutNewsInput, TopicUncheckedCreateWithoutNewsInput>
  }

  export type UserCreateWithoutNewsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type IssueCreateWithoutNewsInput = {
    id?: string
    type: $Enums.IssueType
    description: string
    positionStart?: number | null
    positionEnd?: number | null
    sentiment?: $Enums.Sentiment | null
    createdAt?: Date | string
  }

  export type IssueUncheckedCreateWithoutNewsInput = {
    id?: string
    type: $Enums.IssueType
    description: string
    positionStart?: number | null
    positionEnd?: number | null
    sentiment?: $Enums.Sentiment | null
    createdAt?: Date | string
  }

  export type IssueCreateOrConnectWithoutNewsInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutNewsInput, IssueUncheckedCreateWithoutNewsInput>
  }

  export type IssueCreateManyNewsInputEnvelope = {
    data: IssueCreateManyNewsInput | IssueCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type ValidationCreateWithoutNewsInput = {
    id?: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedBy: UserCreateNestedOneWithoutValidationsInput
  }

  export type ValidationUncheckedCreateWithoutNewsInput = {
    id?: string
    validatedByUserId: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidationCreateOrConnectWithoutNewsInput = {
    where: ValidationWhereUniqueInput
    create: XOR<ValidationCreateWithoutNewsInput, ValidationUncheckedCreateWithoutNewsInput>
  }

  export type ValidationCreateManyNewsInputEnvelope = {
    data: ValidationCreateManyNewsInput | ValidationCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type ScoreHistoryCreateWithoutNewsInput = {
    id?: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScoreHistoryInput
  }

  export type ScoreHistoryUncheckedCreateWithoutNewsInput = {
    id?: string
    userId: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
  }

  export type ScoreHistoryCreateOrConnectWithoutNewsInput = {
    where: ScoreHistoryWhereUniqueInput
    create: XOR<ScoreHistoryCreateWithoutNewsInput, ScoreHistoryUncheckedCreateWithoutNewsInput>
  }

  export type ScoreHistoryCreateManyNewsInputEnvelope = {
    data: ScoreHistoryCreateManyNewsInput | ScoreHistoryCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsEditCreateWithoutNewsInput = {
    id?: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
    editedBy: UserCreateNestedOneWithoutNewsEditInput
  }

  export type NewsEditUncheckedCreateWithoutNewsInput = {
    id?: string
    editedById: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
  }

  export type NewsEditCreateOrConnectWithoutNewsInput = {
    where: NewsEditWhereUniqueInput
    create: XOR<NewsEditCreateWithoutNewsInput, NewsEditUncheckedCreateWithoutNewsInput>
  }

  export type NewsEditCreateManyNewsInputEnvelope = {
    data: NewsEditCreateManyNewsInput | NewsEditCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithoutNewsInput = {
    update: XOR<ThreadUpdateWithoutNewsInput, ThreadUncheckedUpdateWithoutNewsInput>
    create: XOR<ThreadCreateWithoutNewsInput, ThreadUncheckedCreateWithoutNewsInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutNewsInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutNewsInput, ThreadUncheckedUpdateWithoutNewsInput>
  }

  export type ThreadUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadsNestedInput
    topics?: TopicUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type TopicUpsertWithoutNewsInput = {
    update: XOR<TopicUpdateWithoutNewsInput, TopicUncheckedUpdateWithoutNewsInput>
    create: XOR<TopicCreateWithoutNewsInput, TopicUncheckedCreateWithoutNewsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutNewsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutNewsInput, TopicUncheckedUpdateWithoutNewsInput>
  }

  export type TopicUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutTopicsNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IssueUpsertWithWhereUniqueWithoutNewsInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutNewsInput, IssueUncheckedUpdateWithoutNewsInput>
    create: XOR<IssueCreateWithoutNewsInput, IssueUncheckedCreateWithoutNewsInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutNewsInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutNewsInput, IssueUncheckedUpdateWithoutNewsInput>
  }

  export type IssueUpdateManyWithWhereWithoutNewsInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutNewsInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: StringFilter<"Issue"> | string
    newsId?: StringFilter<"Issue"> | string
    type?: EnumIssueTypeFilter<"Issue"> | $Enums.IssueType
    description?: StringFilter<"Issue"> | string
    positionStart?: IntNullableFilter<"Issue"> | number | null
    positionEnd?: IntNullableFilter<"Issue"> | number | null
    sentiment?: EnumSentimentNullableFilter<"Issue"> | $Enums.Sentiment | null
    createdAt?: DateTimeFilter<"Issue"> | Date | string
  }

  export type ValidationUpsertWithWhereUniqueWithoutNewsInput = {
    where: ValidationWhereUniqueInput
    update: XOR<ValidationUpdateWithoutNewsInput, ValidationUncheckedUpdateWithoutNewsInput>
    create: XOR<ValidationCreateWithoutNewsInput, ValidationUncheckedCreateWithoutNewsInput>
  }

  export type ValidationUpdateWithWhereUniqueWithoutNewsInput = {
    where: ValidationWhereUniqueInput
    data: XOR<ValidationUpdateWithoutNewsInput, ValidationUncheckedUpdateWithoutNewsInput>
  }

  export type ValidationUpdateManyWithWhereWithoutNewsInput = {
    where: ValidationScalarWhereInput
    data: XOR<ValidationUpdateManyMutationInput, ValidationUncheckedUpdateManyWithoutNewsInput>
  }

  export type ScoreHistoryUpsertWithWhereUniqueWithoutNewsInput = {
    where: ScoreHistoryWhereUniqueInput
    update: XOR<ScoreHistoryUpdateWithoutNewsInput, ScoreHistoryUncheckedUpdateWithoutNewsInput>
    create: XOR<ScoreHistoryCreateWithoutNewsInput, ScoreHistoryUncheckedCreateWithoutNewsInput>
  }

  export type ScoreHistoryUpdateWithWhereUniqueWithoutNewsInput = {
    where: ScoreHistoryWhereUniqueInput
    data: XOR<ScoreHistoryUpdateWithoutNewsInput, ScoreHistoryUncheckedUpdateWithoutNewsInput>
  }

  export type ScoreHistoryUpdateManyWithWhereWithoutNewsInput = {
    where: ScoreHistoryScalarWhereInput
    data: XOR<ScoreHistoryUpdateManyMutationInput, ScoreHistoryUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsEditUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsEditWhereUniqueInput
    update: XOR<NewsEditUpdateWithoutNewsInput, NewsEditUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsEditCreateWithoutNewsInput, NewsEditUncheckedCreateWithoutNewsInput>
  }

  export type NewsEditUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsEditWhereUniqueInput
    data: XOR<NewsEditUpdateWithoutNewsInput, NewsEditUncheckedUpdateWithoutNewsInput>
  }

  export type NewsEditUpdateManyWithWhereWithoutNewsInput = {
    where: NewsEditScalarWhereInput
    data: XOR<NewsEditUpdateManyMutationInput, NewsEditUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsCreateWithoutNewsEditInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    topic: TopicCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutNewsEditInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutNewsEditInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutNewsEditInput, NewsUncheckedCreateWithoutNewsEditInput>
  }

  export type UserCreateWithoutNewsEditInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsEditInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsEditInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsEditInput, UserUncheckedCreateWithoutNewsEditInput>
  }

  export type NewsUpsertWithoutNewsEditInput = {
    update: XOR<NewsUpdateWithoutNewsEditInput, NewsUncheckedUpdateWithoutNewsEditInput>
    create: XOR<NewsCreateWithoutNewsEditInput, NewsUncheckedCreateWithoutNewsEditInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutNewsEditInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutNewsEditInput, NewsUncheckedUpdateWithoutNewsEditInput>
  }

  export type NewsUpdateWithoutNewsEditInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutNewsEditInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type UserUpsertWithoutNewsEditInput = {
    update: XOR<UserUpdateWithoutNewsEditInput, UserUncheckedUpdateWithoutNewsEditInput>
    create: XOR<UserCreateWithoutNewsEditInput, UserUncheckedCreateWithoutNewsEditInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsEditInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsEditInput, UserUncheckedUpdateWithoutNewsEditInput>
  }

  export type UserUpdateWithoutNewsEditInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsEditInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsCreateWithoutIssuesInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    topic: TopicCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutIssuesInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutIssuesInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutIssuesInput, NewsUncheckedCreateWithoutIssuesInput>
  }

  export type NewsUpsertWithoutIssuesInput = {
    update: XOR<NewsUpdateWithoutIssuesInput, NewsUncheckedUpdateWithoutIssuesInput>
    create: XOR<NewsCreateWithoutIssuesInput, NewsUncheckedCreateWithoutIssuesInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutIssuesInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutIssuesInput, NewsUncheckedUpdateWithoutIssuesInput>
  }

  export type NewsUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateWithoutValidationsInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    topic: TopicCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutValidationsInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutValidationsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutValidationsInput, NewsUncheckedCreateWithoutValidationsInput>
  }

  export type UserCreateWithoutValidationsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    scoreHistory?: ScoreHistoryCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutValidationsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    scoreHistory?: ScoreHistoryUncheckedCreateNestedManyWithoutUserInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutValidationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidationsInput, UserUncheckedCreateWithoutValidationsInput>
  }

  export type NewsUpsertWithoutValidationsInput = {
    update: XOR<NewsUpdateWithoutValidationsInput, NewsUncheckedUpdateWithoutValidationsInput>
    create: XOR<NewsCreateWithoutValidationsInput, NewsUncheckedCreateWithoutValidationsInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutValidationsInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutValidationsInput, NewsUncheckedUpdateWithoutValidationsInput>
  }

  export type NewsUpdateWithoutValidationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutValidationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type UserUpsertWithoutValidationsInput = {
    update: XOR<UserUpdateWithoutValidationsInput, UserUncheckedUpdateWithoutValidationsInput>
    create: XOR<UserCreateWithoutValidationsInput, UserUncheckedCreateWithoutValidationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidationsInput, UserUncheckedUpdateWithoutValidationsInput>
  }

  export type UserUpdateWithoutValidationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutValidationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutUserNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutScoreHistoryInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    validations?: ValidationCreateNestedManyWithoutValidatedByInput
    threadSubscriptions?: ThreadSubscriptionCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScoreHistoryInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    validations?: ValidationUncheckedCreateNestedManyWithoutValidatedByInput
    threadSubscriptions?: ThreadSubscriptionUncheckedCreateNestedManyWithoutUserInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutEditedByInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScoreHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoreHistoryInput, UserUncheckedCreateWithoutScoreHistoryInput>
  }

  export type NewsCreateWithoutScoreHistoryInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    thread: ThreadCreateNestedOneWithoutNewsInput
    topic: TopicCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    issues?: IssueCreateNestedManyWithoutNewsInput
    validations?: ValidationCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutScoreHistoryInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutNewsInput
    validations?: ValidationUncheckedCreateNestedManyWithoutNewsInput
    newsEdit?: NewsEditUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutScoreHistoryInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutScoreHistoryInput, NewsUncheckedCreateWithoutScoreHistoryInput>
  }

  export type UserUpsertWithoutScoreHistoryInput = {
    update: XOR<UserUpdateWithoutScoreHistoryInput, UserUncheckedUpdateWithoutScoreHistoryInput>
    create: XOR<UserCreateWithoutScoreHistoryInput, UserUncheckedCreateWithoutScoreHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoreHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoreHistoryInput, UserUncheckedUpdateWithoutScoreHistoryInput>
  }

  export type UserUpdateWithoutScoreHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUpdateManyWithoutValidatedByNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScoreHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutValidatedByNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutEditedByNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsUpsertWithoutScoreHistoryInput = {
    update: XOR<NewsUpdateWithoutScoreHistoryInput, NewsUncheckedUpdateWithoutScoreHistoryInput>
    create: XOR<NewsCreateWithoutScoreHistoryInput, NewsUncheckedCreateWithoutScoreHistoryInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutScoreHistoryInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutScoreHistoryInput, NewsUncheckedUpdateWithoutScoreHistoryInput>
  }

  export type NewsUpdateWithoutScoreHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutScoreHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type ThreadCreateManyAuthorInput = {
    id?: string
    title: string
    descriptionPrompt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidationCreateManyValidatedByInput = {
    id?: string
    newsId: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreHistoryCreateManyUserInput = {
    id?: string
    newsId: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
  }

  export type ThreadSubscriptionCreateManyUserInput = {
    id?: string
    threadId: string
    createdAt?: Date | string
  }

  export type NewsEditCreateManyEditedByInput = {
    id?: string
    newsId: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
  }

  export type UserQuestionCreateManyUserInput = {
    id?: string
    topicId: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
  }

  export type ThreadUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUpdateManyWithoutThreadNestedInput
    news?: NewsUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutThreadNestedInput
    news?: NewsUncheckedUpdateManyWithoutThreadNestedInput
    threadSubscriptions?: ThreadSubscriptionUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptionPrompt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutValidationsNestedInput
  }

  export type ValidationUncheckedUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationUncheckedUpdateManyWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutScoreHistoryNestedInput
  }

  export type ScoreHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutThreadSubscriptionsNestedInput
  }

  export type ThreadSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditUpdateWithoutEditedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutNewsEditNestedInput
  }

  export type NewsEditUncheckedUpdateWithoutEditedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditUncheckedUpdateManyWithoutEditedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsId?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutUserQuestionsNestedInput
  }

  export type UserQuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateManyThreadInput = {
    id?: string
    title: string
    trendingScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateManyThreadInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    topicId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadSubscriptionCreateManyThreadInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TopicUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutTopicNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutTopicNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trendingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    topicId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThreadSubscriptionsNestedInput
  }

  export type ThreadSubscriptionUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadSubscriptionUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyTopicInput = {
    id?: string
    title: string
    content: string
    validationScore?: number
    threadId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserQuestionCreateManyTopicInput = {
    id?: string
    userId: string
    question: string
    answered?: boolean
    answer?: string | null
    createdAt?: Date | string
  }

  export type NewsUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    issues?: IssueUpdateManyWithoutNewsNestedInput
    validations?: ValidationUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutNewsNestedInput
    validations?: ValidationUncheckedUpdateManyWithoutNewsNestedInput
    scoreHistory?: ScoreHistoryUncheckedUpdateManyWithoutNewsNestedInput
    newsEdit?: NewsEditUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    threadId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserQuestionsNestedInput
  }

  export type UserQuestionUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: BoolFieldUpdateOperationsInput | boolean
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyNewsInput = {
    id?: string
    type: $Enums.IssueType
    description: string
    positionStart?: number | null
    positionEnd?: number | null
    sentiment?: $Enums.Sentiment | null
    createdAt?: Date | string
  }

  export type ValidationCreateManyNewsInput = {
    id?: string
    validatedByUserId: string
    info?: string | null
    isCorrectionSuggestion?: boolean
    status?: $Enums.ValidationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoreHistoryCreateManyNewsInput = {
    id?: string
    userId: string
    validationScore: number
    scoreIncrement: number
    updatedAt?: Date | string
  }

  export type NewsEditCreateManyNewsInput = {
    id?: string
    editedById: string
    oldContent: string
    newContent: string
    createdAt?: Date | string
  }

  export type IssueUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType
    description?: StringFieldUpdateOperationsInput | string
    positionStart?: NullableIntFieldUpdateOperationsInput | number | null
    positionEnd?: NullableIntFieldUpdateOperationsInput | number | null
    sentiment?: NullableEnumSentimentFieldUpdateOperationsInput | $Enums.Sentiment | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedBy?: UserUpdateOneRequiredWithoutValidationsNestedInput
  }

  export type ValidationUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    validatedByUserId?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidationUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    validatedByUserId?: StringFieldUpdateOperationsInput | string
    info?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrectionSuggestion?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumValidationStatusFieldUpdateOperationsInput | $Enums.ValidationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScoreHistoryNestedInput
  }

  export type ScoreHistoryUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreHistoryUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    validationScore?: IntFieldUpdateOperationsInput | number
    scoreIncrement?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: UserUpdateOneRequiredWithoutNewsEditNestedInput
  }

  export type NewsEditUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    editedById?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEditUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    editedById?: StringFieldUpdateOperationsInput | string
    oldContent?: StringFieldUpdateOperationsInput | string
    newContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}