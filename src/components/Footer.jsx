import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 p-3">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Government of India</h2>
            <p className="text-sm">Ministry of Electronics & Information Technology, Government of India</p>
            <p className="text-sm">Developed and hosted by National Informatics Centre,</p>
            <p className="text-sm">Content Owned by LEGISLATIVE DEPARTMENT, Ministry of Law and Justice, GOI</p>
          </div>
          <div className="md:ml-auto">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-500">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-500">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
