export abstract class UserDatasourcePort<T,U> {
    abstract create(params: T): U
}