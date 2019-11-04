import { RESTDataSource } from 'apollo-datasource-rest';

class BooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/volumes';
  }

  async searchForBook(query: string) {
    const response = await this.get(`?=${query}`)
    return response.items.map(book => this.bookReducer(book))

  async getBook(id: string) {
    const response = await this.get(`/${id}`);
    return this.bookReducer(response)
  }
}

export default BooksAPI;
