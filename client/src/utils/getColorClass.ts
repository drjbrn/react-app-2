export const getColorClass = (priority: string) => {
  switch (priority) {
    case 'Low':
      return 'bg-blue-600';
    case 'Medium':
      return 'bg-yellow-400';
    case 'High':
      return 'bg-orange-600';
    case 'Critical':
      return 'bg-red-700';
    default:
      return 'bg-gray-500';
  }
};
