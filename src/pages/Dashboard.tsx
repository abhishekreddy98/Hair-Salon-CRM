
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useClients } from '@/hooks/useClients';
import { useAppointments } from '@/hooks/useAppointments';
import { useServices } from '@/hooks/useServices';
import { Calendar, Users, Scissors, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const { user, userRole, signOut } = useAuth();
  const { clients } = useClients();
  const { appointments } = useAppointments();
  const { services } = useServices();

  const todayAppointments = appointments.filter(apt => {
    const today = new Date().toDateString();
    const aptDate = new Date(apt.appointment_datetime).toDateString();
    return today === aptDate;
  });

  const thisWeekRevenue = appointments
    .filter(apt => {
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const aptDate = new Date(apt.appointment_datetime);
      return aptDate >= weekAgo && aptDate <= now && apt.status === 'completed';
    })
    .reduce((total, apt) => total + (apt.services?.price || 0), 0);

  return (
    <PageLayout showContact={false}>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.email}
              </h1>
              <p className="text-gray-600 mt-1">
                Role: {userRole || 'Loading...'} | Today is {new Date().toLocaleDateString()}
              </p>
            </div>
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayAppointments.length}</div>
                <p className="text-xs text-muted-foreground">
                  {appointments.filter(apt => apt.status === 'scheduled').length} scheduled this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{clients.length}</div>
                <p className="text-xs text-muted-foreground">
                  Active client base
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Services Offered</CardTitle>
                <Scissors className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{services.length}</div>
                <p className="text-xs text-muted-foreground">
                  Available services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${thisWeekRevenue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                  From completed appointments
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Appointments scheduled for today</CardDescription>
              </CardHeader>
              <CardContent>
                {todayAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {todayAppointments.slice(0, 5).map((appointment) => (
                      <div key={appointment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{appointment.clients?.name}</p>
                          <p className="text-sm text-gray-600">{appointment.services?.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {new Date(appointment.appointment_datetime).toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                          <p className="text-xs text-gray-500 capitalize">{appointment.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No appointments scheduled for today</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Clients</CardTitle>
                <CardDescription>Recently added clients</CardDescription>
              </CardHeader>
              <CardContent>
                {clients.length > 0 ? (
                  <div className="space-y-4">
                    {clients.slice(0, 5).map((client) => (
                      <div key={client.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{client.name}</p>
                          <p className="text-sm text-gray-600">{client.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">
                            {new Date(client.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No clients added yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
