
import React, { useState } from 'react';

interface AdminLoginProps {
    onLoginSuccess: () => void;
    onCancel: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onCancel }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        if (password === 'admin123') {
            onLoginSuccess();
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm p-8 space-y-6 glassmorphism rounded-lg">
                <h2 className="text-2xl font-bold text-center font-orbitron text-glow-purple">Admin Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div className="flex gap-4">
                        <button type="button" onClick={onCancel} className="w-full px-6 py-2 bg-gray-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-gray-500">
                           Cancel
                        </button>
                        <button type="submit" className="w-full px-6 py-2 bg-cyan-500 text-black font-semibold rounded-md transition-all duration-300 hover:bg-cyan-400 hover:neon-glow-blue">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default AdminLogin