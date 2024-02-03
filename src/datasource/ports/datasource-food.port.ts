export abstract class DatasourceFoodPort<T, U>{
    abstract create(params: T): U
}