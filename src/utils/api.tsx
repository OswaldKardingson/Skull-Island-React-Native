const API_BASE_URL = 'https://api.example.com';

// Interface for API response
export interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

// Interface for fetchData function props
export interface FetchDataProps {
  endpoint: string;
  testID?: string; // Optional testID for testing purposes
}

/**
 * Fetches data from the API.
 * @param {string} endpoint - The endpoint for the API.
 * @param {string} [testID] - Optional test ID for testing.
 * @returns {Promise<ApiResponse<T>>} The response data or an error.
 */
export const fetchData = async <T>({
  endpoint,
  testID,
}: FetchDataProps): Promise<ApiResponse<T>> => {
  try {
    console.log(
      `Fetching data from: ${API_BASE_URL}/${endpoint}${testID ? ` with testID: ${testID}` : ''}`
    );

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: T = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};
