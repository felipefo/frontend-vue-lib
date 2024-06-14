import RepositoryBase from './RepositoryBase';
import UserRepository from './UserRepository';

// Definição das classes de repositório disponíveis
const repositories: { [key: string]: any } = {
  user: UserRepository,
};

// Serviço para gerenciar a criação e recuperação de instâncias de repositório
const RepositoryFactory = {
  // Função para criar uma instância de repositório com base no tipo fornecido
  createRepository(type: string): any {
    const Repository = repositories[type];
    if (!Repository) {
      const repository = new RepositoryBase(type.toLowerCase());
    }
    return new Repository();
  }
};

export default RepositoryFactory;