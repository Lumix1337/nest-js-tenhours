import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Headers,
  Req,
  Res,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateMovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
  //   @Get()
  //   findAll(@Query('genre') genre: string) {
  //     return genre
  //       ? 'Test'
  //       : [
  //           {
  //             title: 'Fight club',
  //           },
  //           {
  //             title: 'Pulp fiction',
  //           },
  //         ];
  //   }
  //   findAlll(@Query() query: any) {
  //     return `Films w param: ${JSON.stringify(query)}`;
  //   }

  //   @Post()
  //   create(@Body('title') title: string) {
  //     return `Film: ${title}`;
  //   }

  //   @Get('user-agent')
  //   getHeader(@Headers('user-agent') userAgent: string) {
  //     return { userAgent };
  //   }

  //   @Get('request')
  //   getRequestParams(@Req() req: Request) {
  //     return {
  //       method: req.method,
  //       url: req.url,
  //       headers: req.headers,
  //     };
  //   }

  //   @Get('response')
  //   getResponseParams(@Res() res: Response) {
  //     res.status(201).json({ message: 'Hello gg' });
  //   }
}
