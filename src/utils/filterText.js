const filterText = (collection, q, category) => {
  const textRegex = new RegExp(q, 'i');

  return collection.filter(obj =>
    (category ? obj.categories.includes(category) : true) &&
    textRegex.test(obj.name)

  );
}

export default filterText;
