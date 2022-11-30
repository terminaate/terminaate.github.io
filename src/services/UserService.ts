import $api from '@/http';
import { CreatePostData, PatchPostData, WorkData } from '@/types/WorkData';
import { UserData } from '@/types/UserData';

class UserService {
  async createPost(postData: CreatePostData) {
    return $api.post<WorkData>('/posts', postData);
  }

  async getPost(postId: string) {
    return $api.get<WorkData>('/posts/' + postId);
  }

  async patchPost(postData: PatchPostData) {
    return $api.patch<WorkData>('/posts/' + postData.id, postData);
  }

  async deletePost(postId: string) {
    return $api.delete<WorkData>('/posts/' + postId);
  }

  async getAllPosts() {
    return $api.get<WorkData[]>('/posts');
  }

  async generateJwt(secret: string, data: any) {
    return $api.post<{ token: string }>('/jwt/create', { secret, data });
  }

  async getUser(userId: string) {
    return $api.get<UserData>('/users/' + userId);
  }
}

export default new UserService();
