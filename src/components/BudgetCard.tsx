import React from "react";
import { Calculator, TrendingUp, Target, DollarSign } from "lucide-react";

const BudgetCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm bg-slate-800/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50">
      {/* Icon Section */}
      <div className="p-8 pb-6">
        <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 border border-slate-600/50">
          <Calculator className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>

        {/* Features List */}
        <div className="space-y-5">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="mt-0.5">
              <Target className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-medium text-base mb-1">
                Set up annual budgets by account
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Set limits on spending for different accounts and expense
                categories to plan and control your spending.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="mt-0.5">
              <TrendingUp
                className="w-5 h-5 text-slate-400"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3 className="text-white font-medium text-base mb-1">
                Track actuals vs budget in real time
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                See how your company is up on achieving against goals, directly
                from the main budget page.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="mt-0.5">
              <DollarSign
                className="w-5 h-5 text-slate-400"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3 className="text-white font-medium text-base mb-1">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Make real-time adjustments to your budgets and update forecasts
                with a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="p-8 pt-6">
        <button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg">
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;
