import { dashboardData } from "../mock/mockData";
import Header from "./Header";
import Navigation from "./NavigationBar";
import prev from "../assets/icons/prev.svg";
import BarChartWithMultiXAxis from "../components/Chart";
import next from "../assets/icons/next.svg";
import totalInflowIndicator from "../assets/icons/totalInflow.svg";
import mrrIndicator from "../assets/icons/mrr.svg";
import commissionRevenueIndicator from "../assets/icons/commission.svg";
import gmvIndicator from "../assets/icons/gmv.svg";
import PropertyShowcase from "./PropertyShowcase";
import group from "../assets/icons/group.svg";
import users from "../assets/icons/coloured.svg";

const Dashboard = () => {
  return (
    <div className="responsive-wrapper">
      <Header />
      <Navigation />

      <main className="px-4 sm:px-6 md:px-8 lg:px-18 py-2">
        <h2 className="text-[#191919] pb-3 text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          Welcome, {dashboardData.userName}
        </h2>

        <section className="flex flex-col lg:flex-row justify-between gap-4 md:gap-6 items-stretch">
          <section className="bg-white border border-[#E4E4E4] rounded-2xl flex-1 flex flex-col w-full">
            <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#E4E4E4] p-4 flex-shrink-0 gap-4">
              <span className="flex flex-col gap-2 sm:gap-3 w-full sm:w-auto">
                <h2 className="text-[#191919] text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                  Sales Overview
                </h2>
                <p className="text-xs font-normal text-[#606060]">
                  Showing overview {dashboardData.salesOverview.dateRange}
                </p>
              </span>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <button className="flex items-center justify-center rounded-[72px] border border-[#D6D6D6] px-4 sm:px-6 py-2 text-xs text-[#191919] font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  View Transactions
                </button>
                <span className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
                  <button className="bg-[#FFFFFF] rounded-lg text-[#3D3D3D] font-normal text-sm px-3 sm:px-4 py-2 flex-1 min-w-[80px] text-center">
                    1 Week
                  </button>
                  <button className="bg-[#FFFFFF] rounded-lg text-[#3D3D3D] font-normal text-sm px-3 sm:px-4 py-2 flex-1 min-w-[80px] text-center">
                    1 Month
                  </button>
                  <button className="bg-[#F5F5F5] px-4 sm:px-6 py-2 rounded-lg text-[#3D3D3D] font-semibold text-sm flex-1 min-w-[80px] text-center">
                    1 Year
                  </button>
                </span>
              </div>
            </section>
            <section className="flex flex-col lg:flex-row flex-1 p-4 gap-4 lg:gap-0">
              <div className="flex items-center flex-1 order-2 lg:order-1">
                <button className="shrink-0 p-2 hidden sm:block">
                  <img src={prev} alt="previous" className="w-5 h-5" />
                </button>
                <div className="flex-1 h-full w-full">
                  <div className="w-full overflow-x-auto">
                    <div className="min-w-[600px] lg:min-w-0">
                      <BarChartWithMultiXAxis />
                    </div>
                  </div>
                </div>
                <button className="shrink-0 p-2 hidden sm:block">
                  <img src={next} alt="next" className="w-5 h-5" />
                </button>
              </div>
              {/* Metrics Section - Responsive grid */}
              <div className="w-full lg:w-1/3 order-1 lg:order-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 h-full">
                  {dashboardData.salesOverview.metrics.map((metric, index) => {
                    let currencyColor;
                    let indicatorImage;

                    switch (metric.title) {
                      case "Total Inflow":
                        currencyColor = "text-[#4545FE]";
                        indicatorImage = totalInflowIndicator;
                        break;
                      case "MRR":
                        currencyColor = "text-[#12B76A]";
                        indicatorImage = mrrIndicator;
                        break;
                      case "Commission Revenue":
                        currencyColor = "text-[#14B8A6]";
                        indicatorImage = commissionRevenueIndicator;
                        break;
                      case "GMV":
                        currencyColor = "text-[#F04438]";
                        indicatorImage = gmvIndicator;
                        break;
                      default:
                        currencyColor = "text-[#191919]";
                        indicatorImage = "";
                    }

                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-between border border-[#E4E4E4] p-3 sm:p-4 rounded-lg h-full"
                      >
                        <h2 className="text-[16px] sm:text-[19px] leading-[130%] font-semibold mb-2">
                          <span className={currencyColor}>
                            {metric.currency}
                          </span>
                          <span className={currencyColor}>
                            {" "}
                            {metric.amount}
                          </span>
                        </h2>

                        <div className="flex items-center justify-between">
                          <p className="text-[#3D3D3D] text-[10px] font-medium">
                            {metric.title}
                          </p>

                          <div className="flex items-center gap-1">
                            <img
                              src={indicatorImage}
                              alt={`${metric.title} indicator`}
                              className="w-3 h-3"
                            />
                            <span
                              className={`text-[10px] font-normal ${
                                metric.isPositive
                                  ? "text-[#0EA371]"
                                  : "text-[#ED544E]"
                              }`}
                            >
                              {metric.isPositive ? "+" : "-"}
                              {metric.percentage}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </section>
          {/* Listings and Users Section - Responsive width */}
          <section className="w-full lg:w-1/4 flex flex-col gap-4 md:gap-6">
            {/* Listings Overview Section */}
            <section className="bg-white border border-[#E4E4E4] rounded-2xl p-4 sm:p-6 flex-1">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <img src={group} alt="listings icon" className="w-5 h-5" />
                  <h3 className="text-[#191919] text-sm sm:text-base font-semibold">
                    Listings Overview
                  </h3>
                </div>
                <button className="text-[#4545FE] text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
                  View all
                  <span className="text-lg">›</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <p className="text-[#606060] text-xs sm:text-sm font-normal mb-2">
                    Total
                  </p>
                  <p className="text-[#191919] text-xl sm:text-2xl font-bold">
                    {dashboardData.listings.total}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#606060] text-xs sm:text-sm font-normal mb-2">
                    Active
                  </p>
                  <p className="text-[#191919] text-xl sm:text-2xl font-bold">
                    {dashboardData.listings.active}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#606060] text-xs sm:text-sm font-normal mb-2">
                    Archived
                  </p>
                  <p className="text-[#191919] text-xl sm:text-2xl font-bold">
                    {dashboardData.listings.archived}
                  </p>
                </div>
              </div>
            </section>
            {/* Users Overview Section */}
            <section className="bg-white border border-[#E4E4E4] rounded-2xl p-4 sm:p-6 flex-1">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <img src={users} alt="listings icon" className="w-5 h-5" />
                  <h3 className="text-[#191919] text-sm sm:text-base font-semibold">
                    Users Overview
                  </h3>
                </div>
                <button className="text-[#4545FE] text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
                  View all
                  <span className="text-lg">›</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <p className="text-[#606060] text-xs sm:text-sm font-normal mb-2">
                    Total
                  </p>
                  <p className="text-[#191919] text-xl sm:text-2xl font-bold">
                    {dashboardData.users.total}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#606060] text-xs sm:text-sm font-normal mb-2">
                    Riders
                  </p>
                  <p className="text-[#191919] text-xl sm:text-2xl font-bold">
                    {dashboardData.users.riders}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#606060] text-xs sm:text-sm font-normal mb-2">
                    Subscribers
                  </p>
                  <p className="text-[#191919] text-xl sm:text-2xl font-bold">
                    {dashboardData.users.subscribers}
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>

        <PropertyShowcase />
      </main>
    </div>
  );
};

export default Dashboard;
