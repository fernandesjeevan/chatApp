import { Resend } from 'resend';

const resend = new Resend("asdfdsaf");

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Jeevan Fernandes<onboarding@resend.dev>',
    to: ['ur email'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    console.log("error block execugted", error)
    return console.error({ error });
  }

  console.log({ data });
})();