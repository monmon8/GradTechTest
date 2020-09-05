function createMenuData(data) {
  const result = [];

  for (const node of data) {
    const [parentName, childName] = node.split("/");

    if (!childName) continue;

    const parent = result.find((obj) => obj.title === parentName);

    if (parent) {
      parent.data.push(childName);
    } else {
      result.push({
        title: parentName,
        data: [childName],
      });
    }
  }

  return result;
}

module.exports = createMenuData;
