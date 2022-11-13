import $api from '@/http';
import { CreatePostData, PatchPostData, PostData } from '@/types/PostData';
import { UserData } from '@/types/UserData';

class UserService {
  async createPost(postData: CreatePostData) {
    return $api.post<PostData>('/posts', postData);
  }

  async getPost(postId: string) {
    return $api.get<PostData>('/posts/' + postId);
  }

  async patchPost(postData: PatchPostData) {
    return $api.patch<PostData>('/posts/' + postData.id, postData);
  }

  async deletePost(postId: string) {
    return $api.delete<PostData>('/posts/' + postId);
  }

  async getAllPosts() {
    return $api.get<PostData[]>('/posts');
  }

  async generateJwt(secret: string, data: any) {
    return $api.post<{ token: string }>('/jwt/create', { secret, data });
  }

  async getUser(userId: string) {
    return $api.get<UserData>('/users/' + userId);
  }
}

export default new UserService();
