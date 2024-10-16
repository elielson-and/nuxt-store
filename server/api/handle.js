export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  const { age } = await readBody(event);
  return {
    message: `Your are ${name}, and have ${age} years old.`
  };
});
