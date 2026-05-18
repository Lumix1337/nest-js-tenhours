import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Length,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  IsArray,
  IsEnum,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  // @MinLength(3)
  @IsNotEmpty()
  // @MaxLength(10)
  @Length(2, 19)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber({}, { message: 'Priority must be number' })
  @IsOptional()
  @IsPositive()
  @IsInt()
  priority: number;

  @IsArray()
  // @IsString({ each: true })
  @IsEnum(TaskTag, { each: true })
  @IsOptional()
  tags: string[];
}
