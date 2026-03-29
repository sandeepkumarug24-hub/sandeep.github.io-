import React from 'react';
import { PORTFOLIO_DATA } from '../data';

const StudyAccounts = () => {
  const { studyAccounts } = PORTFOLIO_DATA;

  // Simple icon mapping fallback
  const getIconUrl = (platform) => {
    const domainMap = {
      github: 'github.com',
      linkedin: 'linkedin.com',
      leetcode: 'leetcode.com',
      codeforces: 'codeforces.com'
    };
    const domain = domainMap[platform.toLowerCase()] || 'example.com';
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  };

  return (
    <section className="section container animate-fade-in animate-delay-1">
      <div className="text-center mb-8">
        <h2>Study Profiles & Accounts</h2>
        <p style={{ margin: '0 auto' }}>Find me elsewhere on the web</p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        {studyAccounts.map((account, index) => (
          <a
            key={index}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-4"
            style={{ padding: '1.5rem', textDecoration: 'none' }}
          >
            <img 
              src={getIconUrl(account.platform)} 
              alt={`${account.platform} icon`} 
              style={{ width: '40px', height: '40px', borderRadius: '8px' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <h3 style={{ marginBottom: '0', fontSize: '1.25rem' }}>{account.platform}</h3>
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 500 }}>View Profile ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default StudyAccounts;
