import { communityPosts } from './community-posts';

const Arrow = () => <span aria-hidden="true">↗</span>;
const featuredNotice = communityPosts[0];

const departmentUpdates = [
  { name: 'Education', description: 'School dates, registration and family information.', posts: communityPosts.filter(post => post.category === 'Education') },
  { name: 'Health & Wellness', description: 'Clinic hours, closures and wellness programs.', posts: communityPosts.filter(post => post.category === 'Health') },
  { name: 'Family & Community', description: 'Programs, workshops and family events.', posts: communityPosts.filter(post => ['Family', 'Community event'].includes(post.category)) },
];

export default function Home() {
  return (
    <main>
      <div className="concept-bar">
        <span>Private design concept</span>
        <span>Not an official Waterhen Lake First Nation website</span>
      </div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Waterhen Lake First Nation home">
          <img className="brand-mark" src="/waterhen-emblem.jpg" alt="Waterhen Lake First Nation emblem" />
          <span className="brand-copy"><strong>Waterhen Lake</strong><small>First Nation</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#community">Our Community</a><a href="#services">Services</a>
          <a href="#opportunities">Opportunities</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href="#services">Member services <Arrow /></a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div>
            <a href="#community">Our Community</a><a href="#services">Services</a>
            <a href="#opportunities">Opportunities</a><a href="#contact">Contact</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <figure className="hero-art">
          <img src="https://tsaskblobstorage.blob.core.windows.net/ics/Miywasin_01_cropped20363.jpg" alt="Miywâsin Ôta Resort on the south shore of Waterhen Lake" />
          <figcaption>Waterhen Lake · Miywâsin Ôta Resort</figcaption>
        </figure>
        <div className="hero-copy">
          <p className="eyebrow">Treaty 6 · Sîkîp Sâkahikan</p>
          <h1>At home on<br />Waterhen Lake.</h1>
          <p className="hero-lede">A central place for Waterhen Lake members, families and partners to find community services, news and opportunities.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#services">Find a service <span>→</span></a>
            <a className="text-link" href="#community">Learn about Waterhen <Arrow /></a>
          </div>
        </div>
        <aside className="notice-card" aria-label="Community notice">
          <div className="notice-label"><span /> Education notice</div>
          <div className="notice-meta">{featuredNotice.date} · {featuredNotice.source}</div>
          <p>{featuredNotice.title}</p>
          <small className="notice-summary">{featuredNotice.summary}</small>
          <a href="#news">View Education notices <span>→</span></a>
        </aside>
      </section>

      <section className="quick-links" aria-label="Popular links">
        <p>How can we help?</p>
        <a href="#services"><span className="quick-icon">01</span><span>Programs &amp;<br />services</span><Arrow /></a>
        <a href="#news"><span className="quick-icon">02</span><span>News &amp;<br />notices</span><Arrow /></a>
        <a href="#opportunities"><span className="quick-icon">03</span><span>Jobs &amp;<br />opportunities</span><Arrow /></a>
        <a href="#contact"><span className="quick-icon">04</span><span>Contact the<br />Band Office</span><Arrow /></a>
      </section>

      <section className="lake-identity" aria-label="Waterhen Lake identity">
        <div className="lake-title"><span>Sîkîp Sâkahikan</span><h2>Land and water are not the backdrop.<br />They are the story.</h2></div>
        <div className="lake-details">
          <div><strong>10,000</strong><span>hectares of Waterhen Lake</span></div>
          <div><strong>5,000</strong><span>years of boreal ecosystem continuity</span></div>
          <div><strong>4</strong><span>prominent local fish species</span></div>
        </div>
        <p>Waterhen Lake is fed by the Waterhen River and supports walleye, northern pike, yellow perch and burbot. Its shoreline and boreal ecosystem have shaped travel, food, gathering and community life for generations.</p>
      </section>

      <section className="community-section" id="community">
        <div className="section-kicker"><span>01</span><p>Our community</p></div>
        <div className="community-copy">
          <p className="eyebrow">Sîkîp Sâkahikan</p>
          <h2>A Cree Nation shaped by water, land and generations of community.</h2>
          <div className="two-column-copy">
            <p>Waterhen Lake First Nation is located in northwestern Saskatchewan, approximately 39 kilometres north of Meadow Lake. The Nation signed an adhesion to Treaty 6 in 1921.</p>
            <p>This concept gives the Nation space to tell its own story—its language, knowledge, history and priorities—in words approved by the community.</p>
          </div>
          <a className="outline-link" href="#history">Explore our history <Arrow /></a>
        </div>
        <div className="fact-panel" aria-label="Community facts">
          <div><strong>Treaty 6</strong><span>Treaty relationship</span></div>
          <div><strong>1921</strong><span>Adhesion signed</span></div>
          <div><strong>7,972 ha</strong><span>Waterhen reserve land</span></div>
          <small>Public-source figures shown for concept purposes and subject to Nation verification.</small>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">Member services</p><h2>Find the right department.</h2></div>
          <p>A straightforward directory replaces scattered contact information and makes essential programs easier to find.</p>
        </div>
        <div className="service-grid">
          {[
            ["Housing & Public Works","Housing applications, maintenance and infrastructure."],
            ["Health & Wellness","Community health, prevention and wellness supports."],
            ["Education","Student services, school information and post-secondary support."],
            ["Lands & Resources","Land management, environment and community planning."],
            ["Family & Social Development","Family programming and community supports."],
            ["Administration","Band Office services, forms and general inquiries."],
          ].map(([title, text], index) => (
            <a className="service-card" href="#contact" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b aria-hidden="true">→</b>
            </a>
          ))}
        </div>
        <p className="verification-note">Department names and descriptions are representative placeholders to be confirmed by Waterhen Lake First Nation.</p>
      </section>

      <section className="department-updates" id="news">
          <div className="native-section-heading"><p className="eyebrow">Current information</p><h3>Updates where members expect to find them.</h3><p>Each notice is automatically routed to the service area it belongs to.</p></div>
          {departmentUpdates.map(group => <section className="department-update-group" key={group.name}><header><div><span>{group.posts.length} current</span><h3>{group.name}</h3></div><p>{group.description}</p></header>{group.posts.map(post => <details className="native-notice" key={post.id}><summary><span><small>{post.date}</small><strong>{post.title}</strong></span><b>View details</b></summary><div className="native-notice-body"><div className="native-notice-images">{post.images.map((image, imageIndex) => <img src={image} alt={`${post.title}${post.images.length > 1 ? ` — page ${imageIndex + 1}` : ''}`} key={image}/>)}</div><div><p>{post.summary}</p><small>Source: {post.source} · Community information import</small></div></div></details>)}</section>)}
      </section>

      <section className="opportunities-section" id="opportunities">
        <div className="opportunity-copy">
          <img className="spirit-mark" src="https://miywasinota.ca/wp-content/uploads/2024/05/Waterhen_Vertical_PNG-300x300.png" alt="Spirit of Waterhen initiative" />
          <p className="eyebrow">Economic development</p>
          <h2>Community strength in motion.</h2>
          <p>A dedicated place to showcase Waterhen’s development corporation, Nation-owned enterprises, partnerships, procurement and employment opportunities.</p>
          <a className="primary-button" href="#contact">Explore opportunities <span>→</span></a>
        </div>
        <div className="opportunity-cards">{communityPosts.filter(post => post.category === 'Employment').map((post, index) => <details className="employment-listing" key={post.id}><summary><span>0{index + 1}</span><div><small>Employment · {post.date}</small><h3>{post.title}</h3><p>{post.summary}</p></div><b>View posting</b></summary><div className="employment-documents">{post.images.map((image, imageIndex) => <img src={image} alt={`${post.title} — document ${imageIndex + 1}`} key={image}/>)}</div><small>Source: {post.source}</small></details>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Contact</p><h2>Waterhen Lake<br />Band Office</h2></div>
        <div className="contact-details">
          <div><span>Phone</span><a href="tel:+13062366717">306-236-6717</a></div>
          <div><span>Mailing address</span><p>Box 9, Waterhen Lake<br />Saskatchewan S0M 3B0</p></div>
          <div><span>Office hours</span><p>To be confirmed by the Nation</p></div>
          <a className="outline-link" href="https://www.google.com/maps/search/?api=1&query=Waterhen+Lake+First+Nation+Saskatchewan">Get directions <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img className="brand-mark" src="/waterhen-emblem.jpg" alt="" /><strong>Waterhen Lake First Nation</strong></div>
        <p>This private concept uses public information from Indigenous Services Canada, Meadow Lake Tribal Council and publicly accessible community sources. All content requires Nation approval before official use.</p>
        <div className="footer-credit"><span>Concept website</span><strong>Developed by OpenBand</strong><a href="https://openband.ca">openband.ca <Arrow /></a></div>
      </footer>
    </main>
  );
}
