import { ApiModelProperty } from '@nestjs/swagger';

export class SearchQuery {
  @ApiModelProperty()
  query: string;
}