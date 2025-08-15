import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly text: string;

  @IsString()
  @IsNotEmpty()
  readonly from: string;

  @IsString()
  @IsNotEmpty()
  readonly to: string;
}
