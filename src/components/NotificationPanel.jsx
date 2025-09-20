import { X, Bell, Bug, UserPlus, FileText, Users } from 'lucide-react';

const NotificationPanel = ({ show, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'bug',
      icon: Bug,
      title: 'You have a bug that needs...',
      time: 'Just now',
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'user',
      icon: UserPlus,
      title: 'New user registered',
      time: '59 minutes ago',
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'bug',
      icon: Bug,
      title: 'You have a bug that needs...',
      time: '12 hours ago',
      color: 'text-red-500'
    },
    {
      id: 4,
      type: 'subscription',
      icon: FileText,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      color: 'text-green-500'
    },
  ];

  const activities = [
    {
      id: 1,
      user: 'You have a bug that needs...',
      time: 'Just now',
      avatar: '🐛',
      color: 'bg-red-500'
    },
    {
      id: 2,
      user: 'Released a new version',
      time: '59 minutes ago',
      avatar: '📦',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      user: 'Submitted a bug',
      time: '12 hours ago',
      avatar: '🐛',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      user: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      avatar: '📝',
      color: 'bg-green-500'
    },
    {
      id: 5,
      user: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      avatar: '🗑️',
      color: 'bg-red-500'
    },
  ];

  const contacts = [
    { name: 'Natali Craig', avatar: 'N', color: 'bg-blue-500' },
    { name: 'Drew Cano', avatar: 'D', color: 'bg-red-500' },
    { name: 'Orlando Diggs', avatar: 'O', color: 'bg-purple-500' },
    { name: 'Andi Lane', avatar: 'A', color: 'bg-indigo-500' },
    { name: 'Kate Morrison', avatar: 'K', color: 'bg-green-500' },
    { name: 'Koray Okumus', avatar: 'K', color: 'bg-yellow-500' },
  ];

  if (!show) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-slate-800 border-l border-gray-200 dark:border-slate-700 z-50 transform transition-transform duration-300">
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      <div className="p-6 overflow-y-auto h-full pb-20">
        <div className="space-y-4 mb-8">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150">
              <div className="flex-shrink-0">
                <div className={`p-2 rounded-full bg-gray-100 dark:bg-slate-700`}>
                  <notification.icon className={`w-4 h-4 ${notification.color}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {notification.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Activities</h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${activity.color}`}>
                  {activity.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.user}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${contact.color}`}>
                  {contact.avatar}
                </div>
                <span className="text-sm text-gray-900 dark:text-white">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;