export function buildRoutePath(path) {
  // : -> encontrar tudo que começa com :
  // [a-zA-Z] -> depois, pode ter letras de a a z ou de A a Z 
  // + -> uma ou mais vezes
  const routeParametersRegex = /:([a-zA-Z])+/g;
  const paramsWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
  // console.log(Array.from(path.matchAll(routeParametersRegex)));
  // const pathRegex = new RegExp(`^${paramsWithParams}`)
  const pathRegex = new RegExp(`^${paramsWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}
