
import dayjs from "dayjs";

export default function About() {
  
  const nowDate = dayjs();
  return (
    <div>
      <h1>关于页面 (About Page){nowDate.format('YYYY-MM-DD')}</h1>
    </div>
  );
}