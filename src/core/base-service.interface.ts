export interface BaseServiceInterface<S, T, U> {
    execute(params: T, identifier?: S): U;
}