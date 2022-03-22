import { UsersAddPagePresenter } from './UsersAddPagePresenter';

export const UsersAddPageContainer = () => {
  // 必要な初期データがあるならばContainerから流す
  // 不要なら何も書かなくて良い
  return <UsersAddPagePresenter />;
};
