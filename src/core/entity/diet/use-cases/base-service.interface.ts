export interface DietBaseServiceInterface<T, U> {
    execute(params: T): U;
}