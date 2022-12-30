export class Resource {
  foo = "";
  bar = 0;
  baz = true;

  constructor(resource?: Resource) {
    if (resource) {
      this.foo = resource.foo;
      this.bar = resource.bar;
      this.baz = resource.baz;
    }
  }
}

export class DbResource extends Resource {
  id: string;

  constructor(dbResource: DbResource) {
    super(dbResource);
    this.id = dbResource.id;
  }
}
