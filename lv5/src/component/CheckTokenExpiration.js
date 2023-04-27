import { Cookies } from 'react-cookie';

const checkTokenExpiration = () => {
  const cookie = new Cookies();
  const token = cookie.get('loginToken');
  if (token) {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payload = JSON.parse(atob(tokenParts[1])); // payload는 base64 디코딩하여 추출
      const expiresAt = payload.exp * 1000; // 토큰의 만료 시간은 초 단위로 표현되므로 밀리초로 변환
      const currentTime = new Date().getTime(); // 현재 시간
      if (currentTime < expiresAt) {
        // 토큰이 만료되지 않았을 경우
        return true;
      }
    }
  }
  return; // 토큰이 만료되었거나 없을 경우
};

export default checkTokenExpiration;
