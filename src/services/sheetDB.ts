const SHEETDB_URL = 'https://sheetdb.io/api/v1/2moxvunsgsv1w';

export const sheetDB = {
  getSpots: async () => {
    try {
      const response = await fetch(SHEETDB_URL);
      const data = await response.json();
      // Assuming the sheet has rows and we want to count them or it has a specific structure
      // For now, we'll return a mock count if the API doesn't provide a direct "spots" count
      // but we'll try to get the length of the data array.
      return {
        taken: Array.isArray(data) ? data.length : 12,
        total: 50
      };
    } catch (error) {
      console.error('Error fetching spots:', error);
      return { taken: 12, total: 50 };
    }
  },
  register: async (data: { name: string; email: string; service?: string; price?: string; receiptName?: string }) => {
    try {
      const response = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              ...data,
              timestamp: new Date().toISOString(),
            }
          ]
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to register');
      }
      
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false };
    }
  }
};
