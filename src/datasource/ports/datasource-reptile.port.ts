export abstract class DatasourceReptilePort<T, Q, U>{
    abstract create(identifier: T, params: Q): U
}