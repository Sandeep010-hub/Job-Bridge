import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'recruiter';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'recruiter') => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem('jobbridge-token');
    const userData = localStorage.getItem('jobbridge-user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: 'student' | 'recruiter') => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    };
    
    localStorage.setItem('jobbridge-token', 'mock-token');
    localStorage.setItem('jobbridge-user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  };

  const register = async (userData: any) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockUser: User = {
      id: '1',
      email: userData.email,
      name: `${userData.firstName} ${userData.lastName}`,
      role: userData.role || 'student',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`
    };
    
    localStorage.setItem('jobbridge-token', 'mock-token');
    localStorage.setItem('jobbridge-user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('jobbridge-token');
    localStorage.removeItem('jobbridge-user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}