import { useId } from "react";

function InputBox({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = 'usd', amountDisabled = false, currencyDisable = false, className = "", }) {

    // The useId hook will help us generate a new id for the labels as there are lot of them bound with the input
    // DO NOT use useId while working with map to display lists, it should be generated from your own data/api etc

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    // we don't know if there exists a method called onAmountChange, hence the the logical operator
                    // JS can take e.target.value as a string which would be problematic hence Number
                    onChange={(e) => onAmountChange &&
                        onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange &&
                        onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        // Always remember the key in react, if not given it can have heavy repurcussions on the performance of the app
                        <option
                            key={currency}
                            value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;