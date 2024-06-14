import GenericRepositoryFactory from "../Repository/RepositoryFactory";
import IRepositoryBase from "../Repository/IRepositoryBase";
import IGenericUseCase from "./IGenericUseCase";

class GenericUseCase implements IGenericUseCase{
  private repository: IRepositoryBase; // Interface do repositório genérico
  private entity: string; 
  private token: string;

  constructor(entity: string) {
    this.repository = GenericRepositoryFactory.getInstance().createRepository(entity);
    this.entity = entity;
    this.token = localStorage.getItem('authToken') || "";
  }

  async create(data: any): Promise<string> {
    try {
      const dataCreated = await this.repository.add(data,this.token);
      return dataCreated;
    } catch (error: any) {
      throw new Error(`Failed create ${this.entity}: ${error.message}`);
    }
  }

  async getAll(data: any): Promise<string> {
    try {
      
      const dataCreated = await this.repository.get(data,this.token);
      return dataCreated;
    } catch (error: any) {
      throw new Error(`Failed create ${this.entity}: ${error.message}`);
    }
  }

  async delete(data: any): Promise<string> {
    try {
      const dataCreated = await this.repository.add(data,this.token);
      return dataCreated;
    } catch (error: any) {
      throw new Error(`Failed create ${this.entity}: ${error.message}`);
    }
  }


  async update(data: any): Promise<string> {
    try {
      const dataCreated = await this.repository.add(data,this.token);
      return dataCreated;
    } catch (error: any) {
      throw new Error(`Failed create ${this.entity}: ${error.message}`);
    }
  }

}

export default GenericUseCase;
