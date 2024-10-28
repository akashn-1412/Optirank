import React from 'react';

function DashboardContent({activeNav, darkMode }) {
    const recentActivity = [
        { id: 1, action: 'New competitor detected: example.com', time: '2 hours ago' },
        { id: 2, action: 'Keyword "digital marketing" up by 5 positions', time: '4 hours ago' },
        { id: 3, action: 'Site audit completed', time: '6 hours ago' },
        { id: 4, action: 'New backlink detected from blog.example.com', time: '8 hours ago' },
    ];

    const pendingTasks = [
        { id: 1, task: 'Optimize meta descriptions for product pages', priority: 'High' },
        { id: 2, task: 'Review competitor backlink strategy', priority: 'Medium' },
        { id: 3, task: 'Update content on homepage', priority: 'Low' },
    ];

    const keywordTrends = [
        { id: 1, keyword: 'SEO tips', position: 3, change: '+1' },
        { id: 2, keyword: 'digital marketing', position: 5, change: '+2' },
        { id: 3, keyword: 'content strategy', position: 8, change: '-1' },
        { id: 4, keyword: 'backlink building', position: 12, change: '0' },
    ];

    return (
      activeNav === 'dashboard' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md`}>
                <h2 className="text-xl font-bold">Site Health Score</h2>
                <p className="text-4xl font-bold text-green-600">85/100</p>
                <p className="text-green-600">↑ 2 points since last week</p>
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md`}>
                <h2 className="text-xl font-bold">Keywords Tracked</h2>
                <p className="text-4xl font-bold text-blue-600">147</p>
                <p className="text-blue-600">12 in top 3 positions</p>
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md`}>
                <h2 className="text-xl font-bold">Total Backlinks</h2>
                <p className="text-4xl font-bold text-blue-600">1,284</p>
                <p className="text-green-600">↑ 23 new this month</p>
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3`}>
                <h2 className="text-xl font-bold">Keyword Ranking Trends</h2>
                <table className="w-full mt-4">
                    <thead>
                        <tr>
                            <th className="text-left">Keyword</th>
                            <th className="text-left">Position</th>
                            <th className="text-left">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keywordTrends.map(trend => (
                            <tr key={trend.id}>
                                <td className="py-2">{trend.keyword}</td>
                                <td className="py-2">{trend.position}</td>
                                <td className={`py-2 ${trend.change.startsWith('+') ? 'text-green-600' : trend.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>{trend.change}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3`}>
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <ul className="list-disc pl-6">
                    {recentActivity.map(activity => (
                        <li key={activity.id}>
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3`}>
                <h2 className="text-xl font-bold">Pending Tasks</h2>
                <ul className="list-disc pl-6">
                    {pendingTasks.map(task => (
                        <li key={task.id} className="mb-2">
                            <p className="text-sm font-medium inline">{task.task}</p>
                            <span className={`ml-2 text-xs px-2 py-1 rounded-full ${task.priority === 'High' ? 'bg-red-100 text-red-600' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                                {task.priority} Priority
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DashboardContent;
