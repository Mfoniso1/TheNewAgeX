// Mocking SheetDB for now. In a real app, you'd use fetch with your SheetDB URL.
export const sheetDB = {
  getSpots: async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      taken: 12,
      total: 50
    };
  },
  register: async (data: { name: string; email: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Registered:', data);
    return { success: true };
  }
};
