import type { Game } from '@/interfaces/Game';

const GAME_API_URL = 'https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3';

export async function getGames(): Promise<Game[]> {
  const resp = await fetch(GAME_API_URL);
  const data = await resp.json();
  return data;
}
