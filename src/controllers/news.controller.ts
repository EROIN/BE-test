import { ApiUseTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards } from '@nestjs/common';

import { NewsService } from '../services/news.service';
import { SearchQuery } from '../dtos';

@ApiUseTags('news')
@Controller('news')
export class NewsController {
  constructor(private newsService:NewsService) {}

  @Get("/search")
  public getSearch(@Query() searchQuery: SearchQuery): any {
    return this.newsService.getSearch(searchQuery);
  }

  @Get("/top")
  public getTopNews(): any {
    return this.newsService.getTopNews();
  }
}
