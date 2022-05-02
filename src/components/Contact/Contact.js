import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='info'>
        <p>Feel free to get in touch. You can contact me at:</p>
        <a href={`tel:${contact.phone}`} rel='noreferrer'>
          <span className='link link--nav'>
            <LocalPhoneRoundedIcon className='contact-icons' />
            {contact.phone}
          </span>
        </a>
        <a href={`mailto:${contact.email}`} rel='noreferrer'>
          <span className='link link--nav'>
            <EmailRoundedIcon className='contact-icons' />
            {contact.email}
          </span>
        </a>
        <a href='http://maps.google.com/?q=Lahore,%20Pakistan' rel='noreferrer'>
          <span className='link link--nav'>
            <LocationOnRoundedIcon className='contact-icons' />
            {contact.location}
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
