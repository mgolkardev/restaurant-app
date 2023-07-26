import { Link } from "../shared/components";
import "./home.module.style.scss";

export const HomeModule = () => {
  return (
    <div className="home">
      <Link href="/vendors" className="home__link home__link--primary">
        فروشگاه‌های باز
      </Link>
    </div>
  );
};
