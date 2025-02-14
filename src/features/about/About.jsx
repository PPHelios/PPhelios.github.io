import { LazyLoadImage } from "react-lazy-load-image-component";
import "./about.scss";
import bokeh380 from "../../assets/images/bokeh_rgkwyp_c_scale,w_380.webp";
import bokeh974 from "../../assets/images/bokeh_rgkwyp_c_scale,w_974.webp";
import bokeh1380 from "../../assets/images/bokeh_rgkwyp_c_scale,w_1380.webp";

export default function About() {
  return (
    <>
      <section className="about--top">
        <h2>
          who <span>we</span> are
        </h2>
        <svg
          className="about-us-sun"
          width="350"
          height="341"
          viewBox="0 0 350 341"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M182.934 56.8746L218.212 4.28379C223.619 -3.77996 235.987 0.321273 235.723 10.0923L233.998 73.821C233.809 80.7067 240.456 85.6395 246.806 83.3275L305.619 61.9585C314.638 58.6826 322.279 69.4301 316.438 77.1789L278.346 127.697C274.23 133.153 276.766 141.134 283.237 143.081L343.113 161.092C352.296 163.858 352.296 177.138 343.113 179.903L283.237 197.921C276.766 199.868 274.23 207.843 278.346 213.305L316.413 263.823C322.254 271.572 314.613 282.319 305.594 279.037L246.781 257.668C240.431 255.362 233.784 260.289 233.973 267.175L235.697 330.903C235.962 340.674 223.594 344.763 218.187 336.718L182.909 284.121C182.043 282.811 180.866 281.736 179.484 280.993C178.102 280.249 176.557 279.86 174.987 279.86C173.418 279.86 171.873 280.249 170.491 280.993C169.109 281.736 167.932 282.811 167.066 284.121L131.819 336.718C126.406 344.782 114.038 340.674 114.303 330.903L116.027 267.175C116.216 260.289 109.57 255.362 103.219 257.668L44.4066 279.037C35.3935 282.319 27.746 271.572 33.5869 263.823L71.6539 213.305C75.7702 207.843 73.2337 199.868 66.7633 197.921L6.88734 179.903C-2.29578 177.138 -2.29578 163.858 6.88734 161.092L66.7633 143.081C73.2337 141.134 75.7702 133.153 71.6539 127.697L33.5869 77.1789C27.746 69.4301 35.3935 58.6826 44.4066 61.9585L103.219 83.3275C109.57 85.6395 116.216 80.7067 116.027 73.821L114.303 10.0923C114.038 0.321273 126.406 -3.76736 131.819 4.28379L167.066 56.8746C167.931 58.1899 169.109 59.2695 170.494 60.0166C171.878 60.7637 173.427 61.1547 175 61.1547C176.573 61.1547 178.122 60.7637 179.506 60.0166C180.891 59.2695 182.069 58.1899 182.934 56.8746Z"
            fill="#FFC91D"
          ></path>
        </svg>
        <svg
          className="about-us-flower"
          viewBox="0 0 301 292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M104.448 156.988C102.698 156.81 19.1827 202.352 28.685 224.558C38.1873 246.765 121.291 181.308 121.291 181.308C121.291 181.308 77.8392 262.123 93.6146 272.57C109.39 283.018 148.13 176.115 149.228 180.165C150.326 184.215 156.052 283.815 185.823 272.801C215.595 261.787 164.489 175.939 164.489 175.939C164.489 175.939 260.936 240.368 273.31 215.523C283.905 194.235 185.67 161.519 185.67 161.519C185.67 161.519 302.387 144.192 290.692 114.288C278.997 84.3829 185.006 134.659 185.006 134.659C185.006 134.659 257.046 61.7692 234.365 49.0701C211.685 36.3709 160.009 121.113 160.009 121.113C160.009 121.113 189.189 18.4086 165.218 14.1333C141.247 9.85802 137.774 121.286 137.774 121.286C137.774 121.286 84.5762 23.0085 59.4286 38.7694C34.281 54.5303 114.077 126.179 111.164 125.882C108.251 125.585 17.0766 107.734 13.879 127.569C10.6815 147.404 104.448 156.988 104.448 156.988Z"
            fill="#E19BE9"
          ></path>
        </svg>
      </section>
      <section className="about--article">
        <div className="about--article-top">
          <article>
            Hi. We're <span>DASS-COFFEE</span>. We’re passionate about specialty
            coffee, but it’s just sooooo douchey. Built for everyone, we created{" "}
            <span>DASS-COFFEE</span> to make great coffee more fun and
            approachable. We skip the pretentious tasting notes and gatekeeping
            and get right to the good part - ridiculously delicious coffee you
            can prepare however you like.
          </article>
          <picture>
            <img
              sizes="30vw,
              (max-width: 835) 40vw,
              (max-width: 665px) 50vw"
              srcset={`${bokeh380} 380w,
${bokeh974} 974w,
${bokeh1380} 1380w`}
              src={`${bokeh1380}`}
              alt=""
              loading="lazy"
            />
          </picture>
        </div>
        <div className="about--article-bottom">
          <LazyLoadImage
            className="coffee-jar"
            src={require("../../assets/images/coffee-jar.jpeg")}
            alt="a beautiful bokeh of coffee"
          />
          <h3>
            Better Beans Better <span>COFFEE</span>
          </h3>
        </div>
      </section>
    </>
  );
}
