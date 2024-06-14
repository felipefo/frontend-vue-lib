import RepositoryFactory from "../Repository/RepositoryFactory"

//TODO CRIAR UMA CLASSE É MELHOR!
const login = async (data: any): Promise<string> => {
    try {
         const repo = RepositoryFactory.createRepository("user");
         const token = await repo.login(data);
         saveTokenToLocalStorage(token.token);
         return token;
    } catch (error: any) {
        throw new Error(`Failed to login: ${error.message}`);
    }
};
//TODO: remover isso daqui e colocar em um lugar melhor.
const saveTokenToLocalStorage = (token: string): void => {
    localStorage.setItem('authToken', token);
};

export default login;
