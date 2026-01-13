import "../../styles/Policies.css";

function Policies() {
  return (
    <section className="policies-page">
      <div className="content">
        <h1>Club Policies</h1>

        <p className="intro-text">
          Lincoln Tri Club is committed to operating in a safe, inclusive, and
          well-governed manner. The policies below outline our responsibilities,
          standards, and procedures for members, coaches, volunteers, and
          officials.
        </p>

        <ul className="policies-list">
          <li className="policy-item">
            <span className="policy-title">Child Supervision Policy</span>
            <div className="policy-links">
              <a href="/policies/child-supervision">View</a>
              <a href="/documents/child-supervision.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">Clean Sport Policy</span>
            <div className="policy-links">
              <a href="/policies/clean-sport">View</a>
              <a href="/documents/clean-sport.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">
              Code of Conduct – Club Officers
            </span>
            <div className="policy-links">
              <a href="/policies/code-of-conduct-officers">View</a>
              <a href="/documents/code-of-conduct-officers.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">
              Equality, Diversity & Inclusion Policy
            </span>
            <div className="policy-links">
              <a href="/policies/equality-diversity-inclusion">View</a>
              <a href="/documents/edi-policy.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">GDPR – British Triathlon</span>
            <div className="policy-links">
              <a href="/policies/gdpr">View</a>
              <a href="/documents/gdpr-british-triathlon.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">Health & Safety Policy</span>
            <div className="policy-links">
              <a href="/policies/health-and-safety">View</a>
              <a href="/documents/health-and-safety.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">Prevent Bullying in Sport</span>
            <div className="policy-links">
              <a href="/policies/prevent-bullying">View</a>
              <a href="/documents/prevent-bullying.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">Safeguarding Policy</span>
            <div className="policy-links">
              <a href="/policies/safeguarding">View</a>
              <a href="/documents/safeguarding.pdf" download>
                Download PDF
              </a>
            </div>
          </li>

          <li className="policy-item">
            <span className="policy-title">Social Media Policy</span>
            <div className="policy-links">
              <a href="/policies/social-media">View</a>
              <a href="/documents/social-media.pdf" download>
                Download PDF
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Policies;
