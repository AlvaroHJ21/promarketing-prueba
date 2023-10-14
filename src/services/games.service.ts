import type { Game } from '@/interfaces/Game';

export async function getGames(): Promise<Game[]> {
  const resp = await fetch('https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3');
  const data = await resp.json();
  return data;
}
