import { IsBoolean, IsNumber } from 'class-validator';

export class FavoriteDto {
  @IsBoolean()
  toFavorite: boolean;

  @IsNumber()
  linkId: number;
}
