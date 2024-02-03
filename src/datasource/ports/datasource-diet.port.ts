export abstract class DatasourceDietPort<T, U>{
    abstract create(params: T): U
}

