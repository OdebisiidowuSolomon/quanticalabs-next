import Footer from '../_components/Footer'
import Header from '../_components/Header'
import ContactSection1 from './components/ContactSection1'
import ContactSection2 from './components/ContactSection2'
import ContactSection3 from './components/ContactSection3'

export default function ContactPage() {
  return (
    <div className="site-container">
      <Header />

      <div className="theme-page">
        <div className="clearfix">
          <ContactSection1 />
          <ContactSection2 />
          <ContactSection3 />
        </div>
      </div>

      <Footer />

    </div>
  )
}
