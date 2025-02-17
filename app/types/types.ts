type BookType = {
  id: number;
  title: string;
  content: string;
  price: number;
  thumbnail: { url: string };
  createAt: Date;
  updateAt: Date;
};

export type { BookType };
