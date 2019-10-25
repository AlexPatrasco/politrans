class ContactUsMailer < ApplicationMailer
  default to: 'alexandru.agp+politransWEB@gmail.com'

  def user_inquiry(respond_to, name, contents)
    email_with_name = %("#{name}" <#{respond_to}>)
    mail(
      from: email_with_name,
      subject: "Contact Politrans inquiry ##{SecureRandom.hex}",
      body: contents,
      content_type: "text/html",
    )
  end
end
