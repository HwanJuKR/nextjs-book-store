export interface BookData {
  id: string;
  title: string;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  coverImgUrl: string;
}

export interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export interface BookByPageParams {
  page: number;
  pageSize?: number;
};

export interface BookByPage {
  book: BookData[];
  hasNextPage: boolean;
  totalCount: number;
}