import React from 'react';
import { ArrowRight, Layout, Users, Shield } from 'lucide-react';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
    },
    heroText: {
      textAlign: 'center',
    },
    heading: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '24px',
    },
    subtitle: {
      fontSize: '20px',
      color: '#4B5563',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: '40px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      marginTop: '40px',
    },
    primaryButton: {
      padding: '12px 24px',
      backgroundColor: '#2563EB',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    secondaryButton: {
      padding: '12px 24px',
      backgroundColor: 'white',
      border: '1px solid #D1D5DB',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      padding: '20px',
    },
    featureCard: {
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginTop: '16px',
      marginBottom: '8px',
    },
    featureText: {
      color: '#4B5563',
      lineHeight: '1.5',
    },
    footer: {
      borderTop: '1px solid #E5E7EB',
      padding: '48px 0',
      textAlign: 'center',
      color: '#6B7280',
    },
    icon: {
      color: '#2563EB',
      width: '48px',
      height: '48px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.section}>
        <div style={styles.heroText}>
          <h1 style={styles.heading}>Welcome to Our Platform</h1>
          <p style={styles.subtitle}>
            Build something amazing with our cutting-edge solutions designed to help you achieve your goals faster and more efficiently.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1D4ED8';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#2563EB';
              }}
            >
              Get Started
              <ArrowRight size={16} />
            </button>
            <button 
              style={styles.secondaryButton}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#F9FAFB';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
              onClick={
                ()=>{
                alert("SDADA")
                }
              }
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.section}>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <Layout style={styles.icon} />
            <h3 style={styles.featureTitle}>Easy to Use</h3>
            <p style={styles.featureText}>
              Intuitive interface designed for the best user experience.
            </p>
          </div>
          <div style={styles.featureCard}>
            <Users style={styles.icon} />
            <h3 style={styles.featureTitle}>Team Collaboration</h3>
            <p style={styles.featureText}>
              Work together seamlessly with your team members.
            </p>
          </div>
          <div style={styles.featureCard}>
            <Shield style={styles.icon} />
            <h3 style={styles.featureTitle}>Enterprise Security</h3>
            <p style={styles.featureText}>
              Your data is protected with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;