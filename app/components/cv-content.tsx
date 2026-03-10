'use client'

import Image from 'next/image'
import { useLanguage } from '../context/language-context'

export function CVContent() {
  const { t } = useLanguage()

  return (
    <div className="cv">

      {/* ═══ HEADER ═══ */}
      <header className="header">
        <Image src="/avatar.jpg" alt="Nguyen Dang Dinh" className="avatar" width={140} height={140} />
        <div className="h-info">
          <h1>Nguyen Dang Dinh</h1>
          <div className="h-title">{t('jobTitle')} <span className="yoe">{t('yoe')}</span></div>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="label">{t('birth')}</span>
              <span>08/07/2000</span>
            </div>
            <div className="contact-item">
              <span className="label">{t('email')}</span>
              <a href="mailto:nguyendangdinh47@gmail.com">nguyendangdinh47@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="label">{t('phone')}</span>
              <a href="tel:+84977963775">0977 963 775</a>
            </div>
            <div className="contact-item">
              <span className="label">{t('github')}</span>
              <a href="https://github.com/dangdinh87" target="_blank" rel="noopener">github.com/dangdinh87</a>
            </div>
            <div className="contact-item">
              <span className="label">{t('address')}</span>
              <span>Da Nang, Vietnam</span>
            </div>
            <div className="contact-item">
              <span className="label">{t('linkedin')}</span>
              <a href="https://www.linkedin.com/in/dinhnguyen87" target="_blank" rel="noopener">linkedin.com/in/dinhnguyen87</a>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ BODY ═══ */}
      <main className="body">

        {/* ── OVERVIEW ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>
              </svg>
            </div>
            <h2>{t('overview')}</h2>
          </div>
          <ul className="overview-list">
            <li><strong>3+ years</strong> as a Frontend Developer — React, Next.js, TypeScript.</li>
            <li>Worked on e-commerce, fintech, AI workspace, and KOL/influencer platforms.</li>
            <li>UI: Tailwind CSS, Ant Design, Shadcn/ui, Bootstrap. State: Redux, Dva.js, Zustand, TanStack Query.</li>
            <li>Backend capable: <strong>Go</strong> &amp; <strong>Node.js</strong> — can own full-stack features independently.</li>
            <li>AI-assisted development: Claude Code, MCP servers, Agent Skills, Cursor, Trae.</li>
            <li>Landing pages with <strong>Framer</strong> &amp; <strong>Subframer</strong>.</li>
            <li>Quick learner, good communicator. Based in Da Nang, Vietnam.</li>
          </ul>
        </section>

        {/* ── WORK EXPERIENCE — COMPANY ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
              </svg>
            </div>
            <h2>{t('workExperienceCompany')}</h2>
          </div>

          <div className="xp-list">

            <div className="xp-item current">
              <div className="xp-date">04/2025 — Present</div>
              <div className="xp-co">Doraverse</div>
              <div className="xp-role">Frontend Developer</div>
              <div className="xp-body">
                AI workspace platform — workspace admin, LibreChat integration, landing page, cookie consent package. Next.js 15, React 19, Tailwind, Shadcn/ui.
              </div>
            </div>

            <div className="xp-item">
              <div className="xp-date">12/2022 — 03/2025</div>
              <div className="xp-co">Selly &amp; Cashbag (CaSe Group)</div>
              <div className="xp-role">Frontend Developer &middot; Backend Developer</div>
              <div className="xp-body">
                E-commerce &amp; fintech — Selly (6 sub-projects), Cashbag (15+ bank integrations), mini games, bio link, chat system. Backend: Go, Node.js.
              </div>
            </div>

            <div className="xp-item">
              <div className="xp-date">09/2021 — 11/2021</div>
              <div className="xp-co">NCCSoft</div>
              <div className="xp-role">Intern Fullstack</div>
              <div className="xp-body">
                Training project with ReactJS, ExpressJS, MongoDB. Fixed bugs in production.
              </div>
            </div>

          </div>
        </section>

        {/* ── WORK EXPERIENCE — FREELANCE ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--green-bg)', color: 'var(--green-ink)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </div>
            <h2>{t('workExperienceFreelance')}</h2>
          </div>

          <div className="xp-list freelance-list">

            <div className="xp-item freelance-item current">
              <div className="xp-date">10/2025 — Present</div>
              <div className="xp-co">Tfluencer (Techcombank)</div>
              <div className="xp-role">Frontend Developer &middot; Backend Developer</div>
              <div className="xp-body">
                KOL monetization platform — TCB Creator, Ambassador (11 brands), TOS eKYC/eContract. Backend: Go &amp; Echo.
              </div>
            </div>

            <div className="xp-item freelance-item">
              <div className="xp-date">04/2024 — 08/2024</div>
              <div className="xp-co">Vcreator (Vingroup)</div>
              <div className="xp-role">Frontend Developer</div>
              <div className="xp-body">
                KOL content creator platform — social APIs (YouTube, TikTok, Facebook), Firebase. UmiJS, Ant Design.
              </div>
            </div>

            <div className="xp-item freelance-item">
              <div className="xp-date">06/2021 — 08/2021</div>
              <div className="xp-co">giupvieckimphuc.com</div>
              <div className="xp-role">Frontend Developer</div>
              <div className="xp-body">
                Housekeeping service admin — ReactJS, Redux, REST API. Team: 5.
              </div>
            </div>

          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--purple-bg)', color: '#7C3AED' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
              </svg>
            </div>
            <h2>{t('education')}</h2>
          </div>
          <div className="edu">
            <div>
              <div className="edu-name">University of Technical Education, University of Danang</div>
              <div className="edu-sub">Major: Information Technology &middot; Grade: Very Good</div>
            </div>
            <div className="edu-date">08/2018 — 12/2022</div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
              </svg>
            </div>
            <h2>{t('skills')}</h2>
          </div>
          <table className="skills-table">
            <tbody>
              <tr>
                <td>{t('programmingLanguage')}</td>
                <td>
                  <div className="tags">
                    <span className="t b">HTML</span>
                    <span className="t b">CSS</span>
                    <span className="t b">JavaScript</span>
                    <span className="t b">TypeScript</span>
                    <span className="t a">Go</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('cssFramework')}</td>
                <td>
                  <div className="tags">
                    <span className="t g">Bootstrap</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t g">Radix UI</span>
                    <span className="t g">Framer Motion</span>
                    <span className="t g">Framer</span>
                    <span className="t g">Subframer</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('webFramework')}</td>
                <td>
                  <div className="tags">
                    <span className="t p">ReactJS</span>
                    <span className="t p">UmiJS</span>
                    <span className="t p">Next.js 14–16</span>
                    <span className="t p">Redux / Dva.js</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">TanStack Query</span>
                    <span className="t p">React Hook Form</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('aiDevTools')}</td>
                <td>
                  <div className="tags">
                    <span className="t r">Claude Code</span>
                    <span className="t r">ClaudeKit</span>
                    <span className="t r">MCP Servers</span>
                    <span className="t r">Agent Skills</span>
                    <span className="t r">Cursor AI</span>
                    <span className="t r">Trae AI</span>
                    <span className="t r">Antigravity</span>
                    <span className="t r">GitHub Copilot</span>
                    <span className="t r">v0.dev</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('ide')}</td>
                <td>
                  <div className="tags">
                    <span className="t">Visual Studio Code</span>
                    <span className="t">Cursor AI</span>
                    <span className="t">Trae AI</span>
                    <span className="t">GoLand</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('database')}</td>
                <td>
                  <div className="tags">
                    <span className="t a">MongoDB</span>
                    <span className="t a">PostgreSQL</span>
                    <span className="t a">MySQL</span>
                    <span className="t a">Supabase</span>
                    <span className="t a">Redis</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('sourceControl')}</td>
                <td>
                  <div className="tags">
                    <span className="t c">Git</span>
                    <span className="t c">Gitea</span>
                    <span className="t c">Github</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{t('summary')}</td>
                <td style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ink-secondary)' }}>
                  - 3+ years in Front-End: HTML, CSS, SCSS, Tailwind CSS, Bootstrap, Ant Design, JavaScript, TypeScript, ReactJS, UmiJS, Next.js, Redux, Zustand, and tools such as Git and Figma.<br />
                  - Experienced in Responsive web, SSR, SEO, Socket.IO client, Shadcn/ui, Framer, Subframer.<br />
                  - Backend knowledge: Go, Echo, Node.js, Express.js, MongoDB, MySQL, Docker.<br />
                  - AI-powered development: Claude Code, ClaudeKit, MCP, Agent Skills, Cursor, Trae, Antigravity, GitHub Copilot.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ── PROJECTS ── */}
        <section>
          <div className="sh">
            <div className="sh-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
              </svg>
            </div>
            <h2>{t('projects')}</h2>
          </div>

          {/* 1. Doraverse */}
          <div className="project-block featured">
            <div className="project-header">
              <h3>Doraverse</h3>
              <span className="project-period">04/2025 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Doraverse</td></tr>
                <tr><td>{t('descriptions')}</td><td>AI workspace platform (based on LibreChat). Multi-model chat, AI Agents, deep research, image/video studio. Workspace admin: analytics, Stripe billing, credit tracking, member management.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>10</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Architected and established the frontend codebase for workspace admin, auth-web, and meeting-note app as standalone micro-frontends</li>
                    <li>Developed workspace admin dashboard: analytics (Recharts), AI model management, credit usage tracking by department, member/role management, and Stripe billing integration</li>
                    <li>Integrated and extended LibreChat with custom features: AI Agents, image/video studio, LM notebooks</li>
                    <li>Built deep research module with real-time chat integration, WebSocket connect/reconnect handling, and streaming message processing</li>
                    <li>Developed landing page with Framer and published cookie consent package applied across all company products</li>
                    <li>Implemented i18n (EN/VI/JP), dark mode, branding/domain settings, and Sentry monitoring</li>
                    <li>Optimized performance, conducted code reviews, and refactored for scalability</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js 15</span>
                    <span className="t b">React 19</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">TanStack Query</span>
                    <span className="t r">Socket.IO</span>
                    <span className="t r">gRPC</span>
                    <span className="t r">Kafka</span>
                    <span className="t a">Node.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">MongoDB</span>
                    <span className="t c">Stripe</span>
                    <span className="t c">Sentry</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 2. Vcreator */}
          <div className="project-block featured">
            <div className="project-header">
              <h3>Vcreator</h3>
              <span className="project-period">04/2024 — 08/2024</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Vingroup</td></tr>
                <tr><td>{t('descriptions')}</td><td>KOL content creator platform by Vingroup. Creators share content on YouTube, TikTok, Facebook and earn rewards by views. Partners: MB Bank, VPBank, VNPAY, Yody.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Developed new features and resolved bugs across the platform</li>
                    <li>Optimized frontend performance and bundle size</li>
                    <li>Maintained codebase and refactored legacy components</li>
                    <li>Conducted code reviews to ensure quality standards</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t p">Dva.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 2b. Tfluencer */}
          <div className="project-block featured">
            <div className="project-header">
              <h3>Tfluencer — https://tfluencer.vn</h3>
              <span className="project-period">10/2025 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Techcombank, AccessTrade</td></tr>
                <tr><td>{t('descriptions')}</td><td>KOL monetization platform for Techcombank. 3 sub-systems: <strong>TCB Creator</strong> — content/campaign/KYC management; <strong>Ambassador</strong> — 11 brand campaign variants; <strong>TOS</strong> — eKYC/eContract microservice.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer &middot; Backend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Architected frontend codebase for TCB Creator, Ambassador (11 brand variants), and TOS</li>
                    <li>Developed frontend &amp; admin for TCB Creator: content, events, campaigns, KYC, reconciliation, and partner management</li>
                    <li>Developed Ambassador frontend with multi-brand customization (Yody, VNPAY, VNG, Anker, etc.)</li>
                    <li>Built TOS (service-tos) KYC/eContract frontend with Next.js, Shadcn/ui, and TanStack Query</li>
                    <li>Integrated FPT eContract API for biometric identity verification and digital contract signing</li>
                    <li><strong>Backend:</strong> Implemented several backend features using Go &amp; Echo framework</li>
                    <li>Debugged and resolved issues, optimized performance, and conducted code reviews</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">Next.js</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t g">Radix UI</span>
                    <span className="t p">Dva.js</span>
                    <span className="t p">TanStack Query</span>
                    <span className="t p">React Hook Form</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                    <span className="t a">Redis</span>
                    <span className="t a">MinIO</span>
                    <span className="t c">Firebase</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 3. Webview Mini Game */}
          <div className="project-block">
            <div className="project-header">
              <h3>Webview Mini Game</h3>
              <span className="project-period">10/2024 — 01/2025</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>CaSe Group, Banks</td></tr>
                <tr><td>{t('descriptions')}</td><td>Reward-based webview games (spin wheel, gift opening) with seasonal themes, embedded in banking apps.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Architected and established the frontend codebase</li>
                    <li>Developed client-facing and admin features; debugged and resolved issues</li>
                    <li>Optimized frontend performance for webview environments</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js</span>
                    <span className="t b">ReactJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Zustand</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 4. Bio Link */}
          <div className="project-block">
            <div className="project-header">
              <h3>Bio Link</h3>
              <span className="project-period">08/2024 — 09/2024</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>CaSe Group</td></tr>
                <tr><td>{t('descriptions')}</td><td>Bio link page builder — users create profile pages with social links, articles, and product listings via customizable templates.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>5</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer, Backend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Architected and established the frontend codebase</li>
                    <li>Developed client-facing and admin features; debugged and resolved issues</li>
                    <li>Optimized frontend performance and bundle size</li>
                    <li>Maintained codebase and refactored for long-term maintainability</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js</span>
                    <span className="t b">ReactJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">MongoDB</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 5. Selly.vn */}
          <div className="project-block">
            <div className="project-header">
              <h3>Selly.vn</h3>
              <span className="project-period">01/2022 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>Dropshipping e-commerce platform — 6 sub-projects: consumer site, seller portal, merchant dashboard, admin, mobile webview, Zalo Mini App.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>10</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer, Backend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Developed and maintained 6 frontend applications: consumer site, seller portal, merchant dashboard, admin panel, mobile webview, and web-admin</li>
                    <li>Built complete e-commerce flows: product catalog, checkout, order tracking, inventory management, and campaign/affiliate systems</li>
                    <li>Implemented real-time chat system with Socket.IO for customer support and merchant communication</li>
                    <li>Developed webview integration for mobile apps and banking partners (Zalo Mini App, deep-link, Adjust tracking)</li>
                    <li>Implemented i18n, dark mode, responsive layouts, PDF export, and drag-and-drop interfaces</li>
                    <li>Integrated third-party services: Firebase analytics, Facebook login, Telegram, Google, TikTok APIs</li>
                    <li><strong>Backend:</strong> Resolved backend tasks using Go, Node.js, and MongoDB</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t g">Ant Design</span>
                    <span className="t p">Dva.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">Nats</span>
                    <span className="t a">MongoDB</span>
                    <span className="t a">PostgreSQL</span>
                    <span className="t c">Docker</span>
                    <span className="t c">Firebase</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 6. Cashbag */}
          <div className="project-block">
            <div className="project-header">
              <h3>Cashbag</h3>
              <span className="project-period">06/2022 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Cashbag</td></tr>
                <tr><td>{t('descriptions')}</td><td>Cashback rewards platform embedded in 15+ banking apps (TPBank, MBBank, BIDV, VPBank, SeaBank, Shinhan, etc.). Gamification, vouchers, transactions, withdrawals.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>6</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Developed and maintained Cashbag webview integrated into 15+ banking apps with per-bank branding customization</li>
                    <li>Built gamification features: spin wheel, leaderboards, and seasonal reward campaigns</li>
                    <li>Developed admin CRM dashboard for campaign management, financial reporting, and transaction auditing</li>
                    <li>Implemented voucher management system, withdrawal flows, and transaction history</li>
                    <li>Integrated Sentry error tracking and Firebase analytics across all bank variants</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Ant Design</span>
                    <span className="t p">Dva.js</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                    <span className="t a">Nats</span>
                    <span className="t a">MongoDB</span>
                    <span className="t a">PostgreSQL</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 7. Chat Application */}
          <div className="project-block">
            <div className="project-header">
              <h3>Chat Application</h3>
              <span className="project-period">02/2023 — 05/2023</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Supplier of Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>Real-time customer support chat for Selly e-commerce, powered by Socket.IO.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>5</td></tr>
                <tr><td>{t('position')}</td><td>Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Developed the frontend interface for real-time chat</li>
                    <li>Implemented chat features for customer support workflows</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t g">Ant Design</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t r">Socket.IO</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 8. Zalo Mini App */}
          <div className="project-block">
            <div className="project-header">
              <h3>Cashbag &amp; Selly Zalo Mini App</h3>
              <span className="project-period">12/2022 — 01/2023</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Cashbag &amp; Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>Cashbag &amp; Selly cashback experience as Zalo Mini App.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>3</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Architected the core application structure</li>
                    <li>Developed features and resolved bugs</li>
                    <li>Deployed and configured the app on Zalo platform</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">UmiJS</span>
                    <span className="t b">TypeScript</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 9. Mamori.vn */}
          <div className="project-block">
            <div className="project-header">
              <h3>Mamori.vn</h3>
              <span className="project-period">07/2022</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Sub-brand of Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>Product showcase website for Mamori&apos;s brand.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>1</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Developed the complete frontend independently</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t g">Tailwind CSS</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* 10. Shop Selly */}
          <div className="project-block">
            <div className="project-header">
              <h3>Shop Selly</h3>
              <span className="project-period">05/2022 — Present</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('client')}</td><td>Buyer of Selly</td></tr>
                <tr><td>{t('descriptions')}</td><td>E-commerce storefront for Selly.vn Pro package subscribers.</td></tr>
                <tr><td>{t('numberOfMembers')}</td><td>4</td></tr>
                <tr><td>{t('position')}</td><td>Frontend Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Developed new features for the storefront</li>
                    <li>Improved website functionality and resolved bugs</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">ReactJS</span>
                    <span className="t b">UmiJS</span>
                    <span className="t g">Bootstrap</span>
                    <span className="t a">Go</span>
                    <span className="t a">Echo</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>


        </section>

        {/* ── PERSONAL PROJECTS ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--cyan-bg)', color: '#0891B2' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 1-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </div>
            <h2>{t('personalProjects')}</h2>
          </div>

          {/* Pomodoro Focus App */}
          <div className="project-block">
            <div className="project-header">
              <h3>Pomodoro Focus App</h3>
              <span className="project-period">2025</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('descriptions')}</td><td>Free online Pomodoro timer with AI-powered study coach (Claude), integrated task management, productivity analytics, leaderboard, and mini-games for breaks. Features multi-language support (EN/VI/JP) and dark/light theme.</td></tr>
                <tr><td>{t('position')}</td><td>Fullstack Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Designed and built the full application from scratch</li>
                    <li>Integrated Claude AI as a study coach via Vercel AI SDK</li>
                    <li>Implemented task management with drag-and-drop, tags, and analytics</li>
                    <li>Built productivity analytics dashboard with charts and session history</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js 14</span>
                    <span className="t b">React 18</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS</span>
                    <span className="t g">Shadcn/ui</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">Vercel AI SDK</span>
                    <span className="t r">Framer Motion</span>
                    <span className="t r">DND Kit</span>
                    <span className="t a">Supabase</span>
                    <span className="t c">Claude AI</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

          {/* Liverpool FC Fan Hub */}
          <div className="project-block">
            <div className="project-header">
              <h3>Liverpool FC Fan Hub</h3>
              <span className="project-period">2026</span>
            </div>
            <table className="project-table">
              <tbody>
                <tr><td>{t('descriptions')}</td><td>Comprehensive Liverpool FC fan platform with live fixtures, squad profiles, Premier League standings, multi-source news aggregation (20+ RSS feeds, EN/VI), AI-powered chat assistant, user profiles, and reading history. Features ISR caching, Supabase auth, and multi-language support.</td></tr>
                <tr><td>{t('position')}</td><td>Fullstack Developer</td></tr>
                <tr><td>{t('responsibilities')}</td><td>
                  <ul>
                    <li>Designed and built the full application from scratch with Next.js App Router and ISR caching</li>
                    <li>Integrated multiple sports data APIs (Football-Data.org, FPL, ESPN) for live fixtures, standings, and player stats</li>
                    <li>Built automated news pipeline syncing 20+ RSS feeds with AI-powered translation (Groq LLM) and content extraction</li>
                    <li>Implemented user authentication, profile management, and favorite player system with Supabase</li>
                    <li>Developed AI chat assistant (LiverBird AI) with multi-turn conversation history and streaming responses</li>
                    <li>Built news reading features: like/comment system, reading history tracking, and article bookmarking</li>
                  </ul>
                </td></tr>
                <tr><td>{t('technologyInUse')}</td><td>
                  <div className="tags">
                    <span className="t b">Next.js 16</span>
                    <span className="t b">React 19</span>
                    <span className="t b">TypeScript</span>
                    <span className="t g">Tailwind CSS 4</span>
                    <span className="t g">Radix UI</span>
                    <span className="t p">Zustand</span>
                    <span className="t p">next-intl</span>
                    <span className="t r">Vercel AI SDK</span>
                    <span className="t a">Supabase</span>
                    <span className="t c">Groq AI</span>
                  </div>
                </td></tr>
              </tbody>
            </table>
          </div>

        </section>

        {/* ── CERTIFICATES ── */}
        <section>
          <div className="sh">
            <div className="sh-icon" style={{ background: 'var(--amber-bg)', color: '#D97706' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m9 0H7.5m4.5-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
              </svg>
            </div>
            <h2>{t('certificates')}</h2>
          </div>
          <div className="edu">
            <div><div className="edu-name">Scrum Course — Axon Active Da Nang</div></div>
            <div className="edu-date">08/2020</div>
          </div>
          <div className="edu">
            <div><div className="edu-name">ReactJS Course Completion Certificate — Udemy</div></div>
            <div className="edu-date">01/2022</div>
          </div>
        </section>

      </main>
    </div>
  )
}
