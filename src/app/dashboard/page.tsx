import Dashboard from '../../components/Dashboard/Dashboard';

export default function DashboardPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <Dashboard />
    </main>
  );
} 