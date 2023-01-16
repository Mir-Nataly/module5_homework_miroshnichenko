/* Задание 8 Модуль 5.7 */


let instruments = new Map (
    ['violin', 'bow'],
    ['guitar', 'string']
    ['trombone', 'brass']
  );
  for (let name of instruments.keys()) {
    console.log(`${name}-x`)
  };
  for (let group of instruments.values()) {
    console.log(`${group}-y`)
  };