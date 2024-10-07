'use client';

import { useState, useEffect } from 'react';
import { FaTrashAlt, FaEnvelope, FaPhoneAlt, FaUser, FaCommentDots } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi'; // For the loading spinner

export default function AllRequests() {
  interface Request {
    _id: string;
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    message: string;
  }

  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/form-request', {
          method: 'GET',
        });
        const data = await response.json();
        setRequests(data.requests);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching requests:', error);
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/form-request?id=${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setRequests(requests.filter((request) => request._id !== id));
        alert('Request deleted successfully');
      } else {
        const result = await response.json();
        alert(`Failed to delete request: ${result.error}`);
      }
    } catch (error) {
      console.error('Error deleting request:', error);
      alert('An error occurred while deleting the request.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FiLoader className="animate-spin text-6xl text-blue-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 lg:max-w-6xl my-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">Form Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request._id} className="relative p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold mb-2 flex items-center text-gray-800">
                <FaUser className="mr-2 text-blue-500" /> {request.firstName} {request.lastName}
              </h2>
              <p className="flex items-center mb-2 text-gray-600">
                <FaEnvelope className="mr-2 text-green-500" /> {request.email || 'N/A'}
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <FaPhoneAlt className="mr-2 text-purple-500" /> {request.phone}
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <FaCommentDots className="mr-2 text-yellow-500" /> {request.message}
              </p>
              <button
                onClick={() => handleDelete(request._id)}
                className="absolute bottom-4 right-4 flex items-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <FaTrashAlt className="mr-1" /> Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No form requests found.</p>
        )}
      </div>
    </div>
  );
}
