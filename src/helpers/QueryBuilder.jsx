class QueryBuilder {
  constructor() {}

  addProperty(propertyName, value) {
    this[propertyName] = value;
    return this;
  }

  build() {
    return (
      "" +
      Object.keys(this)
        .sort()
        .map((propName, index, array) => `${propName}=${this[propName]}`)
        .join("&")
    );
  }

  clear() {
    for (const propName of Object.keys(this)) delete this[propName];
  }
}

export default QueryBuilder;
