/* eslint-disable no-unused-vars */

import axios from 'axios';
const apiBaseUrl = 'http://localhost:5068'; // URL base da API
import IConnectionBase from './IConnectionBase';

class ConnectionBase implements IConnectionBase {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  async post(data: any, token: string) {
    try {
      const headers: { [key: string]: string } = {
        'Content-Type': 'application/json'
      };
      // Adiciona o token JWT no cabeçalho Authorization se o token não for nulo
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${apiBaseUrl}/${this.path}`,
        data,
        { headers } // Passa o objeto de cabeçalhos como parte das opções da solicitação
      );
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to add: ${error.message}`);
    }
  }
  async get(data: any, token: string) {
    try {
      const headers: { [key: string]: string } = {
        'Content-Type': 'application/json'
      };
      // Adiciona o token JWT no cabeçalho Authorization se o token não for nulo
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const response = await axios.post(
        `${apiBaseUrl}/${this.path}`,
        data,
        { headers } // Passa o objeto de cabeçalhos como parte das opções da solicitação
      );

      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to add: ${error.message}`);
    }
  }
  update(data: any, token: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getById(data: any, token: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  remove(data: any, token: string): Promise<any> {
    throw new Error('Method not implemented.');
  }


}

export default ConnectionBase;
