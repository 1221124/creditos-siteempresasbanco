export async function get<T>(endpoint: string): Promise<T[]> {
  const response = await fetch(`/${endpoint}.json`);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data as T[];
}
