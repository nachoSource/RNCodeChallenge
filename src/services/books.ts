import Api from "../api";

const getAuthor = async (authorKey = ""): Promise<any> =>
  await Api.get(`/${authorKey}.json`);

const getBook = async (workKey = ""): Promise<any> =>
  await Api.get(`/${workKey}.json`);

const searchBooks = async (query = ""): Promise<any[]> =>
  await Api.get(`/search.json?q=${query}`);

export { getAuthor, getBook, searchBooks };
