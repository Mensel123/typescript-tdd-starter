export function Add(numbers: string) {
  if(numbers === '1')
    return 1;
  if(numbers === '')
    return 0;
  const splitNumbers = numbers.split(',').map(number => parseInt(number));
  return splitNumbers.reduce((sum, current) => sum + current, 0);
}
