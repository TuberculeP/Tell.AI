const isLoading = ref(false);
const lastResponse = ref<string | null>(null);
const imgURL = ref<string | null>(null);

export const useLastResponse = () => {
  return {
    lastResponse,
    isLoading,
    imgURL,
  };
};
