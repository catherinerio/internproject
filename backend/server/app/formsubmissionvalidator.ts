import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FormSubmissionValidator {
  public schema = schema.create({
    first_name: schema.string({}, [
      rules.required(),
      rules.minLength(2),
      rules.maxLength(50),
    ]),
    last_name: schema.string({}, [
      rules.required(),
      rules.minLength(2),
      rules.maxLength(50),
    ]),
    phone_number: schema.string({}, [
      rules.required(),
      rules.mobile(),
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
    ]),
    address: schema.string({}, [
      rules.required(),
      rules.minLength(2),
      rules.maxLength(100),
    ]),
    postcode: schema.string({}, [
      rules.required(),
      rules.minLength(4),
      rules.maxLength(10),
    ]),
    state: schema.string({}, [
      rules.required(),
      rules.minLength(2),
      rules.maxLength(50),
    ]),
    clothing_types: schema.array([
      rules.required(),
      rules.minLength(1),
      rules.maxLength(10),
    ]).members(
      schema.string({}, [
        rules.required(),
        rules.minLength(2),
        rules.maxLength(50),
      ])
    ),
    images: schema.array([
      rules.required(),
      rules.minLength(1),
      rules.maxLength(5),
    ]).members(
      schema.string({}, [
        rules.required(),
        rules.url(),
      ])
    ),
    description: schema.string({}, [
      rules.required(),
      rules.minLength(10),
      rules.maxLength(500),
    ]),
    budget: schema.number.optional([
      rules.range(0, 10000),
    ]),
  })

  public messages = {
    required: 'The {{ field }} field is required.',
    minLength: 'The {{ field }} field must be at least {{ options.minLength }} characters.',
    maxLength: 'The {{ field }} field must not exceed {{ options.maxLength }} characters.',
    mobile: 'The {{ field }} field must be a valid mobile phone number.',
    email: 'The {{ field }} field must be a valid email address.',
    url: 'The {{ field }} field must be a valid URL.',
    range: 'The {{ field }} field must be between {{ options.min }} and {{ options.max }}.',
  }
}
