
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingAnimation } from '@/components/LoadingAnimation';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRoles = [] }) => {
  const { user, userRole, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!loading && user && requiredRoles.length > 0) {
      if (!userRole || !requiredRoles.includes(userRole)) {
        navigate('/dashboard');
      }
    }
  }, [user, userRole, loading, requiredRoles, navigate]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (!user) {
    return null;
  }

  if (requiredRoles.length > 0 && (!userRole || !requiredRoles.includes(userRole))) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
