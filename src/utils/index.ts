export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

type RequestMethod = 'POST' | 'GET'
type Payload = { data: string }
type ResponseData = { result: string }

export async function makeFakeRequest(
  type: RequestMethod,
  endPoint: string,
  payload: Payload
): Promise<ResponseData> {
  const requestOptions: RequestInit = {
    method: type,
    headers: {
      'Content-Type': 'application/json'
    },
    ...(type === 'POST' && { body: JSON.stringify(payload) })
  }

  const response = await fetch(`/${endPoint}`, requestOptions)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json() as Promise<ResponseData>
}
