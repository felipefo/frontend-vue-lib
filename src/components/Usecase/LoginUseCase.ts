import RepositoryFactory from '../Repository/RepositoryFactory';

class LoginUseCase {
  private repositoryFactory: RepositoryFactory;

  constructor() {
    this.repositoryFactory = RepositoryFactory.getInstance();
  }

  public async login(data: any): Promise<string> {
    try {
      const repo = this.repositoryFactory.createRepository('user');
      const token = await repo.login(data);
      this.saveTokenToLocalStorage(token.token);
      return token;
    } catch (error: any) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }

  private saveTokenToLocalStorage(token: string): void {
    localStorage.setItem('authToken', token);
  }
}

export default LoginUseCase;
