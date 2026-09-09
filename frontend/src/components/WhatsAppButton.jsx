const WhatsAppIcon = ({ size = 34 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }} focusable="false" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
  </svg>
)

const WhatsAppButton = ({ phone = "919876543210" }) => (
  <a
    href={`https://wa.me/${phone}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: 9998,
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#22C55E",
      color: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform .2s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <WhatsAppIcon size={34} />
  </a>
)

export default WhatsAppButton