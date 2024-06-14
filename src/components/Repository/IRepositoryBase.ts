interface IRepositoryBase {
    add(todoData: any, token: string): Promise<any>;
    update(todoData: any, token: string): Promise<any>;
    delete(todoData: any, token: string): Promise<any>;
    getById(todoData: any, token: string): Promise<any>;
    get(todoData: any, token: string): Promise<any>;
}

export default IRepositoryBase;