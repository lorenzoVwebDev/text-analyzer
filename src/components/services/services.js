export function itemize(text, transformer) {
  const regexPattern = /[^a-zA-Z0-9_]/;
  const letters = text.split('').filter(l => {
    return !regexPattern.test(l);
  }).reduce((collection, item) => {
    const letter = transformer ? transformer(item) : item;

    return {
      ...collection,
      [item]: (collection[item] || 0) + 1
    }
    },{})

  return Object.entries(letters).sort((a, b) => b[1] - a[1])
}