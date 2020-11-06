export const getToken = (authHeader?: string): string => {
  if (!authHeader) throw new Error('No authentication header');

  const parts = authHeader.split(' ');

  if (parts.length !== 2) throw new Error('No authorization token was found');

  const [schema, token] = parts;

  if (!/^bearer$/i.test(schema)) throw new Error('Invalid authorization header');

  if (!token.length) throw new Error('No authorization token was found');

  return token;
};
