export interface BaseServiceInterface<T, S, U> {
    execute(params: T, identifier?: S): U;
}