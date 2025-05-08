export function validateRut(rut: string): boolean {
  rut = rut.replace(/\./g, '').replace('-', '').toUpperCase();

  if (!/^[0-9]+[0-9K]$/.test(rut)) return false;

  const body = rut.slice(0, -1);
  const dv = rut.slice(-1);

  let sum = 0;
  let multiplier = 2;

  for (let i = body.length - 1; i >= 0; i--) {
    sum += +body[i] * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const expectedDv = 11 - (sum % 11);
  const expected = expectedDv === 11 ? '0' : expectedDv === 10 ? 'K' : expectedDv.toString();

  return dv === expected;
}
