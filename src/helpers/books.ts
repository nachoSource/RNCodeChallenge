import { BookItemProps } from "../interfaces/components/books";

const parseBooksData = (res: any[]): BookItemProps[] => {
  return res
    .filter(({ key }) => !!key)
    .map(({ key, first_publish_year, author_name, title }) => ({
      key: key,
      author: author_name,
      firstPublishYear: first_publish_year,
      title,
    }));
};

const parseBook = (author: any, book: any): BookItemProps => ({
  key: book.key,
  author: author.name,
  authorBio: author.bio?.value || null,
  cover: book.cover || null, // this is due to lack of data in API responses
  description: book.description,
  title: book.title,
  firstPublishYear: book.first_publish_date,
});

export { parseBooksData, parseBook };
