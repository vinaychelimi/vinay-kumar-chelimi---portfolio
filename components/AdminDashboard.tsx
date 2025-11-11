
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AdminDashboardProps {
    onLogout: () => void;
}

const mockSubmissions = [
    { name: 'Jan', submissions: 12 },
    { name: 'Feb', submissions: 19 },
    { name: 'Mar', submissions: 3 },
    { name: 'Apr', submissions: 5 },
    { name: 'May', submissions: 2 },
    { name: 'Jun', submissions: 3 },
];

const mockMessages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Great portfolio!' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Interested in collaborating.' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', message: 'Can we schedule a call?' },
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    return (
        <div className="min-h-screen container mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold font-orbitron text-glow-purple">Admin Dashboard</h1>
                <button onClick={onLogout} className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-purple-500 hover:neon-glow-purple">
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 glassmorphism rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Monthly Submissions</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={mockSubmissions}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis stroke="#8884d8" />
                            <Tooltip contentStyle={{ backgroundColor: 'rgba(30,30,30,0.8)', border: '1px solid #555' }} />
                            <Legend />
                            <Bar dataKey="submissions" fill="url(#colorUv)" />
                             <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8F00FF" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#00BFFF" stopOpacity={0.8}/>
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="p-6 glassmorphism rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Recent Messages</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockMessages.map(msg => (
                                    <tr key={msg.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                                        <td className="p-2">{msg.name}</td>
                                        <td className="p-2">{msg.email}</td>
                                        <td className="p-2 truncate max-w-xs">{msg.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
