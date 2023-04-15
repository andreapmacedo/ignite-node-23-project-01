export function buildRoutePath(path) {
  // : -> encontrar tudo que começa com :
  // [a-zA-Z] -> depois, pode ter letras de a a z ou de A a Z 
  // + -> uma ou mais vezes
  const routeParametersRegex = /:([a-zA-Z])+/g;
  console.log(Array.from(path.matchAll(routeParametersRegex)));
}
