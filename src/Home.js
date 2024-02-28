import month1 from "../src/paint/month1.jpg";
import month11 from "../src/paint/month11.jpg";
import month19 from "../src/paint/month19.jpg";
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center"> မြန်မာ ဆယ့်နှစ်လ</h1>
        <img src={month1} alt="month" className=" w-70 h-200" />
        <img src={month11} alt="month" className=" w-70 h-200" />
      </div>
      <div>
        <img src={month19} alt="month" className=" w-200 h-200" />
      </div>
    </div>
  );
};

export default Home;
