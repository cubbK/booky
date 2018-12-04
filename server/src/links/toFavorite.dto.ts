import { IsBoolean, IsNumber } from 'class-validator';

export class ToFavoriteDto {
  @IsBoolean()
  toFavorite: boolean;

  @IsNumber()
  linkId: number;
}
