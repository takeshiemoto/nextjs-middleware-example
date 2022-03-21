import { UsersAddPresenter } from './UsersAddPresenter';

export const UsersAddContainer = () => {
  // 必要な初期データがあるならばContainerから流す
  // 不要なら何も書かなくて良い
  return <UsersAddPresenter />;
};
