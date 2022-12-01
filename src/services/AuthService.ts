import { AuthData } from '@/types/AuthData';
import $api from '@/http';

class AuthService {
  async login(loginDto: AuthData) {
    return $api.post('/auth/login', loginDto);
  }

  async refresh() {
    return $api.post('/auth/refresh');
  }
}

export default new AuthService();
