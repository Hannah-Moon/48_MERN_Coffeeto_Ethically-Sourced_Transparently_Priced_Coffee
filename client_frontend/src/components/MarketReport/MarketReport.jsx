import { useEffect, useRef, memo } from "react";
import "./MarketReport.css";

// eslint-disable-next-line react-refresh/only-export-components
function MarketReport() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NCDEX:COFFEE",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "2",
      locale: "en",
      backgroundColor: "rgba(255, 255, 255, 1)",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    const container = containerRef.current;
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);

  return (
    <div className="marketreport-container">
      <div className="market-title">
        <span className="eyebrowText">Market Overview</span>
        <h1 className="primaryText">Coffeeto's Live Market Insights</h1>
        {/* <p className="secondaryText">
          Stay updated with the latest trends and real-time data on coffee
          market performance.
        </p> */}
      </div>
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        //   style={{ height: "60rem", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          // style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(MarketReport);
