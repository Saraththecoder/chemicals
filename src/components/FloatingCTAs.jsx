const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63A16 16 0 0 0 15.37 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export default function FloatingCTAs() {
  return (
    <div className="fab-group" aria-label="Quick Contact">
      <a
        href="https://wa.me/919390477702?text=Hello%2C%20I%20need%20water%20treatment%20services."
        className="fab fab-wa"
        id="fabWa"
        aria-label="WhatsApp Chat"
        title="WhatsApp Us"
      >
        <WaIcon />
        <span className="fab-tooltip">WhatsApp Us</span>
      </a>
      <a
        href="tel:+919390477702"
        className="fab fab-call"
        id="fabCall"
        aria-label="Call Now"
        title="Call Now"
      >
        <PhoneIcon />
        <span className="fab-tooltip">Call Now</span>
      </a>
    </div>
  )
}
