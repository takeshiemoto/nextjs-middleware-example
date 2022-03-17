import { formatInTimeZone } from 'date-fns-tz';
import { GetServerSideProps, NextPage } from 'next';

type PageProps = { timestamp: number };

export const Index: NextPage<PageProps> = ({ timestamp }) => {
  const date = new Date(timestamp);
  /**
   * クライアント側は実行環境のTimezoneを指定してパースする
   * 日本時間で利用するのが前提のアプリケーションであればAsia/Tokyoを指定する
   */
  const currentTime = formatInTimeZone(date, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm');

  return <div>現在の時刻は: {currentTime}</div>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  /**
   * サーバ側ではTimestampで記録しておく
   */
  const timestamp = new Date().getTime();

  return {
    props: { timestamp },
  };
};

export default Index;
