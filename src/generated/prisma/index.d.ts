
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
 * Model Ranking
 * 
 */
export type Ranking = $Result.DefaultSelection<Prisma.$RankingPayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model RoomParticipant
 * 
 */
export type RoomParticipant = $Result.DefaultSelection<Prisma.$RoomParticipantPayload>
/**
 * Model AiJudgement
 * 
 */
export type AiJudgement = $Result.DefaultSelection<Prisma.$AiJudgementPayload>
/**
 * Model AiSummary
 * 
 */
export type AiSummary = $Result.DefaultSelection<Prisma.$AiSummaryPayload>
/**
 * Model UserItem
 * 
 */
export type UserItem = $Result.DefaultSelection<Prisma.$UserItemPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model BattleRoom
 * 
 */
export type BattleRoom = $Result.DefaultSelection<Prisma.$BattleRoomPayload>
/**
 * Model BattleTitle
 * 
 */
export type BattleTitle = $Result.DefaultSelection<Prisma.$BattleTitlePayload>
/**
 * Model QuestCompletion
 * 
 */
export type QuestCompletion = $Result.DefaultSelection<Prisma.$QuestCompletionPayload>
/**
 * Model PointTransaction
 * 
 */
export type PointTransaction = $Result.DefaultSelection<Prisma.$PointTransactionPayload>

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
   * `prisma.ranking`: Exposes CRUD operations for the **Ranking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rankings
    * const rankings = await prisma.ranking.findMany()
    * ```
    */
  get ranking(): Prisma.RankingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomParticipant`: Exposes CRUD operations for the **RoomParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomParticipants
    * const roomParticipants = await prisma.roomParticipant.findMany()
    * ```
    */
  get roomParticipant(): Prisma.RoomParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiJudgement`: Exposes CRUD operations for the **AiJudgement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiJudgements
    * const aiJudgements = await prisma.aiJudgement.findMany()
    * ```
    */
  get aiJudgement(): Prisma.AiJudgementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiSummary`: Exposes CRUD operations for the **AiSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiSummaries
    * const aiSummaries = await prisma.aiSummary.findMany()
    * ```
    */
  get aiSummary(): Prisma.AiSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userItem`: Exposes CRUD operations for the **UserItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserItems
    * const userItems = await prisma.userItem.findMany()
    * ```
    */
  get userItem(): Prisma.UserItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battleRoom`: Exposes CRUD operations for the **BattleRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BattleRooms
    * const battleRooms = await prisma.battleRoom.findMany()
    * ```
    */
  get battleRoom(): Prisma.BattleRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battleTitle`: Exposes CRUD operations for the **BattleTitle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BattleTitles
    * const battleTitles = await prisma.battleTitle.findMany()
    * ```
    */
  get battleTitle(): Prisma.BattleTitleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questCompletion`: Exposes CRUD operations for the **QuestCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestCompletions
    * const questCompletions = await prisma.questCompletion.findMany()
    * ```
    */
  get questCompletion(): Prisma.QuestCompletionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointTransaction`: Exposes CRUD operations for the **PointTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointTransactions
    * const pointTransactions = await prisma.pointTransaction.findMany()
    * ```
    */
  get pointTransaction(): Prisma.PointTransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Ranking: 'Ranking',
    Quest: 'Quest',
    RoomParticipant: 'RoomParticipant',
    AiJudgement: 'AiJudgement',
    AiSummary: 'AiSummary',
    UserItem: 'UserItem',
    Item: 'Item',
    BattleRoom: 'BattleRoom',
    BattleTitle: 'BattleTitle',
    QuestCompletion: 'QuestCompletion',
    PointTransaction: 'PointTransaction'
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
      modelProps: "user" | "ranking" | "quest" | "roomParticipant" | "aiJudgement" | "aiSummary" | "userItem" | "item" | "battleRoom" | "battleTitle" | "questCompletion" | "pointTransaction"
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
      Ranking: {
        payload: Prisma.$RankingPayload<ExtArgs>
        fields: Prisma.RankingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RankingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          findFirst: {
            args: Prisma.RankingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          findMany: {
            args: Prisma.RankingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>[]
          }
          create: {
            args: Prisma.RankingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          createMany: {
            args: Prisma.RankingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RankingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          update: {
            args: Prisma.RankingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          deleteMany: {
            args: Prisma.RankingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RankingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RankingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          aggregate: {
            args: Prisma.RankingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRanking>
          }
          groupBy: {
            args: Prisma.RankingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RankingCountArgs<ExtArgs>
            result: $Utils.Optional<RankingCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      RoomParticipant: {
        payload: Prisma.$RoomParticipantPayload<ExtArgs>
        fields: Prisma.RoomParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          findFirst: {
            args: Prisma.RoomParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          findMany: {
            args: Prisma.RoomParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          create: {
            args: Prisma.RoomParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          createMany: {
            args: Prisma.RoomParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          update: {
            args: Prisma.RoomParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RoomParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          aggregate: {
            args: Prisma.RoomParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomParticipant>
          }
          groupBy: {
            args: Prisma.RoomParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RoomParticipantCountAggregateOutputType> | number
          }
        }
      }
      AiJudgement: {
        payload: Prisma.$AiJudgementPayload<ExtArgs>
        fields: Prisma.AiJudgementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiJudgementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiJudgementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>
          }
          findFirst: {
            args: Prisma.AiJudgementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiJudgementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>
          }
          findMany: {
            args: Prisma.AiJudgementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>[]
          }
          create: {
            args: Prisma.AiJudgementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>
          }
          createMany: {
            args: Prisma.AiJudgementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AiJudgementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>
          }
          update: {
            args: Prisma.AiJudgementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>
          }
          deleteMany: {
            args: Prisma.AiJudgementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiJudgementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiJudgementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiJudgementPayload>
          }
          aggregate: {
            args: Prisma.AiJudgementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiJudgement>
          }
          groupBy: {
            args: Prisma.AiJudgementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiJudgementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiJudgementCountArgs<ExtArgs>
            result: $Utils.Optional<AiJudgementCountAggregateOutputType> | number
          }
        }
      }
      AiSummary: {
        payload: Prisma.$AiSummaryPayload<ExtArgs>
        fields: Prisma.AiSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>
          }
          findFirst: {
            args: Prisma.AiSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>
          }
          findMany: {
            args: Prisma.AiSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>[]
          }
          create: {
            args: Prisma.AiSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>
          }
          createMany: {
            args: Prisma.AiSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AiSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>
          }
          update: {
            args: Prisma.AiSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>
          }
          deleteMany: {
            args: Prisma.AiSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiSummaryPayload>
          }
          aggregate: {
            args: Prisma.AiSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiSummary>
          }
          groupBy: {
            args: Prisma.AiSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<AiSummaryCountAggregateOutputType> | number
          }
        }
      }
      UserItem: {
        payload: Prisma.$UserItemPayload<ExtArgs>
        fields: Prisma.UserItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          findFirst: {
            args: Prisma.UserItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          findMany: {
            args: Prisma.UserItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>[]
          }
          create: {
            args: Prisma.UserItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          createMany: {
            args: Prisma.UserItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          update: {
            args: Prisma.UserItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          deleteMany: {
            args: Prisma.UserItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          aggregate: {
            args: Prisma.UserItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserItem>
          }
          groupBy: {
            args: Prisma.UserItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserItemCountArgs<ExtArgs>
            result: $Utils.Optional<UserItemCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      BattleRoom: {
        payload: Prisma.$BattleRoomPayload<ExtArgs>
        fields: Prisma.BattleRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>
          }
          findFirst: {
            args: Prisma.BattleRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>
          }
          findMany: {
            args: Prisma.BattleRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>[]
          }
          create: {
            args: Prisma.BattleRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>
          }
          createMany: {
            args: Prisma.BattleRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BattleRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>
          }
          update: {
            args: Prisma.BattleRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>
          }
          deleteMany: {
            args: Prisma.BattleRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BattleRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleRoomPayload>
          }
          aggregate: {
            args: Prisma.BattleRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattleRoom>
          }
          groupBy: {
            args: Prisma.BattleRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleRoomCountArgs<ExtArgs>
            result: $Utils.Optional<BattleRoomCountAggregateOutputType> | number
          }
        }
      }
      BattleTitle: {
        payload: Prisma.$BattleTitlePayload<ExtArgs>
        fields: Prisma.BattleTitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleTitleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleTitleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>
          }
          findFirst: {
            args: Prisma.BattleTitleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleTitleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>
          }
          findMany: {
            args: Prisma.BattleTitleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>[]
          }
          create: {
            args: Prisma.BattleTitleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>
          }
          createMany: {
            args: Prisma.BattleTitleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BattleTitleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>
          }
          update: {
            args: Prisma.BattleTitleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>
          }
          deleteMany: {
            args: Prisma.BattleTitleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleTitleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BattleTitleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattleTitlePayload>
          }
          aggregate: {
            args: Prisma.BattleTitleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattleTitle>
          }
          groupBy: {
            args: Prisma.BattleTitleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleTitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleTitleCountArgs<ExtArgs>
            result: $Utils.Optional<BattleTitleCountAggregateOutputType> | number
          }
        }
      }
      QuestCompletion: {
        payload: Prisma.$QuestCompletionPayload<ExtArgs>
        fields: Prisma.QuestCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          findFirst: {
            args: Prisma.QuestCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          findMany: {
            args: Prisma.QuestCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>[]
          }
          create: {
            args: Prisma.QuestCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          createMany: {
            args: Prisma.QuestCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          update: {
            args: Prisma.QuestCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          deleteMany: {
            args: Prisma.QuestCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestCompletionPayload>
          }
          aggregate: {
            args: Prisma.QuestCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestCompletion>
          }
          groupBy: {
            args: Prisma.QuestCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCompletionCountAggregateOutputType> | number
          }
        }
      }
      PointTransaction: {
        payload: Prisma.$PointTransactionPayload<ExtArgs>
        fields: Prisma.PointTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>
          }
          findFirst: {
            args: Prisma.PointTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>
          }
          findMany: {
            args: Prisma.PointTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>[]
          }
          create: {
            args: Prisma.PointTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>
          }
          createMany: {
            args: Prisma.PointTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PointTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>
          }
          update: {
            args: Prisma.PointTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PointTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointTransactionPayload>
          }
          aggregate: {
            args: Prisma.PointTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointTransaction>
          }
          groupBy: {
            args: Prisma.PointTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PointTransactionCountAggregateOutputType> | number
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
    ranking?: RankingOmit
    quest?: QuestOmit
    roomParticipant?: RoomParticipantOmit
    aiJudgement?: AiJudgementOmit
    aiSummary?: AiSummaryOmit
    userItem?: UserItemOmit
    item?: ItemOmit
    battleRoom?: BattleRoomOmit
    battleTitle?: BattleTitleOmit
    questCompletion?: QuestCompletionOmit
    pointTransaction?: PointTransactionOmit
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
    ranking: number
    userItems: number
    roomParticipants: number
    questCompletions: number
    pointTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ranking?: boolean | UserCountOutputTypeCountRankingArgs
    userItems?: boolean | UserCountOutputTypeCountUserItemsArgs
    roomParticipants?: boolean | UserCountOutputTypeCountRoomParticipantsArgs
    questCompletions?: boolean | UserCountOutputTypeCountQuestCompletionsArgs
    pointTransactions?: boolean | UserCountOutputTypeCountPointTransactionsArgs
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
  export type UserCountOutputTypeCountRankingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestCompletionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointTransactionWhereInput
  }


  /**
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    questCompletions: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questCompletions?: boolean | QuestCountOutputTypeCountQuestCompletionsArgs
  }

  // Custom InputTypes
  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountQuestCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestCompletionWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    userItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userItems?: boolean | ItemCountOutputTypeCountUserItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountUserItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
  }


  /**
   * Count Type BattleRoomCountOutputType
   */

  export type BattleRoomCountOutputType = {
    battleTitle: number
    roomParticipants: number
    aiSummaries: number
    aiJudgements: number
  }

  export type BattleRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleTitle?: boolean | BattleRoomCountOutputTypeCountBattleTitleArgs
    roomParticipants?: boolean | BattleRoomCountOutputTypeCountRoomParticipantsArgs
    aiSummaries?: boolean | BattleRoomCountOutputTypeCountAiSummariesArgs
    aiJudgements?: boolean | BattleRoomCountOutputTypeCountAiJudgementsArgs
  }

  // Custom InputTypes
  /**
   * BattleRoomCountOutputType without action
   */
  export type BattleRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoomCountOutputType
     */
    select?: BattleRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BattleRoomCountOutputType without action
   */
  export type BattleRoomCountOutputTypeCountBattleTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleTitleWhereInput
  }

  /**
   * BattleRoomCountOutputType without action
   */
  export type BattleRoomCountOutputTypeCountRoomParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
  }

  /**
   * BattleRoomCountOutputType without action
   */
  export type BattleRoomCountOutputTypeCountAiSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiSummaryWhereInput
  }

  /**
   * BattleRoomCountOutputType without action
   */
  export type BattleRoomCountOutputTypeCountAiJudgementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiJudgementWhereInput
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
    id: number | null
    point: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    point: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    name: string | null
    email: string | null
    password: string | null
    profileImageUrl: string | null
    gender: string | null
    birth: Date | null
    phoneNumber: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    name: string | null
    email: string | null
    password: string | null
    profileImageUrl: string | null
    gender: string | null
    birth: Date | null
    phoneNumber: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    name: number
    email: number
    password: number
    profileImageUrl: number
    gender: number
    birth: number
    phoneNumber: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    point?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    point?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    name?: true
    email?: true
    password?: true
    profileImageUrl?: true
    gender?: true
    birth?: true
    phoneNumber?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    name?: true
    email?: true
    password?: true
    profileImageUrl?: true
    gender?: true
    birth?: true
    phoneNumber?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    name?: true
    email?: true
    password?: true
    profileImageUrl?: true
    gender?: true
    birth?: true
    phoneNumber?: true
    point?: true
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
    id: bigint
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl: string | null
    gender: string
    birth: Date
    phoneNumber: string
    point: number
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
    nickname?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImageUrl?: boolean
    gender?: boolean
    birth?: boolean
    phoneNumber?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ranking?: boolean | User$rankingArgs<ExtArgs>
    userItems?: boolean | User$userItemsArgs<ExtArgs>
    roomParticipants?: boolean | User$roomParticipantsArgs<ExtArgs>
    questCompletions?: boolean | User$questCompletionsArgs<ExtArgs>
    pointTransactions?: boolean | User$pointTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImageUrl?: boolean
    gender?: boolean
    birth?: boolean
    phoneNumber?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "name" | "email" | "password" | "profileImageUrl" | "gender" | "birth" | "phoneNumber" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ranking?: boolean | User$rankingArgs<ExtArgs>
    userItems?: boolean | User$userItemsArgs<ExtArgs>
    roomParticipants?: boolean | User$roomParticipantsArgs<ExtArgs>
    questCompletions?: boolean | User$questCompletionsArgs<ExtArgs>
    pointTransactions?: boolean | User$pointTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ranking: Prisma.$RankingPayload<ExtArgs>[]
      userItems: Prisma.$UserItemPayload<ExtArgs>[]
      roomParticipants: Prisma.$RoomParticipantPayload<ExtArgs>[]
      questCompletions: Prisma.$QuestCompletionPayload<ExtArgs>[]
      pointTransactions: Prisma.$PointTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nickname: string
      name: string
      email: string
      password: string
      profileImageUrl: string | null
      gender: string
      birth: Date
      phoneNumber: string
      point: number
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
    ranking<T extends User$rankingArgs<ExtArgs> = {}>(args?: Subset<T, User$rankingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userItems<T extends User$userItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$userItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomParticipants<T extends User$roomParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questCompletions<T extends User$questCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointTransactions<T extends User$pointTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'BigInt'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly point: FieldRef<"User", 'Int'>
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
   * User.ranking
   */
  export type User$rankingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    where?: RankingWhereInput
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    cursor?: RankingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * User.userItems
   */
  export type User$userItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    cursor?: UserItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * User.roomParticipants
   */
  export type User$roomParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    cursor?: RoomParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * User.questCompletions
   */
  export type User$questCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    where?: QuestCompletionWhereInput
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    cursor?: QuestCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * User.pointTransactions
   */
  export type User$pointTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    where?: PointTransactionWhereInput
    orderBy?: PointTransactionOrderByWithRelationInput | PointTransactionOrderByWithRelationInput[]
    cursor?: PointTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointTransactionScalarFieldEnum | PointTransactionScalarFieldEnum[]
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
   * Model Ranking
   */

  export type AggregateRanking = {
    _count: RankingCountAggregateOutputType | null
    _avg: RankingAvgAggregateOutputType | null
    _sum: RankingSumAggregateOutputType | null
    _min: RankingMinAggregateOutputType | null
    _max: RankingMaxAggregateOutputType | null
  }

  export type RankingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    rank: number | null
    previousRank: number | null
    totalPoints: number | null
  }

  export type RankingSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    rank: number | null
    previousRank: number | null
    totalPoints: number | null
  }

  export type RankingMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    rank: number | null
    previousRank: number | null
    tier: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RankingMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    rank: number | null
    previousRank: number | null
    tier: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RankingCountAggregateOutputType = {
    id: number
    userId: number
    rank: number
    previousRank: number
    tier: number
    totalPoints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RankingAvgAggregateInputType = {
    id?: true
    userId?: true
    rank?: true
    previousRank?: true
    totalPoints?: true
  }

  export type RankingSumAggregateInputType = {
    id?: true
    userId?: true
    rank?: true
    previousRank?: true
    totalPoints?: true
  }

  export type RankingMinAggregateInputType = {
    id?: true
    userId?: true
    rank?: true
    previousRank?: true
    tier?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RankingMaxAggregateInputType = {
    id?: true
    userId?: true
    rank?: true
    previousRank?: true
    tier?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RankingCountAggregateInputType = {
    id?: true
    userId?: true
    rank?: true
    previousRank?: true
    tier?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RankingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ranking to aggregate.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rankings
    **/
    _count?: true | RankingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankingMaxAggregateInputType
  }

  export type GetRankingAggregateType<T extends RankingAggregateArgs> = {
        [P in keyof T & keyof AggregateRanking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRanking[P]>
      : GetScalarType<T[P], AggregateRanking[P]>
  }




  export type RankingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingWhereInput
    orderBy?: RankingOrderByWithAggregationInput | RankingOrderByWithAggregationInput[]
    by: RankingScalarFieldEnum[] | RankingScalarFieldEnum
    having?: RankingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankingCountAggregateInputType | true
    _avg?: RankingAvgAggregateInputType
    _sum?: RankingSumAggregateInputType
    _min?: RankingMinAggregateInputType
    _max?: RankingMaxAggregateInputType
  }

  export type RankingGroupByOutputType = {
    id: bigint
    userId: bigint
    rank: number
    previousRank: number | null
    tier: string
    totalPoints: number
    createdAt: Date
    updatedAt: Date
    _count: RankingCountAggregateOutputType | null
    _avg: RankingAvgAggregateOutputType | null
    _sum: RankingSumAggregateOutputType | null
    _min: RankingMinAggregateOutputType | null
    _max: RankingMaxAggregateOutputType | null
  }

  type GetRankingGroupByPayload<T extends RankingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankingGroupByOutputType[P]>
            : GetScalarType<T[P], RankingGroupByOutputType[P]>
        }
      >
    >


  export type RankingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rank?: boolean
    previousRank?: boolean
    tier?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ranking"]>



  export type RankingSelectScalar = {
    id?: boolean
    userId?: boolean
    rank?: boolean
    previousRank?: boolean
    tier?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RankingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rank" | "previousRank" | "tier" | "totalPoints" | "createdAt" | "updatedAt", ExtArgs["result"]["ranking"]>
  export type RankingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RankingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ranking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      rank: number
      previousRank: number | null
      tier: string
      totalPoints: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ranking"]>
    composites: {}
  }

  type RankingGetPayload<S extends boolean | null | undefined | RankingDefaultArgs> = $Result.GetResult<Prisma.$RankingPayload, S>

  type RankingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RankingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RankingCountAggregateInputType | true
    }

  export interface RankingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ranking'], meta: { name: 'Ranking' } }
    /**
     * Find zero or one Ranking that matches the filter.
     * @param {RankingFindUniqueArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RankingFindUniqueArgs>(args: SelectSubset<T, RankingFindUniqueArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ranking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RankingFindUniqueOrThrowArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RankingFindUniqueOrThrowArgs>(args: SelectSubset<T, RankingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ranking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingFindFirstArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RankingFindFirstArgs>(args?: SelectSubset<T, RankingFindFirstArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ranking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingFindFirstOrThrowArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RankingFindFirstOrThrowArgs>(args?: SelectSubset<T, RankingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rankings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rankings
     * const rankings = await prisma.ranking.findMany()
     * 
     * // Get first 10 Rankings
     * const rankings = await prisma.ranking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankingWithIdOnly = await prisma.ranking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RankingFindManyArgs>(args?: SelectSubset<T, RankingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ranking.
     * @param {RankingCreateArgs} args - Arguments to create a Ranking.
     * @example
     * // Create one Ranking
     * const Ranking = await prisma.ranking.create({
     *   data: {
     *     // ... data to create a Ranking
     *   }
     * })
     * 
     */
    create<T extends RankingCreateArgs>(args: SelectSubset<T, RankingCreateArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rankings.
     * @param {RankingCreateManyArgs} args - Arguments to create many Rankings.
     * @example
     * // Create many Rankings
     * const ranking = await prisma.ranking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RankingCreateManyArgs>(args?: SelectSubset<T, RankingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ranking.
     * @param {RankingDeleteArgs} args - Arguments to delete one Ranking.
     * @example
     * // Delete one Ranking
     * const Ranking = await prisma.ranking.delete({
     *   where: {
     *     // ... filter to delete one Ranking
     *   }
     * })
     * 
     */
    delete<T extends RankingDeleteArgs>(args: SelectSubset<T, RankingDeleteArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ranking.
     * @param {RankingUpdateArgs} args - Arguments to update one Ranking.
     * @example
     * // Update one Ranking
     * const ranking = await prisma.ranking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RankingUpdateArgs>(args: SelectSubset<T, RankingUpdateArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rankings.
     * @param {RankingDeleteManyArgs} args - Arguments to filter Rankings to delete.
     * @example
     * // Delete a few Rankings
     * const { count } = await prisma.ranking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RankingDeleteManyArgs>(args?: SelectSubset<T, RankingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rankings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rankings
     * const ranking = await prisma.ranking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RankingUpdateManyArgs>(args: SelectSubset<T, RankingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ranking.
     * @param {RankingUpsertArgs} args - Arguments to update or create a Ranking.
     * @example
     * // Update or create a Ranking
     * const ranking = await prisma.ranking.upsert({
     *   create: {
     *     // ... data to create a Ranking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ranking we want to update
     *   }
     * })
     */
    upsert<T extends RankingUpsertArgs>(args: SelectSubset<T, RankingUpsertArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rankings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingCountArgs} args - Arguments to filter Rankings to count.
     * @example
     * // Count the number of Rankings
     * const count = await prisma.ranking.count({
     *   where: {
     *     // ... the filter for the Rankings we want to count
     *   }
     * })
    **/
    count<T extends RankingCountArgs>(
      args?: Subset<T, RankingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ranking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankingAggregateArgs>(args: Subset<T, RankingAggregateArgs>): Prisma.PrismaPromise<GetRankingAggregateType<T>>

    /**
     * Group by Ranking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingGroupByArgs} args - Group by arguments.
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
      T extends RankingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankingGroupByArgs['orderBy'] }
        : { orderBy?: RankingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RankingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ranking model
   */
  readonly fields: RankingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ranking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RankingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Ranking model
   */
  interface RankingFieldRefs {
    readonly id: FieldRef<"Ranking", 'BigInt'>
    readonly userId: FieldRef<"Ranking", 'BigInt'>
    readonly rank: FieldRef<"Ranking", 'Int'>
    readonly previousRank: FieldRef<"Ranking", 'Int'>
    readonly tier: FieldRef<"Ranking", 'String'>
    readonly totalPoints: FieldRef<"Ranking", 'Int'>
    readonly createdAt: FieldRef<"Ranking", 'DateTime'>
    readonly updatedAt: FieldRef<"Ranking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ranking findUnique
   */
  export type RankingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking findUniqueOrThrow
   */
  export type RankingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking findFirst
   */
  export type RankingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rankings.
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rankings.
     */
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Ranking findFirstOrThrow
   */
  export type RankingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rankings.
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rankings.
     */
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Ranking findMany
   */
  export type RankingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Rankings to fetch.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rankings.
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Ranking create
   */
  export type RankingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * The data needed to create a Ranking.
     */
    data: XOR<RankingCreateInput, RankingUncheckedCreateInput>
  }

  /**
   * Ranking createMany
   */
  export type RankingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rankings.
     */
    data: RankingCreateManyInput | RankingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ranking update
   */
  export type RankingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * The data needed to update a Ranking.
     */
    data: XOR<RankingUpdateInput, RankingUncheckedUpdateInput>
    /**
     * Choose, which Ranking to update.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking updateMany
   */
  export type RankingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rankings.
     */
    data: XOR<RankingUpdateManyMutationInput, RankingUncheckedUpdateManyInput>
    /**
     * Filter which Rankings to update
     */
    where?: RankingWhereInput
    /**
     * Limit how many Rankings to update.
     */
    limit?: number
  }

  /**
   * Ranking upsert
   */
  export type RankingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * The filter to search for the Ranking to update in case it exists.
     */
    where: RankingWhereUniqueInput
    /**
     * In case the Ranking found by the `where` argument doesn't exist, create a new Ranking with this data.
     */
    create: XOR<RankingCreateInput, RankingUncheckedCreateInput>
    /**
     * In case the Ranking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankingUpdateInput, RankingUncheckedUpdateInput>
  }

  /**
   * Ranking delete
   */
  export type RankingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter which Ranking to delete.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking deleteMany
   */
  export type RankingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rankings to delete
     */
    where?: RankingWhereInput
    /**
     * Limit how many Rankings to delete.
     */
    limit?: number
  }

  /**
   * Ranking without action
   */
  export type RankingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
  }


  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestAvgAggregateOutputType = {
    id: number | null
    rewardPts: number | null
  }

  export type QuestSumAggregateOutputType = {
    id: bigint | null
    rewardPts: number | null
  }

  export type QuestMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    type: string | null
    rewardPts: number | null
    createdAt: Date | null
  }

  export type QuestMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    type: string | null
    rewardPts: number | null
    createdAt: Date | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    rewardPts: number
    createdAt: number
    _all: number
  }


  export type QuestAvgAggregateInputType = {
    id?: true
    rewardPts?: true
  }

  export type QuestSumAggregateInputType = {
    id?: true
    rewardPts?: true
  }

  export type QuestMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    rewardPts?: true
    createdAt?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    rewardPts?: true
    createdAt?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    rewardPts?: true
    createdAt?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _avg?: QuestAvgAggregateInputType
    _sum?: QuestSumAggregateInputType
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    type: string | null
    rewardPts: number
    createdAt: Date
    _count: QuestCountAggregateOutputType | null
    _avg: QuestAvgAggregateOutputType | null
    _sum: QuestSumAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    rewardPts?: boolean
    createdAt?: boolean
    questCompletions?: boolean | Quest$questCompletionsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>



  export type QuestSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    rewardPts?: boolean
    createdAt?: boolean
  }

  export type QuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "rewardPts" | "createdAt", ExtArgs["result"]["quest"]>
  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questCompletions?: boolean | Quest$questCompletionsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      questCompletions: Prisma.$QuestCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      type: string | null
      rewardPts: number
      createdAt: Date
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }

  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestFindUniqueArgs>(args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestFindFirstArgs>(args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestFindManyArgs>(args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
     */
    create<T extends QuestCreateArgs>(args: SelectSubset<T, QuestCreateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCreateManyArgs>(args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
     */
    delete<T extends QuestDeleteArgs>(args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestUpdateArgs>(args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDeleteManyArgs>(args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestUpdateManyArgs>(args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
     */
    upsert<T extends QuestUpsertArgs>(args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
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
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questCompletions<T extends Quest$questCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, Quest$questCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quest model
   */
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'BigInt'>
    readonly name: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly type: FieldRef<"Quest", 'String'>
    readonly rewardPts: FieldRef<"Quest", 'Int'>
    readonly createdAt: FieldRef<"Quest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to delete.
     */
    limit?: number
  }

  /**
   * Quest.questCompletions
   */
  export type Quest$questCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    where?: QuestCompletionWhereInput
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    cursor?: QuestCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model RoomParticipant
   */

  export type AggregateRoomParticipant = {
    _count: RoomParticipantCountAggregateOutputType | null
    _avg: RoomParticipantAvgAggregateOutputType | null
    _sum: RoomParticipantSumAggregateOutputType | null
    _min: RoomParticipantMinAggregateOutputType | null
    _max: RoomParticipantMaxAggregateOutputType | null
  }

  export type RoomParticipantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
  }

  export type RoomParticipantSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    roomId: bigint | null
  }

  export type RoomParticipantMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    roomId: bigint | null
    role: string | null
    joinedAt: Date | null
    endAt: Date | null
  }

  export type RoomParticipantMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    roomId: bigint | null
    role: string | null
    joinedAt: Date | null
    endAt: Date | null
  }

  export type RoomParticipantCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    role: number
    joinedAt: number
    endAt: number
    _all: number
  }


  export type RoomParticipantAvgAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
  }

  export type RoomParticipantSumAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
  }

  export type RoomParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    role?: true
    joinedAt?: true
    endAt?: true
  }

  export type RoomParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    role?: true
    joinedAt?: true
    endAt?: true
  }

  export type RoomParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    role?: true
    joinedAt?: true
    endAt?: true
    _all?: true
  }

  export type RoomParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomParticipant to aggregate.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomParticipants
    **/
    _count?: true | RoomParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomParticipantMaxAggregateInputType
  }

  export type GetRoomParticipantAggregateType<T extends RoomParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomParticipant[P]>
      : GetScalarType<T[P], AggregateRoomParticipant[P]>
  }




  export type RoomParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithAggregationInput | RoomParticipantOrderByWithAggregationInput[]
    by: RoomParticipantScalarFieldEnum[] | RoomParticipantScalarFieldEnum
    having?: RoomParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomParticipantCountAggregateInputType | true
    _avg?: RoomParticipantAvgAggregateInputType
    _sum?: RoomParticipantSumAggregateInputType
    _min?: RoomParticipantMinAggregateInputType
    _max?: RoomParticipantMaxAggregateInputType
  }

  export type RoomParticipantGroupByOutputType = {
    id: bigint
    userId: bigint
    roomId: bigint
    role: string
    joinedAt: Date
    endAt: Date | null
    _count: RoomParticipantCountAggregateOutputType | null
    _avg: RoomParticipantAvgAggregateOutputType | null
    _sum: RoomParticipantSumAggregateOutputType | null
    _min: RoomParticipantMinAggregateOutputType | null
    _max: RoomParticipantMaxAggregateOutputType | null
  }

  type GetRoomParticipantGroupByPayload<T extends RoomParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RoomParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RoomParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    role?: boolean
    joinedAt?: boolean
    endAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>



  export type RoomParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    role?: boolean
    joinedAt?: boolean
    endAt?: boolean
  }

  export type RoomParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "role" | "joinedAt" | "endAt", ExtArgs["result"]["roomParticipant"]>
  export type RoomParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }

  export type $RoomParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomParticipant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      battleRoom: Prisma.$BattleRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      roomId: bigint
      role: string
      joinedAt: Date
      endAt: Date | null
    }, ExtArgs["result"]["roomParticipant"]>
    composites: {}
  }

  type RoomParticipantGetPayload<S extends boolean | null | undefined | RoomParticipantDefaultArgs> = $Result.GetResult<Prisma.$RoomParticipantPayload, S>

  type RoomParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomParticipantCountAggregateInputType | true
    }

  export interface RoomParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomParticipant'], meta: { name: 'RoomParticipant' } }
    /**
     * Find zero or one RoomParticipant that matches the filter.
     * @param {RoomParticipantFindUniqueArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomParticipantFindUniqueArgs>(args: SelectSubset<T, RoomParticipantFindUniqueArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomParticipantFindUniqueOrThrowArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindFirstArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomParticipantFindFirstArgs>(args?: SelectSubset<T, RoomParticipantFindFirstArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindFirstOrThrowArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomParticipants
     * const roomParticipants = await prisma.roomParticipant.findMany()
     * 
     * // Get first 10 RoomParticipants
     * const roomParticipants = await prisma.roomParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomParticipantFindManyArgs>(args?: SelectSubset<T, RoomParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomParticipant.
     * @param {RoomParticipantCreateArgs} args - Arguments to create a RoomParticipant.
     * @example
     * // Create one RoomParticipant
     * const RoomParticipant = await prisma.roomParticipant.create({
     *   data: {
     *     // ... data to create a RoomParticipant
     *   }
     * })
     * 
     */
    create<T extends RoomParticipantCreateArgs>(args: SelectSubset<T, RoomParticipantCreateArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomParticipants.
     * @param {RoomParticipantCreateManyArgs} args - Arguments to create many RoomParticipants.
     * @example
     * // Create many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomParticipantCreateManyArgs>(args?: SelectSubset<T, RoomParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomParticipant.
     * @param {RoomParticipantDeleteArgs} args - Arguments to delete one RoomParticipant.
     * @example
     * // Delete one RoomParticipant
     * const RoomParticipant = await prisma.roomParticipant.delete({
     *   where: {
     *     // ... filter to delete one RoomParticipant
     *   }
     * })
     * 
     */
    delete<T extends RoomParticipantDeleteArgs>(args: SelectSubset<T, RoomParticipantDeleteArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomParticipant.
     * @param {RoomParticipantUpdateArgs} args - Arguments to update one RoomParticipant.
     * @example
     * // Update one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomParticipantUpdateArgs>(args: SelectSubset<T, RoomParticipantUpdateArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomParticipants.
     * @param {RoomParticipantDeleteManyArgs} args - Arguments to filter RoomParticipants to delete.
     * @example
     * // Delete a few RoomParticipants
     * const { count } = await prisma.roomParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomParticipantDeleteManyArgs>(args?: SelectSubset<T, RoomParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomParticipantUpdateManyArgs>(args: SelectSubset<T, RoomParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomParticipant.
     * @param {RoomParticipantUpsertArgs} args - Arguments to update or create a RoomParticipant.
     * @example
     * // Update or create a RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.upsert({
     *   create: {
     *     // ... data to create a RoomParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RoomParticipantUpsertArgs>(args: SelectSubset<T, RoomParticipantUpsertArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantCountArgs} args - Arguments to filter RoomParticipants to count.
     * @example
     * // Count the number of RoomParticipants
     * const count = await prisma.roomParticipant.count({
     *   where: {
     *     // ... the filter for the RoomParticipants we want to count
     *   }
     * })
    **/
    count<T extends RoomParticipantCountArgs>(
      args?: Subset<T, RoomParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomParticipantAggregateArgs>(args: Subset<T, RoomParticipantAggregateArgs>): Prisma.PrismaPromise<GetRoomParticipantAggregateType<T>>

    /**
     * Group by RoomParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantGroupByArgs} args - Group by arguments.
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
      T extends RoomParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RoomParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomParticipant model
   */
  readonly fields: RoomParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    battleRoom<T extends BattleRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoomDefaultArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomParticipant model
   */
  interface RoomParticipantFieldRefs {
    readonly id: FieldRef<"RoomParticipant", 'BigInt'>
    readonly userId: FieldRef<"RoomParticipant", 'BigInt'>
    readonly roomId: FieldRef<"RoomParticipant", 'BigInt'>
    readonly role: FieldRef<"RoomParticipant", 'String'>
    readonly joinedAt: FieldRef<"RoomParticipant", 'DateTime'>
    readonly endAt: FieldRef<"RoomParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomParticipant findUnique
   */
  export type RoomParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant findUniqueOrThrow
   */
  export type RoomParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant findFirst
   */
  export type RoomParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant findFirstOrThrow
   */
  export type RoomParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant findMany
   */
  export type RoomParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipants to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant create
   */
  export type RoomParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomParticipant.
     */
    data: XOR<RoomParticipantCreateInput, RoomParticipantUncheckedCreateInput>
  }

  /**
   * RoomParticipant createMany
   */
  export type RoomParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomParticipants.
     */
    data: RoomParticipantCreateManyInput | RoomParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomParticipant update
   */
  export type RoomParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomParticipant.
     */
    data: XOR<RoomParticipantUpdateInput, RoomParticipantUncheckedUpdateInput>
    /**
     * Choose, which RoomParticipant to update.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant updateMany
   */
  export type RoomParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomParticipants.
     */
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RoomParticipants to update
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to update.
     */
    limit?: number
  }

  /**
   * RoomParticipant upsert
   */
  export type RoomParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomParticipant to update in case it exists.
     */
    where: RoomParticipantWhereUniqueInput
    /**
     * In case the RoomParticipant found by the `where` argument doesn't exist, create a new RoomParticipant with this data.
     */
    create: XOR<RoomParticipantCreateInput, RoomParticipantUncheckedCreateInput>
    /**
     * In case the RoomParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomParticipantUpdateInput, RoomParticipantUncheckedUpdateInput>
  }

  /**
   * RoomParticipant delete
   */
  export type RoomParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter which RoomParticipant to delete.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant deleteMany
   */
  export type RoomParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomParticipants to delete
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to delete.
     */
    limit?: number
  }

  /**
   * RoomParticipant without action
   */
  export type RoomParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
  }


  /**
   * Model AiJudgement
   */

  export type AggregateAiJudgement = {
    _count: AiJudgementCountAggregateOutputType | null
    _avg: AiJudgementAvgAggregateOutputType | null
    _sum: AiJudgementSumAggregateOutputType | null
    _min: AiJudgementMinAggregateOutputType | null
    _max: AiJudgementMaxAggregateOutputType | null
  }

  export type AiJudgementAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    confidence: Decimal | null
  }

  export type AiJudgementSumAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    confidence: Decimal | null
  }

  export type AiJudgementMinAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    confidence: Decimal | null
    details: string | null
    createdAt: Date | null
  }

  export type AiJudgementMaxAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    confidence: Decimal | null
    details: string | null
    createdAt: Date | null
  }

  export type AiJudgementCountAggregateOutputType = {
    id: number
    roomId: number
    confidence: number
    details: number
    createdAt: number
    _all: number
  }


  export type AiJudgementAvgAggregateInputType = {
    id?: true
    roomId?: true
    confidence?: true
  }

  export type AiJudgementSumAggregateInputType = {
    id?: true
    roomId?: true
    confidence?: true
  }

  export type AiJudgementMinAggregateInputType = {
    id?: true
    roomId?: true
    confidence?: true
    details?: true
    createdAt?: true
  }

  export type AiJudgementMaxAggregateInputType = {
    id?: true
    roomId?: true
    confidence?: true
    details?: true
    createdAt?: true
  }

  export type AiJudgementCountAggregateInputType = {
    id?: true
    roomId?: true
    confidence?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AiJudgementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiJudgement to aggregate.
     */
    where?: AiJudgementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiJudgements to fetch.
     */
    orderBy?: AiJudgementOrderByWithRelationInput | AiJudgementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiJudgementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiJudgements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiJudgements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiJudgements
    **/
    _count?: true | AiJudgementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiJudgementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiJudgementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiJudgementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiJudgementMaxAggregateInputType
  }

  export type GetAiJudgementAggregateType<T extends AiJudgementAggregateArgs> = {
        [P in keyof T & keyof AggregateAiJudgement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiJudgement[P]>
      : GetScalarType<T[P], AggregateAiJudgement[P]>
  }




  export type AiJudgementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiJudgementWhereInput
    orderBy?: AiJudgementOrderByWithAggregationInput | AiJudgementOrderByWithAggregationInput[]
    by: AiJudgementScalarFieldEnum[] | AiJudgementScalarFieldEnum
    having?: AiJudgementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiJudgementCountAggregateInputType | true
    _avg?: AiJudgementAvgAggregateInputType
    _sum?: AiJudgementSumAggregateInputType
    _min?: AiJudgementMinAggregateInputType
    _max?: AiJudgementMaxAggregateInputType
  }

  export type AiJudgementGroupByOutputType = {
    id: bigint
    roomId: bigint
    confidence: Decimal
    details: string
    createdAt: Date
    _count: AiJudgementCountAggregateOutputType | null
    _avg: AiJudgementAvgAggregateOutputType | null
    _sum: AiJudgementSumAggregateOutputType | null
    _min: AiJudgementMinAggregateOutputType | null
    _max: AiJudgementMaxAggregateOutputType | null
  }

  type GetAiJudgementGroupByPayload<T extends AiJudgementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiJudgementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiJudgementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiJudgementGroupByOutputType[P]>
            : GetScalarType<T[P], AiJudgementGroupByOutputType[P]>
        }
      >
    >


  export type AiJudgementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    confidence?: boolean
    details?: boolean
    createdAt?: boolean
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiJudgement"]>



  export type AiJudgementSelectScalar = {
    id?: boolean
    roomId?: boolean
    confidence?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AiJudgementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "confidence" | "details" | "createdAt", ExtArgs["result"]["aiJudgement"]>
  export type AiJudgementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }

  export type $AiJudgementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiJudgement"
    objects: {
      battleRoom: Prisma.$BattleRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      roomId: bigint
      confidence: Prisma.Decimal
      details: string
      createdAt: Date
    }, ExtArgs["result"]["aiJudgement"]>
    composites: {}
  }

  type AiJudgementGetPayload<S extends boolean | null | undefined | AiJudgementDefaultArgs> = $Result.GetResult<Prisma.$AiJudgementPayload, S>

  type AiJudgementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiJudgementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiJudgementCountAggregateInputType | true
    }

  export interface AiJudgementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiJudgement'], meta: { name: 'AiJudgement' } }
    /**
     * Find zero or one AiJudgement that matches the filter.
     * @param {AiJudgementFindUniqueArgs} args - Arguments to find a AiJudgement
     * @example
     * // Get one AiJudgement
     * const aiJudgement = await prisma.aiJudgement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiJudgementFindUniqueArgs>(args: SelectSubset<T, AiJudgementFindUniqueArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiJudgement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiJudgementFindUniqueOrThrowArgs} args - Arguments to find a AiJudgement
     * @example
     * // Get one AiJudgement
     * const aiJudgement = await prisma.aiJudgement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiJudgementFindUniqueOrThrowArgs>(args: SelectSubset<T, AiJudgementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiJudgement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementFindFirstArgs} args - Arguments to find a AiJudgement
     * @example
     * // Get one AiJudgement
     * const aiJudgement = await prisma.aiJudgement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiJudgementFindFirstArgs>(args?: SelectSubset<T, AiJudgementFindFirstArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiJudgement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementFindFirstOrThrowArgs} args - Arguments to find a AiJudgement
     * @example
     * // Get one AiJudgement
     * const aiJudgement = await prisma.aiJudgement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiJudgementFindFirstOrThrowArgs>(args?: SelectSubset<T, AiJudgementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiJudgements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiJudgements
     * const aiJudgements = await prisma.aiJudgement.findMany()
     * 
     * // Get first 10 AiJudgements
     * const aiJudgements = await prisma.aiJudgement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiJudgementWithIdOnly = await prisma.aiJudgement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiJudgementFindManyArgs>(args?: SelectSubset<T, AiJudgementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiJudgement.
     * @param {AiJudgementCreateArgs} args - Arguments to create a AiJudgement.
     * @example
     * // Create one AiJudgement
     * const AiJudgement = await prisma.aiJudgement.create({
     *   data: {
     *     // ... data to create a AiJudgement
     *   }
     * })
     * 
     */
    create<T extends AiJudgementCreateArgs>(args: SelectSubset<T, AiJudgementCreateArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiJudgements.
     * @param {AiJudgementCreateManyArgs} args - Arguments to create many AiJudgements.
     * @example
     * // Create many AiJudgements
     * const aiJudgement = await prisma.aiJudgement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiJudgementCreateManyArgs>(args?: SelectSubset<T, AiJudgementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AiJudgement.
     * @param {AiJudgementDeleteArgs} args - Arguments to delete one AiJudgement.
     * @example
     * // Delete one AiJudgement
     * const AiJudgement = await prisma.aiJudgement.delete({
     *   where: {
     *     // ... filter to delete one AiJudgement
     *   }
     * })
     * 
     */
    delete<T extends AiJudgementDeleteArgs>(args: SelectSubset<T, AiJudgementDeleteArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiJudgement.
     * @param {AiJudgementUpdateArgs} args - Arguments to update one AiJudgement.
     * @example
     * // Update one AiJudgement
     * const aiJudgement = await prisma.aiJudgement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiJudgementUpdateArgs>(args: SelectSubset<T, AiJudgementUpdateArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiJudgements.
     * @param {AiJudgementDeleteManyArgs} args - Arguments to filter AiJudgements to delete.
     * @example
     * // Delete a few AiJudgements
     * const { count } = await prisma.aiJudgement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiJudgementDeleteManyArgs>(args?: SelectSubset<T, AiJudgementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiJudgements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiJudgements
     * const aiJudgement = await prisma.aiJudgement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiJudgementUpdateManyArgs>(args: SelectSubset<T, AiJudgementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiJudgement.
     * @param {AiJudgementUpsertArgs} args - Arguments to update or create a AiJudgement.
     * @example
     * // Update or create a AiJudgement
     * const aiJudgement = await prisma.aiJudgement.upsert({
     *   create: {
     *     // ... data to create a AiJudgement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiJudgement we want to update
     *   }
     * })
     */
    upsert<T extends AiJudgementUpsertArgs>(args: SelectSubset<T, AiJudgementUpsertArgs<ExtArgs>>): Prisma__AiJudgementClient<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiJudgements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementCountArgs} args - Arguments to filter AiJudgements to count.
     * @example
     * // Count the number of AiJudgements
     * const count = await prisma.aiJudgement.count({
     *   where: {
     *     // ... the filter for the AiJudgements we want to count
     *   }
     * })
    **/
    count<T extends AiJudgementCountArgs>(
      args?: Subset<T, AiJudgementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiJudgementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiJudgement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiJudgementAggregateArgs>(args: Subset<T, AiJudgementAggregateArgs>): Prisma.PrismaPromise<GetAiJudgementAggregateType<T>>

    /**
     * Group by AiJudgement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiJudgementGroupByArgs} args - Group by arguments.
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
      T extends AiJudgementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiJudgementGroupByArgs['orderBy'] }
        : { orderBy?: AiJudgementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiJudgementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiJudgementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiJudgement model
   */
  readonly fields: AiJudgementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiJudgement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiJudgementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battleRoom<T extends BattleRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoomDefaultArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AiJudgement model
   */
  interface AiJudgementFieldRefs {
    readonly id: FieldRef<"AiJudgement", 'BigInt'>
    readonly roomId: FieldRef<"AiJudgement", 'BigInt'>
    readonly confidence: FieldRef<"AiJudgement", 'Decimal'>
    readonly details: FieldRef<"AiJudgement", 'String'>
    readonly createdAt: FieldRef<"AiJudgement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiJudgement findUnique
   */
  export type AiJudgementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * Filter, which AiJudgement to fetch.
     */
    where: AiJudgementWhereUniqueInput
  }

  /**
   * AiJudgement findUniqueOrThrow
   */
  export type AiJudgementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * Filter, which AiJudgement to fetch.
     */
    where: AiJudgementWhereUniqueInput
  }

  /**
   * AiJudgement findFirst
   */
  export type AiJudgementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * Filter, which AiJudgement to fetch.
     */
    where?: AiJudgementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiJudgements to fetch.
     */
    orderBy?: AiJudgementOrderByWithRelationInput | AiJudgementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiJudgements.
     */
    cursor?: AiJudgementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiJudgements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiJudgements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiJudgements.
     */
    distinct?: AiJudgementScalarFieldEnum | AiJudgementScalarFieldEnum[]
  }

  /**
   * AiJudgement findFirstOrThrow
   */
  export type AiJudgementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * Filter, which AiJudgement to fetch.
     */
    where?: AiJudgementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiJudgements to fetch.
     */
    orderBy?: AiJudgementOrderByWithRelationInput | AiJudgementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiJudgements.
     */
    cursor?: AiJudgementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiJudgements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiJudgements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiJudgements.
     */
    distinct?: AiJudgementScalarFieldEnum | AiJudgementScalarFieldEnum[]
  }

  /**
   * AiJudgement findMany
   */
  export type AiJudgementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * Filter, which AiJudgements to fetch.
     */
    where?: AiJudgementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiJudgements to fetch.
     */
    orderBy?: AiJudgementOrderByWithRelationInput | AiJudgementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiJudgements.
     */
    cursor?: AiJudgementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiJudgements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiJudgements.
     */
    skip?: number
    distinct?: AiJudgementScalarFieldEnum | AiJudgementScalarFieldEnum[]
  }

  /**
   * AiJudgement create
   */
  export type AiJudgementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * The data needed to create a AiJudgement.
     */
    data: XOR<AiJudgementCreateInput, AiJudgementUncheckedCreateInput>
  }

  /**
   * AiJudgement createMany
   */
  export type AiJudgementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiJudgements.
     */
    data: AiJudgementCreateManyInput | AiJudgementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiJudgement update
   */
  export type AiJudgementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * The data needed to update a AiJudgement.
     */
    data: XOR<AiJudgementUpdateInput, AiJudgementUncheckedUpdateInput>
    /**
     * Choose, which AiJudgement to update.
     */
    where: AiJudgementWhereUniqueInput
  }

  /**
   * AiJudgement updateMany
   */
  export type AiJudgementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiJudgements.
     */
    data: XOR<AiJudgementUpdateManyMutationInput, AiJudgementUncheckedUpdateManyInput>
    /**
     * Filter which AiJudgements to update
     */
    where?: AiJudgementWhereInput
    /**
     * Limit how many AiJudgements to update.
     */
    limit?: number
  }

  /**
   * AiJudgement upsert
   */
  export type AiJudgementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * The filter to search for the AiJudgement to update in case it exists.
     */
    where: AiJudgementWhereUniqueInput
    /**
     * In case the AiJudgement found by the `where` argument doesn't exist, create a new AiJudgement with this data.
     */
    create: XOR<AiJudgementCreateInput, AiJudgementUncheckedCreateInput>
    /**
     * In case the AiJudgement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiJudgementUpdateInput, AiJudgementUncheckedUpdateInput>
  }

  /**
   * AiJudgement delete
   */
  export type AiJudgementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    /**
     * Filter which AiJudgement to delete.
     */
    where: AiJudgementWhereUniqueInput
  }

  /**
   * AiJudgement deleteMany
   */
  export type AiJudgementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiJudgements to delete
     */
    where?: AiJudgementWhereInput
    /**
     * Limit how many AiJudgements to delete.
     */
    limit?: number
  }

  /**
   * AiJudgement without action
   */
  export type AiJudgementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
  }


  /**
   * Model AiSummary
   */

  export type AggregateAiSummary = {
    _count: AiSummaryCountAggregateOutputType | null
    _avg: AiSummaryAvgAggregateOutputType | null
    _sum: AiSummarySumAggregateOutputType | null
    _min: AiSummaryMinAggregateOutputType | null
    _max: AiSummaryMaxAggregateOutputType | null
  }

  export type AiSummaryAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type AiSummarySumAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
  }

  export type AiSummaryMinAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    summary: string | null
    createdAt: Date | null
  }

  export type AiSummaryMaxAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    summary: string | null
    createdAt: Date | null
  }

  export type AiSummaryCountAggregateOutputType = {
    id: number
    roomId: number
    summary: number
    createdAt: number
    _all: number
  }


  export type AiSummaryAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type AiSummarySumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type AiSummaryMinAggregateInputType = {
    id?: true
    roomId?: true
    summary?: true
    createdAt?: true
  }

  export type AiSummaryMaxAggregateInputType = {
    id?: true
    roomId?: true
    summary?: true
    createdAt?: true
  }

  export type AiSummaryCountAggregateInputType = {
    id?: true
    roomId?: true
    summary?: true
    createdAt?: true
    _all?: true
  }

  export type AiSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiSummary to aggregate.
     */
    where?: AiSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?: AiSummaryOrderByWithRelationInput | AiSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiSummaries
    **/
    _count?: true | AiSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiSummaryMaxAggregateInputType
  }

  export type GetAiSummaryAggregateType<T extends AiSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateAiSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiSummary[P]>
      : GetScalarType<T[P], AggregateAiSummary[P]>
  }




  export type AiSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiSummaryWhereInput
    orderBy?: AiSummaryOrderByWithAggregationInput | AiSummaryOrderByWithAggregationInput[]
    by: AiSummaryScalarFieldEnum[] | AiSummaryScalarFieldEnum
    having?: AiSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiSummaryCountAggregateInputType | true
    _avg?: AiSummaryAvgAggregateInputType
    _sum?: AiSummarySumAggregateInputType
    _min?: AiSummaryMinAggregateInputType
    _max?: AiSummaryMaxAggregateInputType
  }

  export type AiSummaryGroupByOutputType = {
    id: bigint
    roomId: bigint
    summary: string
    createdAt: Date
    _count: AiSummaryCountAggregateOutputType | null
    _avg: AiSummaryAvgAggregateOutputType | null
    _sum: AiSummarySumAggregateOutputType | null
    _min: AiSummaryMinAggregateOutputType | null
    _max: AiSummaryMaxAggregateOutputType | null
  }

  type GetAiSummaryGroupByPayload<T extends AiSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], AiSummaryGroupByOutputType[P]>
        }
      >
    >


  export type AiSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    summary?: boolean
    createdAt?: boolean
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiSummary"]>



  export type AiSummarySelectScalar = {
    id?: boolean
    roomId?: boolean
    summary?: boolean
    createdAt?: boolean
  }

  export type AiSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "summary" | "createdAt", ExtArgs["result"]["aiSummary"]>
  export type AiSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }

  export type $AiSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiSummary"
    objects: {
      battleRoom: Prisma.$BattleRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      roomId: bigint
      summary: string
      createdAt: Date
    }, ExtArgs["result"]["aiSummary"]>
    composites: {}
  }

  type AiSummaryGetPayload<S extends boolean | null | undefined | AiSummaryDefaultArgs> = $Result.GetResult<Prisma.$AiSummaryPayload, S>

  type AiSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiSummaryCountAggregateInputType | true
    }

  export interface AiSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiSummary'], meta: { name: 'AiSummary' } }
    /**
     * Find zero or one AiSummary that matches the filter.
     * @param {AiSummaryFindUniqueArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiSummaryFindUniqueArgs>(args: SelectSubset<T, AiSummaryFindUniqueArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiSummaryFindUniqueOrThrowArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, AiSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryFindFirstArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiSummaryFindFirstArgs>(args?: SelectSubset<T, AiSummaryFindFirstArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryFindFirstOrThrowArgs} args - Arguments to find a AiSummary
     * @example
     * // Get one AiSummary
     * const aiSummary = await prisma.aiSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, AiSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiSummaries
     * const aiSummaries = await prisma.aiSummary.findMany()
     * 
     * // Get first 10 AiSummaries
     * const aiSummaries = await prisma.aiSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiSummaryWithIdOnly = await prisma.aiSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiSummaryFindManyArgs>(args?: SelectSubset<T, AiSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiSummary.
     * @param {AiSummaryCreateArgs} args - Arguments to create a AiSummary.
     * @example
     * // Create one AiSummary
     * const AiSummary = await prisma.aiSummary.create({
     *   data: {
     *     // ... data to create a AiSummary
     *   }
     * })
     * 
     */
    create<T extends AiSummaryCreateArgs>(args: SelectSubset<T, AiSummaryCreateArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiSummaries.
     * @param {AiSummaryCreateManyArgs} args - Arguments to create many AiSummaries.
     * @example
     * // Create many AiSummaries
     * const aiSummary = await prisma.aiSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiSummaryCreateManyArgs>(args?: SelectSubset<T, AiSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AiSummary.
     * @param {AiSummaryDeleteArgs} args - Arguments to delete one AiSummary.
     * @example
     * // Delete one AiSummary
     * const AiSummary = await prisma.aiSummary.delete({
     *   where: {
     *     // ... filter to delete one AiSummary
     *   }
     * })
     * 
     */
    delete<T extends AiSummaryDeleteArgs>(args: SelectSubset<T, AiSummaryDeleteArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiSummary.
     * @param {AiSummaryUpdateArgs} args - Arguments to update one AiSummary.
     * @example
     * // Update one AiSummary
     * const aiSummary = await prisma.aiSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiSummaryUpdateArgs>(args: SelectSubset<T, AiSummaryUpdateArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiSummaries.
     * @param {AiSummaryDeleteManyArgs} args - Arguments to filter AiSummaries to delete.
     * @example
     * // Delete a few AiSummaries
     * const { count } = await prisma.aiSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiSummaryDeleteManyArgs>(args?: SelectSubset<T, AiSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiSummaries
     * const aiSummary = await prisma.aiSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiSummaryUpdateManyArgs>(args: SelectSubset<T, AiSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiSummary.
     * @param {AiSummaryUpsertArgs} args - Arguments to update or create a AiSummary.
     * @example
     * // Update or create a AiSummary
     * const aiSummary = await prisma.aiSummary.upsert({
     *   create: {
     *     // ... data to create a AiSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiSummary we want to update
     *   }
     * })
     */
    upsert<T extends AiSummaryUpsertArgs>(args: SelectSubset<T, AiSummaryUpsertArgs<ExtArgs>>): Prisma__AiSummaryClient<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryCountArgs} args - Arguments to filter AiSummaries to count.
     * @example
     * // Count the number of AiSummaries
     * const count = await prisma.aiSummary.count({
     *   where: {
     *     // ... the filter for the AiSummaries we want to count
     *   }
     * })
    **/
    count<T extends AiSummaryCountArgs>(
      args?: Subset<T, AiSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiSummaryAggregateArgs>(args: Subset<T, AiSummaryAggregateArgs>): Prisma.PrismaPromise<GetAiSummaryAggregateType<T>>

    /**
     * Group by AiSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiSummaryGroupByArgs} args - Group by arguments.
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
      T extends AiSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiSummaryGroupByArgs['orderBy'] }
        : { orderBy?: AiSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiSummary model
   */
  readonly fields: AiSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battleRoom<T extends BattleRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoomDefaultArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AiSummary model
   */
  interface AiSummaryFieldRefs {
    readonly id: FieldRef<"AiSummary", 'BigInt'>
    readonly roomId: FieldRef<"AiSummary", 'BigInt'>
    readonly summary: FieldRef<"AiSummary", 'String'>
    readonly createdAt: FieldRef<"AiSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiSummary findUnique
   */
  export type AiSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AiSummary to fetch.
     */
    where: AiSummaryWhereUniqueInput
  }

  /**
   * AiSummary findUniqueOrThrow
   */
  export type AiSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AiSummary to fetch.
     */
    where: AiSummaryWhereUniqueInput
  }

  /**
   * AiSummary findFirst
   */
  export type AiSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AiSummary to fetch.
     */
    where?: AiSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?: AiSummaryOrderByWithRelationInput | AiSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiSummaries.
     */
    cursor?: AiSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiSummaries.
     */
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[]
  }

  /**
   * AiSummary findFirstOrThrow
   */
  export type AiSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AiSummary to fetch.
     */
    where?: AiSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?: AiSummaryOrderByWithRelationInput | AiSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiSummaries.
     */
    cursor?: AiSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiSummaries.
     */
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[]
  }

  /**
   * AiSummary findMany
   */
  export type AiSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AiSummaries to fetch.
     */
    where?: AiSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiSummaries to fetch.
     */
    orderBy?: AiSummaryOrderByWithRelationInput | AiSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiSummaries.
     */
    cursor?: AiSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiSummaries.
     */
    skip?: number
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[]
  }

  /**
   * AiSummary create
   */
  export type AiSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a AiSummary.
     */
    data: XOR<AiSummaryCreateInput, AiSummaryUncheckedCreateInput>
  }

  /**
   * AiSummary createMany
   */
  export type AiSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiSummaries.
     */
    data: AiSummaryCreateManyInput | AiSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiSummary update
   */
  export type AiSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a AiSummary.
     */
    data: XOR<AiSummaryUpdateInput, AiSummaryUncheckedUpdateInput>
    /**
     * Choose, which AiSummary to update.
     */
    where: AiSummaryWhereUniqueInput
  }

  /**
   * AiSummary updateMany
   */
  export type AiSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiSummaries.
     */
    data: XOR<AiSummaryUpdateManyMutationInput, AiSummaryUncheckedUpdateManyInput>
    /**
     * Filter which AiSummaries to update
     */
    where?: AiSummaryWhereInput
    /**
     * Limit how many AiSummaries to update.
     */
    limit?: number
  }

  /**
   * AiSummary upsert
   */
  export type AiSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the AiSummary to update in case it exists.
     */
    where: AiSummaryWhereUniqueInput
    /**
     * In case the AiSummary found by the `where` argument doesn't exist, create a new AiSummary with this data.
     */
    create: XOR<AiSummaryCreateInput, AiSummaryUncheckedCreateInput>
    /**
     * In case the AiSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiSummaryUpdateInput, AiSummaryUncheckedUpdateInput>
  }

  /**
   * AiSummary delete
   */
  export type AiSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    /**
     * Filter which AiSummary to delete.
     */
    where: AiSummaryWhereUniqueInput
  }

  /**
   * AiSummary deleteMany
   */
  export type AiSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiSummaries to delete
     */
    where?: AiSummaryWhereInput
    /**
     * Limit how many AiSummaries to delete.
     */
    limit?: number
  }

  /**
   * AiSummary without action
   */
  export type AiSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
  }


  /**
   * Model UserItem
   */

  export type AggregateUserItem = {
    _count: UserItemCountAggregateOutputType | null
    _avg: UserItemAvgAggregateOutputType | null
    _sum: UserItemSumAggregateOutputType | null
    _min: UserItemMinAggregateOutputType | null
    _max: UserItemMaxAggregateOutputType | null
  }

  export type UserItemAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    itemId: number | null
  }

  export type UserItemSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    itemId: bigint | null
  }

  export type UserItemMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    itemId: bigint | null
    acquiredAt: Date | null
    isEquipped: boolean | null
  }

  export type UserItemMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    itemId: bigint | null
    acquiredAt: Date | null
    isEquipped: boolean | null
  }

  export type UserItemCountAggregateOutputType = {
    id: number
    userId: number
    itemId: number
    acquiredAt: number
    isEquipped: number
    _all: number
  }


  export type UserItemAvgAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
  }

  export type UserItemSumAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
  }

  export type UserItemMinAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    acquiredAt?: true
    isEquipped?: true
  }

  export type UserItemMaxAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    acquiredAt?: true
    isEquipped?: true
  }

  export type UserItemCountAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    acquiredAt?: true
    isEquipped?: true
    _all?: true
  }

  export type UserItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItem to aggregate.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserItems
    **/
    _count?: true | UserItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserItemMaxAggregateInputType
  }

  export type GetUserItemAggregateType<T extends UserItemAggregateArgs> = {
        [P in keyof T & keyof AggregateUserItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserItem[P]>
      : GetScalarType<T[P], AggregateUserItem[P]>
  }




  export type UserItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithAggregationInput | UserItemOrderByWithAggregationInput[]
    by: UserItemScalarFieldEnum[] | UserItemScalarFieldEnum
    having?: UserItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserItemCountAggregateInputType | true
    _avg?: UserItemAvgAggregateInputType
    _sum?: UserItemSumAggregateInputType
    _min?: UserItemMinAggregateInputType
    _max?: UserItemMaxAggregateInputType
  }

  export type UserItemGroupByOutputType = {
    id: bigint
    userId: bigint
    itemId: bigint
    acquiredAt: Date
    isEquipped: boolean
    _count: UserItemCountAggregateOutputType | null
    _avg: UserItemAvgAggregateOutputType | null
    _sum: UserItemSumAggregateOutputType | null
    _min: UserItemMinAggregateOutputType | null
    _max: UserItemMaxAggregateOutputType | null
  }

  type GetUserItemGroupByPayload<T extends UserItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserItemGroupByOutputType[P]>
            : GetScalarType<T[P], UserItemGroupByOutputType[P]>
        }
      >
    >


  export type UserItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    acquiredAt?: boolean
    isEquipped?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userItem"]>



  export type UserItemSelectScalar = {
    id?: boolean
    userId?: boolean
    itemId?: boolean
    acquiredAt?: boolean
    isEquipped?: boolean
  }

  export type UserItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemId" | "acquiredAt" | "isEquipped", ExtArgs["result"]["userItem"]>
  export type UserItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $UserItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      itemId: bigint
      acquiredAt: Date
      isEquipped: boolean
    }, ExtArgs["result"]["userItem"]>
    composites: {}
  }

  type UserItemGetPayload<S extends boolean | null | undefined | UserItemDefaultArgs> = $Result.GetResult<Prisma.$UserItemPayload, S>

  type UserItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserItemCountAggregateInputType | true
    }

  export interface UserItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserItem'], meta: { name: 'UserItem' } }
    /**
     * Find zero or one UserItem that matches the filter.
     * @param {UserItemFindUniqueArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserItemFindUniqueArgs>(args: SelectSubset<T, UserItemFindUniqueArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserItemFindUniqueOrThrowArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserItemFindUniqueOrThrowArgs>(args: SelectSubset<T, UserItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindFirstArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserItemFindFirstArgs>(args?: SelectSubset<T, UserItemFindFirstArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindFirstOrThrowArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserItemFindFirstOrThrowArgs>(args?: SelectSubset<T, UserItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserItems
     * const userItems = await prisma.userItem.findMany()
     * 
     * // Get first 10 UserItems
     * const userItems = await prisma.userItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userItemWithIdOnly = await prisma.userItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserItemFindManyArgs>(args?: SelectSubset<T, UserItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserItem.
     * @param {UserItemCreateArgs} args - Arguments to create a UserItem.
     * @example
     * // Create one UserItem
     * const UserItem = await prisma.userItem.create({
     *   data: {
     *     // ... data to create a UserItem
     *   }
     * })
     * 
     */
    create<T extends UserItemCreateArgs>(args: SelectSubset<T, UserItemCreateArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserItems.
     * @param {UserItemCreateManyArgs} args - Arguments to create many UserItems.
     * @example
     * // Create many UserItems
     * const userItem = await prisma.userItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserItemCreateManyArgs>(args?: SelectSubset<T, UserItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserItem.
     * @param {UserItemDeleteArgs} args - Arguments to delete one UserItem.
     * @example
     * // Delete one UserItem
     * const UserItem = await prisma.userItem.delete({
     *   where: {
     *     // ... filter to delete one UserItem
     *   }
     * })
     * 
     */
    delete<T extends UserItemDeleteArgs>(args: SelectSubset<T, UserItemDeleteArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserItem.
     * @param {UserItemUpdateArgs} args - Arguments to update one UserItem.
     * @example
     * // Update one UserItem
     * const userItem = await prisma.userItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserItemUpdateArgs>(args: SelectSubset<T, UserItemUpdateArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserItems.
     * @param {UserItemDeleteManyArgs} args - Arguments to filter UserItems to delete.
     * @example
     * // Delete a few UserItems
     * const { count } = await prisma.userItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserItemDeleteManyArgs>(args?: SelectSubset<T, UserItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserItems
     * const userItem = await prisma.userItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserItemUpdateManyArgs>(args: SelectSubset<T, UserItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserItem.
     * @param {UserItemUpsertArgs} args - Arguments to update or create a UserItem.
     * @example
     * // Update or create a UserItem
     * const userItem = await prisma.userItem.upsert({
     *   create: {
     *     // ... data to create a UserItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserItem we want to update
     *   }
     * })
     */
    upsert<T extends UserItemUpsertArgs>(args: SelectSubset<T, UserItemUpsertArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemCountArgs} args - Arguments to filter UserItems to count.
     * @example
     * // Count the number of UserItems
     * const count = await prisma.userItem.count({
     *   where: {
     *     // ... the filter for the UserItems we want to count
     *   }
     * })
    **/
    count<T extends UserItemCountArgs>(
      args?: Subset<T, UserItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserItemAggregateArgs>(args: Subset<T, UserItemAggregateArgs>): Prisma.PrismaPromise<GetUserItemAggregateType<T>>

    /**
     * Group by UserItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemGroupByArgs} args - Group by arguments.
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
      T extends UserItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserItemGroupByArgs['orderBy'] }
        : { orderBy?: UserItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserItem model
   */
  readonly fields: UserItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserItem model
   */
  interface UserItemFieldRefs {
    readonly id: FieldRef<"UserItem", 'BigInt'>
    readonly userId: FieldRef<"UserItem", 'BigInt'>
    readonly itemId: FieldRef<"UserItem", 'BigInt'>
    readonly acquiredAt: FieldRef<"UserItem", 'DateTime'>
    readonly isEquipped: FieldRef<"UserItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserItem findUnique
   */
  export type UserItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem findUniqueOrThrow
   */
  export type UserItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem findFirst
   */
  export type UserItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItems.
     */
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * UserItem findFirstOrThrow
   */
  export type UserItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItems.
     */
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * UserItem findMany
   */
  export type UserItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItems to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * UserItem create
   */
  export type UserItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The data needed to create a UserItem.
     */
    data: XOR<UserItemCreateInput, UserItemUncheckedCreateInput>
  }

  /**
   * UserItem createMany
   */
  export type UserItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserItems.
     */
    data: UserItemCreateManyInput | UserItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserItem update
   */
  export type UserItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The data needed to update a UserItem.
     */
    data: XOR<UserItemUpdateInput, UserItemUncheckedUpdateInput>
    /**
     * Choose, which UserItem to update.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem updateMany
   */
  export type UserItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserItems.
     */
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyInput>
    /**
     * Filter which UserItems to update
     */
    where?: UserItemWhereInput
    /**
     * Limit how many UserItems to update.
     */
    limit?: number
  }

  /**
   * UserItem upsert
   */
  export type UserItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The filter to search for the UserItem to update in case it exists.
     */
    where: UserItemWhereUniqueInput
    /**
     * In case the UserItem found by the `where` argument doesn't exist, create a new UserItem with this data.
     */
    create: XOR<UserItemCreateInput, UserItemUncheckedCreateInput>
    /**
     * In case the UserItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserItemUpdateInput, UserItemUncheckedUpdateInput>
  }

  /**
   * UserItem delete
   */
  export type UserItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter which UserItem to delete.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem deleteMany
   */
  export type UserItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItems to delete
     */
    where?: UserItemWhereInput
    /**
     * Limit how many UserItems to delete.
     */
    limit?: number
  }

  /**
   * UserItem without action
   */
  export type UserItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    cost: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: bigint | null
    cost: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    context: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    context: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    context: number
    cost: number
    createdAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    cost?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    cost?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    context?: true
    cost?: true
    createdAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    context?: true
    cost?: true
    createdAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    context?: true
    cost?: true
    createdAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: bigint
    name: string
    context: string | null
    cost: number
    createdAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    context?: boolean
    cost?: boolean
    createdAt?: boolean
    userItems?: boolean | Item$userItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    context?: boolean
    cost?: boolean
    createdAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "context" | "cost" | "createdAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userItems?: boolean | Item$userItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      userItems: Prisma.$UserItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      context: string | null
      cost: number
      createdAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userItems<T extends Item$userItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$userItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'BigInt'>
    readonly name: FieldRef<"Item", 'String'>
    readonly context: FieldRef<"Item", 'String'>
    readonly cost: FieldRef<"Item", 'Int'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.userItems
   */
  export type Item$userItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    cursor?: UserItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model BattleRoom
   */

  export type AggregateBattleRoom = {
    _count: BattleRoomCountAggregateOutputType | null
    _avg: BattleRoomAvgAggregateOutputType | null
    _sum: BattleRoomSumAggregateOutputType | null
    _min: BattleRoomMinAggregateOutputType | null
    _max: BattleRoomMaxAggregateOutputType | null
  }

  export type BattleRoomAvgAggregateOutputType = {
    id: number | null
    admin: number | null
    approvalNum: number | null
    oppositeNum: number | null
  }

  export type BattleRoomSumAggregateOutputType = {
    id: bigint | null
    admin: bigint | null
    approvalNum: number | null
    oppositeNum: number | null
  }

  export type BattleRoomMinAggregateOutputType = {
    id: bigint | null
    admin: bigint | null
    title: string | null
    status: string | null
    createdAt: Date | null
    endedAt: Date | null
    approvalNum: number | null
    oppositeNum: number | null
  }

  export type BattleRoomMaxAggregateOutputType = {
    id: bigint | null
    admin: bigint | null
    title: string | null
    status: string | null
    createdAt: Date | null
    endedAt: Date | null
    approvalNum: number | null
    oppositeNum: number | null
  }

  export type BattleRoomCountAggregateOutputType = {
    id: number
    admin: number
    title: number
    status: number
    createdAt: number
    endedAt: number
    approvalNum: number
    oppositeNum: number
    _all: number
  }


  export type BattleRoomAvgAggregateInputType = {
    id?: true
    admin?: true
    approvalNum?: true
    oppositeNum?: true
  }

  export type BattleRoomSumAggregateInputType = {
    id?: true
    admin?: true
    approvalNum?: true
    oppositeNum?: true
  }

  export type BattleRoomMinAggregateInputType = {
    id?: true
    admin?: true
    title?: true
    status?: true
    createdAt?: true
    endedAt?: true
    approvalNum?: true
    oppositeNum?: true
  }

  export type BattleRoomMaxAggregateInputType = {
    id?: true
    admin?: true
    title?: true
    status?: true
    createdAt?: true
    endedAt?: true
    approvalNum?: true
    oppositeNum?: true
  }

  export type BattleRoomCountAggregateInputType = {
    id?: true
    admin?: true
    title?: true
    status?: true
    createdAt?: true
    endedAt?: true
    approvalNum?: true
    oppositeNum?: true
    _all?: true
  }

  export type BattleRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleRoom to aggregate.
     */
    where?: BattleRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleRooms to fetch.
     */
    orderBy?: BattleRoomOrderByWithRelationInput | BattleRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BattleRooms
    **/
    _count?: true | BattleRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleRoomMaxAggregateInputType
  }

  export type GetBattleRoomAggregateType<T extends BattleRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBattleRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattleRoom[P]>
      : GetScalarType<T[P], AggregateBattleRoom[P]>
  }




  export type BattleRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleRoomWhereInput
    orderBy?: BattleRoomOrderByWithAggregationInput | BattleRoomOrderByWithAggregationInput[]
    by: BattleRoomScalarFieldEnum[] | BattleRoomScalarFieldEnum
    having?: BattleRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleRoomCountAggregateInputType | true
    _avg?: BattleRoomAvgAggregateInputType
    _sum?: BattleRoomSumAggregateInputType
    _min?: BattleRoomMinAggregateInputType
    _max?: BattleRoomMaxAggregateInputType
  }

  export type BattleRoomGroupByOutputType = {
    id: bigint
    admin: bigint
    title: string
    status: string
    createdAt: Date
    endedAt: Date | null
    approvalNum: number
    oppositeNum: number
    _count: BattleRoomCountAggregateOutputType | null
    _avg: BattleRoomAvgAggregateOutputType | null
    _sum: BattleRoomSumAggregateOutputType | null
    _min: BattleRoomMinAggregateOutputType | null
    _max: BattleRoomMaxAggregateOutputType | null
  }

  type GetBattleRoomGroupByPayload<T extends BattleRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BattleRoomGroupByOutputType[P]>
        }
      >
    >


  export type BattleRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    endedAt?: boolean
    approvalNum?: boolean
    oppositeNum?: boolean
    battleTitle?: boolean | BattleRoom$battleTitleArgs<ExtArgs>
    roomParticipants?: boolean | BattleRoom$roomParticipantsArgs<ExtArgs>
    aiSummaries?: boolean | BattleRoom$aiSummariesArgs<ExtArgs>
    aiJudgements?: boolean | BattleRoom$aiJudgementsArgs<ExtArgs>
    _count?: boolean | BattleRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battleRoom"]>



  export type BattleRoomSelectScalar = {
    id?: boolean
    admin?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    endedAt?: boolean
    approvalNum?: boolean
    oppositeNum?: boolean
  }

  export type BattleRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin" | "title" | "status" | "createdAt" | "endedAt" | "approvalNum" | "oppositeNum", ExtArgs["result"]["battleRoom"]>
  export type BattleRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleTitle?: boolean | BattleRoom$battleTitleArgs<ExtArgs>
    roomParticipants?: boolean | BattleRoom$roomParticipantsArgs<ExtArgs>
    aiSummaries?: boolean | BattleRoom$aiSummariesArgs<ExtArgs>
    aiJudgements?: boolean | BattleRoom$aiJudgementsArgs<ExtArgs>
    _count?: boolean | BattleRoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BattleRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BattleRoom"
    objects: {
      battleTitle: Prisma.$BattleTitlePayload<ExtArgs>[]
      roomParticipants: Prisma.$RoomParticipantPayload<ExtArgs>[]
      aiSummaries: Prisma.$AiSummaryPayload<ExtArgs>[]
      aiJudgements: Prisma.$AiJudgementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      admin: bigint
      title: string
      status: string
      createdAt: Date
      endedAt: Date | null
      approvalNum: number
      oppositeNum: number
    }, ExtArgs["result"]["battleRoom"]>
    composites: {}
  }

  type BattleRoomGetPayload<S extends boolean | null | undefined | BattleRoomDefaultArgs> = $Result.GetResult<Prisma.$BattleRoomPayload, S>

  type BattleRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleRoomCountAggregateInputType | true
    }

  export interface BattleRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BattleRoom'], meta: { name: 'BattleRoom' } }
    /**
     * Find zero or one BattleRoom that matches the filter.
     * @param {BattleRoomFindUniqueArgs} args - Arguments to find a BattleRoom
     * @example
     * // Get one BattleRoom
     * const battleRoom = await prisma.battleRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleRoomFindUniqueArgs>(args: SelectSubset<T, BattleRoomFindUniqueArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BattleRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleRoomFindUniqueOrThrowArgs} args - Arguments to find a BattleRoom
     * @example
     * // Get one BattleRoom
     * const battleRoom = await prisma.battleRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomFindFirstArgs} args - Arguments to find a BattleRoom
     * @example
     * // Get one BattleRoom
     * const battleRoom = await prisma.battleRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleRoomFindFirstArgs>(args?: SelectSubset<T, BattleRoomFindFirstArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomFindFirstOrThrowArgs} args - Arguments to find a BattleRoom
     * @example
     * // Get one BattleRoom
     * const battleRoom = await prisma.battleRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BattleRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BattleRooms
     * const battleRooms = await prisma.battleRoom.findMany()
     * 
     * // Get first 10 BattleRooms
     * const battleRooms = await prisma.battleRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleRoomWithIdOnly = await prisma.battleRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleRoomFindManyArgs>(args?: SelectSubset<T, BattleRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BattleRoom.
     * @param {BattleRoomCreateArgs} args - Arguments to create a BattleRoom.
     * @example
     * // Create one BattleRoom
     * const BattleRoom = await prisma.battleRoom.create({
     *   data: {
     *     // ... data to create a BattleRoom
     *   }
     * })
     * 
     */
    create<T extends BattleRoomCreateArgs>(args: SelectSubset<T, BattleRoomCreateArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BattleRooms.
     * @param {BattleRoomCreateManyArgs} args - Arguments to create many BattleRooms.
     * @example
     * // Create many BattleRooms
     * const battleRoom = await prisma.battleRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleRoomCreateManyArgs>(args?: SelectSubset<T, BattleRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BattleRoom.
     * @param {BattleRoomDeleteArgs} args - Arguments to delete one BattleRoom.
     * @example
     * // Delete one BattleRoom
     * const BattleRoom = await prisma.battleRoom.delete({
     *   where: {
     *     // ... filter to delete one BattleRoom
     *   }
     * })
     * 
     */
    delete<T extends BattleRoomDeleteArgs>(args: SelectSubset<T, BattleRoomDeleteArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BattleRoom.
     * @param {BattleRoomUpdateArgs} args - Arguments to update one BattleRoom.
     * @example
     * // Update one BattleRoom
     * const battleRoom = await prisma.battleRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleRoomUpdateArgs>(args: SelectSubset<T, BattleRoomUpdateArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BattleRooms.
     * @param {BattleRoomDeleteManyArgs} args - Arguments to filter BattleRooms to delete.
     * @example
     * // Delete a few BattleRooms
     * const { count } = await prisma.battleRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleRoomDeleteManyArgs>(args?: SelectSubset<T, BattleRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BattleRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BattleRooms
     * const battleRoom = await prisma.battleRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleRoomUpdateManyArgs>(args: SelectSubset<T, BattleRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BattleRoom.
     * @param {BattleRoomUpsertArgs} args - Arguments to update or create a BattleRoom.
     * @example
     * // Update or create a BattleRoom
     * const battleRoom = await prisma.battleRoom.upsert({
     *   create: {
     *     // ... data to create a BattleRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BattleRoom we want to update
     *   }
     * })
     */
    upsert<T extends BattleRoomUpsertArgs>(args: SelectSubset<T, BattleRoomUpsertArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BattleRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomCountArgs} args - Arguments to filter BattleRooms to count.
     * @example
     * // Count the number of BattleRooms
     * const count = await prisma.battleRoom.count({
     *   where: {
     *     // ... the filter for the BattleRooms we want to count
     *   }
     * })
    **/
    count<T extends BattleRoomCountArgs>(
      args?: Subset<T, BattleRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BattleRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattleRoomAggregateArgs>(args: Subset<T, BattleRoomAggregateArgs>): Prisma.PrismaPromise<GetBattleRoomAggregateType<T>>

    /**
     * Group by BattleRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleRoomGroupByArgs} args - Group by arguments.
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
      T extends BattleRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleRoomGroupByArgs['orderBy'] }
        : { orderBy?: BattleRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BattleRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BattleRoom model
   */
  readonly fields: BattleRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BattleRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battleTitle<T extends BattleRoom$battleTitleArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoom$battleTitleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomParticipants<T extends BattleRoom$roomParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoom$roomParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiSummaries<T extends BattleRoom$aiSummariesArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoom$aiSummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiJudgements<T extends BattleRoom$aiJudgementsArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoom$aiJudgementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiJudgementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BattleRoom model
   */
  interface BattleRoomFieldRefs {
    readonly id: FieldRef<"BattleRoom", 'BigInt'>
    readonly admin: FieldRef<"BattleRoom", 'BigInt'>
    readonly title: FieldRef<"BattleRoom", 'String'>
    readonly status: FieldRef<"BattleRoom", 'String'>
    readonly createdAt: FieldRef<"BattleRoom", 'DateTime'>
    readonly endedAt: FieldRef<"BattleRoom", 'DateTime'>
    readonly approvalNum: FieldRef<"BattleRoom", 'Int'>
    readonly oppositeNum: FieldRef<"BattleRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BattleRoom findUnique
   */
  export type BattleRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * Filter, which BattleRoom to fetch.
     */
    where: BattleRoomWhereUniqueInput
  }

  /**
   * BattleRoom findUniqueOrThrow
   */
  export type BattleRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * Filter, which BattleRoom to fetch.
     */
    where: BattleRoomWhereUniqueInput
  }

  /**
   * BattleRoom findFirst
   */
  export type BattleRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * Filter, which BattleRoom to fetch.
     */
    where?: BattleRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleRooms to fetch.
     */
    orderBy?: BattleRoomOrderByWithRelationInput | BattleRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleRooms.
     */
    cursor?: BattleRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleRooms.
     */
    distinct?: BattleRoomScalarFieldEnum | BattleRoomScalarFieldEnum[]
  }

  /**
   * BattleRoom findFirstOrThrow
   */
  export type BattleRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * Filter, which BattleRoom to fetch.
     */
    where?: BattleRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleRooms to fetch.
     */
    orderBy?: BattleRoomOrderByWithRelationInput | BattleRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleRooms.
     */
    cursor?: BattleRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleRooms.
     */
    distinct?: BattleRoomScalarFieldEnum | BattleRoomScalarFieldEnum[]
  }

  /**
   * BattleRoom findMany
   */
  export type BattleRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * Filter, which BattleRooms to fetch.
     */
    where?: BattleRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleRooms to fetch.
     */
    orderBy?: BattleRoomOrderByWithRelationInput | BattleRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BattleRooms.
     */
    cursor?: BattleRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleRooms.
     */
    skip?: number
    distinct?: BattleRoomScalarFieldEnum | BattleRoomScalarFieldEnum[]
  }

  /**
   * BattleRoom create
   */
  export type BattleRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a BattleRoom.
     */
    data: XOR<BattleRoomCreateInput, BattleRoomUncheckedCreateInput>
  }

  /**
   * BattleRoom createMany
   */
  export type BattleRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BattleRooms.
     */
    data: BattleRoomCreateManyInput | BattleRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BattleRoom update
   */
  export type BattleRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a BattleRoom.
     */
    data: XOR<BattleRoomUpdateInput, BattleRoomUncheckedUpdateInput>
    /**
     * Choose, which BattleRoom to update.
     */
    where: BattleRoomWhereUniqueInput
  }

  /**
   * BattleRoom updateMany
   */
  export type BattleRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BattleRooms.
     */
    data: XOR<BattleRoomUpdateManyMutationInput, BattleRoomUncheckedUpdateManyInput>
    /**
     * Filter which BattleRooms to update
     */
    where?: BattleRoomWhereInput
    /**
     * Limit how many BattleRooms to update.
     */
    limit?: number
  }

  /**
   * BattleRoom upsert
   */
  export type BattleRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the BattleRoom to update in case it exists.
     */
    where: BattleRoomWhereUniqueInput
    /**
     * In case the BattleRoom found by the `where` argument doesn't exist, create a new BattleRoom with this data.
     */
    create: XOR<BattleRoomCreateInput, BattleRoomUncheckedCreateInput>
    /**
     * In case the BattleRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleRoomUpdateInput, BattleRoomUncheckedUpdateInput>
  }

  /**
   * BattleRoom delete
   */
  export type BattleRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
    /**
     * Filter which BattleRoom to delete.
     */
    where: BattleRoomWhereUniqueInput
  }

  /**
   * BattleRoom deleteMany
   */
  export type BattleRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleRooms to delete
     */
    where?: BattleRoomWhereInput
    /**
     * Limit how many BattleRooms to delete.
     */
    limit?: number
  }

  /**
   * BattleRoom.battleTitle
   */
  export type BattleRoom$battleTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    where?: BattleTitleWhereInput
    orderBy?: BattleTitleOrderByWithRelationInput | BattleTitleOrderByWithRelationInput[]
    cursor?: BattleTitleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleTitleScalarFieldEnum | BattleTitleScalarFieldEnum[]
  }

  /**
   * BattleRoom.roomParticipants
   */
  export type BattleRoom$roomParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    cursor?: RoomParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * BattleRoom.aiSummaries
   */
  export type BattleRoom$aiSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiSummary
     */
    select?: AiSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiSummary
     */
    omit?: AiSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiSummaryInclude<ExtArgs> | null
    where?: AiSummaryWhereInput
    orderBy?: AiSummaryOrderByWithRelationInput | AiSummaryOrderByWithRelationInput[]
    cursor?: AiSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiSummaryScalarFieldEnum | AiSummaryScalarFieldEnum[]
  }

  /**
   * BattleRoom.aiJudgements
   */
  export type BattleRoom$aiJudgementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiJudgement
     */
    select?: AiJudgementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiJudgement
     */
    omit?: AiJudgementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiJudgementInclude<ExtArgs> | null
    where?: AiJudgementWhereInput
    orderBy?: AiJudgementOrderByWithRelationInput | AiJudgementOrderByWithRelationInput[]
    cursor?: AiJudgementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiJudgementScalarFieldEnum | AiJudgementScalarFieldEnum[]
  }

  /**
   * BattleRoom without action
   */
  export type BattleRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleRoom
     */
    select?: BattleRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleRoom
     */
    omit?: BattleRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleRoomInclude<ExtArgs> | null
  }


  /**
   * Model BattleTitle
   */

  export type AggregateBattleTitle = {
    _count: BattleTitleCountAggregateOutputType | null
    _avg: BattleTitleAvgAggregateOutputType | null
    _sum: BattleTitleSumAggregateOutputType | null
    _min: BattleTitleMinAggregateOutputType | null
    _max: BattleTitleMaxAggregateOutputType | null
  }

  export type BattleTitleAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type BattleTitleSumAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
  }

  export type BattleTitleMinAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    title: string | null
    suggestedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BattleTitleMaxAggregateOutputType = {
    id: bigint | null
    roomId: bigint | null
    title: string | null
    suggestedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BattleTitleCountAggregateOutputType = {
    id: number
    roomId: number
    title: number
    suggestedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BattleTitleAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type BattleTitleSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type BattleTitleMinAggregateInputType = {
    id?: true
    roomId?: true
    title?: true
    suggestedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BattleTitleMaxAggregateInputType = {
    id?: true
    roomId?: true
    title?: true
    suggestedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BattleTitleCountAggregateInputType = {
    id?: true
    roomId?: true
    title?: true
    suggestedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BattleTitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleTitle to aggregate.
     */
    where?: BattleTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleTitles to fetch.
     */
    orderBy?: BattleTitleOrderByWithRelationInput | BattleTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BattleTitles
    **/
    _count?: true | BattleTitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleTitleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleTitleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleTitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleTitleMaxAggregateInputType
  }

  export type GetBattleTitleAggregateType<T extends BattleTitleAggregateArgs> = {
        [P in keyof T & keyof AggregateBattleTitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattleTitle[P]>
      : GetScalarType<T[P], AggregateBattleTitle[P]>
  }




  export type BattleTitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleTitleWhereInput
    orderBy?: BattleTitleOrderByWithAggregationInput | BattleTitleOrderByWithAggregationInput[]
    by: BattleTitleScalarFieldEnum[] | BattleTitleScalarFieldEnum
    having?: BattleTitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleTitleCountAggregateInputType | true
    _avg?: BattleTitleAvgAggregateInputType
    _sum?: BattleTitleSumAggregateInputType
    _min?: BattleTitleMinAggregateInputType
    _max?: BattleTitleMaxAggregateInputType
  }

  export type BattleTitleGroupByOutputType = {
    id: bigint
    roomId: bigint
    title: string
    suggestedBy: string
    createdAt: Date
    updatedAt: Date
    _count: BattleTitleCountAggregateOutputType | null
    _avg: BattleTitleAvgAggregateOutputType | null
    _sum: BattleTitleSumAggregateOutputType | null
    _min: BattleTitleMinAggregateOutputType | null
    _max: BattleTitleMaxAggregateOutputType | null
  }

  type GetBattleTitleGroupByPayload<T extends BattleTitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleTitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleTitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleTitleGroupByOutputType[P]>
            : GetScalarType<T[P], BattleTitleGroupByOutputType[P]>
        }
      >
    >


  export type BattleTitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    title?: boolean
    suggestedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battleTitle"]>



  export type BattleTitleSelectScalar = {
    id?: boolean
    roomId?: boolean
    title?: boolean
    suggestedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BattleTitleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "title" | "suggestedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["battleTitle"]>
  export type BattleTitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleRoom?: boolean | BattleRoomDefaultArgs<ExtArgs>
  }

  export type $BattleTitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BattleTitle"
    objects: {
      battleRoom: Prisma.$BattleRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      roomId: bigint
      title: string
      suggestedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["battleTitle"]>
    composites: {}
  }

  type BattleTitleGetPayload<S extends boolean | null | undefined | BattleTitleDefaultArgs> = $Result.GetResult<Prisma.$BattleTitlePayload, S>

  type BattleTitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleTitleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleTitleCountAggregateInputType | true
    }

  export interface BattleTitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BattleTitle'], meta: { name: 'BattleTitle' } }
    /**
     * Find zero or one BattleTitle that matches the filter.
     * @param {BattleTitleFindUniqueArgs} args - Arguments to find a BattleTitle
     * @example
     * // Get one BattleTitle
     * const battleTitle = await prisma.battleTitle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleTitleFindUniqueArgs>(args: SelectSubset<T, BattleTitleFindUniqueArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BattleTitle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleTitleFindUniqueOrThrowArgs} args - Arguments to find a BattleTitle
     * @example
     * // Get one BattleTitle
     * const battleTitle = await prisma.battleTitle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleTitleFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleTitleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleTitle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleFindFirstArgs} args - Arguments to find a BattleTitle
     * @example
     * // Get one BattleTitle
     * const battleTitle = await prisma.battleTitle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleTitleFindFirstArgs>(args?: SelectSubset<T, BattleTitleFindFirstArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BattleTitle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleFindFirstOrThrowArgs} args - Arguments to find a BattleTitle
     * @example
     * // Get one BattleTitle
     * const battleTitle = await prisma.battleTitle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleTitleFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleTitleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BattleTitles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BattleTitles
     * const battleTitles = await prisma.battleTitle.findMany()
     * 
     * // Get first 10 BattleTitles
     * const battleTitles = await prisma.battleTitle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleTitleWithIdOnly = await prisma.battleTitle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleTitleFindManyArgs>(args?: SelectSubset<T, BattleTitleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BattleTitle.
     * @param {BattleTitleCreateArgs} args - Arguments to create a BattleTitle.
     * @example
     * // Create one BattleTitle
     * const BattleTitle = await prisma.battleTitle.create({
     *   data: {
     *     // ... data to create a BattleTitle
     *   }
     * })
     * 
     */
    create<T extends BattleTitleCreateArgs>(args: SelectSubset<T, BattleTitleCreateArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BattleTitles.
     * @param {BattleTitleCreateManyArgs} args - Arguments to create many BattleTitles.
     * @example
     * // Create many BattleTitles
     * const battleTitle = await prisma.battleTitle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleTitleCreateManyArgs>(args?: SelectSubset<T, BattleTitleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BattleTitle.
     * @param {BattleTitleDeleteArgs} args - Arguments to delete one BattleTitle.
     * @example
     * // Delete one BattleTitle
     * const BattleTitle = await prisma.battleTitle.delete({
     *   where: {
     *     // ... filter to delete one BattleTitle
     *   }
     * })
     * 
     */
    delete<T extends BattleTitleDeleteArgs>(args: SelectSubset<T, BattleTitleDeleteArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BattleTitle.
     * @param {BattleTitleUpdateArgs} args - Arguments to update one BattleTitle.
     * @example
     * // Update one BattleTitle
     * const battleTitle = await prisma.battleTitle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleTitleUpdateArgs>(args: SelectSubset<T, BattleTitleUpdateArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BattleTitles.
     * @param {BattleTitleDeleteManyArgs} args - Arguments to filter BattleTitles to delete.
     * @example
     * // Delete a few BattleTitles
     * const { count } = await prisma.battleTitle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleTitleDeleteManyArgs>(args?: SelectSubset<T, BattleTitleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BattleTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BattleTitles
     * const battleTitle = await prisma.battleTitle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleTitleUpdateManyArgs>(args: SelectSubset<T, BattleTitleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BattleTitle.
     * @param {BattleTitleUpsertArgs} args - Arguments to update or create a BattleTitle.
     * @example
     * // Update or create a BattleTitle
     * const battleTitle = await prisma.battleTitle.upsert({
     *   create: {
     *     // ... data to create a BattleTitle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BattleTitle we want to update
     *   }
     * })
     */
    upsert<T extends BattleTitleUpsertArgs>(args: SelectSubset<T, BattleTitleUpsertArgs<ExtArgs>>): Prisma__BattleTitleClient<$Result.GetResult<Prisma.$BattleTitlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BattleTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleCountArgs} args - Arguments to filter BattleTitles to count.
     * @example
     * // Count the number of BattleTitles
     * const count = await prisma.battleTitle.count({
     *   where: {
     *     // ... the filter for the BattleTitles we want to count
     *   }
     * })
    **/
    count<T extends BattleTitleCountArgs>(
      args?: Subset<T, BattleTitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleTitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BattleTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattleTitleAggregateArgs>(args: Subset<T, BattleTitleAggregateArgs>): Prisma.PrismaPromise<GetBattleTitleAggregateType<T>>

    /**
     * Group by BattleTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleTitleGroupByArgs} args - Group by arguments.
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
      T extends BattleTitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleTitleGroupByArgs['orderBy'] }
        : { orderBy?: BattleTitleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BattleTitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleTitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BattleTitle model
   */
  readonly fields: BattleTitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BattleTitle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleTitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battleRoom<T extends BattleRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BattleRoomDefaultArgs<ExtArgs>>): Prisma__BattleRoomClient<$Result.GetResult<Prisma.$BattleRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BattleTitle model
   */
  interface BattleTitleFieldRefs {
    readonly id: FieldRef<"BattleTitle", 'BigInt'>
    readonly roomId: FieldRef<"BattleTitle", 'BigInt'>
    readonly title: FieldRef<"BattleTitle", 'String'>
    readonly suggestedBy: FieldRef<"BattleTitle", 'String'>
    readonly createdAt: FieldRef<"BattleTitle", 'DateTime'>
    readonly updatedAt: FieldRef<"BattleTitle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BattleTitle findUnique
   */
  export type BattleTitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * Filter, which BattleTitle to fetch.
     */
    where: BattleTitleWhereUniqueInput
  }

  /**
   * BattleTitle findUniqueOrThrow
   */
  export type BattleTitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * Filter, which BattleTitle to fetch.
     */
    where: BattleTitleWhereUniqueInput
  }

  /**
   * BattleTitle findFirst
   */
  export type BattleTitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * Filter, which BattleTitle to fetch.
     */
    where?: BattleTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleTitles to fetch.
     */
    orderBy?: BattleTitleOrderByWithRelationInput | BattleTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleTitles.
     */
    cursor?: BattleTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleTitles.
     */
    distinct?: BattleTitleScalarFieldEnum | BattleTitleScalarFieldEnum[]
  }

  /**
   * BattleTitle findFirstOrThrow
   */
  export type BattleTitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * Filter, which BattleTitle to fetch.
     */
    where?: BattleTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleTitles to fetch.
     */
    orderBy?: BattleTitleOrderByWithRelationInput | BattleTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BattleTitles.
     */
    cursor?: BattleTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BattleTitles.
     */
    distinct?: BattleTitleScalarFieldEnum | BattleTitleScalarFieldEnum[]
  }

  /**
   * BattleTitle findMany
   */
  export type BattleTitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * Filter, which BattleTitles to fetch.
     */
    where?: BattleTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BattleTitles to fetch.
     */
    orderBy?: BattleTitleOrderByWithRelationInput | BattleTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BattleTitles.
     */
    cursor?: BattleTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BattleTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BattleTitles.
     */
    skip?: number
    distinct?: BattleTitleScalarFieldEnum | BattleTitleScalarFieldEnum[]
  }

  /**
   * BattleTitle create
   */
  export type BattleTitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * The data needed to create a BattleTitle.
     */
    data: XOR<BattleTitleCreateInput, BattleTitleUncheckedCreateInput>
  }

  /**
   * BattleTitle createMany
   */
  export type BattleTitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BattleTitles.
     */
    data: BattleTitleCreateManyInput | BattleTitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BattleTitle update
   */
  export type BattleTitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * The data needed to update a BattleTitle.
     */
    data: XOR<BattleTitleUpdateInput, BattleTitleUncheckedUpdateInput>
    /**
     * Choose, which BattleTitle to update.
     */
    where: BattleTitleWhereUniqueInput
  }

  /**
   * BattleTitle updateMany
   */
  export type BattleTitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BattleTitles.
     */
    data: XOR<BattleTitleUpdateManyMutationInput, BattleTitleUncheckedUpdateManyInput>
    /**
     * Filter which BattleTitles to update
     */
    where?: BattleTitleWhereInput
    /**
     * Limit how many BattleTitles to update.
     */
    limit?: number
  }

  /**
   * BattleTitle upsert
   */
  export type BattleTitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * The filter to search for the BattleTitle to update in case it exists.
     */
    where: BattleTitleWhereUniqueInput
    /**
     * In case the BattleTitle found by the `where` argument doesn't exist, create a new BattleTitle with this data.
     */
    create: XOR<BattleTitleCreateInput, BattleTitleUncheckedCreateInput>
    /**
     * In case the BattleTitle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleTitleUpdateInput, BattleTitleUncheckedUpdateInput>
  }

  /**
   * BattleTitle delete
   */
  export type BattleTitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
    /**
     * Filter which BattleTitle to delete.
     */
    where: BattleTitleWhereUniqueInput
  }

  /**
   * BattleTitle deleteMany
   */
  export type BattleTitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BattleTitles to delete
     */
    where?: BattleTitleWhereInput
    /**
     * Limit how many BattleTitles to delete.
     */
    limit?: number
  }

  /**
   * BattleTitle without action
   */
  export type BattleTitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleTitle
     */
    select?: BattleTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BattleTitle
     */
    omit?: BattleTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleTitleInclude<ExtArgs> | null
  }


  /**
   * Model QuestCompletion
   */

  export type AggregateQuestCompletion = {
    _count: QuestCompletionCountAggregateOutputType | null
    _avg: QuestCompletionAvgAggregateOutputType | null
    _sum: QuestCompletionSumAggregateOutputType | null
    _min: QuestCompletionMinAggregateOutputType | null
    _max: QuestCompletionMaxAggregateOutputType | null
  }

  export type QuestCompletionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    questId: number | null
  }

  export type QuestCompletionSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    questId: bigint | null
  }

  export type QuestCompletionMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    questId: bigint | null
    isCompleted: boolean | null
    completedAt: Date | null
  }

  export type QuestCompletionMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    questId: bigint | null
    isCompleted: boolean | null
    completedAt: Date | null
  }

  export type QuestCompletionCountAggregateOutputType = {
    id: number
    userId: number
    questId: number
    isCompleted: number
    completedAt: number
    _all: number
  }


  export type QuestCompletionAvgAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
  }

  export type QuestCompletionSumAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
  }

  export type QuestCompletionMinAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    isCompleted?: true
    completedAt?: true
  }

  export type QuestCompletionMaxAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    isCompleted?: true
    completedAt?: true
  }

  export type QuestCompletionCountAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    isCompleted?: true
    completedAt?: true
    _all?: true
  }

  export type QuestCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestCompletion to aggregate.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestCompletions
    **/
    _count?: true | QuestCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestCompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestCompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestCompletionMaxAggregateInputType
  }

  export type GetQuestCompletionAggregateType<T extends QuestCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestCompletion[P]>
      : GetScalarType<T[P], AggregateQuestCompletion[P]>
  }




  export type QuestCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestCompletionWhereInput
    orderBy?: QuestCompletionOrderByWithAggregationInput | QuestCompletionOrderByWithAggregationInput[]
    by: QuestCompletionScalarFieldEnum[] | QuestCompletionScalarFieldEnum
    having?: QuestCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCompletionCountAggregateInputType | true
    _avg?: QuestCompletionAvgAggregateInputType
    _sum?: QuestCompletionSumAggregateInputType
    _min?: QuestCompletionMinAggregateInputType
    _max?: QuestCompletionMaxAggregateInputType
  }

  export type QuestCompletionGroupByOutputType = {
    id: bigint
    userId: bigint
    questId: bigint
    isCompleted: boolean
    completedAt: Date | null
    _count: QuestCompletionCountAggregateOutputType | null
    _avg: QuestCompletionAvgAggregateOutputType | null
    _sum: QuestCompletionSumAggregateOutputType | null
    _min: QuestCompletionMinAggregateOutputType | null
    _max: QuestCompletionMaxAggregateOutputType | null
  }

  type GetQuestCompletionGroupByPayload<T extends QuestCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestCompletionGroupByOutputType[P]>
        }
      >
    >


  export type QuestCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questId?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questCompletion"]>



  export type QuestCompletionSelectScalar = {
    id?: boolean
    userId?: boolean
    questId?: boolean
    isCompleted?: boolean
    completedAt?: boolean
  }

  export type QuestCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questId" | "isCompleted" | "completedAt", ExtArgs["result"]["questCompletion"]>
  export type QuestCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }

  export type $QuestCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestCompletion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quest: Prisma.$QuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      questId: bigint
      isCompleted: boolean
      completedAt: Date | null
    }, ExtArgs["result"]["questCompletion"]>
    composites: {}
  }

  type QuestCompletionGetPayload<S extends boolean | null | undefined | QuestCompletionDefaultArgs> = $Result.GetResult<Prisma.$QuestCompletionPayload, S>

  type QuestCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCompletionCountAggregateInputType | true
    }

  export interface QuestCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestCompletion'], meta: { name: 'QuestCompletion' } }
    /**
     * Find zero or one QuestCompletion that matches the filter.
     * @param {QuestCompletionFindUniqueArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestCompletionFindUniqueArgs>(args: SelectSubset<T, QuestCompletionFindUniqueArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestCompletionFindUniqueOrThrowArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionFindFirstArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestCompletionFindFirstArgs>(args?: SelectSubset<T, QuestCompletionFindFirstArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionFindFirstOrThrowArgs} args - Arguments to find a QuestCompletion
     * @example
     * // Get one QuestCompletion
     * const questCompletion = await prisma.questCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestCompletions
     * const questCompletions = await prisma.questCompletion.findMany()
     * 
     * // Get first 10 QuestCompletions
     * const questCompletions = await prisma.questCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questCompletionWithIdOnly = await prisma.questCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestCompletionFindManyArgs>(args?: SelectSubset<T, QuestCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestCompletion.
     * @param {QuestCompletionCreateArgs} args - Arguments to create a QuestCompletion.
     * @example
     * // Create one QuestCompletion
     * const QuestCompletion = await prisma.questCompletion.create({
     *   data: {
     *     // ... data to create a QuestCompletion
     *   }
     * })
     * 
     */
    create<T extends QuestCompletionCreateArgs>(args: SelectSubset<T, QuestCompletionCreateArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestCompletions.
     * @param {QuestCompletionCreateManyArgs} args - Arguments to create many QuestCompletions.
     * @example
     * // Create many QuestCompletions
     * const questCompletion = await prisma.questCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCompletionCreateManyArgs>(args?: SelectSubset<T, QuestCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestCompletion.
     * @param {QuestCompletionDeleteArgs} args - Arguments to delete one QuestCompletion.
     * @example
     * // Delete one QuestCompletion
     * const QuestCompletion = await prisma.questCompletion.delete({
     *   where: {
     *     // ... filter to delete one QuestCompletion
     *   }
     * })
     * 
     */
    delete<T extends QuestCompletionDeleteArgs>(args: SelectSubset<T, QuestCompletionDeleteArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestCompletion.
     * @param {QuestCompletionUpdateArgs} args - Arguments to update one QuestCompletion.
     * @example
     * // Update one QuestCompletion
     * const questCompletion = await prisma.questCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestCompletionUpdateArgs>(args: SelectSubset<T, QuestCompletionUpdateArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestCompletions.
     * @param {QuestCompletionDeleteManyArgs} args - Arguments to filter QuestCompletions to delete.
     * @example
     * // Delete a few QuestCompletions
     * const { count } = await prisma.questCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestCompletionDeleteManyArgs>(args?: SelectSubset<T, QuestCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestCompletions
     * const questCompletion = await prisma.questCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestCompletionUpdateManyArgs>(args: SelectSubset<T, QuestCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestCompletion.
     * @param {QuestCompletionUpsertArgs} args - Arguments to update or create a QuestCompletion.
     * @example
     * // Update or create a QuestCompletion
     * const questCompletion = await prisma.questCompletion.upsert({
     *   create: {
     *     // ... data to create a QuestCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestCompletion we want to update
     *   }
     * })
     */
    upsert<T extends QuestCompletionUpsertArgs>(args: SelectSubset<T, QuestCompletionUpsertArgs<ExtArgs>>): Prisma__QuestCompletionClient<$Result.GetResult<Prisma.$QuestCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionCountArgs} args - Arguments to filter QuestCompletions to count.
     * @example
     * // Count the number of QuestCompletions
     * const count = await prisma.questCompletion.count({
     *   where: {
     *     // ... the filter for the QuestCompletions we want to count
     *   }
     * })
    **/
    count<T extends QuestCompletionCountArgs>(
      args?: Subset<T, QuestCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestCompletionAggregateArgs>(args: Subset<T, QuestCompletionAggregateArgs>): Prisma.PrismaPromise<GetQuestCompletionAggregateType<T>>

    /**
     * Group by QuestCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCompletionGroupByArgs} args - Group by arguments.
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
      T extends QuestCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestCompletionGroupByArgs['orderBy'] }
        : { orderBy?: QuestCompletionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestCompletion model
   */
  readonly fields: QuestCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestCompletion model
   */
  interface QuestCompletionFieldRefs {
    readonly id: FieldRef<"QuestCompletion", 'BigInt'>
    readonly userId: FieldRef<"QuestCompletion", 'BigInt'>
    readonly questId: FieldRef<"QuestCompletion", 'BigInt'>
    readonly isCompleted: FieldRef<"QuestCompletion", 'Boolean'>
    readonly completedAt: FieldRef<"QuestCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestCompletion findUnique
   */
  export type QuestCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion findUniqueOrThrow
   */
  export type QuestCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion findFirst
   */
  export type QuestCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestCompletions.
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestCompletions.
     */
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * QuestCompletion findFirstOrThrow
   */
  export type QuestCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletion to fetch.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestCompletions.
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestCompletions.
     */
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * QuestCompletion findMany
   */
  export type QuestCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which QuestCompletions to fetch.
     */
    where?: QuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestCompletions to fetch.
     */
    orderBy?: QuestCompletionOrderByWithRelationInput | QuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestCompletions.
     */
    cursor?: QuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestCompletions.
     */
    skip?: number
    distinct?: QuestCompletionScalarFieldEnum | QuestCompletionScalarFieldEnum[]
  }

  /**
   * QuestCompletion create
   */
  export type QuestCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestCompletion.
     */
    data: XOR<QuestCompletionCreateInput, QuestCompletionUncheckedCreateInput>
  }

  /**
   * QuestCompletion createMany
   */
  export type QuestCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestCompletions.
     */
    data: QuestCompletionCreateManyInput | QuestCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestCompletion update
   */
  export type QuestCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestCompletion.
     */
    data: XOR<QuestCompletionUpdateInput, QuestCompletionUncheckedUpdateInput>
    /**
     * Choose, which QuestCompletion to update.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion updateMany
   */
  export type QuestCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestCompletions.
     */
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyInput>
    /**
     * Filter which QuestCompletions to update
     */
    where?: QuestCompletionWhereInput
    /**
     * Limit how many QuestCompletions to update.
     */
    limit?: number
  }

  /**
   * QuestCompletion upsert
   */
  export type QuestCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestCompletion to update in case it exists.
     */
    where: QuestCompletionWhereUniqueInput
    /**
     * In case the QuestCompletion found by the `where` argument doesn't exist, create a new QuestCompletion with this data.
     */
    create: XOR<QuestCompletionCreateInput, QuestCompletionUncheckedCreateInput>
    /**
     * In case the QuestCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestCompletionUpdateInput, QuestCompletionUncheckedUpdateInput>
  }

  /**
   * QuestCompletion delete
   */
  export type QuestCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
    /**
     * Filter which QuestCompletion to delete.
     */
    where: QuestCompletionWhereUniqueInput
  }

  /**
   * QuestCompletion deleteMany
   */
  export type QuestCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestCompletions to delete
     */
    where?: QuestCompletionWhereInput
    /**
     * Limit how many QuestCompletions to delete.
     */
    limit?: number
  }

  /**
   * QuestCompletion without action
   */
  export type QuestCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCompletion
     */
    select?: QuestCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestCompletion
     */
    omit?: QuestCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestCompletionInclude<ExtArgs> | null
  }


  /**
   * Model PointTransaction
   */

  export type AggregatePointTransaction = {
    _count: PointTransactionCountAggregateOutputType | null
    _avg: PointTransactionAvgAggregateOutputType | null
    _sum: PointTransactionSumAggregateOutputType | null
    _min: PointTransactionMinAggregateOutputType | null
    _max: PointTransactionMaxAggregateOutputType | null
  }

  export type PointTransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    change: number | null
  }

  export type PointTransactionSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    change: number | null
  }

  export type PointTransactionMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    change: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type PointTransactionMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    change: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type PointTransactionCountAggregateOutputType = {
    id: number
    userId: number
    change: number
    reason: number
    createdAt: number
    _all: number
  }


  export type PointTransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    change?: true
  }

  export type PointTransactionSumAggregateInputType = {
    id?: true
    userId?: true
    change?: true
  }

  export type PointTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    change?: true
    reason?: true
    createdAt?: true
  }

  export type PointTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    change?: true
    reason?: true
    createdAt?: true
  }

  export type PointTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    change?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type PointTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointTransaction to aggregate.
     */
    where?: PointTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointTransactions to fetch.
     */
    orderBy?: PointTransactionOrderByWithRelationInput | PointTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointTransactions
    **/
    _count?: true | PointTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointTransactionMaxAggregateInputType
  }

  export type GetPointTransactionAggregateType<T extends PointTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePointTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointTransaction[P]>
      : GetScalarType<T[P], AggregatePointTransaction[P]>
  }




  export type PointTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointTransactionWhereInput
    orderBy?: PointTransactionOrderByWithAggregationInput | PointTransactionOrderByWithAggregationInput[]
    by: PointTransactionScalarFieldEnum[] | PointTransactionScalarFieldEnum
    having?: PointTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointTransactionCountAggregateInputType | true
    _avg?: PointTransactionAvgAggregateInputType
    _sum?: PointTransactionSumAggregateInputType
    _min?: PointTransactionMinAggregateInputType
    _max?: PointTransactionMaxAggregateInputType
  }

  export type PointTransactionGroupByOutputType = {
    id: bigint
    userId: bigint
    change: number
    reason: string
    createdAt: Date
    _count: PointTransactionCountAggregateOutputType | null
    _avg: PointTransactionAvgAggregateOutputType | null
    _sum: PointTransactionSumAggregateOutputType | null
    _min: PointTransactionMinAggregateOutputType | null
    _max: PointTransactionMaxAggregateOutputType | null
  }

  type GetPointTransactionGroupByPayload<T extends PointTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PointTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PointTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    change?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointTransaction"]>



  export type PointTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    change?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type PointTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "change" | "reason" | "createdAt", ExtArgs["result"]["pointTransaction"]>
  export type PointTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      change: number
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["pointTransaction"]>
    composites: {}
  }

  type PointTransactionGetPayload<S extends boolean | null | undefined | PointTransactionDefaultArgs> = $Result.GetResult<Prisma.$PointTransactionPayload, S>

  type PointTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointTransactionCountAggregateInputType | true
    }

  export interface PointTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointTransaction'], meta: { name: 'PointTransaction' } }
    /**
     * Find zero or one PointTransaction that matches the filter.
     * @param {PointTransactionFindUniqueArgs} args - Arguments to find a PointTransaction
     * @example
     * // Get one PointTransaction
     * const pointTransaction = await prisma.pointTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointTransactionFindUniqueArgs>(args: SelectSubset<T, PointTransactionFindUniqueArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointTransactionFindUniqueOrThrowArgs} args - Arguments to find a PointTransaction
     * @example
     * // Get one PointTransaction
     * const pointTransaction = await prisma.pointTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PointTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionFindFirstArgs} args - Arguments to find a PointTransaction
     * @example
     * // Get one PointTransaction
     * const pointTransaction = await prisma.pointTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointTransactionFindFirstArgs>(args?: SelectSubset<T, PointTransactionFindFirstArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionFindFirstOrThrowArgs} args - Arguments to find a PointTransaction
     * @example
     * // Get one PointTransaction
     * const pointTransaction = await prisma.pointTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PointTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointTransactions
     * const pointTransactions = await prisma.pointTransaction.findMany()
     * 
     * // Get first 10 PointTransactions
     * const pointTransactions = await prisma.pointTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointTransactionWithIdOnly = await prisma.pointTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointTransactionFindManyArgs>(args?: SelectSubset<T, PointTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointTransaction.
     * @param {PointTransactionCreateArgs} args - Arguments to create a PointTransaction.
     * @example
     * // Create one PointTransaction
     * const PointTransaction = await prisma.pointTransaction.create({
     *   data: {
     *     // ... data to create a PointTransaction
     *   }
     * })
     * 
     */
    create<T extends PointTransactionCreateArgs>(args: SelectSubset<T, PointTransactionCreateArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointTransactions.
     * @param {PointTransactionCreateManyArgs} args - Arguments to create many PointTransactions.
     * @example
     * // Create many PointTransactions
     * const pointTransaction = await prisma.pointTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointTransactionCreateManyArgs>(args?: SelectSubset<T, PointTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PointTransaction.
     * @param {PointTransactionDeleteArgs} args - Arguments to delete one PointTransaction.
     * @example
     * // Delete one PointTransaction
     * const PointTransaction = await prisma.pointTransaction.delete({
     *   where: {
     *     // ... filter to delete one PointTransaction
     *   }
     * })
     * 
     */
    delete<T extends PointTransactionDeleteArgs>(args: SelectSubset<T, PointTransactionDeleteArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointTransaction.
     * @param {PointTransactionUpdateArgs} args - Arguments to update one PointTransaction.
     * @example
     * // Update one PointTransaction
     * const pointTransaction = await prisma.pointTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointTransactionUpdateArgs>(args: SelectSubset<T, PointTransactionUpdateArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointTransactions.
     * @param {PointTransactionDeleteManyArgs} args - Arguments to filter PointTransactions to delete.
     * @example
     * // Delete a few PointTransactions
     * const { count } = await prisma.pointTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointTransactionDeleteManyArgs>(args?: SelectSubset<T, PointTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointTransactions
     * const pointTransaction = await prisma.pointTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointTransactionUpdateManyArgs>(args: SelectSubset<T, PointTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PointTransaction.
     * @param {PointTransactionUpsertArgs} args - Arguments to update or create a PointTransaction.
     * @example
     * // Update or create a PointTransaction
     * const pointTransaction = await prisma.pointTransaction.upsert({
     *   create: {
     *     // ... data to create a PointTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PointTransactionUpsertArgs>(args: SelectSubset<T, PointTransactionUpsertArgs<ExtArgs>>): Prisma__PointTransactionClient<$Result.GetResult<Prisma.$PointTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionCountArgs} args - Arguments to filter PointTransactions to count.
     * @example
     * // Count the number of PointTransactions
     * const count = await prisma.pointTransaction.count({
     *   where: {
     *     // ... the filter for the PointTransactions we want to count
     *   }
     * })
    **/
    count<T extends PointTransactionCountArgs>(
      args?: Subset<T, PointTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointTransactionAggregateArgs>(args: Subset<T, PointTransactionAggregateArgs>): Prisma.PrismaPromise<GetPointTransactionAggregateType<T>>

    /**
     * Group by PointTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointTransactionGroupByArgs} args - Group by arguments.
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
      T extends PointTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PointTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointTransaction model
   */
  readonly fields: PointTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PointTransaction model
   */
  interface PointTransactionFieldRefs {
    readonly id: FieldRef<"PointTransaction", 'BigInt'>
    readonly userId: FieldRef<"PointTransaction", 'BigInt'>
    readonly change: FieldRef<"PointTransaction", 'Int'>
    readonly reason: FieldRef<"PointTransaction", 'String'>
    readonly createdAt: FieldRef<"PointTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointTransaction findUnique
   */
  export type PointTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointTransaction to fetch.
     */
    where: PointTransactionWhereUniqueInput
  }

  /**
   * PointTransaction findUniqueOrThrow
   */
  export type PointTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointTransaction to fetch.
     */
    where: PointTransactionWhereUniqueInput
  }

  /**
   * PointTransaction findFirst
   */
  export type PointTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointTransaction to fetch.
     */
    where?: PointTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointTransactions to fetch.
     */
    orderBy?: PointTransactionOrderByWithRelationInput | PointTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointTransactions.
     */
    cursor?: PointTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointTransactions.
     */
    distinct?: PointTransactionScalarFieldEnum | PointTransactionScalarFieldEnum[]
  }

  /**
   * PointTransaction findFirstOrThrow
   */
  export type PointTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointTransaction to fetch.
     */
    where?: PointTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointTransactions to fetch.
     */
    orderBy?: PointTransactionOrderByWithRelationInput | PointTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointTransactions.
     */
    cursor?: PointTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointTransactions.
     */
    distinct?: PointTransactionScalarFieldEnum | PointTransactionScalarFieldEnum[]
  }

  /**
   * PointTransaction findMany
   */
  export type PointTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointTransactions to fetch.
     */
    where?: PointTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointTransactions to fetch.
     */
    orderBy?: PointTransactionOrderByWithRelationInput | PointTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointTransactions.
     */
    cursor?: PointTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointTransactions.
     */
    skip?: number
    distinct?: PointTransactionScalarFieldEnum | PointTransactionScalarFieldEnum[]
  }

  /**
   * PointTransaction create
   */
  export type PointTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PointTransaction.
     */
    data: XOR<PointTransactionCreateInput, PointTransactionUncheckedCreateInput>
  }

  /**
   * PointTransaction createMany
   */
  export type PointTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointTransactions.
     */
    data: PointTransactionCreateManyInput | PointTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointTransaction update
   */
  export type PointTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PointTransaction.
     */
    data: XOR<PointTransactionUpdateInput, PointTransactionUncheckedUpdateInput>
    /**
     * Choose, which PointTransaction to update.
     */
    where: PointTransactionWhereUniqueInput
  }

  /**
   * PointTransaction updateMany
   */
  export type PointTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointTransactions.
     */
    data: XOR<PointTransactionUpdateManyMutationInput, PointTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PointTransactions to update
     */
    where?: PointTransactionWhereInput
    /**
     * Limit how many PointTransactions to update.
     */
    limit?: number
  }

  /**
   * PointTransaction upsert
   */
  export type PointTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PointTransaction to update in case it exists.
     */
    where: PointTransactionWhereUniqueInput
    /**
     * In case the PointTransaction found by the `where` argument doesn't exist, create a new PointTransaction with this data.
     */
    create: XOR<PointTransactionCreateInput, PointTransactionUncheckedCreateInput>
    /**
     * In case the PointTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointTransactionUpdateInput, PointTransactionUncheckedUpdateInput>
  }

  /**
   * PointTransaction delete
   */
  export type PointTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
    /**
     * Filter which PointTransaction to delete.
     */
    where: PointTransactionWhereUniqueInput
  }

  /**
   * PointTransaction deleteMany
   */
  export type PointTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointTransactions to delete
     */
    where?: PointTransactionWhereInput
    /**
     * Limit how many PointTransactions to delete.
     */
    limit?: number
  }

  /**
   * PointTransaction without action
   */
  export type PointTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointTransaction
     */
    select?: PointTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointTransaction
     */
    omit?: PointTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointTransactionInclude<ExtArgs> | null
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
    nickname: 'nickname',
    name: 'name',
    email: 'email',
    password: 'password',
    profileImageUrl: 'profileImageUrl',
    gender: 'gender',
    birth: 'birth',
    phoneNumber: 'phoneNumber',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RankingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rank: 'rank',
    previousRank: 'previousRank',
    tier: 'tier',
    totalPoints: 'totalPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RankingScalarFieldEnum = (typeof RankingScalarFieldEnum)[keyof typeof RankingScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    rewardPts: 'rewardPts',
    createdAt: 'createdAt'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const RoomParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    role: 'role',
    joinedAt: 'joinedAt',
    endAt: 'endAt'
  };

  export type RoomParticipantScalarFieldEnum = (typeof RoomParticipantScalarFieldEnum)[keyof typeof RoomParticipantScalarFieldEnum]


  export const AiJudgementScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    confidence: 'confidence',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AiJudgementScalarFieldEnum = (typeof AiJudgementScalarFieldEnum)[keyof typeof AiJudgementScalarFieldEnum]


  export const AiSummaryScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    summary: 'summary',
    createdAt: 'createdAt'
  };

  export type AiSummaryScalarFieldEnum = (typeof AiSummaryScalarFieldEnum)[keyof typeof AiSummaryScalarFieldEnum]


  export const UserItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemId: 'itemId',
    acquiredAt: 'acquiredAt',
    isEquipped: 'isEquipped'
  };

  export type UserItemScalarFieldEnum = (typeof UserItemScalarFieldEnum)[keyof typeof UserItemScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    context: 'context',
    cost: 'cost',
    createdAt: 'createdAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const BattleRoomScalarFieldEnum: {
    id: 'id',
    admin: 'admin',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt',
    endedAt: 'endedAt',
    approvalNum: 'approvalNum',
    oppositeNum: 'oppositeNum'
  };

  export type BattleRoomScalarFieldEnum = (typeof BattleRoomScalarFieldEnum)[keyof typeof BattleRoomScalarFieldEnum]


  export const BattleTitleScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    title: 'title',
    suggestedBy: 'suggestedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BattleTitleScalarFieldEnum = (typeof BattleTitleScalarFieldEnum)[keyof typeof BattleTitleScalarFieldEnum]


  export const QuestCompletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questId: 'questId',
    isCompleted: 'isCompleted',
    completedAt: 'completedAt'
  };

  export type QuestCompletionScalarFieldEnum = (typeof QuestCompletionScalarFieldEnum)[keyof typeof QuestCompletionScalarFieldEnum]


  export const PointTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    change: 'change',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type PointTransactionScalarFieldEnum = (typeof PointTransactionScalarFieldEnum)[keyof typeof PointTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nickname: 'nickname',
    name: 'name',
    email: 'email',
    password: 'password',
    profileImageUrl: 'profileImageUrl',
    gender: 'gender',
    phoneNumber: 'phoneNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RankingOrderByRelevanceFieldEnum: {
    tier: 'tier'
  };

  export type RankingOrderByRelevanceFieldEnum = (typeof RankingOrderByRelevanceFieldEnum)[keyof typeof RankingOrderByRelevanceFieldEnum]


  export const QuestOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    type: 'type'
  };

  export type QuestOrderByRelevanceFieldEnum = (typeof QuestOrderByRelevanceFieldEnum)[keyof typeof QuestOrderByRelevanceFieldEnum]


  export const RoomParticipantOrderByRelevanceFieldEnum: {
    role: 'role'
  };

  export type RoomParticipantOrderByRelevanceFieldEnum = (typeof RoomParticipantOrderByRelevanceFieldEnum)[keyof typeof RoomParticipantOrderByRelevanceFieldEnum]


  export const AiJudgementOrderByRelevanceFieldEnum: {
    details: 'details'
  };

  export type AiJudgementOrderByRelevanceFieldEnum = (typeof AiJudgementOrderByRelevanceFieldEnum)[keyof typeof AiJudgementOrderByRelevanceFieldEnum]


  export const AiSummaryOrderByRelevanceFieldEnum: {
    summary: 'summary'
  };

  export type AiSummaryOrderByRelevanceFieldEnum = (typeof AiSummaryOrderByRelevanceFieldEnum)[keyof typeof AiSummaryOrderByRelevanceFieldEnum]


  export const ItemOrderByRelevanceFieldEnum: {
    name: 'name',
    context: 'context'
  };

  export type ItemOrderByRelevanceFieldEnum = (typeof ItemOrderByRelevanceFieldEnum)[keyof typeof ItemOrderByRelevanceFieldEnum]


  export const BattleRoomOrderByRelevanceFieldEnum: {
    title: 'title',
    status: 'status'
  };

  export type BattleRoomOrderByRelevanceFieldEnum = (typeof BattleRoomOrderByRelevanceFieldEnum)[keyof typeof BattleRoomOrderByRelevanceFieldEnum]


  export const BattleTitleOrderByRelevanceFieldEnum: {
    title: 'title',
    suggestedBy: 'suggestedBy'
  };

  export type BattleTitleOrderByRelevanceFieldEnum = (typeof BattleTitleOrderByRelevanceFieldEnum)[keyof typeof BattleTitleOrderByRelevanceFieldEnum]


  export const PointTransactionOrderByRelevanceFieldEnum: {
    reason: 'reason'
  };

  export type PointTransactionOrderByRelevanceFieldEnum = (typeof PointTransactionOrderByRelevanceFieldEnum)[keyof typeof PointTransactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    nickname?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    gender?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ranking?: RankingListRelationFilter
    userItems?: UserItemListRelationFilter
    roomParticipants?: RoomParticipantListRelationFilter
    questCompletions?: QuestCompletionListRelationFilter
    pointTransactions?: PointTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    birth?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ranking?: RankingOrderByRelationAggregateInput
    userItems?: UserItemOrderByRelationAggregateInput
    roomParticipants?: RoomParticipantOrderByRelationAggregateInput
    questCompletions?: QuestCompletionOrderByRelationAggregateInput
    pointTransactions?: PointTransactionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    gender?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    phoneNumber?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ranking?: RankingListRelationFilter
    userItems?: UserItemListRelationFilter
    roomParticipants?: RoomParticipantListRelationFilter
    questCompletions?: QuestCompletionListRelationFilter
    pointTransactions?: PointTransactionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    birth?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
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
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    nickname?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringWithAggregatesFilter<"User"> | string
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    point?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RankingWhereInput = {
    AND?: RankingWhereInput | RankingWhereInput[]
    OR?: RankingWhereInput[]
    NOT?: RankingWhereInput | RankingWhereInput[]
    id?: BigIntFilter<"Ranking"> | bigint | number
    userId?: BigIntFilter<"Ranking"> | bigint | number
    rank?: IntFilter<"Ranking"> | number
    previousRank?: IntNullableFilter<"Ranking"> | number | null
    tier?: StringFilter<"Ranking"> | string
    totalPoints?: IntFilter<"Ranking"> | number
    createdAt?: DateTimeFilter<"Ranking"> | Date | string
    updatedAt?: DateTimeFilter<"Ranking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RankingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrderInput | SortOrder
    tier?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RankingOrderByRelevanceInput
  }

  export type RankingWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RankingWhereInput | RankingWhereInput[]
    OR?: RankingWhereInput[]
    NOT?: RankingWhereInput | RankingWhereInput[]
    userId?: BigIntFilter<"Ranking"> | bigint | number
    rank?: IntFilter<"Ranking"> | number
    previousRank?: IntNullableFilter<"Ranking"> | number | null
    tier?: StringFilter<"Ranking"> | string
    totalPoints?: IntFilter<"Ranking"> | number
    createdAt?: DateTimeFilter<"Ranking"> | Date | string
    updatedAt?: DateTimeFilter<"Ranking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RankingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrderInput | SortOrder
    tier?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RankingCountOrderByAggregateInput
    _avg?: RankingAvgOrderByAggregateInput
    _max?: RankingMaxOrderByAggregateInput
    _min?: RankingMinOrderByAggregateInput
    _sum?: RankingSumOrderByAggregateInput
  }

  export type RankingScalarWhereWithAggregatesInput = {
    AND?: RankingScalarWhereWithAggregatesInput | RankingScalarWhereWithAggregatesInput[]
    OR?: RankingScalarWhereWithAggregatesInput[]
    NOT?: RankingScalarWhereWithAggregatesInput | RankingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Ranking"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Ranking"> | bigint | number
    rank?: IntWithAggregatesFilter<"Ranking"> | number
    previousRank?: IntNullableWithAggregatesFilter<"Ranking"> | number | null
    tier?: StringWithAggregatesFilter<"Ranking"> | string
    totalPoints?: IntWithAggregatesFilter<"Ranking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ranking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ranking"> | Date | string
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: BigIntFilter<"Quest"> | bigint | number
    name?: StringFilter<"Quest"> | string
    description?: StringNullableFilter<"Quest"> | string | null
    type?: StringNullableFilter<"Quest"> | string | null
    rewardPts?: IntFilter<"Quest"> | number
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    questCompletions?: QuestCompletionListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    rewardPts?: SortOrder
    createdAt?: SortOrder
    questCompletions?: QuestCompletionOrderByRelationAggregateInput
    _relevance?: QuestOrderByRelevanceInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    name?: StringFilter<"Quest"> | string
    description?: StringNullableFilter<"Quest"> | string | null
    type?: StringNullableFilter<"Quest"> | string | null
    rewardPts?: IntFilter<"Quest"> | number
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    questCompletions?: QuestCompletionListRelationFilter
  }, "id">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    rewardPts?: SortOrder
    createdAt?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _avg?: QuestAvgOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
    _sum?: QuestSumOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Quest"> | bigint | number
    name?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringNullableWithAggregatesFilter<"Quest"> | string | null
    type?: StringNullableWithAggregatesFilter<"Quest"> | string | null
    rewardPts?: IntWithAggregatesFilter<"Quest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
  }

  export type RoomParticipantWhereInput = {
    AND?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    OR?: RoomParticipantWhereInput[]
    NOT?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    id?: BigIntFilter<"RoomParticipant"> | bigint | number
    userId?: BigIntFilter<"RoomParticipant"> | bigint | number
    roomId?: BigIntFilter<"RoomParticipant"> | bigint | number
    role?: StringFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeFilter<"RoomParticipant"> | Date | string
    endAt?: DateTimeNullableFilter<"RoomParticipant"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }

  export type RoomParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    endAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    battleRoom?: BattleRoomOrderByWithRelationInput
    _relevance?: RoomParticipantOrderByRelevanceInput
  }

  export type RoomParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    OR?: RoomParticipantWhereInput[]
    NOT?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    userId?: BigIntFilter<"RoomParticipant"> | bigint | number
    roomId?: BigIntFilter<"RoomParticipant"> | bigint | number
    role?: StringFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeFilter<"RoomParticipant"> | Date | string
    endAt?: DateTimeNullableFilter<"RoomParticipant"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }, "id">

  export type RoomParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    endAt?: SortOrderInput | SortOrder
    _count?: RoomParticipantCountOrderByAggregateInput
    _avg?: RoomParticipantAvgOrderByAggregateInput
    _max?: RoomParticipantMaxOrderByAggregateInput
    _min?: RoomParticipantMinOrderByAggregateInput
    _sum?: RoomParticipantSumOrderByAggregateInput
  }

  export type RoomParticipantScalarWhereWithAggregatesInput = {
    AND?: RoomParticipantScalarWhereWithAggregatesInput | RoomParticipantScalarWhereWithAggregatesInput[]
    OR?: RoomParticipantScalarWhereWithAggregatesInput[]
    NOT?: RoomParticipantScalarWhereWithAggregatesInput | RoomParticipantScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"RoomParticipant"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"RoomParticipant"> | bigint | number
    roomId?: BigIntWithAggregatesFilter<"RoomParticipant"> | bigint | number
    role?: StringWithAggregatesFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"RoomParticipant"> | Date | string
    endAt?: DateTimeNullableWithAggregatesFilter<"RoomParticipant"> | Date | string | null
  }

  export type AiJudgementWhereInput = {
    AND?: AiJudgementWhereInput | AiJudgementWhereInput[]
    OR?: AiJudgementWhereInput[]
    NOT?: AiJudgementWhereInput | AiJudgementWhereInput[]
    id?: BigIntFilter<"AiJudgement"> | bigint | number
    roomId?: BigIntFilter<"AiJudgement"> | bigint | number
    confidence?: DecimalFilter<"AiJudgement"> | Decimal | DecimalJsLike | number | string
    details?: StringFilter<"AiJudgement"> | string
    createdAt?: DateTimeFilter<"AiJudgement"> | Date | string
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }

  export type AiJudgementOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    battleRoom?: BattleRoomOrderByWithRelationInput
    _relevance?: AiJudgementOrderByRelevanceInput
  }

  export type AiJudgementWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AiJudgementWhereInput | AiJudgementWhereInput[]
    OR?: AiJudgementWhereInput[]
    NOT?: AiJudgementWhereInput | AiJudgementWhereInput[]
    roomId?: BigIntFilter<"AiJudgement"> | bigint | number
    confidence?: DecimalFilter<"AiJudgement"> | Decimal | DecimalJsLike | number | string
    details?: StringFilter<"AiJudgement"> | string
    createdAt?: DateTimeFilter<"AiJudgement"> | Date | string
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }, "id">

  export type AiJudgementOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: AiJudgementCountOrderByAggregateInput
    _avg?: AiJudgementAvgOrderByAggregateInput
    _max?: AiJudgementMaxOrderByAggregateInput
    _min?: AiJudgementMinOrderByAggregateInput
    _sum?: AiJudgementSumOrderByAggregateInput
  }

  export type AiJudgementScalarWhereWithAggregatesInput = {
    AND?: AiJudgementScalarWhereWithAggregatesInput | AiJudgementScalarWhereWithAggregatesInput[]
    OR?: AiJudgementScalarWhereWithAggregatesInput[]
    NOT?: AiJudgementScalarWhereWithAggregatesInput | AiJudgementScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AiJudgement"> | bigint | number
    roomId?: BigIntWithAggregatesFilter<"AiJudgement"> | bigint | number
    confidence?: DecimalWithAggregatesFilter<"AiJudgement"> | Decimal | DecimalJsLike | number | string
    details?: StringWithAggregatesFilter<"AiJudgement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiJudgement"> | Date | string
  }

  export type AiSummaryWhereInput = {
    AND?: AiSummaryWhereInput | AiSummaryWhereInput[]
    OR?: AiSummaryWhereInput[]
    NOT?: AiSummaryWhereInput | AiSummaryWhereInput[]
    id?: BigIntFilter<"AiSummary"> | bigint | number
    roomId?: BigIntFilter<"AiSummary"> | bigint | number
    summary?: StringFilter<"AiSummary"> | string
    createdAt?: DateTimeFilter<"AiSummary"> | Date | string
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }

  export type AiSummaryOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    battleRoom?: BattleRoomOrderByWithRelationInput
    _relevance?: AiSummaryOrderByRelevanceInput
  }

  export type AiSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AiSummaryWhereInput | AiSummaryWhereInput[]
    OR?: AiSummaryWhereInput[]
    NOT?: AiSummaryWhereInput | AiSummaryWhereInput[]
    roomId?: BigIntFilter<"AiSummary"> | bigint | number
    summary?: StringFilter<"AiSummary"> | string
    createdAt?: DateTimeFilter<"AiSummary"> | Date | string
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }, "id">

  export type AiSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    _count?: AiSummaryCountOrderByAggregateInput
    _avg?: AiSummaryAvgOrderByAggregateInput
    _max?: AiSummaryMaxOrderByAggregateInput
    _min?: AiSummaryMinOrderByAggregateInput
    _sum?: AiSummarySumOrderByAggregateInput
  }

  export type AiSummaryScalarWhereWithAggregatesInput = {
    AND?: AiSummaryScalarWhereWithAggregatesInput | AiSummaryScalarWhereWithAggregatesInput[]
    OR?: AiSummaryScalarWhereWithAggregatesInput[]
    NOT?: AiSummaryScalarWhereWithAggregatesInput | AiSummaryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AiSummary"> | bigint | number
    roomId?: BigIntWithAggregatesFilter<"AiSummary"> | bigint | number
    summary?: StringWithAggregatesFilter<"AiSummary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiSummary"> | Date | string
  }

  export type UserItemWhereInput = {
    AND?: UserItemWhereInput | UserItemWhereInput[]
    OR?: UserItemWhereInput[]
    NOT?: UserItemWhereInput | UserItemWhereInput[]
    id?: BigIntFilter<"UserItem"> | bigint | number
    userId?: BigIntFilter<"UserItem"> | bigint | number
    itemId?: BigIntFilter<"UserItem"> | bigint | number
    acquiredAt?: DateTimeFilter<"UserItem"> | Date | string
    isEquipped?: BoolFilter<"UserItem"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type UserItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    isEquipped?: SortOrder
    user?: UserOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type UserItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserItemWhereInput | UserItemWhereInput[]
    OR?: UserItemWhereInput[]
    NOT?: UserItemWhereInput | UserItemWhereInput[]
    userId?: BigIntFilter<"UserItem"> | bigint | number
    itemId?: BigIntFilter<"UserItem"> | bigint | number
    acquiredAt?: DateTimeFilter<"UserItem"> | Date | string
    isEquipped?: BoolFilter<"UserItem"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type UserItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    isEquipped?: SortOrder
    _count?: UserItemCountOrderByAggregateInput
    _avg?: UserItemAvgOrderByAggregateInput
    _max?: UserItemMaxOrderByAggregateInput
    _min?: UserItemMinOrderByAggregateInput
    _sum?: UserItemSumOrderByAggregateInput
  }

  export type UserItemScalarWhereWithAggregatesInput = {
    AND?: UserItemScalarWhereWithAggregatesInput | UserItemScalarWhereWithAggregatesInput[]
    OR?: UserItemScalarWhereWithAggregatesInput[]
    NOT?: UserItemScalarWhereWithAggregatesInput | UserItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserItem"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"UserItem"> | bigint | number
    itemId?: BigIntWithAggregatesFilter<"UserItem"> | bigint | number
    acquiredAt?: DateTimeWithAggregatesFilter<"UserItem"> | Date | string
    isEquipped?: BoolWithAggregatesFilter<"UserItem"> | boolean
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: BigIntFilter<"Item"> | bigint | number
    name?: StringFilter<"Item"> | string
    context?: StringNullableFilter<"Item"> | string | null
    cost?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    userItems?: UserItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrderInput | SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    userItems?: UserItemOrderByRelationAggregateInput
    _relevance?: ItemOrderByRelevanceInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    context?: StringNullableFilter<"Item"> | string | null
    cost?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    userItems?: UserItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrderInput | SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Item"> | bigint | number
    name?: StringWithAggregatesFilter<"Item"> | string
    context?: StringNullableWithAggregatesFilter<"Item"> | string | null
    cost?: IntWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type BattleRoomWhereInput = {
    AND?: BattleRoomWhereInput | BattleRoomWhereInput[]
    OR?: BattleRoomWhereInput[]
    NOT?: BattleRoomWhereInput | BattleRoomWhereInput[]
    id?: BigIntFilter<"BattleRoom"> | bigint | number
    admin?: BigIntFilter<"BattleRoom"> | bigint | number
    title?: StringFilter<"BattleRoom"> | string
    status?: StringFilter<"BattleRoom"> | string
    createdAt?: DateTimeFilter<"BattleRoom"> | Date | string
    endedAt?: DateTimeNullableFilter<"BattleRoom"> | Date | string | null
    approvalNum?: IntFilter<"BattleRoom"> | number
    oppositeNum?: IntFilter<"BattleRoom"> | number
    battleTitle?: BattleTitleListRelationFilter
    roomParticipants?: RoomParticipantListRelationFilter
    aiSummaries?: AiSummaryListRelationFilter
    aiJudgements?: AiJudgementListRelationFilter
  }

  export type BattleRoomOrderByWithRelationInput = {
    id?: SortOrder
    admin?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
    battleTitle?: BattleTitleOrderByRelationAggregateInput
    roomParticipants?: RoomParticipantOrderByRelationAggregateInput
    aiSummaries?: AiSummaryOrderByRelationAggregateInput
    aiJudgements?: AiJudgementOrderByRelationAggregateInput
    _relevance?: BattleRoomOrderByRelevanceInput
  }

  export type BattleRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: BattleRoomWhereInput | BattleRoomWhereInput[]
    OR?: BattleRoomWhereInput[]
    NOT?: BattleRoomWhereInput | BattleRoomWhereInput[]
    admin?: BigIntFilter<"BattleRoom"> | bigint | number
    title?: StringFilter<"BattleRoom"> | string
    status?: StringFilter<"BattleRoom"> | string
    createdAt?: DateTimeFilter<"BattleRoom"> | Date | string
    endedAt?: DateTimeNullableFilter<"BattleRoom"> | Date | string | null
    approvalNum?: IntFilter<"BattleRoom"> | number
    oppositeNum?: IntFilter<"BattleRoom"> | number
    battleTitle?: BattleTitleListRelationFilter
    roomParticipants?: RoomParticipantListRelationFilter
    aiSummaries?: AiSummaryListRelationFilter
    aiJudgements?: AiJudgementListRelationFilter
  }, "id">

  export type BattleRoomOrderByWithAggregationInput = {
    id?: SortOrder
    admin?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
    _count?: BattleRoomCountOrderByAggregateInput
    _avg?: BattleRoomAvgOrderByAggregateInput
    _max?: BattleRoomMaxOrderByAggregateInput
    _min?: BattleRoomMinOrderByAggregateInput
    _sum?: BattleRoomSumOrderByAggregateInput
  }

  export type BattleRoomScalarWhereWithAggregatesInput = {
    AND?: BattleRoomScalarWhereWithAggregatesInput | BattleRoomScalarWhereWithAggregatesInput[]
    OR?: BattleRoomScalarWhereWithAggregatesInput[]
    NOT?: BattleRoomScalarWhereWithAggregatesInput | BattleRoomScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"BattleRoom"> | bigint | number
    admin?: BigIntWithAggregatesFilter<"BattleRoom"> | bigint | number
    title?: StringWithAggregatesFilter<"BattleRoom"> | string
    status?: StringWithAggregatesFilter<"BattleRoom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BattleRoom"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"BattleRoom"> | Date | string | null
    approvalNum?: IntWithAggregatesFilter<"BattleRoom"> | number
    oppositeNum?: IntWithAggregatesFilter<"BattleRoom"> | number
  }

  export type BattleTitleWhereInput = {
    AND?: BattleTitleWhereInput | BattleTitleWhereInput[]
    OR?: BattleTitleWhereInput[]
    NOT?: BattleTitleWhereInput | BattleTitleWhereInput[]
    id?: BigIntFilter<"BattleTitle"> | bigint | number
    roomId?: BigIntFilter<"BattleTitle"> | bigint | number
    title?: StringFilter<"BattleTitle"> | string
    suggestedBy?: StringFilter<"BattleTitle"> | string
    createdAt?: DateTimeFilter<"BattleTitle"> | Date | string
    updatedAt?: DateTimeFilter<"BattleTitle"> | Date | string
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }

  export type BattleTitleOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    title?: SortOrder
    suggestedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    battleRoom?: BattleRoomOrderByWithRelationInput
    _relevance?: BattleTitleOrderByRelevanceInput
  }

  export type BattleTitleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: BattleTitleWhereInput | BattleTitleWhereInput[]
    OR?: BattleTitleWhereInput[]
    NOT?: BattleTitleWhereInput | BattleTitleWhereInput[]
    roomId?: BigIntFilter<"BattleTitle"> | bigint | number
    title?: StringFilter<"BattleTitle"> | string
    suggestedBy?: StringFilter<"BattleTitle"> | string
    createdAt?: DateTimeFilter<"BattleTitle"> | Date | string
    updatedAt?: DateTimeFilter<"BattleTitle"> | Date | string
    battleRoom?: XOR<BattleRoomScalarRelationFilter, BattleRoomWhereInput>
  }, "id">

  export type BattleTitleOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    title?: SortOrder
    suggestedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BattleTitleCountOrderByAggregateInput
    _avg?: BattleTitleAvgOrderByAggregateInput
    _max?: BattleTitleMaxOrderByAggregateInput
    _min?: BattleTitleMinOrderByAggregateInput
    _sum?: BattleTitleSumOrderByAggregateInput
  }

  export type BattleTitleScalarWhereWithAggregatesInput = {
    AND?: BattleTitleScalarWhereWithAggregatesInput | BattleTitleScalarWhereWithAggregatesInput[]
    OR?: BattleTitleScalarWhereWithAggregatesInput[]
    NOT?: BattleTitleScalarWhereWithAggregatesInput | BattleTitleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"BattleTitle"> | bigint | number
    roomId?: BigIntWithAggregatesFilter<"BattleTitle"> | bigint | number
    title?: StringWithAggregatesFilter<"BattleTitle"> | string
    suggestedBy?: StringWithAggregatesFilter<"BattleTitle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BattleTitle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BattleTitle"> | Date | string
  }

  export type QuestCompletionWhereInput = {
    AND?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    OR?: QuestCompletionWhereInput[]
    NOT?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    id?: BigIntFilter<"QuestCompletion"> | bigint | number
    userId?: BigIntFilter<"QuestCompletion"> | bigint | number
    questId?: BigIntFilter<"QuestCompletion"> | bigint | number
    isCompleted?: BoolFilter<"QuestCompletion"> | boolean
    completedAt?: DateTimeNullableFilter<"QuestCompletion"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }

  export type QuestCompletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    quest?: QuestOrderByWithRelationInput
  }

  export type QuestCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    OR?: QuestCompletionWhereInput[]
    NOT?: QuestCompletionWhereInput | QuestCompletionWhereInput[]
    userId?: BigIntFilter<"QuestCompletion"> | bigint | number
    questId?: BigIntFilter<"QuestCompletion"> | bigint | number
    isCompleted?: BoolFilter<"QuestCompletion"> | boolean
    completedAt?: DateTimeNullableFilter<"QuestCompletion"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }, "id">

  export type QuestCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: QuestCompletionCountOrderByAggregateInput
    _avg?: QuestCompletionAvgOrderByAggregateInput
    _max?: QuestCompletionMaxOrderByAggregateInput
    _min?: QuestCompletionMinOrderByAggregateInput
    _sum?: QuestCompletionSumOrderByAggregateInput
  }

  export type QuestCompletionScalarWhereWithAggregatesInput = {
    AND?: QuestCompletionScalarWhereWithAggregatesInput | QuestCompletionScalarWhereWithAggregatesInput[]
    OR?: QuestCompletionScalarWhereWithAggregatesInput[]
    NOT?: QuestCompletionScalarWhereWithAggregatesInput | QuestCompletionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"QuestCompletion"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"QuestCompletion"> | bigint | number
    questId?: BigIntWithAggregatesFilter<"QuestCompletion"> | bigint | number
    isCompleted?: BoolWithAggregatesFilter<"QuestCompletion"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"QuestCompletion"> | Date | string | null
  }

  export type PointTransactionWhereInput = {
    AND?: PointTransactionWhereInput | PointTransactionWhereInput[]
    OR?: PointTransactionWhereInput[]
    NOT?: PointTransactionWhereInput | PointTransactionWhereInput[]
    id?: BigIntFilter<"PointTransaction"> | bigint | number
    userId?: BigIntFilter<"PointTransaction"> | bigint | number
    change?: IntFilter<"PointTransaction"> | number
    reason?: StringFilter<"PointTransaction"> | string
    createdAt?: DateTimeFilter<"PointTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PointTransactionOrderByRelevanceInput
  }

  export type PointTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PointTransactionWhereInput | PointTransactionWhereInput[]
    OR?: PointTransactionWhereInput[]
    NOT?: PointTransactionWhereInput | PointTransactionWhereInput[]
    userId?: BigIntFilter<"PointTransaction"> | bigint | number
    change?: IntFilter<"PointTransaction"> | number
    reason?: StringFilter<"PointTransaction"> | string
    createdAt?: DateTimeFilter<"PointTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: PointTransactionCountOrderByAggregateInput
    _avg?: PointTransactionAvgOrderByAggregateInput
    _max?: PointTransactionMaxOrderByAggregateInput
    _min?: PointTransactionMinOrderByAggregateInput
    _sum?: PointTransactionSumOrderByAggregateInput
  }

  export type PointTransactionScalarWhereWithAggregatesInput = {
    AND?: PointTransactionScalarWhereWithAggregatesInput | PointTransactionScalarWhereWithAggregatesInput[]
    OR?: PointTransactionScalarWhereWithAggregatesInput[]
    NOT?: PointTransactionScalarWhereWithAggregatesInput | PointTransactionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"PointTransaction"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"PointTransaction"> | bigint | number
    change?: IntWithAggregatesFilter<"PointTransaction"> | number
    reason?: StringWithAggregatesFilter<"PointTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PointTransaction"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingCreateNestedManyWithoutUserInput
    userItems?: UserItemCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingUncheckedCreateNestedManyWithoutUserInput
    userItems?: UserItemUncheckedCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUpdateManyWithoutUserNestedInput
    userItems?: UserItemUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUncheckedUpdateManyWithoutUserNestedInput
    userItems?: UserItemUncheckedUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingCreateInput = {
    id?: bigint | number
    rank?: number
    previousRank?: number | null
    tier: string
    totalPoints: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRankingInput
  }

  export type RankingUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    rank?: number
    previousRank?: number | null
    tier: string
    totalPoints: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RankingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRankingNestedInput
  }

  export type RankingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    rank?: number
    previousRank?: number | null
    tier: string
    totalPoints: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RankingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    type?: string | null
    rewardPts: number
    createdAt?: Date | string
    questCompletions?: QuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    type?: string | null
    rewardPts: number
    createdAt?: Date | string
    questCompletions?: QuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rewardPts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questCompletions?: QuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rewardPts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questCompletions?: QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    type?: string | null
    rewardPts: number
    createdAt?: Date | string
  }

  export type QuestUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rewardPts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rewardPts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomParticipantCreateInput = {
    id?: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoomParticipantsInput
    battleRoom: BattleRoomCreateNestedOneWithoutRoomParticipantsInput
  }

  export type RoomParticipantUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    roomId: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
  }

  export type RoomParticipantUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoomParticipantsNestedInput
    battleRoom?: BattleRoomUpdateOneRequiredWithoutRoomParticipantsNestedInput
  }

  export type RoomParticipantUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    roomId: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
  }

  export type RoomParticipantUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiJudgementCreateInput = {
    id?: bigint | number
    confidence: Decimal | DecimalJsLike | number | string
    details: string
    createdAt?: Date | string
    battleRoom: BattleRoomCreateNestedOneWithoutAiJudgementsInput
  }

  export type AiJudgementUncheckedCreateInput = {
    id?: bigint | number
    roomId: bigint | number
    confidence: Decimal | DecimalJsLike | number | string
    details: string
    createdAt?: Date | string
  }

  export type AiJudgementUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battleRoom?: BattleRoomUpdateOneRequiredWithoutAiJudgementsNestedInput
  }

  export type AiJudgementUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiJudgementCreateManyInput = {
    id?: bigint | number
    roomId: bigint | number
    confidence: Decimal | DecimalJsLike | number | string
    details: string
    createdAt?: Date | string
  }

  export type AiJudgementUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiJudgementUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSummaryCreateInput = {
    id?: bigint | number
    summary: string
    createdAt?: Date | string
    battleRoom: BattleRoomCreateNestedOneWithoutAiSummariesInput
  }

  export type AiSummaryUncheckedCreateInput = {
    id?: bigint | number
    roomId: bigint | number
    summary: string
    createdAt?: Date | string
  }

  export type AiSummaryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battleRoom?: BattleRoomUpdateOneRequiredWithoutAiSummariesNestedInput
  }

  export type AiSummaryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSummaryCreateManyInput = {
    id?: bigint | number
    roomId: bigint | number
    summary: string
    createdAt?: Date | string
  }

  export type AiSummaryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSummaryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserItemCreateInput = {
    id?: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
    user: UserCreateNestedOneWithoutUserItemsInput
    item: ItemCreateNestedOneWithoutUserItemsInput
  }

  export type UserItemUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    itemId: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
  }

  export type UserItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutUserItemsNestedInput
  }

  export type UserItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    itemId: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
  }

  export type UserItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemCreateInput = {
    id?: bigint | number
    name: string
    context?: string | null
    cost: number
    createdAt?: Date | string
    userItems?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: bigint | number
    name: string
    context?: string | null
    cost: number
    createdAt?: Date | string
    userItems?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userItems?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userItems?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: bigint | number
    name: string
    context?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleRoomCreateInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleCreateNestedManyWithoutBattleRoomInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomUncheckedCreateInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleUncheckedCreateNestedManyWithoutBattleRoomInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementUncheckedCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUpdateManyWithoutBattleRoomNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUncheckedUpdateManyWithoutBattleRoomNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUncheckedUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomCreateManyInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
  }

  export type BattleRoomUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
  }

  export type BattleRoomUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
  }

  export type BattleTitleCreateInput = {
    id?: bigint | number
    title: string
    suggestedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    battleRoom: BattleRoomCreateNestedOneWithoutBattleTitleInput
  }

  export type BattleTitleUncheckedCreateInput = {
    id?: bigint | number
    roomId: bigint | number
    title: string
    suggestedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BattleTitleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battleRoom?: BattleRoomUpdateOneRequiredWithoutBattleTitleNestedInput
  }

  export type BattleTitleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleTitleCreateManyInput = {
    id?: bigint | number
    roomId: bigint | number
    title: string
    suggestedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BattleTitleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleTitleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionCreateInput = {
    id?: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQuestCompletionsInput
    quest: QuestCreateNestedOneWithoutQuestCompletionsInput
  }

  export type QuestCompletionUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    questId: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
  }

  export type QuestCompletionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQuestCompletionsNestedInput
    quest?: QuestUpdateOneRequiredWithoutQuestCompletionsNestedInput
  }

  export type QuestCompletionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    questId?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestCompletionCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    questId: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
  }

  export type QuestCompletionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestCompletionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    questId?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointTransactionCreateInput = {
    id?: bigint | number
    change: number
    reason: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPointTransactionsInput
  }

  export type PointTransactionUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type PointTransactionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointTransactionsNestedInput
  }

  export type PointTransactionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointTransactionCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type PointTransactionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointTransactionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RankingListRelationFilter = {
    every?: RankingWhereInput
    some?: RankingWhereInput
    none?: RankingWhereInput
  }

  export type UserItemListRelationFilter = {
    every?: UserItemWhereInput
    some?: UserItemWhereInput
    none?: UserItemWhereInput
  }

  export type RoomParticipantListRelationFilter = {
    every?: RoomParticipantWhereInput
    some?: RoomParticipantWhereInput
    none?: RoomParticipantWhereInput
  }

  export type QuestCompletionListRelationFilter = {
    every?: QuestCompletionWhereInput
    some?: QuestCompletionWhereInput
    none?: QuestCompletionWhereInput
  }

  export type PointTransactionListRelationFilter = {
    every?: PointTransactionWhereInput
    some?: PointTransactionWhereInput
    none?: PointTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RankingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImageUrl?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImageUrl?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImageUrl?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    phoneNumber?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RankingOrderByRelevanceInput = {
    fields: RankingOrderByRelevanceFieldEnum | RankingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RankingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrder
    tier?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RankingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrder
    totalPoints?: SortOrder
  }

  export type RankingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrder
    tier?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RankingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrder
    tier?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RankingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rank?: SortOrder
    previousRank?: SortOrder
    totalPoints?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type QuestOrderByRelevanceInput = {
    fields: QuestOrderByRelevanceFieldEnum | QuestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardPts?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestAvgOrderByAggregateInput = {
    id?: SortOrder
    rewardPts?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardPts?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardPts?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestSumOrderByAggregateInput = {
    id?: SortOrder
    rewardPts?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BattleRoomScalarRelationFilter = {
    is?: BattleRoomWhereInput
    isNot?: BattleRoomWhereInput
  }

  export type RoomParticipantOrderByRelevanceInput = {
    fields: RoomParticipantOrderByRelevanceFieldEnum | RoomParticipantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    endAt?: SortOrder
  }

  export type RoomParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type RoomParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    endAt?: SortOrder
  }

  export type RoomParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    endAt?: SortOrder
  }

  export type RoomParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AiJudgementOrderByRelevanceInput = {
    fields: AiJudgementOrderByRelevanceFieldEnum | AiJudgementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AiJudgementCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AiJudgementAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
  }

  export type AiJudgementMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AiJudgementMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AiJudgementSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    confidence?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type AiSummaryOrderByRelevanceInput = {
    fields: AiSummaryOrderByRelevanceFieldEnum | AiSummaryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AiSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type AiSummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type AiSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type AiSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type AiSummarySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type UserItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    isEquipped?: SortOrder
  }

  export type UserItemAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
  }

  export type UserItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    isEquipped?: SortOrder
  }

  export type UserItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    acquiredAt?: SortOrder
    isEquipped?: SortOrder
  }

  export type UserItemSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemOrderByRelevanceInput = {
    fields: ItemOrderByRelevanceFieldEnum | ItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    context?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
  }

  export type BattleTitleListRelationFilter = {
    every?: BattleTitleWhereInput
    some?: BattleTitleWhereInput
    none?: BattleTitleWhereInput
  }

  export type AiSummaryListRelationFilter = {
    every?: AiSummaryWhereInput
    some?: AiSummaryWhereInput
    none?: AiSummaryWhereInput
  }

  export type AiJudgementListRelationFilter = {
    every?: AiJudgementWhereInput
    some?: AiJudgementWhereInput
    none?: AiJudgementWhereInput
  }

  export type BattleTitleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiJudgementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BattleRoomOrderByRelevanceInput = {
    fields: BattleRoomOrderByRelevanceFieldEnum | BattleRoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BattleRoomCountOrderByAggregateInput = {
    id?: SortOrder
    admin?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
  }

  export type BattleRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    admin?: SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
  }

  export type BattleRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    admin?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
  }

  export type BattleRoomMinOrderByAggregateInput = {
    id?: SortOrder
    admin?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
  }

  export type BattleRoomSumOrderByAggregateInput = {
    id?: SortOrder
    admin?: SortOrder
    approvalNum?: SortOrder
    oppositeNum?: SortOrder
  }

  export type BattleTitleOrderByRelevanceInput = {
    fields: BattleTitleOrderByRelevanceFieldEnum | BattleTitleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BattleTitleCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    title?: SortOrder
    suggestedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BattleTitleAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type BattleTitleMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    title?: SortOrder
    suggestedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BattleTitleMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    title?: SortOrder
    suggestedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BattleTitleSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type QuestScalarRelationFilter = {
    is?: QuestWhereInput
    isNot?: QuestWhereInput
  }

  export type QuestCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
  }

  export type QuestCompletionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
  }

  export type QuestCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
  }

  export type QuestCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
  }

  export type QuestCompletionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
  }

  export type PointTransactionOrderByRelevanceInput = {
    fields: PointTransactionOrderByRelevanceFieldEnum | PointTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PointTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PointTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
  }

  export type PointTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PointTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PointTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    change?: SortOrder
  }

  export type RankingCreateNestedManyWithoutUserInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
  }

  export type UserItemCreateNestedManyWithoutUserInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type RoomParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type QuestCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type PointTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PointTransactionCreateWithoutUserInput, PointTransactionUncheckedCreateWithoutUserInput> | PointTransactionCreateWithoutUserInput[] | PointTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointTransactionCreateOrConnectWithoutUserInput | PointTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PointTransactionCreateManyUserInputEnvelope
    connect?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
  }

  export type RankingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
  }

  export type UserItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type RoomParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type QuestCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type PointTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointTransactionCreateWithoutUserInput, PointTransactionUncheckedCreateWithoutUserInput> | PointTransactionCreateWithoutUserInput[] | PointTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointTransactionCreateOrConnectWithoutUserInput | PointTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PointTransactionCreateManyUserInputEnvelope
    connect?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RankingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    upsert?: RankingUpsertWithWhereUniqueWithoutUserInput | RankingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    set?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    disconnect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    delete?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    update?: RankingUpdateWithWhereUniqueWithoutUserInput | RankingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RankingUpdateManyWithWhereWithoutUserInput | RankingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RankingScalarWhereInput | RankingScalarWhereInput[]
  }

  export type UserItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutUserInput | UserItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutUserInput | UserItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutUserInput | UserItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type RoomParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutUserInput | RoomParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutUserInput | RoomParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutUserInput | RoomParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type QuestCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutUserInput | QuestCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutUserInput | QuestCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutUserInput | QuestCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type PointTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointTransactionCreateWithoutUserInput, PointTransactionUncheckedCreateWithoutUserInput> | PointTransactionCreateWithoutUserInput[] | PointTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointTransactionCreateOrConnectWithoutUserInput | PointTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PointTransactionUpsertWithWhereUniqueWithoutUserInput | PointTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointTransactionCreateManyUserInputEnvelope
    set?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    disconnect?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    delete?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    connect?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    update?: PointTransactionUpdateWithWhereUniqueWithoutUserInput | PointTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointTransactionUpdateManyWithWhereWithoutUserInput | PointTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointTransactionScalarWhereInput | PointTransactionScalarWhereInput[]
  }

  export type RankingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    upsert?: RankingUpsertWithWhereUniqueWithoutUserInput | RankingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    set?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    disconnect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    delete?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    update?: RankingUpdateWithWhereUniqueWithoutUserInput | RankingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RankingUpdateManyWithWhereWithoutUserInput | RankingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RankingScalarWhereInput | RankingScalarWhereInput[]
  }

  export type UserItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutUserInput | UserItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutUserInput | UserItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutUserInput | UserItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type RoomParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutUserInput | RoomParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutUserInput | RoomParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutUserInput | RoomParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type QuestCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput> | QuestCompletionCreateWithoutUserInput[] | QuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutUserInput | QuestCompletionCreateOrConnectWithoutUserInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutUserInput | QuestCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestCompletionCreateManyUserInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutUserInput | QuestCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutUserInput | QuestCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type PointTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointTransactionCreateWithoutUserInput, PointTransactionUncheckedCreateWithoutUserInput> | PointTransactionCreateWithoutUserInput[] | PointTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointTransactionCreateOrConnectWithoutUserInput | PointTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PointTransactionUpsertWithWhereUniqueWithoutUserInput | PointTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointTransactionCreateManyUserInputEnvelope
    set?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    disconnect?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    delete?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    connect?: PointTransactionWhereUniqueInput | PointTransactionWhereUniqueInput[]
    update?: PointTransactionUpdateWithWhereUniqueWithoutUserInput | PointTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointTransactionUpdateManyWithWhereWithoutUserInput | PointTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointTransactionScalarWhereInput | PointTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRankingInput = {
    create?: XOR<UserCreateWithoutRankingInput, UserUncheckedCreateWithoutRankingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRankingInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRankingNestedInput = {
    create?: XOR<UserCreateWithoutRankingInput, UserUncheckedCreateWithoutRankingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRankingInput
    upsert?: UserUpsertWithoutRankingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRankingInput, UserUpdateWithoutRankingInput>, UserUncheckedUpdateWithoutRankingInput>
  }

  export type QuestCompletionCreateNestedManyWithoutQuestInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type QuestCompletionUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
  }

  export type QuestCompletionUpdateManyWithoutQuestNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutQuestInput | QuestCompletionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutQuestInput | QuestCompletionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutQuestInput | QuestCompletionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type QuestCompletionUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput> | QuestCompletionCreateWithoutQuestInput[] | QuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: QuestCompletionCreateOrConnectWithoutQuestInput | QuestCompletionCreateOrConnectWithoutQuestInput[]
    upsert?: QuestCompletionUpsertWithWhereUniqueWithoutQuestInput | QuestCompletionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: QuestCompletionCreateManyQuestInputEnvelope
    set?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    disconnect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    delete?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    connect?: QuestCompletionWhereUniqueInput | QuestCompletionWhereUniqueInput[]
    update?: QuestCompletionUpdateWithWhereUniqueWithoutQuestInput | QuestCompletionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: QuestCompletionUpdateManyWithWhereWithoutQuestInput | QuestCompletionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomParticipantsInput = {
    create?: XOR<UserCreateWithoutRoomParticipantsInput, UserUncheckedCreateWithoutRoomParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type BattleRoomCreateNestedOneWithoutRoomParticipantsInput = {
    create?: XOR<BattleRoomCreateWithoutRoomParticipantsInput, BattleRoomUncheckedCreateWithoutRoomParticipantsInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutRoomParticipantsInput
    connect?: BattleRoomWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRoomParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutRoomParticipantsInput, UserUncheckedCreateWithoutRoomParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomParticipantsInput
    upsert?: UserUpsertWithoutRoomParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomParticipantsInput, UserUpdateWithoutRoomParticipantsInput>, UserUncheckedUpdateWithoutRoomParticipantsInput>
  }

  export type BattleRoomUpdateOneRequiredWithoutRoomParticipantsNestedInput = {
    create?: XOR<BattleRoomCreateWithoutRoomParticipantsInput, BattleRoomUncheckedCreateWithoutRoomParticipantsInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutRoomParticipantsInput
    upsert?: BattleRoomUpsertWithoutRoomParticipantsInput
    connect?: BattleRoomWhereUniqueInput
    update?: XOR<XOR<BattleRoomUpdateToOneWithWhereWithoutRoomParticipantsInput, BattleRoomUpdateWithoutRoomParticipantsInput>, BattleRoomUncheckedUpdateWithoutRoomParticipantsInput>
  }

  export type BattleRoomCreateNestedOneWithoutAiJudgementsInput = {
    create?: XOR<BattleRoomCreateWithoutAiJudgementsInput, BattleRoomUncheckedCreateWithoutAiJudgementsInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutAiJudgementsInput
    connect?: BattleRoomWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BattleRoomUpdateOneRequiredWithoutAiJudgementsNestedInput = {
    create?: XOR<BattleRoomCreateWithoutAiJudgementsInput, BattleRoomUncheckedCreateWithoutAiJudgementsInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutAiJudgementsInput
    upsert?: BattleRoomUpsertWithoutAiJudgementsInput
    connect?: BattleRoomWhereUniqueInput
    update?: XOR<XOR<BattleRoomUpdateToOneWithWhereWithoutAiJudgementsInput, BattleRoomUpdateWithoutAiJudgementsInput>, BattleRoomUncheckedUpdateWithoutAiJudgementsInput>
  }

  export type BattleRoomCreateNestedOneWithoutAiSummariesInput = {
    create?: XOR<BattleRoomCreateWithoutAiSummariesInput, BattleRoomUncheckedCreateWithoutAiSummariesInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutAiSummariesInput
    connect?: BattleRoomWhereUniqueInput
  }

  export type BattleRoomUpdateOneRequiredWithoutAiSummariesNestedInput = {
    create?: XOR<BattleRoomCreateWithoutAiSummariesInput, BattleRoomUncheckedCreateWithoutAiSummariesInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutAiSummariesInput
    upsert?: BattleRoomUpsertWithoutAiSummariesInput
    connect?: BattleRoomWhereUniqueInput
    update?: XOR<XOR<BattleRoomUpdateToOneWithWhereWithoutAiSummariesInput, BattleRoomUpdateWithoutAiSummariesInput>, BattleRoomUncheckedUpdateWithoutAiSummariesInput>
  }

  export type UserCreateNestedOneWithoutUserItemsInput = {
    create?: XOR<UserCreateWithoutUserItemsInput, UserUncheckedCreateWithoutUserItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutUserItemsInput = {
    create?: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUserItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserItemsNestedInput = {
    create?: XOR<UserCreateWithoutUserItemsInput, UserUncheckedCreateWithoutUserItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserItemsInput
    upsert?: UserUpsertWithoutUserItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserItemsInput, UserUpdateWithoutUserItemsInput>, UserUncheckedUpdateWithoutUserItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutUserItemsNestedInput = {
    create?: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUserItemsInput
    upsert?: ItemUpsertWithoutUserItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutUserItemsInput, ItemUpdateWithoutUserItemsInput>, ItemUncheckedUpdateWithoutUserItemsInput>
  }

  export type UserItemCreateNestedManyWithoutItemInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutItemInput | UserItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutItemInput | UserItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutItemInput | UserItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutItemInput | UserItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutItemInput | UserItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutItemInput | UserItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type BattleTitleCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<BattleTitleCreateWithoutBattleRoomInput, BattleTitleUncheckedCreateWithoutBattleRoomInput> | BattleTitleCreateWithoutBattleRoomInput[] | BattleTitleUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: BattleTitleCreateOrConnectWithoutBattleRoomInput | BattleTitleCreateOrConnectWithoutBattleRoomInput[]
    createMany?: BattleTitleCreateManyBattleRoomInputEnvelope
    connect?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
  }

  export type RoomParticipantCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<RoomParticipantCreateWithoutBattleRoomInput, RoomParticipantUncheckedCreateWithoutBattleRoomInput> | RoomParticipantCreateWithoutBattleRoomInput[] | RoomParticipantUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutBattleRoomInput | RoomParticipantCreateOrConnectWithoutBattleRoomInput[]
    createMany?: RoomParticipantCreateManyBattleRoomInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type AiSummaryCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<AiSummaryCreateWithoutBattleRoomInput, AiSummaryUncheckedCreateWithoutBattleRoomInput> | AiSummaryCreateWithoutBattleRoomInput[] | AiSummaryUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiSummaryCreateOrConnectWithoutBattleRoomInput | AiSummaryCreateOrConnectWithoutBattleRoomInput[]
    createMany?: AiSummaryCreateManyBattleRoomInputEnvelope
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
  }

  export type AiJudgementCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<AiJudgementCreateWithoutBattleRoomInput, AiJudgementUncheckedCreateWithoutBattleRoomInput> | AiJudgementCreateWithoutBattleRoomInput[] | AiJudgementUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiJudgementCreateOrConnectWithoutBattleRoomInput | AiJudgementCreateOrConnectWithoutBattleRoomInput[]
    createMany?: AiJudgementCreateManyBattleRoomInputEnvelope
    connect?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
  }

  export type BattleTitleUncheckedCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<BattleTitleCreateWithoutBattleRoomInput, BattleTitleUncheckedCreateWithoutBattleRoomInput> | BattleTitleCreateWithoutBattleRoomInput[] | BattleTitleUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: BattleTitleCreateOrConnectWithoutBattleRoomInput | BattleTitleCreateOrConnectWithoutBattleRoomInput[]
    createMany?: BattleTitleCreateManyBattleRoomInputEnvelope
    connect?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
  }

  export type RoomParticipantUncheckedCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<RoomParticipantCreateWithoutBattleRoomInput, RoomParticipantUncheckedCreateWithoutBattleRoomInput> | RoomParticipantCreateWithoutBattleRoomInput[] | RoomParticipantUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutBattleRoomInput | RoomParticipantCreateOrConnectWithoutBattleRoomInput[]
    createMany?: RoomParticipantCreateManyBattleRoomInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type AiSummaryUncheckedCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<AiSummaryCreateWithoutBattleRoomInput, AiSummaryUncheckedCreateWithoutBattleRoomInput> | AiSummaryCreateWithoutBattleRoomInput[] | AiSummaryUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiSummaryCreateOrConnectWithoutBattleRoomInput | AiSummaryCreateOrConnectWithoutBattleRoomInput[]
    createMany?: AiSummaryCreateManyBattleRoomInputEnvelope
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
  }

  export type AiJudgementUncheckedCreateNestedManyWithoutBattleRoomInput = {
    create?: XOR<AiJudgementCreateWithoutBattleRoomInput, AiJudgementUncheckedCreateWithoutBattleRoomInput> | AiJudgementCreateWithoutBattleRoomInput[] | AiJudgementUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiJudgementCreateOrConnectWithoutBattleRoomInput | AiJudgementCreateOrConnectWithoutBattleRoomInput[]
    createMany?: AiJudgementCreateManyBattleRoomInputEnvelope
    connect?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
  }

  export type BattleTitleUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<BattleTitleCreateWithoutBattleRoomInput, BattleTitleUncheckedCreateWithoutBattleRoomInput> | BattleTitleCreateWithoutBattleRoomInput[] | BattleTitleUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: BattleTitleCreateOrConnectWithoutBattleRoomInput | BattleTitleCreateOrConnectWithoutBattleRoomInput[]
    upsert?: BattleTitleUpsertWithWhereUniqueWithoutBattleRoomInput | BattleTitleUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: BattleTitleCreateManyBattleRoomInputEnvelope
    set?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    disconnect?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    delete?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    connect?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    update?: BattleTitleUpdateWithWhereUniqueWithoutBattleRoomInput | BattleTitleUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: BattleTitleUpdateManyWithWhereWithoutBattleRoomInput | BattleTitleUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: BattleTitleScalarWhereInput | BattleTitleScalarWhereInput[]
  }

  export type RoomParticipantUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutBattleRoomInput, RoomParticipantUncheckedCreateWithoutBattleRoomInput> | RoomParticipantCreateWithoutBattleRoomInput[] | RoomParticipantUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutBattleRoomInput | RoomParticipantCreateOrConnectWithoutBattleRoomInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutBattleRoomInput | RoomParticipantUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: RoomParticipantCreateManyBattleRoomInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutBattleRoomInput | RoomParticipantUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutBattleRoomInput | RoomParticipantUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type AiSummaryUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<AiSummaryCreateWithoutBattleRoomInput, AiSummaryUncheckedCreateWithoutBattleRoomInput> | AiSummaryCreateWithoutBattleRoomInput[] | AiSummaryUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiSummaryCreateOrConnectWithoutBattleRoomInput | AiSummaryCreateOrConnectWithoutBattleRoomInput[]
    upsert?: AiSummaryUpsertWithWhereUniqueWithoutBattleRoomInput | AiSummaryUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: AiSummaryCreateManyBattleRoomInputEnvelope
    set?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    disconnect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    delete?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    update?: AiSummaryUpdateWithWhereUniqueWithoutBattleRoomInput | AiSummaryUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: AiSummaryUpdateManyWithWhereWithoutBattleRoomInput | AiSummaryUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[]
  }

  export type AiJudgementUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<AiJudgementCreateWithoutBattleRoomInput, AiJudgementUncheckedCreateWithoutBattleRoomInput> | AiJudgementCreateWithoutBattleRoomInput[] | AiJudgementUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiJudgementCreateOrConnectWithoutBattleRoomInput | AiJudgementCreateOrConnectWithoutBattleRoomInput[]
    upsert?: AiJudgementUpsertWithWhereUniqueWithoutBattleRoomInput | AiJudgementUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: AiJudgementCreateManyBattleRoomInputEnvelope
    set?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    disconnect?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    delete?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    connect?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    update?: AiJudgementUpdateWithWhereUniqueWithoutBattleRoomInput | AiJudgementUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: AiJudgementUpdateManyWithWhereWithoutBattleRoomInput | AiJudgementUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: AiJudgementScalarWhereInput | AiJudgementScalarWhereInput[]
  }

  export type BattleTitleUncheckedUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<BattleTitleCreateWithoutBattleRoomInput, BattleTitleUncheckedCreateWithoutBattleRoomInput> | BattleTitleCreateWithoutBattleRoomInput[] | BattleTitleUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: BattleTitleCreateOrConnectWithoutBattleRoomInput | BattleTitleCreateOrConnectWithoutBattleRoomInput[]
    upsert?: BattleTitleUpsertWithWhereUniqueWithoutBattleRoomInput | BattleTitleUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: BattleTitleCreateManyBattleRoomInputEnvelope
    set?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    disconnect?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    delete?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    connect?: BattleTitleWhereUniqueInput | BattleTitleWhereUniqueInput[]
    update?: BattleTitleUpdateWithWhereUniqueWithoutBattleRoomInput | BattleTitleUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: BattleTitleUpdateManyWithWhereWithoutBattleRoomInput | BattleTitleUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: BattleTitleScalarWhereInput | BattleTitleScalarWhereInput[]
  }

  export type RoomParticipantUncheckedUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutBattleRoomInput, RoomParticipantUncheckedCreateWithoutBattleRoomInput> | RoomParticipantCreateWithoutBattleRoomInput[] | RoomParticipantUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutBattleRoomInput | RoomParticipantCreateOrConnectWithoutBattleRoomInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutBattleRoomInput | RoomParticipantUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: RoomParticipantCreateManyBattleRoomInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutBattleRoomInput | RoomParticipantUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutBattleRoomInput | RoomParticipantUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type AiSummaryUncheckedUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<AiSummaryCreateWithoutBattleRoomInput, AiSummaryUncheckedCreateWithoutBattleRoomInput> | AiSummaryCreateWithoutBattleRoomInput[] | AiSummaryUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiSummaryCreateOrConnectWithoutBattleRoomInput | AiSummaryCreateOrConnectWithoutBattleRoomInput[]
    upsert?: AiSummaryUpsertWithWhereUniqueWithoutBattleRoomInput | AiSummaryUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: AiSummaryCreateManyBattleRoomInputEnvelope
    set?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    disconnect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    delete?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    connect?: AiSummaryWhereUniqueInput | AiSummaryWhereUniqueInput[]
    update?: AiSummaryUpdateWithWhereUniqueWithoutBattleRoomInput | AiSummaryUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: AiSummaryUpdateManyWithWhereWithoutBattleRoomInput | AiSummaryUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[]
  }

  export type AiJudgementUncheckedUpdateManyWithoutBattleRoomNestedInput = {
    create?: XOR<AiJudgementCreateWithoutBattleRoomInput, AiJudgementUncheckedCreateWithoutBattleRoomInput> | AiJudgementCreateWithoutBattleRoomInput[] | AiJudgementUncheckedCreateWithoutBattleRoomInput[]
    connectOrCreate?: AiJudgementCreateOrConnectWithoutBattleRoomInput | AiJudgementCreateOrConnectWithoutBattleRoomInput[]
    upsert?: AiJudgementUpsertWithWhereUniqueWithoutBattleRoomInput | AiJudgementUpsertWithWhereUniqueWithoutBattleRoomInput[]
    createMany?: AiJudgementCreateManyBattleRoomInputEnvelope
    set?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    disconnect?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    delete?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    connect?: AiJudgementWhereUniqueInput | AiJudgementWhereUniqueInput[]
    update?: AiJudgementUpdateWithWhereUniqueWithoutBattleRoomInput | AiJudgementUpdateWithWhereUniqueWithoutBattleRoomInput[]
    updateMany?: AiJudgementUpdateManyWithWhereWithoutBattleRoomInput | AiJudgementUpdateManyWithWhereWithoutBattleRoomInput[]
    deleteMany?: AiJudgementScalarWhereInput | AiJudgementScalarWhereInput[]
  }

  export type BattleRoomCreateNestedOneWithoutBattleTitleInput = {
    create?: XOR<BattleRoomCreateWithoutBattleTitleInput, BattleRoomUncheckedCreateWithoutBattleTitleInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutBattleTitleInput
    connect?: BattleRoomWhereUniqueInput
  }

  export type BattleRoomUpdateOneRequiredWithoutBattleTitleNestedInput = {
    create?: XOR<BattleRoomCreateWithoutBattleTitleInput, BattleRoomUncheckedCreateWithoutBattleTitleInput>
    connectOrCreate?: BattleRoomCreateOrConnectWithoutBattleTitleInput
    upsert?: BattleRoomUpsertWithoutBattleTitleInput
    connect?: BattleRoomWhereUniqueInput
    update?: XOR<XOR<BattleRoomUpdateToOneWithWhereWithoutBattleTitleInput, BattleRoomUpdateWithoutBattleTitleInput>, BattleRoomUncheckedUpdateWithoutBattleTitleInput>
  }

  export type UserCreateNestedOneWithoutQuestCompletionsInput = {
    create?: XOR<UserCreateWithoutQuestCompletionsInput, UserUncheckedCreateWithoutQuestCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestCompletionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutQuestCompletionsInput = {
    create?: XOR<QuestCreateWithoutQuestCompletionsInput, QuestUncheckedCreateWithoutQuestCompletionsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutQuestCompletionsInput
    connect?: QuestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQuestCompletionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestCompletionsInput, UserUncheckedCreateWithoutQuestCompletionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestCompletionsInput
    upsert?: UserUpsertWithoutQuestCompletionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestCompletionsInput, UserUpdateWithoutQuestCompletionsInput>, UserUncheckedUpdateWithoutQuestCompletionsInput>
  }

  export type QuestUpdateOneRequiredWithoutQuestCompletionsNestedInput = {
    create?: XOR<QuestCreateWithoutQuestCompletionsInput, QuestUncheckedCreateWithoutQuestCompletionsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutQuestCompletionsInput
    upsert?: QuestUpsertWithoutQuestCompletionsInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutQuestCompletionsInput, QuestUpdateWithoutQuestCompletionsInput>, QuestUncheckedUpdateWithoutQuestCompletionsInput>
  }

  export type UserCreateNestedOneWithoutPointTransactionsInput = {
    create?: XOR<UserCreateWithoutPointTransactionsInput, UserUncheckedCreateWithoutPointTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutPointTransactionsInput, UserUncheckedCreateWithoutPointTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointTransactionsInput
    upsert?: UserUpsertWithoutPointTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointTransactionsInput, UserUpdateWithoutPointTransactionsInput>, UserUncheckedUpdateWithoutPointTransactionsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RankingCreateWithoutUserInput = {
    id?: bigint | number
    rank?: number
    previousRank?: number | null
    tier: string
    totalPoints: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RankingUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    rank?: number
    previousRank?: number | null
    tier: string
    totalPoints: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RankingCreateOrConnectWithoutUserInput = {
    where: RankingWhereUniqueInput
    create: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput>
  }

  export type RankingCreateManyUserInputEnvelope = {
    data: RankingCreateManyUserInput | RankingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserItemCreateWithoutUserInput = {
    id?: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
    item: ItemCreateNestedOneWithoutUserItemsInput
  }

  export type UserItemUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    itemId: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
  }

  export type UserItemCreateOrConnectWithoutUserInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput>
  }

  export type UserItemCreateManyUserInputEnvelope = {
    data: UserItemCreateManyUserInput | UserItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomParticipantCreateWithoutUserInput = {
    id?: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
    battleRoom: BattleRoomCreateNestedOneWithoutRoomParticipantsInput
  }

  export type RoomParticipantUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    roomId: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
  }

  export type RoomParticipantCreateOrConnectWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    create: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoomParticipantCreateManyUserInputEnvelope = {
    data: RoomParticipantCreateManyUserInput | RoomParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestCompletionCreateWithoutUserInput = {
    id?: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
    quest: QuestCreateNestedOneWithoutQuestCompletionsInput
  }

  export type QuestCompletionUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    questId: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
  }

  export type QuestCompletionCreateOrConnectWithoutUserInput = {
    where: QuestCompletionWhereUniqueInput
    create: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput>
  }

  export type QuestCompletionCreateManyUserInputEnvelope = {
    data: QuestCompletionCreateManyUserInput | QuestCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointTransactionCreateWithoutUserInput = {
    id?: bigint | number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type PointTransactionUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type PointTransactionCreateOrConnectWithoutUserInput = {
    where: PointTransactionWhereUniqueInput
    create: XOR<PointTransactionCreateWithoutUserInput, PointTransactionUncheckedCreateWithoutUserInput>
  }

  export type PointTransactionCreateManyUserInputEnvelope = {
    data: PointTransactionCreateManyUserInput | PointTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RankingUpsertWithWhereUniqueWithoutUserInput = {
    where: RankingWhereUniqueInput
    update: XOR<RankingUpdateWithoutUserInput, RankingUncheckedUpdateWithoutUserInput>
    create: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput>
  }

  export type RankingUpdateWithWhereUniqueWithoutUserInput = {
    where: RankingWhereUniqueInput
    data: XOR<RankingUpdateWithoutUserInput, RankingUncheckedUpdateWithoutUserInput>
  }

  export type RankingUpdateManyWithWhereWithoutUserInput = {
    where: RankingScalarWhereInput
    data: XOR<RankingUpdateManyMutationInput, RankingUncheckedUpdateManyWithoutUserInput>
  }

  export type RankingScalarWhereInput = {
    AND?: RankingScalarWhereInput | RankingScalarWhereInput[]
    OR?: RankingScalarWhereInput[]
    NOT?: RankingScalarWhereInput | RankingScalarWhereInput[]
    id?: BigIntFilter<"Ranking"> | bigint | number
    userId?: BigIntFilter<"Ranking"> | bigint | number
    rank?: IntFilter<"Ranking"> | number
    previousRank?: IntNullableFilter<"Ranking"> | number | null
    tier?: StringFilter<"Ranking"> | string
    totalPoints?: IntFilter<"Ranking"> | number
    createdAt?: DateTimeFilter<"Ranking"> | Date | string
    updatedAt?: DateTimeFilter<"Ranking"> | Date | string
  }

  export type UserItemUpsertWithWhereUniqueWithoutUserInput = {
    where: UserItemWhereUniqueInput
    update: XOR<UserItemUpdateWithoutUserInput, UserItemUncheckedUpdateWithoutUserInput>
    create: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput>
  }

  export type UserItemUpdateWithWhereUniqueWithoutUserInput = {
    where: UserItemWhereUniqueInput
    data: XOR<UserItemUpdateWithoutUserInput, UserItemUncheckedUpdateWithoutUserInput>
  }

  export type UserItemUpdateManyWithWhereWithoutUserInput = {
    where: UserItemScalarWhereInput
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyWithoutUserInput>
  }

  export type UserItemScalarWhereInput = {
    AND?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
    OR?: UserItemScalarWhereInput[]
    NOT?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
    id?: BigIntFilter<"UserItem"> | bigint | number
    userId?: BigIntFilter<"UserItem"> | bigint | number
    itemId?: BigIntFilter<"UserItem"> | bigint | number
    acquiredAt?: DateTimeFilter<"UserItem"> | Date | string
    isEquipped?: BoolFilter<"UserItem"> | boolean
  }

  export type RoomParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    update: XOR<RoomParticipantUpdateWithoutUserInput, RoomParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoomParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    data: XOR<RoomParticipantUpdateWithoutUserInput, RoomParticipantUncheckedUpdateWithoutUserInput>
  }

  export type RoomParticipantUpdateManyWithWhereWithoutUserInput = {
    where: RoomParticipantScalarWhereInput
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomParticipantScalarWhereInput = {
    AND?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
    OR?: RoomParticipantScalarWhereInput[]
    NOT?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
    id?: BigIntFilter<"RoomParticipant"> | bigint | number
    userId?: BigIntFilter<"RoomParticipant"> | bigint | number
    roomId?: BigIntFilter<"RoomParticipant"> | bigint | number
    role?: StringFilter<"RoomParticipant"> | string
    joinedAt?: DateTimeFilter<"RoomParticipant"> | Date | string
    endAt?: DateTimeNullableFilter<"RoomParticipant"> | Date | string | null
  }

  export type QuestCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestCompletionWhereUniqueInput
    update: XOR<QuestCompletionUpdateWithoutUserInput, QuestCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestCompletionCreateWithoutUserInput, QuestCompletionUncheckedCreateWithoutUserInput>
  }

  export type QuestCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestCompletionWhereUniqueInput
    data: XOR<QuestCompletionUpdateWithoutUserInput, QuestCompletionUncheckedUpdateWithoutUserInput>
  }

  export type QuestCompletionUpdateManyWithWhereWithoutUserInput = {
    where: QuestCompletionScalarWhereInput
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestCompletionScalarWhereInput = {
    AND?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
    OR?: QuestCompletionScalarWhereInput[]
    NOT?: QuestCompletionScalarWhereInput | QuestCompletionScalarWhereInput[]
    id?: BigIntFilter<"QuestCompletion"> | bigint | number
    userId?: BigIntFilter<"QuestCompletion"> | bigint | number
    questId?: BigIntFilter<"QuestCompletion"> | bigint | number
    isCompleted?: BoolFilter<"QuestCompletion"> | boolean
    completedAt?: DateTimeNullableFilter<"QuestCompletion"> | Date | string | null
  }

  export type PointTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PointTransactionWhereUniqueInput
    update: XOR<PointTransactionUpdateWithoutUserInput, PointTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<PointTransactionCreateWithoutUserInput, PointTransactionUncheckedCreateWithoutUserInput>
  }

  export type PointTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PointTransactionWhereUniqueInput
    data: XOR<PointTransactionUpdateWithoutUserInput, PointTransactionUncheckedUpdateWithoutUserInput>
  }

  export type PointTransactionUpdateManyWithWhereWithoutUserInput = {
    where: PointTransactionScalarWhereInput
    data: XOR<PointTransactionUpdateManyMutationInput, PointTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PointTransactionScalarWhereInput = {
    AND?: PointTransactionScalarWhereInput | PointTransactionScalarWhereInput[]
    OR?: PointTransactionScalarWhereInput[]
    NOT?: PointTransactionScalarWhereInput | PointTransactionScalarWhereInput[]
    id?: BigIntFilter<"PointTransaction"> | bigint | number
    userId?: BigIntFilter<"PointTransaction"> | bigint | number
    change?: IntFilter<"PointTransaction"> | number
    reason?: StringFilter<"PointTransaction"> | string
    createdAt?: DateTimeFilter<"PointTransaction"> | Date | string
  }

  export type UserCreateWithoutRankingInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userItems?: UserItemCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRankingInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userItems?: UserItemUncheckedCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRankingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRankingInput, UserUncheckedCreateWithoutRankingInput>
  }

  export type UserUpsertWithoutRankingInput = {
    update: XOR<UserUpdateWithoutRankingInput, UserUncheckedUpdateWithoutRankingInput>
    create: XOR<UserCreateWithoutRankingInput, UserUncheckedCreateWithoutRankingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRankingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRankingInput, UserUncheckedUpdateWithoutRankingInput>
  }

  export type UserUpdateWithoutRankingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userItems?: UserItemUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRankingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userItems?: UserItemUncheckedUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestCompletionCreateWithoutQuestInput = {
    id?: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutQuestCompletionsInput
  }

  export type QuestCompletionUncheckedCreateWithoutQuestInput = {
    id?: bigint | number
    userId: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
  }

  export type QuestCompletionCreateOrConnectWithoutQuestInput = {
    where: QuestCompletionWhereUniqueInput
    create: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput>
  }

  export type QuestCompletionCreateManyQuestInputEnvelope = {
    data: QuestCompletionCreateManyQuestInput | QuestCompletionCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type QuestCompletionUpsertWithWhereUniqueWithoutQuestInput = {
    where: QuestCompletionWhereUniqueInput
    update: XOR<QuestCompletionUpdateWithoutQuestInput, QuestCompletionUncheckedUpdateWithoutQuestInput>
    create: XOR<QuestCompletionCreateWithoutQuestInput, QuestCompletionUncheckedCreateWithoutQuestInput>
  }

  export type QuestCompletionUpdateWithWhereUniqueWithoutQuestInput = {
    where: QuestCompletionWhereUniqueInput
    data: XOR<QuestCompletionUpdateWithoutQuestInput, QuestCompletionUncheckedUpdateWithoutQuestInput>
  }

  export type QuestCompletionUpdateManyWithWhereWithoutQuestInput = {
    where: QuestCompletionScalarWhereInput
    data: XOR<QuestCompletionUpdateManyMutationInput, QuestCompletionUncheckedUpdateManyWithoutQuestInput>
  }

  export type UserCreateWithoutRoomParticipantsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingCreateNestedManyWithoutUserInput
    userItems?: UserItemCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomParticipantsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingUncheckedCreateNestedManyWithoutUserInput
    userItems?: UserItemUncheckedCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomParticipantsInput, UserUncheckedCreateWithoutRoomParticipantsInput>
  }

  export type BattleRoomCreateWithoutRoomParticipantsInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomUncheckedCreateWithoutRoomParticipantsInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleUncheckedCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementUncheckedCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomCreateOrConnectWithoutRoomParticipantsInput = {
    where: BattleRoomWhereUniqueInput
    create: XOR<BattleRoomCreateWithoutRoomParticipantsInput, BattleRoomUncheckedCreateWithoutRoomParticipantsInput>
  }

  export type UserUpsertWithoutRoomParticipantsInput = {
    update: XOR<UserUpdateWithoutRoomParticipantsInput, UserUncheckedUpdateWithoutRoomParticipantsInput>
    create: XOR<UserCreateWithoutRoomParticipantsInput, UserUncheckedCreateWithoutRoomParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomParticipantsInput, UserUncheckedUpdateWithoutRoomParticipantsInput>
  }

  export type UserUpdateWithoutRoomParticipantsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUpdateManyWithoutUserNestedInput
    userItems?: UserItemUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomParticipantsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUncheckedUpdateManyWithoutUserNestedInput
    userItems?: UserItemUncheckedUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BattleRoomUpsertWithoutRoomParticipantsInput = {
    update: XOR<BattleRoomUpdateWithoutRoomParticipantsInput, BattleRoomUncheckedUpdateWithoutRoomParticipantsInput>
    create: XOR<BattleRoomCreateWithoutRoomParticipantsInput, BattleRoomUncheckedCreateWithoutRoomParticipantsInput>
    where?: BattleRoomWhereInput
  }

  export type BattleRoomUpdateToOneWithWhereWithoutRoomParticipantsInput = {
    where?: BattleRoomWhereInput
    data: XOR<BattleRoomUpdateWithoutRoomParticipantsInput, BattleRoomUncheckedUpdateWithoutRoomParticipantsInput>
  }

  export type BattleRoomUpdateWithoutRoomParticipantsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomUncheckedUpdateWithoutRoomParticipantsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUncheckedUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomCreateWithoutAiJudgementsInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleCreateNestedManyWithoutBattleRoomInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomUncheckedCreateWithoutAiJudgementsInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleUncheckedCreateNestedManyWithoutBattleRoomInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomCreateOrConnectWithoutAiJudgementsInput = {
    where: BattleRoomWhereUniqueInput
    create: XOR<BattleRoomCreateWithoutAiJudgementsInput, BattleRoomUncheckedCreateWithoutAiJudgementsInput>
  }

  export type BattleRoomUpsertWithoutAiJudgementsInput = {
    update: XOR<BattleRoomUpdateWithoutAiJudgementsInput, BattleRoomUncheckedUpdateWithoutAiJudgementsInput>
    create: XOR<BattleRoomCreateWithoutAiJudgementsInput, BattleRoomUncheckedCreateWithoutAiJudgementsInput>
    where?: BattleRoomWhereInput
  }

  export type BattleRoomUpdateToOneWithWhereWithoutAiJudgementsInput = {
    where?: BattleRoomWhereInput
    data: XOR<BattleRoomUpdateWithoutAiJudgementsInput, BattleRoomUncheckedUpdateWithoutAiJudgementsInput>
  }

  export type BattleRoomUpdateWithoutAiJudgementsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUpdateManyWithoutBattleRoomNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomUncheckedUpdateWithoutAiJudgementsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUncheckedUpdateManyWithoutBattleRoomNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomCreateWithoutAiSummariesInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleCreateNestedManyWithoutBattleRoomInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomUncheckedCreateWithoutAiSummariesInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    battleTitle?: BattleTitleUncheckedCreateNestedManyWithoutBattleRoomInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementUncheckedCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomCreateOrConnectWithoutAiSummariesInput = {
    where: BattleRoomWhereUniqueInput
    create: XOR<BattleRoomCreateWithoutAiSummariesInput, BattleRoomUncheckedCreateWithoutAiSummariesInput>
  }

  export type BattleRoomUpsertWithoutAiSummariesInput = {
    update: XOR<BattleRoomUpdateWithoutAiSummariesInput, BattleRoomUncheckedUpdateWithoutAiSummariesInput>
    create: XOR<BattleRoomCreateWithoutAiSummariesInput, BattleRoomUncheckedCreateWithoutAiSummariesInput>
    where?: BattleRoomWhereInput
  }

  export type BattleRoomUpdateToOneWithWhereWithoutAiSummariesInput = {
    where?: BattleRoomWhereInput
    data: XOR<BattleRoomUpdateWithoutAiSummariesInput, BattleRoomUncheckedUpdateWithoutAiSummariesInput>
  }

  export type BattleRoomUpdateWithoutAiSummariesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUpdateManyWithoutBattleRoomNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomUncheckedUpdateWithoutAiSummariesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    battleTitle?: BattleTitleUncheckedUpdateManyWithoutBattleRoomNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUncheckedUpdateManyWithoutBattleRoomNestedInput
  }

  export type UserCreateWithoutUserItemsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserItemsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingUncheckedCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserItemsInput, UserUncheckedCreateWithoutUserItemsInput>
  }

  export type ItemCreateWithoutUserItemsInput = {
    id?: bigint | number
    name: string
    context?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutUserItemsInput = {
    id?: bigint | number
    name: string
    context?: string | null
    cost: number
    createdAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutUserItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
  }

  export type UserUpsertWithoutUserItemsInput = {
    update: XOR<UserUpdateWithoutUserItemsInput, UserUncheckedUpdateWithoutUserItemsInput>
    create: XOR<UserCreateWithoutUserItemsInput, UserUncheckedCreateWithoutUserItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserItemsInput, UserUncheckedUpdateWithoutUserItemsInput>
  }

  export type UserUpdateWithoutUserItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUncheckedUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemUpsertWithoutUserItemsInput = {
    update: XOR<ItemUpdateWithoutUserItemsInput, ItemUncheckedUpdateWithoutUserItemsInput>
    create: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutUserItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutUserItemsInput, ItemUncheckedUpdateWithoutUserItemsInput>
  }

  export type ItemUpdateWithoutUserItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutUserItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserItemCreateWithoutItemInput = {
    id?: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
    user: UserCreateNestedOneWithoutUserItemsInput
  }

  export type UserItemUncheckedCreateWithoutItemInput = {
    id?: bigint | number
    userId: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
  }

  export type UserItemCreateOrConnectWithoutItemInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput>
  }

  export type UserItemCreateManyItemInputEnvelope = {
    data: UserItemCreateManyItemInput | UserItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type UserItemUpsertWithWhereUniqueWithoutItemInput = {
    where: UserItemWhereUniqueInput
    update: XOR<UserItemUpdateWithoutItemInput, UserItemUncheckedUpdateWithoutItemInput>
    create: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput>
  }

  export type UserItemUpdateWithWhereUniqueWithoutItemInput = {
    where: UserItemWhereUniqueInput
    data: XOR<UserItemUpdateWithoutItemInput, UserItemUncheckedUpdateWithoutItemInput>
  }

  export type UserItemUpdateManyWithWhereWithoutItemInput = {
    where: UserItemScalarWhereInput
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyWithoutItemInput>
  }

  export type BattleTitleCreateWithoutBattleRoomInput = {
    id?: bigint | number
    title: string
    suggestedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BattleTitleUncheckedCreateWithoutBattleRoomInput = {
    id?: bigint | number
    title: string
    suggestedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BattleTitleCreateOrConnectWithoutBattleRoomInput = {
    where: BattleTitleWhereUniqueInput
    create: XOR<BattleTitleCreateWithoutBattleRoomInput, BattleTitleUncheckedCreateWithoutBattleRoomInput>
  }

  export type BattleTitleCreateManyBattleRoomInputEnvelope = {
    data: BattleTitleCreateManyBattleRoomInput | BattleTitleCreateManyBattleRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomParticipantCreateWithoutBattleRoomInput = {
    id?: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
    user: UserCreateNestedOneWithoutRoomParticipantsInput
  }

  export type RoomParticipantUncheckedCreateWithoutBattleRoomInput = {
    id?: bigint | number
    userId: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
  }

  export type RoomParticipantCreateOrConnectWithoutBattleRoomInput = {
    where: RoomParticipantWhereUniqueInput
    create: XOR<RoomParticipantCreateWithoutBattleRoomInput, RoomParticipantUncheckedCreateWithoutBattleRoomInput>
  }

  export type RoomParticipantCreateManyBattleRoomInputEnvelope = {
    data: RoomParticipantCreateManyBattleRoomInput | RoomParticipantCreateManyBattleRoomInput[]
    skipDuplicates?: boolean
  }

  export type AiSummaryCreateWithoutBattleRoomInput = {
    id?: bigint | number
    summary: string
    createdAt?: Date | string
  }

  export type AiSummaryUncheckedCreateWithoutBattleRoomInput = {
    id?: bigint | number
    summary: string
    createdAt?: Date | string
  }

  export type AiSummaryCreateOrConnectWithoutBattleRoomInput = {
    where: AiSummaryWhereUniqueInput
    create: XOR<AiSummaryCreateWithoutBattleRoomInput, AiSummaryUncheckedCreateWithoutBattleRoomInput>
  }

  export type AiSummaryCreateManyBattleRoomInputEnvelope = {
    data: AiSummaryCreateManyBattleRoomInput | AiSummaryCreateManyBattleRoomInput[]
    skipDuplicates?: boolean
  }

  export type AiJudgementCreateWithoutBattleRoomInput = {
    id?: bigint | number
    confidence: Decimal | DecimalJsLike | number | string
    details: string
    createdAt?: Date | string
  }

  export type AiJudgementUncheckedCreateWithoutBattleRoomInput = {
    id?: bigint | number
    confidence: Decimal | DecimalJsLike | number | string
    details: string
    createdAt?: Date | string
  }

  export type AiJudgementCreateOrConnectWithoutBattleRoomInput = {
    where: AiJudgementWhereUniqueInput
    create: XOR<AiJudgementCreateWithoutBattleRoomInput, AiJudgementUncheckedCreateWithoutBattleRoomInput>
  }

  export type AiJudgementCreateManyBattleRoomInputEnvelope = {
    data: AiJudgementCreateManyBattleRoomInput | AiJudgementCreateManyBattleRoomInput[]
    skipDuplicates?: boolean
  }

  export type BattleTitleUpsertWithWhereUniqueWithoutBattleRoomInput = {
    where: BattleTitleWhereUniqueInput
    update: XOR<BattleTitleUpdateWithoutBattleRoomInput, BattleTitleUncheckedUpdateWithoutBattleRoomInput>
    create: XOR<BattleTitleCreateWithoutBattleRoomInput, BattleTitleUncheckedCreateWithoutBattleRoomInput>
  }

  export type BattleTitleUpdateWithWhereUniqueWithoutBattleRoomInput = {
    where: BattleTitleWhereUniqueInput
    data: XOR<BattleTitleUpdateWithoutBattleRoomInput, BattleTitleUncheckedUpdateWithoutBattleRoomInput>
  }

  export type BattleTitleUpdateManyWithWhereWithoutBattleRoomInput = {
    where: BattleTitleScalarWhereInput
    data: XOR<BattleTitleUpdateManyMutationInput, BattleTitleUncheckedUpdateManyWithoutBattleRoomInput>
  }

  export type BattleTitleScalarWhereInput = {
    AND?: BattleTitleScalarWhereInput | BattleTitleScalarWhereInput[]
    OR?: BattleTitleScalarWhereInput[]
    NOT?: BattleTitleScalarWhereInput | BattleTitleScalarWhereInput[]
    id?: BigIntFilter<"BattleTitle"> | bigint | number
    roomId?: BigIntFilter<"BattleTitle"> | bigint | number
    title?: StringFilter<"BattleTitle"> | string
    suggestedBy?: StringFilter<"BattleTitle"> | string
    createdAt?: DateTimeFilter<"BattleTitle"> | Date | string
    updatedAt?: DateTimeFilter<"BattleTitle"> | Date | string
  }

  export type RoomParticipantUpsertWithWhereUniqueWithoutBattleRoomInput = {
    where: RoomParticipantWhereUniqueInput
    update: XOR<RoomParticipantUpdateWithoutBattleRoomInput, RoomParticipantUncheckedUpdateWithoutBattleRoomInput>
    create: XOR<RoomParticipantCreateWithoutBattleRoomInput, RoomParticipantUncheckedCreateWithoutBattleRoomInput>
  }

  export type RoomParticipantUpdateWithWhereUniqueWithoutBattleRoomInput = {
    where: RoomParticipantWhereUniqueInput
    data: XOR<RoomParticipantUpdateWithoutBattleRoomInput, RoomParticipantUncheckedUpdateWithoutBattleRoomInput>
  }

  export type RoomParticipantUpdateManyWithWhereWithoutBattleRoomInput = {
    where: RoomParticipantScalarWhereInput
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyWithoutBattleRoomInput>
  }

  export type AiSummaryUpsertWithWhereUniqueWithoutBattleRoomInput = {
    where: AiSummaryWhereUniqueInput
    update: XOR<AiSummaryUpdateWithoutBattleRoomInput, AiSummaryUncheckedUpdateWithoutBattleRoomInput>
    create: XOR<AiSummaryCreateWithoutBattleRoomInput, AiSummaryUncheckedCreateWithoutBattleRoomInput>
  }

  export type AiSummaryUpdateWithWhereUniqueWithoutBattleRoomInput = {
    where: AiSummaryWhereUniqueInput
    data: XOR<AiSummaryUpdateWithoutBattleRoomInput, AiSummaryUncheckedUpdateWithoutBattleRoomInput>
  }

  export type AiSummaryUpdateManyWithWhereWithoutBattleRoomInput = {
    where: AiSummaryScalarWhereInput
    data: XOR<AiSummaryUpdateManyMutationInput, AiSummaryUncheckedUpdateManyWithoutBattleRoomInput>
  }

  export type AiSummaryScalarWhereInput = {
    AND?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[]
    OR?: AiSummaryScalarWhereInput[]
    NOT?: AiSummaryScalarWhereInput | AiSummaryScalarWhereInput[]
    id?: BigIntFilter<"AiSummary"> | bigint | number
    roomId?: BigIntFilter<"AiSummary"> | bigint | number
    summary?: StringFilter<"AiSummary"> | string
    createdAt?: DateTimeFilter<"AiSummary"> | Date | string
  }

  export type AiJudgementUpsertWithWhereUniqueWithoutBattleRoomInput = {
    where: AiJudgementWhereUniqueInput
    update: XOR<AiJudgementUpdateWithoutBattleRoomInput, AiJudgementUncheckedUpdateWithoutBattleRoomInput>
    create: XOR<AiJudgementCreateWithoutBattleRoomInput, AiJudgementUncheckedCreateWithoutBattleRoomInput>
  }

  export type AiJudgementUpdateWithWhereUniqueWithoutBattleRoomInput = {
    where: AiJudgementWhereUniqueInput
    data: XOR<AiJudgementUpdateWithoutBattleRoomInput, AiJudgementUncheckedUpdateWithoutBattleRoomInput>
  }

  export type AiJudgementUpdateManyWithWhereWithoutBattleRoomInput = {
    where: AiJudgementScalarWhereInput
    data: XOR<AiJudgementUpdateManyMutationInput, AiJudgementUncheckedUpdateManyWithoutBattleRoomInput>
  }

  export type AiJudgementScalarWhereInput = {
    AND?: AiJudgementScalarWhereInput | AiJudgementScalarWhereInput[]
    OR?: AiJudgementScalarWhereInput[]
    NOT?: AiJudgementScalarWhereInput | AiJudgementScalarWhereInput[]
    id?: BigIntFilter<"AiJudgement"> | bigint | number
    roomId?: BigIntFilter<"AiJudgement"> | bigint | number
    confidence?: DecimalFilter<"AiJudgement"> | Decimal | DecimalJsLike | number | string
    details?: StringFilter<"AiJudgement"> | string
    createdAt?: DateTimeFilter<"AiJudgement"> | Date | string
  }

  export type BattleRoomCreateWithoutBattleTitleInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    roomParticipants?: RoomParticipantCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomUncheckedCreateWithoutBattleTitleInput = {
    id?: bigint | number
    admin: bigint | number
    title: string
    status: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    approvalNum?: number
    oppositeNum?: number
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutBattleRoomInput
    aiSummaries?: AiSummaryUncheckedCreateNestedManyWithoutBattleRoomInput
    aiJudgements?: AiJudgementUncheckedCreateNestedManyWithoutBattleRoomInput
  }

  export type BattleRoomCreateOrConnectWithoutBattleTitleInput = {
    where: BattleRoomWhereUniqueInput
    create: XOR<BattleRoomCreateWithoutBattleTitleInput, BattleRoomUncheckedCreateWithoutBattleTitleInput>
  }

  export type BattleRoomUpsertWithoutBattleTitleInput = {
    update: XOR<BattleRoomUpdateWithoutBattleTitleInput, BattleRoomUncheckedUpdateWithoutBattleTitleInput>
    create: XOR<BattleRoomCreateWithoutBattleTitleInput, BattleRoomUncheckedCreateWithoutBattleTitleInput>
    where?: BattleRoomWhereInput
  }

  export type BattleRoomUpdateToOneWithWhereWithoutBattleTitleInput = {
    where?: BattleRoomWhereInput
    data: XOR<BattleRoomUpdateWithoutBattleTitleInput, BattleRoomUncheckedUpdateWithoutBattleTitleInput>
  }

  export type BattleRoomUpdateWithoutBattleTitleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    roomParticipants?: RoomParticipantUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUpdateManyWithoutBattleRoomNestedInput
  }

  export type BattleRoomUncheckedUpdateWithoutBattleTitleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    admin?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvalNum?: IntFieldUpdateOperationsInput | number
    oppositeNum?: IntFieldUpdateOperationsInput | number
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiSummaries?: AiSummaryUncheckedUpdateManyWithoutBattleRoomNestedInput
    aiJudgements?: AiJudgementUncheckedUpdateManyWithoutBattleRoomNestedInput
  }

  export type UserCreateWithoutQuestCompletionsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingCreateNestedManyWithoutUserInput
    userItems?: UserItemCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestCompletionsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingUncheckedCreateNestedManyWithoutUserInput
    userItems?: UserItemUncheckedCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    pointTransactions?: PointTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestCompletionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestCompletionsInput, UserUncheckedCreateWithoutQuestCompletionsInput>
  }

  export type QuestCreateWithoutQuestCompletionsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    type?: string | null
    rewardPts: number
    createdAt?: Date | string
  }

  export type QuestUncheckedCreateWithoutQuestCompletionsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    type?: string | null
    rewardPts: number
    createdAt?: Date | string
  }

  export type QuestCreateOrConnectWithoutQuestCompletionsInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutQuestCompletionsInput, QuestUncheckedCreateWithoutQuestCompletionsInput>
  }

  export type UserUpsertWithoutQuestCompletionsInput = {
    update: XOR<UserUpdateWithoutQuestCompletionsInput, UserUncheckedUpdateWithoutQuestCompletionsInput>
    create: XOR<UserCreateWithoutQuestCompletionsInput, UserUncheckedCreateWithoutQuestCompletionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestCompletionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestCompletionsInput, UserUncheckedUpdateWithoutQuestCompletionsInput>
  }

  export type UserUpdateWithoutQuestCompletionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUpdateManyWithoutUserNestedInput
    userItems?: UserItemUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestCompletionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUncheckedUpdateManyWithoutUserNestedInput
    userItems?: UserItemUncheckedUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    pointTransactions?: PointTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestUpsertWithoutQuestCompletionsInput = {
    update: XOR<QuestUpdateWithoutQuestCompletionsInput, QuestUncheckedUpdateWithoutQuestCompletionsInput>
    create: XOR<QuestCreateWithoutQuestCompletionsInput, QuestUncheckedCreateWithoutQuestCompletionsInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutQuestCompletionsInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutQuestCompletionsInput, QuestUncheckedUpdateWithoutQuestCompletionsInput>
  }

  export type QuestUpdateWithoutQuestCompletionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rewardPts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateWithoutQuestCompletionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    rewardPts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPointTransactionsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingCreateNestedManyWithoutUserInput
    userItems?: UserItemCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointTransactionsInput = {
    id?: bigint | number
    nickname: string
    name: string
    email: string
    password: string
    profileImageUrl?: string | null
    gender: string
    birth: Date | string
    phoneNumber: string
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ranking?: RankingUncheckedCreateNestedManyWithoutUserInput
    userItems?: UserItemUncheckedCreateNestedManyWithoutUserInput
    roomParticipants?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
    questCompletions?: QuestCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointTransactionsInput, UserUncheckedCreateWithoutPointTransactionsInput>
  }

  export type UserUpsertWithoutPointTransactionsInput = {
    update: XOR<UserUpdateWithoutPointTransactionsInput, UserUncheckedUpdateWithoutPointTransactionsInput>
    create: XOR<UserCreateWithoutPointTransactionsInput, UserUncheckedCreateWithoutPointTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointTransactionsInput, UserUncheckedUpdateWithoutPointTransactionsInput>
  }

  export type UserUpdateWithoutPointTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUpdateManyWithoutUserNestedInput
    userItems?: UserItemUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ranking?: RankingUncheckedUpdateManyWithoutUserNestedInput
    userItems?: UserItemUncheckedUpdateManyWithoutUserNestedInput
    roomParticipants?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
    questCompletions?: QuestCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RankingCreateManyUserInput = {
    id?: bigint | number
    rank?: number
    previousRank?: number | null
    tier: string
    totalPoints: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserItemCreateManyUserInput = {
    id?: bigint | number
    itemId: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
  }

  export type RoomParticipantCreateManyUserInput = {
    id?: bigint | number
    roomId: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
  }

  export type QuestCompletionCreateManyUserInput = {
    id?: bigint | number
    questId: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
  }

  export type PointTransactionCreateManyUserInput = {
    id?: bigint | number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type RankingUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    rank?: IntFieldUpdateOperationsInput | number
    previousRank?: NullableIntFieldUpdateOperationsInput | number | null
    tier?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserItemUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
    item?: ItemUpdateOneRequiredWithoutUserItemsNestedInput
  }

  export type UserItemUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomParticipantUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    battleRoom?: BattleRoomUpdateOneRequiredWithoutRoomParticipantsNestedInput
  }

  export type RoomParticipantUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roomId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestCompletionUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quest?: QuestUpdateOneRequiredWithoutQuestCompletionsNestedInput
  }

  export type QuestCompletionUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questId?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    questId?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointTransactionUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointTransactionUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCompletionCreateManyQuestInput = {
    id?: bigint | number
    userId: bigint | number
    isCompleted?: boolean
    completedAt?: Date | string | null
  }

  export type QuestCompletionUpdateWithoutQuestInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQuestCompletionsNestedInput
  }

  export type QuestCompletionUncheckedUpdateWithoutQuestInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestCompletionUncheckedUpdateManyWithoutQuestInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserItemCreateManyItemInput = {
    id?: bigint | number
    userId: bigint | number
    acquiredAt?: Date | string
    isEquipped?: boolean
  }

  export type UserItemUpdateWithoutItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserItemsNestedInput
  }

  export type UserItemUncheckedUpdateWithoutItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUncheckedUpdateManyWithoutItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEquipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BattleTitleCreateManyBattleRoomInput = {
    id?: bigint | number
    title: string
    suggestedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomParticipantCreateManyBattleRoomInput = {
    id?: bigint | number
    userId: bigint | number
    role: string
    joinedAt: Date | string
    endAt?: Date | string | null
  }

  export type AiSummaryCreateManyBattleRoomInput = {
    id?: bigint | number
    summary: string
    createdAt?: Date | string
  }

  export type AiJudgementCreateManyBattleRoomInput = {
    id?: bigint | number
    confidence: Decimal | DecimalJsLike | number | string
    details: string
    createdAt?: Date | string
  }

  export type BattleTitleUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleTitleUncheckedUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleTitleUncheckedUpdateManyWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    suggestedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomParticipantUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRoomParticipantsNestedInput
  }

  export type RoomParticipantUncheckedUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomParticipantUncheckedUpdateManyWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiSummaryUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSummaryUncheckedUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiSummaryUncheckedUpdateManyWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiJudgementUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiJudgementUncheckedUpdateWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiJudgementUncheckedUpdateManyWithoutBattleRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confidence?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    details?: StringFieldUpdateOperationsInput | string
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