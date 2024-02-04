export interface FoodBaseServiceInterface<T, Q, U> {
    execute(params: T, identifier: Q): U;
}