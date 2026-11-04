import { SocialButton, socials } from "../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col-reverse md:flex-row p-8">
      <div className="flex flex-col bg-base-200 p-4 rounded-lg">
        <div className="text-4xl text-primary font-bold p-2">
          Get in touch
        </div>

        <div className="px-2 text-sm opacity-60">
          Timezone: Redmond, WA
        </div>

        <div className="p-2">
          Business email:<br />
          <a href="mailto:edguitar.dm.alt@gmail.com" className="text-info underline">
            edguitar.dm.alt@gmail.com
          </a>
        </div>

        <div className="p-2">
          Personal email:<br />
          <a href="mailto:edguitar.dm@gmail.com" className="text-secondary underline">
            edguitar.dm@gmail.com
          </a>
        </div>

        <div className="p-2">
          Phone:<br />
          <a className="text-accent underline">
            +1 206 671 8990
          </a>
        </div>

        <div className="flex flex-row p-2">
          {
            socials.map(social => {
              return (
                <SocialButton {...social} />
              );
            })
          }
        </div>
      </div>

      <div>
        <img
          className="object-cover object-right aspect-square max-h-100"
          src="/contact-pic.webp"
        />
      </div>
    </div >
  );
}
