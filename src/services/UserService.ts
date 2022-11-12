import $api from '@/http';
import { CreatePostData, PatchPostData, PostData } from '@/types/PostData';

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

  async getAllPosts() {
    return $api.get<PostData[]>('/posts');
  }

  async generateJwt(secret: string, data: any) {
    return $api.post<{ token: string }>('/jwt/create', { secret, data });
  }
}

export default new UserService();
