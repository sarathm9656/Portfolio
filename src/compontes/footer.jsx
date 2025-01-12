import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className='h-9  flex justify-center a'>
      <p>&copy; {currentYear} Sarath M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
