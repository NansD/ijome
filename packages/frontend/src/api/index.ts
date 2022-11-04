export const API_URL = import.meta.env.VITE_API_URL;

export async function queryAndReturnBody(url: string) {
  const fetchResult = await fetch(url);
  const result = await fetchResult.json();
  return result;
}

export async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  });
  return response.json();
}
