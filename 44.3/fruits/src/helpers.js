
function choice(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function remove(items, item) {
  const index = items.indexOf(item);
  if (index > -1) {
    return items.splice(index, 1)[0];
  }
  return undefined;
}

export { choice, remove };
