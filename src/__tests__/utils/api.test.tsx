import { fetchData, ApiResponse } from '@utils/api';

global.fetch = jest.fn();

describe('fetchData', () => {
  const API_BASE_URL = 'https://api.example.com';
  const mockEndpoint = 'test-endpoint';
  const mockResponse = { message: 'Success' };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully and returns the response', async () => {
    // Mock a successful fetch response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await fetchData<{ message: string }>({
      endpoint: mockEndpoint,
    });

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/${mockEndpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    expect(result).toEqual({ data: mockResponse });
  });

  it('throws an error if the response is not ok', async () => {
    // Mock an unsuccessful fetch response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    const result = await fetchData<{ message: string }>({
      endpoint: mockEndpoint,
    });

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/${mockEndpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    expect(result).toEqual({
      data: null,
      error: 'Error 404: Not Found',
    });
  });

  it('handles fetch failure and returns an error message', async () => {
    const mockError = new Error('Network error');

    // Mock a fetch failure
    (fetch as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await fetchData<{ message: string }>({
      endpoint: mockEndpoint,
    });

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/${mockEndpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    expect(result).toEqual({
      data: null,
      error: 'Network error',
    });
  });

  it('logs the testID when provided', async () => {
    const testID = 'test-id';

    // Mock a successful fetch response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    await fetchData<{ message: string }>({
      endpoint: mockEndpoint,
      testID,
    });

    expect(consoleLogSpy).toHaveBeenCalledWith(
      `Fetching data from: ${API_BASE_URL}/${mockEndpoint} with testID: ${testID}`
    );

    consoleLogSpy.mockRestore();
  });
});
