export interface ReptileBaseServiceInterface<T, U> {
    execute(params: T): U;
}