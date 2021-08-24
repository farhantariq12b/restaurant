export default class Exception extends Error {

  public code: number;
  public meta: object;

  constructor (message: string, code = 500, meta = {}) {

    super(message);
    this.code = code;
    this.meta = meta;

  }

  toJson () {

    const json = JSON.parse(JSON.stringify(this.meta || {}));

    json.code = this.code;
    json.message = this.message;

    return json;

  }

}
