// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Check if measurement ID is valid (not placeholder)
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics Measurement ID is missing or invalid. Analytics will not be initialized.');
    return;
  }

  if (typeof window !== 'undefined') {
    try {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', measurementId);
      console.log('Google Analytics initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Analytics:', error);
    }
  }
};

// Track page views
export const trackPageView = (url: string) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  // Check if measurement ID is valid
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return; // Silently return if GA is not configured
  }

  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('config', measurementId, {
        page_path: url,
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  // Check if measurement ID is valid
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return; // Silently return if GA is not configured
  }

  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }
};

// Track user engagement
export const trackEngagement = (type: string, value: string) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  // Check if measurement ID is valid
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return; // Silently return if GA is not configured
  }

  if (window.gtag) {
    try {
      window.gtag('event', 'user_engagement', {
        engagement_type: type,
        engagement_value: value,
      });
    } catch (error) {
      console.error('Error tracking engagement:', error);
    }
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  // Check if measurement ID is valid
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return; // Silently return if GA is not configured
  }

  if (window.gtag) {
    try {
      window.gtag('event', 'form_submission', {
        form_name: formName,
        success: success,
      });
    } catch (error) {
      console.error('Error tracking form submission:', error);
    }
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  // Check if measurement ID is valid
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return; // Silently return if GA is not configured
  }

  if (window.gtag) {
    try {
      window.gtag('event', 'button_click', {
        button_name: buttonName,
        button_location: buttonLocation,
      });
    } catch (error) {
      console.error('Error tracking button click:', error);
    }
  }
}; 