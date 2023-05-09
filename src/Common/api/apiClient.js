const apiClient = async (endpoint, { body, ...customConfig } = {}) => {
  const headers = { "Content-Type": "application/json" };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${endpoint}`, config);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default apiClient;
