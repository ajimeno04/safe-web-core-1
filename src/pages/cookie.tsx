import { Typography } from '@mui/material'

const CookiePolicy = () => {
  return (
    <main>
      <Typography variant="h1" mb={2}>
        Cookie Policy
      </Typography>
      <p>Last updated: October 2024.</p>
      <p>
        For general web-browsing of this website, your personal data is not revealed to us, although certain statistical
        information is available to us via our internet service provider. We exclusively process your personal data in
        pseudonymised form.
      </p>
      <p>
        This Cookie Policy applies to our website at safe.flow.com and sets out some further detail on how and why we
        use these technologies on our website.
      </p>
      <p>The terms “you” and “your” include our clients, business partners and users of this website.</p>
      <p>
        By using our website, you consent to storage and access to cookies and other technologies on your device, in
        accordance with this Cookie Policy.
      </p>
      <Typography variant="h2" mb={2}>
        What are cookies?
      </Typography>
      <p>
        Cookies are a feature of web browser software that allows web servers to recognize the computer or device used
        to access a website. A cookie is a small text file that a website saves on your computer or mobile device when
        you visit the site. It enables the website to remember your actions and preferences (such as login, language,
        font size and other display preferences) over a period of time, so you don’t have to keep re-entering them
        whenever you come back to the site or browse from one page to another.
      </p>
      <Typography variant="h2" mb={2}>
        What are the different types of cookies?
      </Typography>
      <p>A cookie can be classified by its lifespan and the domain to which it belongs.</p>
      <p>By lifespan, a cookie is either a:</p>
      <ol>
        <li>session cookie which is erased when the user closes the browser; or</li>
        <li>
          persistent cookie which is saved to the hard drive and remains on the user’s computer/device for a pre-defined
          period of time. As for the domain to which it belongs, cookies are either:{' '}
        </li>
        <li>
          first-party cookies which are set by the web server of the visited page and share the same domain (i.e. set by
          us); or
        </li>
        <li>third-party cookies stored by a different domain to the visited page’s domain.</li>
      </ol>
      <Typography variant="h2" mb={2}>
        What cookies do we use and why?
      </Typography>
      <p>We list all the cookies we use on this website in the APPENDIX below.</p>{' '}
      <p>We do not use cookies set by ourselves via our web developers (first-party cookies).</p>{' '}
      <p>
        We only have those set by others (third-party cookies). Cookies are also sometimes classified by reference to
        their purpose. We use the following cookies for the following purposes:
      </p>
      <ol>
        <li>
          Analytical/performance cookies: They allow us to recognize and count the number of visitors and to see how
          visitors move around our website when they are using it, as well as dates and times they visit. This helps us
          to improve the way our website works, for example, by ensuring that users are finding what they are looking
          for easily.
        </li>
        <li>
          Targeting cookies: These cookies record your visit to our website, the pages you have visited and the links
          you have followed, as well as time spent on our website, and the websites visited just before and just after
          our website. We will use this information to make our website and the advertising displayed on it more
          relevant to your interests. We may also share this information with third parties for this purpose.
        </li>
      </ol>
      <p>
        In general, we use cookies and other technologies (such as web server logs) on our website to enhance your
        experience and to collect information about how our website is used.
      </p>
      <Typography variant="h2" mb={2}>
        Other Technologies
      </Typography>
      <p>
        We may allow others to provide analytics services and serve advertisements on our behalf. In addition to the
        uses of cookies described above, these entities may use other methods, such as the technologies described below,
        to collect information about your use of our website and other websites and online services.
      </p>
      <p>
        Pixels tags. Pixel tags (which are also called clear GIFs, web beacons, or pixels), are small pieces of code
        that can be embedded on websites and emails. Pixels tags may be used to learn how you interact with our website
        pages and emails, and this information helps us, and our partners provide you with a more tailored experience.
      </p>
      <p>
        Device Identifiers. A device identifier is a unique label that can be used to identify a mobile device. Device
        identifiers may be used to track, analyze and improve the performance of the website and ads delivered.
      </p>
      <Typography variant="h2" mb={2}>
        What data is collected by cookies and other technologies on our website?
      </Typography>
      <h3>This information may include:</h3>
      <ol>
        <li>
          the IP and logical address of the server you are using (but the last digits are anonymized so we cannot
          identify you).
        </li>
        <li>the top level domain name from which you access the internet (for example .ie, .com, etc)</li>
        <li>the type of browser you are using,</li>
        <li>the date and time you access our website</li>
        <li>the internet address linking to our website.</li>
      </ol>
      <h3>This website also uses cookies to:</h3>
      <ol>
        <li>
          <span>remember you and your actions while navigating between pages;</span>
        </li>
        <li>
          <span>remember if you have agreed (or not) to our use of cookies on our website;</span>
        </li>
        <li>
          <span>ensure the security of the website;</span>
        </li>
        <li>
          <span>monitor and improve the performance of servers hosting the site;</span>
        </li>
        <li>
          <span>distinguish users and sessions;</span>
        </li>
        <li>
          <span>Improving the speed of the site when you access content repeatedly;</span>
        </li>
        <li>
          <span>determine new sessions and visits;</span>
        </li>
        <li>
          <span>allow us to store any customization preferences where our website allows this</span>
        </li>
      </ol>
      <p>
        We may also use other services, such as{' '}
        <a
          href="https://www.google.com/url?q=https://www.google.com/intl/en/analytics/%23?modal_active%3Dnone&amp;sa=D&amp;source=editors&amp;ust=1730479754926785&amp;usg=AOvVaw1UYIzYzWRMymUcWsK8jTML"
          style={{ textDecoration: 'underline' }}
        >
          Google Analytics
        </a>{' '}
        or other third-party cookies, to assist with analyzing performance on our website. As part of providing these
        services, these service providers may use cookies and the technologies described below to collect and store
        information about your device, such as time of visit, pages visited, time spent on each page of our website,
        links clicked and conversion information, IP address, browser, mobile network information, and type of operating
        system used.
      </p>
    </main>
  )
}

export default CookiePolicy
