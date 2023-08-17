function fetchService(url, options) {
  return fetch(url, options).then((res) => {
    if (res.ok) return res.json();
    throw new Error(`Http response error: ${res.status}`);
  });
}

export function schemaResolverService() {
  const baseUrl = 'http://localhost:6061';
  return {
    // Get schemas returns all credentials and it's basic data.
    async getSchemas() {
      return await fetchService(`${baseUrl}/jsonSchema`, {
        method: 'GET',
        mode: 'cors',
      });
    },
  };
}
