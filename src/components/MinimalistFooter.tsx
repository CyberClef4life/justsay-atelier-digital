const MinimalistFooter = () => {
  const InstagramIcon = () => (
    <svg 
      height="24px" 
      width="24px" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  return (
    <footer style={{ backgroundColor: '#111', color: '#eee', fontFamily: 'sans-serif' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px'
      }}>
        {/* Brand */}
        <div>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'normal', 
            marginBottom: '8px',
            color: '#eee'
          }}>
            <a 
              href="https://saymodel.com" 
              style={{ 
                color: '#eee', 
                textDecoration: 'none' 
              }}
            >
              Say
            </a>
          </h2>
          <p style={{ 
            fontSize: '14px', 
            color: '#ccc', 
            margin: '0' 
          }}>
            Model | Host | Ambassador
          </p>
        </div>

        {/* Booking & Inquiries */}
        <div>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 'normal', 
            marginBottom: '12px',
            color: '#eee'
          }}>
            Booking & Inquiries
          </h3>
          <div style={{ fontSize: '14px' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <a 
                href="mailto:hello@saymodel.com" 
                style={{ 
                  color: '#ccc', 
                  textDecoration: 'none' 
                }}
              >
                hello@saymodel.com
              </a>
            </p>
            <p style={{ margin: '0' }}>
              <a 
                href="tel:+971585812278" 
                style={{ 
                  color: '#ccc', 
                  textDecoration: 'none' 
                }}
              >
                +971-5858-1-2278
              </a>
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 'normal', 
            marginBottom: '12px',
            color: '#eee'
          }}>
            Get Started
          </h3>
          <a 
            href="https://saymodel.com/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            Request Talent Booking
          </a>
        </div>

        {/* Locations */}
        <div>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 'normal', 
            marginBottom: '12px',
            color: '#eee'
          }}>
            Locations
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0', 
            margin: '0',
            fontSize: '14px',
            color: '#ccc'
          }}>
            <li style={{ marginBottom: '4px' }}>Paris</li>
            <li style={{ marginBottom: '4px' }}>Monaco</li>
            <li style={{ marginBottom: '4px' }}>New York City</li>
            <li style={{ marginBottom: '8px' }}>Dubai</li>
            <li style={{ 
              fontSize: '12px', 
              fontStyle: 'italic',
              color: '#999'
            }}>
              Available worldwide upon request
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 'normal', 
            marginBottom: '12px',
            color: '#eee'
          }}>
            Social
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a 
              href="https://instagram.com/say.model"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Say Model on Instagram"
              style={{ color: '#ccc', textDecoration: 'none' }}
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://www.instagram.com/say.skinn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Say Skinn on Instagram"
              style={{ color: '#ccc', textDecoration: 'none' }}
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://www.instagram.com/justceyg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Just Cey G on Instagram"
              style={{ color: '#ccc', textDecoration: 'none' }}
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://www.instagram.com/justceybeauty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Just Cey Beauty on Instagram"
              style={{ color: '#ccc', textDecoration: 'none' }}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div style={{
        borderTop: '1px solid #333',
        paddingTop: '15px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#ccc',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '15px 20px 0'
      }}>
        <p style={{ margin: '0 0 8px 0' }}>
          © 2025 Say. All rights reserved.
        </p>
        <div style={{ fontSize: '12px' }}>
          <a 
            href="/privacy-policy" 
            style={{ 
              color: '#ccc', 
              textDecoration: 'none',
              marginRight: '20px'
            }}
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            style={{ 
              color: '#ccc', 
              textDecoration: 'none' 
            }}
          >
            Terms of Service
          </a>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>
        {`
          @media (max-width: 600px) {
            footer > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            footer div:last-child {
              font-size: 12px !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default MinimalistFooter;