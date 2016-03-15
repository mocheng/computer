export const sqrt  = Math.sqrt;

export default function foo(x) {
  return x;
}

export function square(x) {
  return x * x;
}

export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

