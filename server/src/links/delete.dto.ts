import { IsBoolean, IsNumber } from 'class-validator';

export class DeleteDto {
  @IsNumber()
  linkId: number;
}
