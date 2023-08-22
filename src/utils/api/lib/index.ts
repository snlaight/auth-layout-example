import axios, { AxiosError } from 'axios';

export const post$1 = async (url: string, data:any) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
  }

  return null;
};

export const get$1 = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
  }

  return null;
};


export const authenticatedGet$1 = async (url: string, token: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
  }

  return null;
};
