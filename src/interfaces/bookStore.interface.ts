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