import { renderHook } from '@testing-library/react-hooks';
import useFetch from '@hooks/useFetch';

global.fetch = jest.fn();

describe('useFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    const mockResponse = { name: 'John Doe', id: 1 };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<{ name: string; id: number }>({
        url: 'https://jsonplaceholder.typicode.com/users/1',
      })
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockResponse);
    expect(result.current.error).toBe(null);
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Network error');
    (fetch as jest.Mock).mockRejectedValueOnce(mockError);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({
        url: 'https://jsonplaceholder.typicode.com/users/1',
      })
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBe(null);
  });

  it('should throw an error for non-OK responses', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({}),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({
        url: 'https://jsonplaceholder.typicode.com/users/1',
      })
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error?.message).toBe('HTTP error! status: 404');
    expect(result.current.data).toBe(null);
  });
});
