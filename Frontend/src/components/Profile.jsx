import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionComponent from './SectionComponent';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  const [activeSection, setActiveSection] = useState('profile');
  const [showProfileInfo, setShowProfileInfo] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from local storage
    navigate('/');
  };

  const handleProfileClick = () => {
    setShowProfileInfo(!showProfileInfo);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Menu */}
      <div className="relative w-64 flex flex-col bg-white p-6 border-r">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveSection('dashboard')}
                className={`w-full text-left py-2 px-4 rounded hover:bg-gray-200 transition duration-200 ${activeSection === 'dashboard' ? 'bg-gray-200' : ''}`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('aadhar')}
                className={`w-full text-left py-2 px-4 rounded hover:bg-gray-200 transition duration-200 ${activeSection === 'aadhar' ? 'bg-gray-200' : ''}`}
              >
                Aadhar Card
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('rc')}
                className={`w-full text-left py-2 px-4 rounded hover:bg-gray-200 transition duration-200 ${activeSection === 'rc' ? 'bg-gray-200' : ''}`}
              >
                RC License
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('voter')}
                className={`w-full text-left py-2 px-4 rounded hover:bg-gray-200 transition duration-200 ${activeSection === 'voter' ? 'bg-gray-200' : ''}`}
              >
                Voter Card
              </button>
            </li>
          </ul>
        </div>

        {/* Profile Section at the Bottom */}
        <div className="relative mt-auto">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleProfileClick}
          >
            <img
              src={`https://via.placeholder.com/50`} // Replace with actual profile image URL
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <span className="ml-4 text-lg font-medium">Profile</span>
          </div>

          {/* Profile Info Menu */}
          {showProfileInfo && (
            <div className="absolute bottom-16 left-0 w-full p-4 bg-gray-200 rounded-md shadow-md">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button
                onClick={handleLogout}
                className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeSection === 'profile' && !showProfileInfo && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Profile Info</h2>
            <div className="bg-white p-6 rounded shadow-md">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        )}
        {activeSection === 'dashboard' && (
          <div className="bg-white p-6 rounded shadow-md">
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 p-2 rounded w-1/2"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Generate Report
              </button>
            </div>
            <form className="mb-6">
              <h3 className="text-lg font-bold mb-4">Send Us a Message</h3>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="border border-gray-300 p-2 rounded w-full"
              />
              <button
                type="submit"
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded shadow-md">
                <h4 className="text-lg font-bold">Total Wallet</h4>
                <p>$0.00</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow-md">
                <h4 className="text-lg font-bold">Total Applications</h4>
                <p>0</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow-md">
                <h4 className="text-lg font-bold">Total Documents</h4>
                <p>0</p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'aadhar' && (
          <SectionComponent type="aadhar" />
        )}
        {activeSection === 'rc' && (
          <SectionComponent type="rc" />
        )}
        {activeSection === 'voter' && (
          <SectionComponent type="voter" />
        )}
      </div>
    </div>
  );
};

export default Profile;
