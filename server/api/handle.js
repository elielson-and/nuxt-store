export default defineEventHandler((event) => {
  const { name } = getQuery(event);

  return {
    message: 'Query value from URL: ' + name
  };
});
