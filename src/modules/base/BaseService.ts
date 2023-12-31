export interface BaseService<T, U, V> {
    getItems(): Promise<T[]>;
    getItemById(id: string): Promise<T>;
    createItem(item: U): Promise<T>;
    updateItem(id: string, item: V): Promise<T>;
    deleteItem(id: string): Promise<void>;
}
