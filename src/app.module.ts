import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { NewsController } from './controllers/news.controller';
import { NewsService } from './services/news.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, NewsController],
  providers: [NewsService],
})
export class AppModule {

}
