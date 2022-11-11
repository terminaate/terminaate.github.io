import { AuthData } from '@/types/AuthData';
import $api from '@/http';

class AuthService {
  async register(registerDto: AuthData) {
    return $api.post('/auth/register', registerDto);
  }

  async login(loginDto: AuthData) {
    return $api.post('/auth/login', loginDto);
  }

  async refresh() {
    return $api.post('/auth/refresh');
  }
}

export default new AuthService();
