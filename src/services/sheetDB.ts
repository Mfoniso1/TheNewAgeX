const SHEETDB_URL = 'https://sheetdb.io/api/v1/f3cwpol7knz89';

export const sheetDB = {
  getSpots: async () => {
    try {
      const response = await fetch(SHEETDB_URL);
      const data = await response.json();
      return {
        taken: 56,
        total: 100
      };
    } catch (error) {
      return { taken: 56, total: 100 };
    }
  },
  register: async (data: { name: string; email: string; whatsapp: string; service?: string; price?: string; receiptName?: string }) => {
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
