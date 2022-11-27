import { useState, useCallback } from 'react';
import { IStory } from '../../components/Story/types';
import { TType } from '../../components/Header/types';

interface IArgs {
  url: string;
}

interface IReturnValue<T> {
  isLoading: boolean;
  fetcher: (type: TType, page?: number, pageSize?: number) => Promise<T>;
}

export interface IStoriesResponse {
  stories: IStory[] | null;
}

export const useFetch = <T>({ url }: IArgs): IReturnValue<T> => {
  const [isLoading, setIsLoading] = useState(false);

  const fetcher = useCallback(
    async (type: TType, page?: number, pageSize?: number) => {
      setIsLoading(true);

      const requestUrl = page ? `${url}?type=${type}&page=${page}&page_size=${pageSize}` : url;
      try {
        const response = await fetch(requestUrl, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return await response.json();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  return {
    isLoading,
    fetcher,
  };
};
