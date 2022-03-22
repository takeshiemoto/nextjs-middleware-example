import { UserAddPresenter } from './UserAddPresenter';

export const UserAddPageContainer = () => {
  // 必要な初期データがあるならばContainerから流す
  // 不要なら何も書かなくて良い
  return <UserAddPresenter />;
};
