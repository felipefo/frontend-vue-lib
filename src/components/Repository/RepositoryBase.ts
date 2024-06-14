// src/repositories/TodoRepository.js
import ConnectionBase from './ConnectionBase';
import IRepositoryBase from './IRepositoryBase';

class RepositoryBase extends ConnectionBase implements IRepositoryBase {
    constructor(entity_path: string) {
        super(entity_path);
    }
    async add(todoData: any, token: string) {
        const response = await this.post(todoData, token)
        return response;
    }
    async update(todoData: any, token: string) {
        const response = await this.get(todoData, token)
        return response;
    }
    async delete(todoData: any, token: string) {
        await this.delete(todoData, token)
    }
    async getById(todoData: any, token: string) {
        const response = await this.getById(todoData, token)
    }

    async get(todoData: any, token: string) {
        const response = await this.get(todoData, token)

    }
}

export default RepositoryBase;
