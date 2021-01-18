import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { SearchQuery } from '../dtos';

@Injectable()
export class NewsService {

  async getSearch(searchQuery: SearchQuery): Promise<any> {
    const newsResponse =  await axios.get(`${process.env.NEWS_API_URI}/everything`, {
      params: {
        q: searchQuery.query,
        apiKey: process.env.NEWS_API_TOKEN
      }
    });
    return newsResponse.data;
  }

  async getTopNews(): Promise<any> {
    const newsResponse =  await axios.get(`${process.env.NEWS_API_URI}/top-headlines`, {
      params: {
        country: 'UK',
        apiKey: process.env.NEWS_API_TOKEN
      }
    });
    return newsResponse.data;
  }
}
