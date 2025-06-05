export const projects = [
  {
    name: 'Payment Tracker',
    image: 'project-paytrack.png',
    alt: 'Payment Tracker automated email processing system',
    info: 'Automated payment extraction system that monitors Gmail for payment notifications from Wise, PayPal, Remitly, and Bill.com, then creates organized records in Notion database. Features duplicate detection, cloud deployment via Google Cloud Functions, and comprehensive logging for financial tracking automation.',
    techs: ['Python', 'Google Cloud', 'Gmail API', 'Notion API', 'IMAP', 'Flask', 'RegEx'],
    links: {
      demo: '#',
      github: 'https://github.com/dericsanandres/Payment-Tracker'
    }
  },
  {
    name: 'AIS (Alumni Information System)',
    image: 'project-ais.png',
    alt: 'Full-stack academic management system',
    info: 'Full-stack academic management solution with Laravel backend API and Flutter mobile frontend. Implements robust database design, RESTful architecture, and cross-platform mobile optimization for educational institutions.',
    techs: ['PHP', 'Laravel', 'MySQL', 'Flutter', 'REST API'],
    links: {
      demo: '#',
      github: 'https://github.com/dericsadrs'
    }
  }
];