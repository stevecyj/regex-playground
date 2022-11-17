function kebablize(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '_')
    .toLowerCase();
}

console.log(kebablize('mozTransform'));
