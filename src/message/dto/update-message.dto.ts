import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateMessageDto {
  @IsBoolean()
  @IsOptional()
  readonly isRead: boolean;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  readonly text: string;
}
