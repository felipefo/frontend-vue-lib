
// src/repositories/TodoRepository.js
import IUserRepository from './IUserRepository';

import RepositoryBase from './RepositoryBase';
//TODO: implementar IUserRepository
class UserRepository extends RepositoryBase implements IUserRepository {
  constructor() {
    super("login");
  }
  async login(userData: any, token: string) {

    const response =  await this.post(userData, token)
    return response;
  }
}

export default UserRepository;
