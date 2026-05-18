import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Should be String bitch' })
  @IsNotEmpty({ message: 'Shouldnt be Empty mf' })
  @Length(2, 19, { message: 'From 2 to 19' })
  title: string;

  @IsBoolean({ message: 'True or False' })
  isCompleted: boolean;
}
