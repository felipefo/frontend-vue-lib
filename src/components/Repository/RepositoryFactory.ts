import RepositoryBase from './RepositoryBase';
import UserRepository from './UserRepository';

// Definição das classes de repositório disponíveis

// Classe singleton para gerenciar a criação e recuperação de instâncias de repositório
class RepositoryFactory {
  private static instance: RepositoryFactory;
  private repositories: { [key: string]: any } = {
    user: new UserRepository(),
  };
  
  private constructor() {}

  // Método estático para obter a instância singleton
  public static getInstance(): RepositoryFactory {
    if (!RepositoryFactory.instance) {
      RepositoryFactory.instance = new RepositoryFactory();
    }
    return RepositoryFactory.instance;
  }

  // Função para criar uma instância de repositório com base no tipo fornecido
  public createRepository(type: string): any {
    const repository = this.repositories[type]; // tipos registrados
    if (!repository) {
      const defaultRepository = new RepositoryBase(type.toLowerCase());
      this.addNewRepository(defaultRepository, type.toLowerCase());//adding to repository list
      return defaultRepository;
    }
    alert(JSON.stringify(repository));
    return repository;
  }

  // Função para adicionar um novo repositório
  public addNewRepository(repo: RepositoryBase, type: string): void {
    this.repositories[type.toLowerCase()] = repo;
  }
}

export default RepositoryFactory;
