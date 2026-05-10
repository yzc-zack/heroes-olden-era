<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Privacy Policy | Scroll Tome',
  meta: [
    { name: 'description', content: 'Privacy Policy for Scroll Tome — how we handle data, cookies, and third-party services.' },
    { name: 'robots', content: 'noindex' },
  ],
})

const lastUpdated = 'May 8, 2026'
</script>

<template>
  <div class="privacy-page">
    <div class="container">
      <header class="privacy-header">
        <p class="privacy-breadcrumb"><RouterLink to="/">Home</RouterLink> › Privacy Policy</p>
        <h1 class="privacy-title">Privacy Policy</h1>
        <p class="privacy-updated">Last updated: {{ lastUpdated }}</p>
      </header>

      <div class="prose privacy-body">
        <p>
          Welcome to <strong>Scroll Tome</strong> ("we", "our", or "us"), accessible at
          <a href="https://scrolltome.com">scrolltome.com</a>. This Privacy Policy explains how we
          collect, use, and protect information when you visit our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We do not directly collect personal information such as your name or email address.
          However, third-party services integrated into this site may collect certain data
          automatically, including:
        </p>
        <ul>
          <li>IP address and approximate geographic location</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring website or search query</li>
        </ul>

        <h2>2. Cookies</h2>
        <p>
          This site uses cookies through third-party advertising and analytics providers.
          Cookies are small text files stored on your device. They are used to:
        </p>
        <ul>
          <li>Serve relevant advertisements based on your browsing interests</li>
          <li>Measure site traffic and usage patterns</li>
          <li>Improve the performance and content of the site</li>
        </ul>
        <p>
          You can disable cookies in your browser settings at any time. Note that disabling cookies
          may affect the functionality of some features on this site.
        </p>

        <h2>3. Google AdSense</h2>
        <p>
          We use <strong>Google AdSense</strong> to display advertisements on this site. Google
          uses cookies to serve ads based on your prior visits to this website or other websites.
          You may opt out of personalized advertising by visiting
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>.
        </p>
        <p>
          Google's use of advertising cookies enables it and its partners to serve ads based on
          your visit to this site and/or other sites on the Internet. For more information, see
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google's advertising policies
          </a>.
        </p>

        <h2>4. Google Analytics</h2>
        <p>
          We may use Google Analytics to understand how visitors interact with our site.
          Google Analytics collects anonymized data including page views, session duration, and
          traffic sources. This data is used solely to improve the site experience.
          You can opt out via the
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out browser add-on
          </a>.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          Our articles may contain links to external websites. We are not responsible for the
          privacy practices or content of those sites. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          This site is not directed at children under the age of 13. We do not knowingly collect
          personal information from children. If you believe a child has provided us with personal
          information, please contact us so we can take appropriate action.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected by
          updating the "Last updated" date at the top of this page. Continued use of the site
          after changes constitutes your acceptance of the updated policy.
        </p>

        <h2>8. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach us via the
          contact information listed on our website.
        </p>
      </div>

      <div class="privacy-footer">
        <RouterLink to="/" class="back-home">← Back to Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  min-height: 60vh;
  padding: 3rem 0 5rem;
}

.container {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.privacy-breadcrumb {
  font-size: 0.82rem;
  color: #4b5563;
  margin: 0 0 1.25rem;
}

.privacy-breadcrumb a {
  color: #6b7280;
  text-decoration: none;
}

.privacy-breadcrumb a:hover {
  color: #c9a227;
}

.privacy-header {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #1a2d4a;
}

.privacy-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #e8dcc8;
  margin: 0 0 0.5rem;
}

.privacy-updated {
  font-size: 0.82rem;
  color: #4b5563;
  margin: 0;
}

.privacy-body {
  max-width: none;
}

.privacy-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #1a2d4a;
}

.back-home {
  display: inline-block;
  padding: 0.6rem 1.25rem;
  background: rgba(201, 162, 39, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.25);
  border-radius: 8px;
  color: #c9a227;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}

.back-home:hover {
  background: rgba(201, 162, 39, 0.15);
  border-color: rgba(201, 162, 39, 0.5);
}
</style>
