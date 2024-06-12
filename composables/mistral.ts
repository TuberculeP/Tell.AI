// connect to the mistral api

export const useMistral = () => {
  const fetch = async (message: string) => {
    const response = await useFetch("/api/mistral", { body: { message } });
  };
  return;
};
