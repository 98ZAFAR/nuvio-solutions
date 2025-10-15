import React, { useState } from 'react';
import axios from 'axios';

export default function EmailTestPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [customEmail, setCustomEmail] = useState('');

  const testEmailConfig = async () => {
    setLoading(true);
    setTestResult(null);
    
    try {
      const response = await axios.get('/api/email-test', {
        timeout: 30000
      });
      setTestResult(response.data);
    } catch (error: any) {
      setTestResult({
        success: false,
        error: error.response?.data?.error || error.message,
        details: error.response?.data
      });
    } finally {
      setLoading(false);
    }
  };

  const sendTestEmail = async () => {
    if (!customEmail) {
      alert('Please enter an email address');
      return;
    }
    
    setLoading(true);
    setTestResult(null);
    
    try {
      const response = await axios.post('/api/email-test', {
        testEmail: customEmail
      }, {
        timeout: 30000
      });
      setTestResult(response.data);
    } catch (error: any) {
      setTestResult({
        success: false,
        error: error.response?.data?.error || error.message,
        details: error.response?.data
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Configuration Test</h1>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Setup Instructions:</h3>
              <ol className="list-decimal list-inside text-yellow-700 space-y-1">
                <li>Edit the <code>.env.local</code> file in your project root</li>
                <li>Replace <code>your-email@gmail.com</code> with your actual Gmail address</li>
                <li>Replace <code>your-16-character-app-password</code> with your Gmail App Password</li>
                <li>To get an App Password: Go to Google Account → Security → App passwords</li>
                <li>Restart your development server after updating the .env file</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Test 1: Configuration Check</h3>
                <p className="text-gray-600 mb-4">
                  This will verify your email configuration and send a test email to yourself.
                </p>
                <button
                  onClick={testEmailConfig}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Testing...' : 'Test Email Configuration'}
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Test 2: Send Custom Email</h3>
                <p className="text-gray-600 mb-4">
                  Send a test email to any email address.
                </p>
                <input
                  type="email"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendTestEmail}
                  disabled={loading || !customEmail}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Test Email'}
                </button>
              </div>
            </div>

            {testResult && (
              <div className={`mt-6 p-4 rounded-lg ${testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <h3 className={`text-lg font-semibold mb-2 ${testResult.success ? 'text-green-800' : 'text-red-800'}`}>
                  {testResult.success ? '✅ Success!' : '❌ Error'}
                </h3>
                
                {testResult.success ? (
                  <div className="text-green-700">
                    <p>{testResult.message}</p>
                    {testResult.messageId && (
                      <p className="text-sm mt-1">Message ID: {testResult.messageId}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-red-700">
                    <p><strong>Error:</strong> {testResult.error}</p>
                    {testResult.details && (
                      <div className="mt-2 p-3 bg-red-100 rounded text-sm">
                        <p><strong>Details:</strong></p>
                        <pre className="whitespace-pre-wrap">{JSON.stringify(testResult.details, null, 2)}</pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Common Issues & Solutions:</h3>
              <ul className="text-blue-700 space-y-1">
                <li><strong>EAUTH:</strong> Wrong email or app password. Generate a new app password.</li>
                <li><strong>ECONNECTION:</strong> Gmail SMTP blocked. Enable 2FA and use app password.</li>
                <li><strong>Environment variables missing:</strong> Make sure .env.local exists and restart server.</li>
                <li><strong>Still not working?</strong> Try using a different email service like Outlook or Yahoo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}