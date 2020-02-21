export interface Validatable {
  validate(value: string|number|string[]): Promise<void>;
}
