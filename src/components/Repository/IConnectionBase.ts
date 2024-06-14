interface IConnectionBase {
    
  post(data: any, token: string): Promise<any>;
    get(data: any, token: string): Promise<any>;
    update(data: any, token: string): Promise<any>;
    getById(data: any, token: string): Promise<any>;
    get(data: any, token: string): Promise<any>;
    remove(data: any, token: string): Promise<any>;
  }
  
export default IConnectionBase;