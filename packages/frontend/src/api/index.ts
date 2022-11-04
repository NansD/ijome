
export async function queryAndReturnBody(url: string) {
  const fetchResult = await fetch(url);
  const result = await fetchResult.json();
  return result;
}
