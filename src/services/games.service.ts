import type { Game } from '@/interfaces/Game';

const GAME_API_URL = 'https://run.mocky.io/v3/54a25ed6-39a9-4860-b893-594b49336415';

/**
 * Retrieves a list of games from the game API.
 *
 * @returns A promise that resolves to an array of Game objects, representing the games.
 * @throws If there is an error while fetching data from the API.
 */
export async function getGames(): Promise<Game[]> {
  try {
    const resp = await fetch(GAME_API_URL);
    const data = await resp.json();
    return data;
  } catch (error: any) {
    throw new Error('Error al obtener los juegos desde la API: ' + error.message);
  }
}
