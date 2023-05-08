

import Route from '@ioc:Adonis/Core/Route'
import FormSubmissionValidator from 'App/formsubmissionvalidator'
import FormSubmission from 'app/Models/User'

Route.post('/form-submissions', async ({ request, response }) => {
  const data = await request.validate(FormSubmissionValidator)

  const formSubmission = new FormSubmission()
  formSubmission.fill(data)
  await formSubmission.save()

  response.status(201).send({ message: 'Form submission created successfully.' })
})
